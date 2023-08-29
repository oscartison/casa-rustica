#!/bin/bash
set -e

# === INITIALIZE === #
# Declare local variables for font colors
RED='\033[0;31m' # Red Font
BLUE='\033[0;34m' # Blue Font
BROWN='\033[0;33m' # Brown Font
PURPLE='\033[0;35m' # Purple Font
DEF='\033[0m' # Default Font

# === VALIDATE === #
# Check if the correct amount of parameters are passed
if [ $# -ne 0 ]; then
  # Print error
  echo -e "$RED[Error] encryptConfig: Expected no parameter.$DEF" 1>&2
  echo -e "$BLUE[Usage]$DEF: ${BROWN}encryptConfig$DEF" 1>&2
  echo "" 1>&2
  # Cease execution
  exit 1 # 1 indicates invalid parameters
fi

# === ENCRYPT === #
# Initialize non-production environments key
( \
  git-crypt init && \
  echo "Successfully initialized git-crypt for non-production environments!" && \
  echo "" && \
  echo -e "Generated a new symmetric key for non-production environments:$PURPLE" \
) || ( \
  echo "" && \
  echo -e "Existing symmetric key for non-production environments:$PURPLE" \
)
TEMP_KEY_FILE=$(mktemp)
git-crypt export-key $TEMP_KEY_FILE
cat $TEMP_KEY_FILE | base64
echo -e "$DEF"
echo "Put this git-crypt key on 1Password where every Codifly employee can find it."
echo "Put it in the project specific vault as a login item with:"
echo "- name \"<project-name> - Git-crypt\""
echo "- password: the key printed above"
echo ""
echo "Press enter when you're done."
read DISCARD

# Initialize production
( \
  git-crypt init -k PRODUCTION && \
  echo "Successfully initialized git-crypt for production environment!" && \
  echo "" && \
  echo -e "Generated a new symmetric key for production environment:$PURPLE" \
) || ( \
  echo "" && \
  echo -e "Existing symmetric key for production environment:$PURPLE" \
)
TEMP_KEY_FILE=$(mktemp)
git-crypt export-key -k PRODUCTION $TEMP_KEY_FILE
cat $TEMP_KEY_FILE | base64
echo -e "$DEF"
echo "Put this git-crypt key on 1Password where ONLY AUTHORIZED Codifly employees can find it."
echo "Put it in the project specific vault as a login item with:"
echo "- name: \"<project-name> - Git-crypt (PRD)\""
echo "- password: the key printed above"
echo ""
echo "Press enter when you're done."
read DISCARD

# Initialize gitattributes
echo "Now, if necessary, rename \".gitattributes.template\" to \".gitattributes\" and modify the file as"
echo "mentioned in: https://buddy.works/guides/git-crypt#defining-files-to-encrypt"
echo ""
echo "Press enter when you're done."
read DISCARD
