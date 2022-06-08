
function analyzeArray(numbers){
   let minNum = numbers.reduce((a, b)=> Math.min(a,b));
   let maxNum = numbers.reduce((a,b)=> Math.max(a,b));
   let lengthNum = numbers.length;
   let sumNum =  numbers.reduce((prev, next)=>(prev + next));
   let averageNum = sumNum/numbers.length;
   numbers = {average:averageNum, min:minNum, max:maxNum, length:lengthNum};
   return numbers;
}

export{analyzeArray}