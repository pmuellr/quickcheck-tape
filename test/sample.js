'use strict'

const _util = require('./_util')

const qct = _util.qct

// don't run tests yet
const runTest = t => null
// const runTest = _util.getTestRunner(__filename)

runTest(function foo (t) {
  const test = qct.createTest()
  test.fn(foo, qct.gen.Int)
  test.qualify(function (parm) { return true })
  test.verify(function (parm) { return true })

  const results = test.run()

  t.notEqual(results, true, 'foo passes')
  t.end()
})
