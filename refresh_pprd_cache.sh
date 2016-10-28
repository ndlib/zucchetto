#!/bin/bash
BUCKET=csthr-pprd.library.nd.edu
HONEYCOMB=https://honeycombpprd-vm.library.nd.edu

command -v aws >/dev/null 2>&1 || { echo >&2 "'aws' command not found. Make sure you've installed the cli: https://aws.amazon.com/cli/"; exit 1; }

cd ./public/resources/cache_data

curl -o cst_data.json ${HONEYCOMB}/v1/collections/vatican/items
curl -o ihrl_data.json ${HONEYCOMB}/v1/collections/humanrights/items

# only sync the cache data directory
aws s3 sync . s3://${BUCKET}/resources/cache_data/ --exclude '.*' --exclude '*.md' --delete --acl public-read
echo "\033[0;31mDeployed to ${BUCKET}.s3-website-us-east-1.amazonaws.com.\033[0m"
