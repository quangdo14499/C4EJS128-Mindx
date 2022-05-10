let result=''
const hang=20

for(let i=1 ; i<=hang ;i++ ) {
    for(let j=1 ; j<=i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);