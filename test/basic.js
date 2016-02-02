'use strict'

const _util = require('./_util')

const qct = _util.qct
const runTest = _util.getTestRunner(__filename)

runTest(function version (t) {
  t.notEqual(qct.version, null, 'qct.version != null')
  t.end()
})
