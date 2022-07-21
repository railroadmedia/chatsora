#!/bin/bash

# if git diff-index --quiet HEAD --; then
#     # Build the lib and commit the files
#     npm run lib:build;
#     git add --all
#     git commit -am "New build";

#     # Create a new patch version
#     npm version patch;
#     PACKAGE_VERSION=$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')

#     echo 'Creating Tag and Commit for Chatsora Version: ' $PACKAGE_VERSION
    
#     git push --tags;
#     git push;

#     # Publish the Package
#     npm publish;
# else
#     echo 'Local git directory is not clean! Commit your files and try again.'
# fi

## Kick-out if Vue 3 branch
error_exit 'Can not publish new version in this branch! Try the ./prerelease.sh script instead.'