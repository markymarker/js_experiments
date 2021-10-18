/* Mark Fletcher
 * circa 2019-09-04
 *
 * Trying out some chaining and throwing to illustrate how and where errors and
 * rejections are handled and how and where they stop execution.
 */

process.on('unhandledRejection', (r) => console.log('caught rejection (global):', r));
process.on('uncaughtException', (e) => console.log('caught exception (global):', e));

function staller() {
    return new Promise(r => {
        setTimeout(() => r(), 2000);
    });
}

function throwit(n) {
    throw new Error(`o man (${n})!`);
}

console.log('start');

staller()
    .catch((e) => console.log('e1', e))
    .then(() => {
        console.log('t1.0');
        throwit(1);
        console.log('t1.1');
    })
    .catch((e) => console.log('e2', e))
    .then(() => {
        console.log('t2.0');
        throwit(2);
        console.log('t2.1');
    });
;

console.log('end');
throw new Error('done');
console.log('final end');

