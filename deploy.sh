#!/usr/bin/env sh

# stop deploy on error
set -e

# build
npm run build

# change to build directory
cd dist

# if you are publishing to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you publish at https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you publish at https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:markin-dev/farm.git master:gh-pages

cd -
