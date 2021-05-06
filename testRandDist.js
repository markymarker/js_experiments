/**
 * Mark Fletcher
 * 2021-03-05
 *
 * Seeing how evenly distributed doing some random junk is.
 * Drop different algorithms into get random to reach enlightenment.
 */

function get_random_value(min, max){
  min = min || 0;
  max = max || 250;
  return Math.floor(Math.random() * (1 + max - min)) + min;
}


res = {};

for(j = 0; j < 666 * 6; ++j){
  r = get_random_value(0, 5);
  res.hasOwnProperty(r) ? (res[r] += 1) : (res[r] = 0);
}

Object.keys(res)
  .map(Number)
  .sort((a,b) => a<b ? -1 : 1)
  .forEach(k => {
    console.log(`   ${k}`.substr(-3), ':', res[k]);
  });

console.log(
  'count:',
  Object.values(res).reduce((a,v) => v == 666 ? a + 1 : a, 0)
);


