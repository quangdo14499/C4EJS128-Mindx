let result=''
const hang=6


for(let i=2 ; i<=hang ;i++ ) {
    
    for(let j=1 ; j<=(2*hang-1); j++) {
        if(j==(hang-(i-1)) || j==(hang+(i-1))){
            result += i-1
        } else {
            result += ' '
        }
    } 
    result += '\n' 
}   

for(let i=hang-1 ; i>=2 ; i--){
    for(let j=1 ; j<=(2*hang-1); j++){
        if(j==(hang-(i-1)) || j==(hang+(i-1))){
            result += i-1
        } else {
            result += ' '
        }
    }
    result += '\n' 
}

console.log(result);

