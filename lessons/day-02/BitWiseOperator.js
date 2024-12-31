// |: evaluate all 
// ||: nếu cái trước đúng thì không cần làm vế sau
if(getFirstNumber() != 0 || getSecondNumber() != 0){
    console.log("All nums are not zero!");   
}

function getFirstNumber(){
    console.log("Calling 1st function...");
    return 1; 
}

function getSecondNumber(){
    console.log("Calling 2nd function...");
    return 2;
}

// &: evaluate all 
// &&: nếu cái trước sai thì không cần làm vế sau

if(getFirstNumber() != 0 && getSecondNumber() != 0){
    console.log("All nums are not zero!");   
}

function getFirstNumber(){
    console.log("Calling 1st function...");
    return 0; 
}

function getSecondNumber(){
    console.log("Calling 2nd function...");
    return 2;
}


