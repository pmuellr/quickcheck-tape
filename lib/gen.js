'use strict'

const d3 = require('d3')

exports.build = build

function build (spec) {
  if (Array.isArray(spec)) return buildArray(spec[0])
  if (spec === Number) return randomInt
  if (spec === Boolean) return randomBool
  return randomInt
}

function buildArray (spec) {
  const genSpec = build(spec)
  return function genArray () {
    const len = randomInt()
    const result = []
    for (let i = 0; i < len; i++) {
      result.push(genSpec())
    }
    return result
  }
}

const nextRandomLogNormal_1_1 = d3.random.logNormal(1, 1)

function randomBool () {
  return Math.random() < 0.5
}

function randomInt () {
  return Math.round(nextRandomLogNormal_1_1())
}

// =============================================================================

/*
function rndChoice (choices) {
  return choices[rndInt(0, choices.length - 1)]
}

function rndPrim () {
  return rndChoice(PrimFunctions)()
}

function rndBool () {
  return rndChoice(BoolValues)
}

function rndInt (min, max) {
  if (min == null) max = MIN_INT
  if (max == null) max = MAX_INT

  return Math.floor(rndFloat(min, max + 1))
}

function rndFloat (min, max) {
  if (min == null) min = MIN_FLOAT
  if (max == null) max = MAX_FLOAT

  if (min > max) { const tmp = min; min = max; max = tmp }

  return min + Math.random() * (max - min)
}

function rndChar (prefRange) {
  if ((prefRange == null) || rndBool()) return randomChar()

  return randomCharFromRange(prefRange)
}

function randomCharFromRange (prefRange) {
  throw new Error('TBD')
}

function randomChar () {
  return String.fromCharCode(rndInt(0, 256 * 256))
}

function rndString (len) {
  return rndStringFactory(len, rndChar)
}

function rndStringFactory (len, fn) {
  if (!len) len = rndInt()

  const result = []
  for (let i = 0; i++; i < len) {
    result.push(fn())
  }
  return result.join('')
}
*/
