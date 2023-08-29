#!/bin/bash
set -e

# === VALIDATE === #
# Check if the correct amount of parameters are passed
if [ $# -ne 1 ]; then
  # Declare local variables for font colors
  RED='\033[0;31m' # Red Font
  BLUE='\033[0;34m' # Blue Font
  BROWN='\033[0;33m' # Brown Font
  PURPLE='\033[0;35m' # Purple Font
  DEF='\033[0m' # Default Font
  # Print error
  echo -e "$RED[Error] decryptConfig: Expected exactly 1 parameter.$DEF" 1>&2
  echo -e "$BLUE[Usage]$DEF: ${BROWN}decryptConfig$DEF <${PURPLE}gitcrypt-key$DEF>" 1>&2
  echo -e "The ${PURPLE}gitcrypt-key$DEF is the Base64-encoded symmetric key that can be found on 1Password." 1>&2
  echo "" 1>&2
  # Cease execution
  exit 1 # 1 indicates invalid parameters
fi

if [ $1 = "--ignore" ]; then
  echo "Ignored decryptConfig.sh --ignore"
  exit 0
fi

# === DECRYPT === #
TEMP_KEY_FILE=$(mktemp)
echo $1 | base64 -d > $TEMP_KEY_FILE
git-crypt unlock $TEMP_KEY_FILE
rm $TEMP_KEY_FILE

# === SUPPORT ENCRYPTED FILE MERGING ===
# Based on https://github.com/AGWA/git-crypt/issues/140#issuecomment-361031719
git config --add merge.git-crypt.driver './tools/scripts/gitCryptMerge.sh %O %A %B'
git config --add merge.git-crypt.recursive binary

echo "Done"
