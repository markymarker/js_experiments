/**
 * Mark Fletcher
 * 2021-05-06
 *
 * Not-guaranteed-to-be-cryptographically-secure-or-evenly-distributed random string
 * generator for fun.
 * Recursive for fun.
 * It's just for fun.
 */

// Death by stack occurs at len = 9668 on my machine
const randStr = (len) => len === 0
  ? ''
  : randStr(len - 1) + randStr.chars[(randStr.gp() ^ randStr.gp())]
;
randStr.chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';
randStr.gp = () => Math.floor(Math.random() * randStr.chars.length);


if(process.argv.length === 3){
  const l = parseInt(process.argv[2], 10);
  if(isNaN(l)){
    console.warn('Invalid length provided (' + process.argv[2] + ')');
    process.exit(1);
  }
  console.log(randStr(l));
} else {
  global.randStr = randStr;
}

