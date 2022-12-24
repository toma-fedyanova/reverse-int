module.exports = function reverse (n) {
  n = Math.abs(n);
  let str = (String(n));
  let res = str.split('').reverse().join('');
	return Number(res);
}
