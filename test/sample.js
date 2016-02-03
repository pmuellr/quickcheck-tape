'use strict'

const assert = require('assert')

const _util = require('./_util')

const qct = _util.qct

class TestRevRev {
  property (x) {
    const revrev = x.reverse().reverse()
    assert.deepEqual(revrev, x)
  }

  types () { return [ [Number] ] }
}

class TestRevRev2 {
  property (x, y) {
    const revrev1 = x.reverse().concat(y.reverse())
    const revrev2 = x.concat(y).reverse()
    assert.deepEqual(revrev1, revrev2)
  }

  types () { return [ [Number], [Number] ] }

  iterations () { return 10 }
}

qct.test(TestRevRev)
qct.test(TestRevRev2)
