'use strict'

const path = require('path')
const test = require('tape')

exports.qct = require(path.resolve(path.join(__dirname, '..')))
exports.getTestRunner = getTestRunner

function getTestRunner (fileName) {
  fileName = path.basename(fileName)

  return function runTest (fn) {
    const testName = fn.name.replace(/^test_/, '')
    test(`${fileName} ${testName}`, fn)
  }
}
