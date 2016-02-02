'use strict'

const path = require('path')

const pkg = require(path.join(__dirname, '..', 'package.json'))

exports.version = pkg.version
