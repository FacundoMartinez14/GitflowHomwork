let toBinaryHex=(numero)=>{
    let result;
    if(numero%2===0){
        result= numero.toString(2);
        return result
    }else{
        result=numero.toString(16)
        return result
    }
}