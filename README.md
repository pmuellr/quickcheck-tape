quickcheck-tape - QuickCheck for Node.js, for tape
================================================================================

This package provides a [QuickCheck][] implementation for Node.js, that is
designed to be used with [tape][].

What's QuickCheck?  From Wikipedia (link to full page above):

> QuickCheck is a combinator library originally written in Haskell, designed to
> assist in software testing by generating test cases for test suites. It is
> compatible with the GHC compiler and the Hugs interpreter.

> In QuickCheck the programmer writes assertions about logical properties that a
> function should fulfill. Then QuickCheck attempts to generate a test case that
> falsifies these assertions. Once such a test case is found, QuickCheck tries to
> reduce it to a minimal failing subset by removing or simplifying input data that
> are not needed to make the test fail.

Here's a short example of using this module:

```js
'use strict'

// use assert for basic assertion tests
const assert = require('assert')

// pull in quickcheck-tape
const qct = require('quickcheck-tape')

// a test is defined in a class ...
class TestRevRev {

  // the prop method takes an array of numbers and validates that
  // reversing that array twice yields an equivalent array
  property (x) {
    const revrev = x.reverse().reverse()
    assert.deepEqual(revrev, x)
  }

  // the types method indicates what the parameters are for the
  // prop method
  types () { return [ [Number] ] }
}

// run the test 100 times with random data
qct.test(TestRevRev)
```

`quickcheck-tape` will generate a tape failure assertion for every test that
throws an error, and will generate a single tape pass assertion that indicates
the number of tests that passed.

[QuickCheck]: https://en.wikipedia.org/wiki/QuickCheck
[tape]: https://www.npmjs.com/package/tape


installation
================================================================================

    npm install quickcheck-tape


usage
================================================================================


API
================================================================================


examples
================================================================================


contributing
================================================================================

To submit a bug report, please create an [issue at GitHub][].

If you'd like to contribute code to this project, please read the
[CONTRIBUTING.md][] document.


License & Copyright
================================================================================

**quickcheck-tape** is Copyright (c) 2016 Patrick Mueller and licensed under the
MIT license. All rights not explicitly granted in the MIT license are reserved.
See the included [LICENSE.md][] file for more details.


<!-- ======================================================================= -->

[QuickCheck]: https://en.wikipedia.org/wiki/QuickCheck
[issue at GitHub]: https://github.com/pmuellr/quickcheck-tape/issues
[CONTRIBUTING.md]: CONTRIBUTING.md
[LICENSE.md]: LICENSE.md
