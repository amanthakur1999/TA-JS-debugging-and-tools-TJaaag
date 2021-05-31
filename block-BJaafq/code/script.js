function addToNumber(numA,numB){
    return numA+numB
}
function multiplyTwoNumber(numA,numB){
    return numA*numB
}
let result, expected;
function test (message,cb){
    try{
        cb();
        console.log("success",message)
    }catch(error){
console.error(error);
console.log("X",message)
    }
}
 function testAdd(){
     result= addToNumber (2,4);
     expected =6;
     if (result !==expected){
         throw new Error(`${result}is not equal to ${expected}`)
     }
 }
 test('adding 2,and 4',testAdd);


 function testAdd(){
    result= addToNumber (2,4);
    expected =5;
    if (result !==expected){
        throw new Error(`${result}is not equal to ${expected}`)
    }
}
test('adding 2,and 4',testAdd);




function testmutiplyToNumber(){
    result= multiplyTwoNumber (5,5);
    expected =25;
    if (result !==expected){
        throw new Error(`${result}is not equal to ${expected}`)
    }
}
test('multiply 2,and 4',testAdd);