var fibseq = [1, 2];
var fibseqeven = [];
var total = 0;
var lastNum = fibseq[fibseq.length-1];
var secondLastNum = fibseq[fibseq.length-2];

while (lastNum < 4000000) {
  fibseq.push(lastNum + secondLastNum);
  lastNum = fibseq[fibseq.length-1];
  secondLastNum = fibseq[fibseq.length-2];
}

for (i = 0; i < fibseq.length; i++){
  if (fibseq[i] % 2 === 0){
    total += fibseq[i];
  }
}

console.log(total);
