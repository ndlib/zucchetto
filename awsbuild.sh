#!/bin/bash
BUCKET=csthr.library.nd.edu
HONEYCOMB=https://honeycomb.library.nd.edu
RELEASE=`cat current_release`
BRANCH=`git rev-parse --abbrev-ref HEAD`

if [ "${BRANCH}" != "${RELEASE}" ]; then
  echo "\033[0;31mCurrent branch is ${BRANCH}. You must be on ${RELEASE} to deploy to production.\033[0m"
  exit 1
fi

echo "\033[0;31mBuilding production on branch ${BRANCH}\033[0m"
git pull
npm run build
cd ./public

curl -o ./resources/cache_data/cst_data.json ${HONEYCOMB}/v1/collections/vatican/items
curl -o ./resources/cache_data/ihrl_data.json ${HONEYCOMB}/v1/collections/humanrights/items

aws s3 sync . s3://${BUCKET} --exclude '.*' --exclude '*.md' --delete --acl public-read
echo "\033[0;31mDeployed to ${BUCKET}.s3-website-us-east-1.amazonaws.com. Rebuilding for development.\033[0m"
npm run build-dev-nowatch
