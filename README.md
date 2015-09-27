# [github-config][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![inch-ci docs][inchci-img]][inchci-url]
> Easily store or get Github config data from `.gitconfig`. Useful when you want to store your github token and test your apps without exposing it.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i github-config --save
```


## API
> For more use-cases see the [tests](./test.js)

### [githubConfig](./index.js#L41)
> If you give some data to `config` it will be merged to already exisit, or will just add it to `[github]` field of the `.gitconfig` or specified in `config.path`.

- `[config]` **{Object}** pass object to set/merge some data
  + `[config.path]` **{String}** give a path to `.gitconfig`
  + `[config.cwd]` **{String}** provide current working directory
- `returns` **{Object}** config data

**Example**

```js
var githubConfig = require('github-config')
var config = githubConfig({token: '8843d7f92416211de9ebb963ff4ce28125932878'})

console.log(config.token)
//=> '8843d7f92416211de9ebb963ff4ce28125932878'
```

Let say you already have some config data in `.gitconfig`, also in `[github]` field

```ini
[user]
email=mameto_100@mail.bg
name=tunnckoCore
user=tunnckoCore

[push]
default=simple

[github]
username=tunnckoCore

```
you can just get the the exisiting from `[github]` field

```js
var githubConfig = require('github-config')

console.log(githubConfig())
//=> {username: 'tunnckoCore'}
```


## Related
- [git-config-path](https://github.com/jonschlinkert/git-config-path): Resolve the path to the user's global .gitconfig.
- [git-user-name](https://github.com/jonschlinkert/git-user-name): Get a user's name from git config at the project or global scope, depending on what git uses in the current context.
- [git-username](https://github.com/jonschlinkert/git-username): Get the username from a git remote origin URL.
- [github-username](https://github.com/sindresorhus/github-username): Get a GitHub username from an email address
- [parse-git-config](https://github.com/jonschlinkert/parse-git-config): Parse `.git/config` into a JavaScript object. sync or async.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/github-config/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/github-config
[npmjs-img]: https://img.shields.io/npm/v/github-config.svg?label=github-config

[license-url]: https://github.com/tunnckoCore/github-config/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[inchci-url]: https://inch-ci.org/github/tunnckoCore/github-config
[inchci-img]: https://inch-ci.org/github/tunnckoCore/github-config.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/github-config
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/github-config.svg

[travis-url]: https://travis-ci.org/tunnckoCore/github-config
[travis-img]: https://img.shields.io/travis/tunnckoCore/github-config.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/github-config
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/github-config.svg

[david-url]: https://david-dm.org/tunnckoCore/github-config
[david-img]: https://img.shields.io/david/tunnckoCore/github-config.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg