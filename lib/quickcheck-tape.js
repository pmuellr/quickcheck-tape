'use strict'

const path = require('path')

const tape = require('tape')

const gen = require('./gen')

const pkg = require(path.join(__dirname, '..', 'package.json'))

exports.version = pkg.version

exports.test = runTest

function runTest (TestClass) {
  const test = new TestClass()
  const types = test.types()

  const gens = types.map(type => gen.build(type))

  tape(TestClass.name, t => {
    let passes = 0
    let fails = 0
    let minFailParms = null
    let minFailMag = null
    let minFailError = null

    let iterations = 100
    if (typeof test.iterations === 'function') iterations = test.iterations()

    for (let i=0; i<iterations; i++) {
      const parms = gens.map(gen => gen(i))

      try {
        test.property.apply(test, parms)
        passes++
      } catch (e) {
        fails++

        const failMag = parmsMagnitude(parms)
        if ((minFailMag == null) || (failMag < minFailMag)) {
          minFailMag = failMag
          minFailParms = parms
          minFailError = e
        }
      }
    }

    t.pass(`passed ${passes} quickcheck tests`)

    if (fails) {
      t.fail(`failed ${fails} quickcheck tests; shortest: ${JSON.stringify(minFailParms)}; ${minFailError}`)
    }
    t.end()
  })
}

function parmsMagnitude(parms) {
  let mag = 0

  for (let i=0; i<parms.length; i++) {
    const parm = parms[i]

    try {
      mag += JSON.stringify(parm).length
    } catch (e) {
    }
  }

  return mag
}
