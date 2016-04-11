#!/bin/bash
ENV_ALIAS=honeycomb

mkdir ./public/resources/cache_data

curl -o ./public/resources/cache_data/cst_data.json https://${ENV_ALIAS}.library.nd.edu/v1/collections/vatican/items
curl -o ./public/resources/cache_data/ihrl_data.json https://${ENV_ALIAS}.library.nd.edu/v1/collections/humanrights/items

npm run build-dev
