/* Mark Fletcher
 * (various dates expected, started 2021-08-13)
 *
 * Random this-and-that with generator functions and the like.
 */

/**
 * 2021-08-13
 * Generate an increasing integer range series within the given bounds
 * (inclusive). Similar to python's range(). No safeties included, call
 * improperly at your own risk.
 *
 * Ex usage:
 *   for(let x of iter_range(12, 16)) console.log(`A nice ${x} was generated`);
 *
 * @param from The integer starting value of the range
 * @param to The integer ending value of the range (optional)
 */
function* iter_range (from, to = Number.MAX_SAFE_INTEGER, step = 1){
  for(let j = from; j <= to; j += step) yield j;
}


// For convenience in playing around
module && (module.exports = {
  iter_range,
});

