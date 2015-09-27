/*!
 * github-config <https://github.com/tunnckoCore/github-config>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var parse = require('parse-git-config')
var isObject = require('is-plain-object')
var gitconfig = require('git-config-path')
var extend = require('extend-shallow')
var lazy = require('lazy-cache')(require)
lazy.ini = lazy('ini')
lazy.omit = lazy('object.omit')
lazy.write = lazy('write')
lazy.merge = lazy('merge-deep')

/**
 * If you give some data to `config` it will be merged
 * to already exisit, or will just add it to `[github]` field
 * of the `.gitconfig` or specified in `config.path`.
 *
 * @example
 * ```js
 * var githubConfig = require('github-config')
 * var config = githubConfig({token: '8843d7f92416211de9ebb963ff4ce28125932878'})
 *
 * console.log(config.token)
 * //=> '8843d7f92416211de9ebb963ff4ce28125932878'
 * ```
 *
 * @name  githubConfig
 * @param  {Object} `[config]` optionally pass object to set/merge some data
 * @return {Object} config data
 * @api public
 */
module.exports = function githubConfig (config) {
  var opts = extend({cwd: '/', path: gitconfig}, config)
  var cfg = parse.sync(opts)

  if (!isObject(cfg)) {
    return null
  }

  config = lazy.omit()(config, ['cwd', 'path'])

  if (cfg.hasOwnProperty('github') && !Object.keys(config).length) {
    return cfg.github
  }

  var merge = lazy.merge()
  var github = merge({}, cfg.github, config)
  cfg = merge({}, cfg, {github: github})

  lazy.write().sync(opts.path, lazy.ini().stringify(cfg))
  return cfg.github
}
