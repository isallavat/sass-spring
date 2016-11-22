#!/bin/bash
set -e
set -x

node lint.js

if [ -n "${NODE_SASS_VERSION}" ]
then
  . $HOME/.nvm/nvm.sh
  nvm use "$TRAVIS_NODE_VERSION"
  node-sass test/specs.scss
  for file in $(ls test/should-fail)
  do
    ! node-sass test/should-fail/$file
  done
  exit
fi

if [ -n "${RUBY_SASS_VERSION}" ]
then
  sass test/specs.scss
  for file in $(ls test/should-fail)
  do
    ! sass test/should-fail/$file
  done
  exit
fi

echo "no tests run"
exit 1
