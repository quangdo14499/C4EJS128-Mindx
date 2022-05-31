const a = 2
const b = 5

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