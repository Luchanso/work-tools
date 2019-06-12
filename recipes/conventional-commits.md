Recipe about conventinal commits and auto release tools.
This tools for checking commit message and making autorelease.

Example [pull request](https://github.com/Luchanso/dependencies-heatmap/pull/6)

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
# TODO: Дописать
```

## Links
[conventionalcommits.org](https://www.conventionalcommits.org/) - site about conventional commits

[commitlint](https://github.com/conventional-changelog/commitlint) - tool for check commit message

[standart-version](https://github.com/conventional-changelog/standard-version) - tool for creating release
