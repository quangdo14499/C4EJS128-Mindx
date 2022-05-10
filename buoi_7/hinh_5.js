let result=''
const hang=10 

for(let i=1 ; i<=hang ;i++ ) {
    for(let j=1 ; j<=i; j++) {
        if( i==1 || i== hang || j==1 || j== i){
            result += '*';
    } else {
        result += ' '
    }
    }
    result += '\n';
}
console.log(result);