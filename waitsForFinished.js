/**
 * Mark Fletcher
 * 2020-01-14
 *
 * Example to show that node waits for all pending functions to clear before
 * exiting, regardless of async-ness.
 */

/**
 * Stall for a given time using setTimeout alone.
 */
function staller(ms, msg){
  setTimeout(() => {
    console.log(msg);
  }, parseInt(ms, 10));
}

/**
 * Stall for a given time using an asynchronous function.
 */
async function asyncStaller(ms, msg){
  await new Promise((s, f) => {
    setTimeout(s, parseInt(ms, 10));
  });

  console.log(msg);
}


// Notify on start and end and fire off stallers in between

console.log('...start...');

staller(2500, '2.5 s passed');
staller(1000, '1 s passed');
//staller(5000, '5 s passed');

asyncStaller(3000, 'async 3 s passed');
asyncStaller(1500, 'async 1.5 s passed');

console.log('...finish...');

