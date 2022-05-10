let result=''
const hang=15


for(let i=1 ; i<=hang ;i++ ) {
    for(let j=hang ; j>i; j--) {
            result += ' '
        }
    for(let k=1 ; k<= i; k++) {        
        result += ' *'
    }   
    result += '\n';
}
console.log(result);