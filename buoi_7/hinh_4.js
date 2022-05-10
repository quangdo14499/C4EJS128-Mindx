let result=''
const hang=5

for(let i=1 ; i<=hang ;i++ ) {
    for(let j=1 ; j<i; j++) {
            result += ' '
        }
    for(let k=1 ; k<= (hang * 2 - (2 * i - 1)); k++) {        
        result += '*'
    }   
    result += '\n';
}

for(let i=2 ; i<=hang ;i++ ) {
    for(let j=hang ; j>i; j--) {
            result += ' '
        }
    for(let k=1 ; k<= (2*i - 1); k++) {        
        result += '*'
    }   
    result += '\n';
}


console.log(result);