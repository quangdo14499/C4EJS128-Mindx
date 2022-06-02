let a= 3
let b= 25
function viewStn(){
    
    let flag;
    for (i=a+1;i<=b;i++){
        flag=1;
        for(j=2;j<i/2;j++){
            if(i%j==0){
                flag=0;
                break;
            }
        }
        if(flag==1){
            document.write('so nguyen to',i);
            
        }
    }
}

console.log(viewStn(a,b))
