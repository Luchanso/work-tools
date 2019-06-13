Recipe about conventinal commits and auto release tools.
This tools for checking commit message and making autorelease.

Example [pull request](https://github.com/Luchanso/dependencies-heatmap/pull/11/files)

## Install
```sh
yarn add husky @commitlint/cli @commitlint/config-conventional standard-version -D
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

## Configuration for `package.json`
```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "scripts": {
    "release": "standard-version"
  }
}
```

## CI/CD commands
```sh
yarn release
git push --follow-tags origin master
npm publish
# docker build & push
```

## Travis configuration
Autorelease only
```yml
language: node_js
node_js:
  - "11"

jobs:
  include:
    - name: install and test
      install: yarn --frozen-lockfile
    - name: deploy
      install: yarn --frozen-lockfile
      script:
        - git remote set-url origin https://${GH_TOKEN}@github.com/Luchanso/dependencies-heatmap.git
        - yarn release
        - git log -5
        - git push --follow-tags origin HEAD:master --verbose
      if: >
        branch = master AND commit_message =~ /^((?!chore\(release\): \d\.\d\.\d).)*$/ AND type = push
```

## Links
[conventionalcommits.org](https://www.conventionalcommits.org/) - site about conventional commits

[commitlint](https://github.com/conventional-changelog/commitlint) - tool for check commit message

[standart-version](https://github.com/conventional-changelog/standard-version) - tool for creating release
