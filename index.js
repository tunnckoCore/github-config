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

module.exports = function githubConfig (options) {
  var opts = extend({cwd: '/', path: gitconfig}, options)
  var config = parse.sync(opts)

  if (!isObject(config)) {
    return null
  }

  options = lazy.omit()(options, ['cwd', 'path'])

  if (config.hasOwnProperty('github') && !Object.keys(options).length) {
    return config.github
  }

  var merge = lazy.merge()
  var github = merge({}, config.github, options)
  config = merge({}, config, {github: github})

  lazy.write().sync(opts.path, lazy.ini().stringify(config))
  return config.github
}
