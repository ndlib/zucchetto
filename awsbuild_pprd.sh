#!/bin/bash
BUCKET=csthr-pprd.library.nd.edu
HONEYCOMB=https://honeycombpprd-vm.library.nd.edu
BRANCH=`git rev-parse --abbrev-ref HEAD`
REVISION=`git rev-parse HEAD`

echo "\033[0;31mBuilding preproduction on branch ${BRANCH}\033[0m"
npm run build-pprd
echo ${REVISION} > public/REVISION
cd ./public

curl -o ./resources/cache_data/cst_data.json ${HONEYCOMB}/v1/collections/vatican/items
curl -o ./resources/cache_data/ihrl_data.json ${HONEYCOMB}/v1/collections/humanrights/items

aws s3 sync . s3://${BUCKET} --exclude '.*' --exclude '*.md' --delete --acl public-read --profile "testlibnd-superAdmin"
echo "\033[0;31mDeployed to ${BUCKET}.s3-website-us-east-1.amazonaws.com. Rebuilding for development.\033[0m"
npm run build-dev-nowatch
