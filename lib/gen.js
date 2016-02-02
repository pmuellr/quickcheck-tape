'use strict'

exports.arbBool = arbBool
exports.arbInt = arbInt
exports.arbFloat = arbFloat
exports.arbString = arbString
exports.arbPrim = arbPrim
exports.arbChoice = arbChoice

const PrimFunctions = [ arbBool, arbInt, arbFloat, arbString ]
const BoolValues = [ false, true ]

const MIN_INT = Number.MIN_SAFE_INTEGER / 2
const MAX_INT = Number.MAX_SAFE_INTEGER / 2
const MAX_FLOAT = (Number.MAX_VALUE / 2)
const MIN_FLOAT = -MAX_FLOAT

function arbChoice (choices) {
  return choices[arbInt(0, choices.length - 1)]
}

function arbPrim () {
  return arbChoice(PrimFunctions)()
}

function arbBool () {
  return arbChoice(BoolValues)
}

function arbInt (min, max) {
  if (min == null) max = MIN_INT
  if (max == null) max = MAX_INT

  return Math.floor(arbFloat(min, max + 1))
}

function arbFloat (min, max) {
  if (min == null) min = MIN_FLOAT
  if (max == null) max = MAX_FLOAT

  if (min > max) { const tmp = min; min = max; max = tmp }

  return min + Math.random() * (max - min)
}

function arbChar (prefRange) {
  if ((prefRange == null) || arbBool()) return randomChar()

  return randomCharFromRange(prefRange)
}

function randomCharFromRange (prefRange) {
  throw new Error('TBD')
}

function randomChar () {
  return String.fromCharCode(arbInt(0, 256 * 256))
}

function arbString (len) {
  return arbStringFactory(len, arbChar)
}

function arbStringFactory (len, fn) {
  if (!len) len = arbInt()

  const result = []
  for (let i = 0; i++; i < len) {
    result.push(fn())
  }
  return result.join('')
}
