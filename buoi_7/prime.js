let isPrime = true

if(inputNumber = prompt("So cua ban la gi ?")){
    for(let i= 2; i<inputNumber;i++){
        if(inputNumber % i === 0){
            isPrime = false ;
            break;
        }
    }
    
    if(isPrime){
        console.log("So cua ban la so nguyen to")
    } else {
        console.log("So ban nhap la hop so")
    }
}else{
    console.log("Ban bi ngu a ?");
}

