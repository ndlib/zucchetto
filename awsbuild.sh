#!/bin/bash
BUCKET=csthr.library.nd.edu
RELEASE=`git fetch --tags;git show remotes/origin/master:current_release`
TAG=`git describe --exact-match --tags HEAD`
REVISION=`git rev-parse HEAD`

if [ "${TAG}" != "${RELEASE}" ]; then
  echo "\033[0;31mYou must be on tag ${RELEASE} to deploy to production.\033[0m"
  exit 1
fi

echo "\033[0;31mBuilding production with tag ${TAG} (Rev ${REVISION})\033[0m"
npm run build
echo ${REVISION} > public/REVISION
cd ./public

aws s3 sync . s3://${BUCKET} --exclude '.*' --exclude '*.md' --delete --acl public-read --profile wseAdmin
echo "\033[0;31mDeployed to ${BUCKET}.s3-website-us-east-1.amazonaws.com. Rebuilding for development.\033[0m"
npm run build-dev-nowatch
