module.exports = function getZerosCount(number) {
 let multiplier = 5;
 let zeroCounter = 0;
 while (multiplier <= number)
 {
  zeroCounter +=Math.floor(number/multiplier);
  multiplier *= 5;
 }
 return zeroCounter;
}
