/*!
 * github-config <https://github.com/tunnckoCore/github-config>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var githubConfig = require('./index')

test('github-config:', function () {
  test('should return `null` if [github] not exist in `.gitconfig` file', function (done) {
    var config = githubConfig({cwd: './', path: '.gitconfig'})
    test.equal(config, null)
    done()
  })
  test('should set to [github] in `.gitconfig` file', function (done) {
    var opts = {
      cwd: './',
      path: 'fixture.ini',
      username: 'tunnckoCore'
    }
    var config = githubConfig(opts)
    test.deepEqual(config, {username: 'tunnckoCore'})
    done()
  })
  test('should merge to existing [github] from `.gitconfig` file', function (done) {
    var opts = {
      cwd: './',
      path: 'fixture.ini',
      foobar: 'charlike'
    }
    var config = githubConfig(opts)
    test.deepEqual(config, {username: 'tunnckoCore', foobar: 'charlike'})
    done()
  })
  test('should get [github] from `.gitconfig` file', function (done) {
    var config = githubConfig({
      cwd: './',
      path: 'fixture.ini'
    })
    test.deepEqual(config, {username: 'tunnckoCore', foobar: 'charlike'})
    done()
  })
})
