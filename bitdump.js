/* Mark Fletcher
 * 2021-08-12
 *
 * NOTE: This isn't meant to be the be-all-end-all best way of going about
 *   this; it's just the way I felt like implementing it at the time.
 */

/**
 * Print out the first 32 bits of a given number.
 * Output is in the usual binary format with adjustable digit grouping.
 *
 * The number of output bits may be adjusted as well, but going beyond 32 is
 * likely to result in incorrect output. By that same token, it is recommended
 * keep the input number less than 0x1,0000,0000 as well.
 *
 * @param n The number to turn to bits
 * @param ret TRUE to return output string, otherwise log to console
 */
function bitdump(n, ret){
  const bits = bitdump.bits;
  const group = bitdump.group;
  const len = bits + Math.floor(bits / group);
  let bitstr = (new Array(len)).fill(' ');

  for(let j = 0; j < bits; ++j){
    bitstr[len - j - Math.floor(j / group)] = (n >>> j) & 1;
  }

  const out = bitstr.join('').trim();
  if(ret === true) return out;
  console.log(out);
}
bitdump.bits = 32;
bitdump.group = 4;


if(process.argv.length === 3){
  const n = parseInt(process.argv[2]); // Not limited to base-10
  if(isNaN(n)){
    console.warn('Invalid number provided (' + process.argv[2] + ')');
    process.exit(1);
  }
  bitdump(n);
} else {
  global.bitdump = bitdump;
}

