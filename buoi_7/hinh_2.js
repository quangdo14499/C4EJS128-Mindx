let result=''
const hang=11
const cot=6

for(let i=1 ; i<=hang ;i++ ) {
    for(let j=1 ; j<=cot; j++) {
        if((j>=cot + 1 - i && i<= cot)||(i>=cot && j>=i+1-cot)){
            result += '*'
        } else {
        result += ' ';
        }
    }   
    result += '\n';
}
console.log(result);