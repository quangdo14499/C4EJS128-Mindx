let a = prompt("nhap so")
function numberOneTriangle(){
    let result = ''
    const cot=a
    const hang=cot
    for(let i=1 ;i<=hang ;i++ ){
    for(let j=1 ; j<=i; j++) {
       if(i>=j) {result += '*';
        }
    }
    result += '\n';

} return result;
}

    
result=numberOneTriangle(a);
console.log(result);


