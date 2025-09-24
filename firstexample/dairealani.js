const argm = process.argv.slice(2); 
const r = Number(argm[0]); 

function daireAlani(yaricap) {
  return Math.PI * yaricap * yaricap;
}

const alan = daireAlani(r);

console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan.toFixed(2)}`);
