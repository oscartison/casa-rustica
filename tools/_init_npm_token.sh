if [[ ! -z "${CI_JOB_TOKEN}" ]]; then
  # Use the CI job token, if it exists
  export NPM_TOKEN=$CI_JOB_TOKEN
else
  # Fallback, extract from ~/.npmrc
  export NPM_TOKEN=$(grep -m1 -E 'codifly\.be.*:_authToken=.*' ~/.npmrc | cut -d= -f2)
fi
