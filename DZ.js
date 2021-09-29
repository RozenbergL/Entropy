let fs = require('fs');
let arg = process.argv;
let alph = new Array();
let inputData;
let i = 0, n = 1;
let entropy = 0;

function getBaseLog(x, y){
  return Math.log(y) / Math.log(x);
}

inputData = fs.readFileSync('input.txt');
inputData = inputData.toString();

for (i = 0; i < inputData.length; i++){
	alph[inputData.charAt(i)] = 0;
}
for (i = 0; i < inputData.length; i++){
	alph[inputData.charAt(i)]++;
}
for (i in alph){
	alph[i] /= inputData.length;
}
for (i in alph){
	entropy += alph[i] * getBaseLog(inputData.length, alph[i]);
}
console.log(-1 * entropy);