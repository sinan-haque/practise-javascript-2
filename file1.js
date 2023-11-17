// console.log('hello world');


// console.log(this);
// console.log(window);
// console.log(fname);
// var fname='sinan haque'
// console.log(fname);


// console.log(fname2)
// let fname2='sinan';
// console.log(fname2)


//function execution context
let foe='foe';
console.log(foe);
function getfullname(fname10,lname10){
    console.log(arguments);
    let myvar='var inside function';
    console.log(myvar);
    const fullname=fname10 +" "+ lname10;
    return fullname
    
}
const output=getfullname('sinan' , 'haque');
console.log(output);


//lexical environment , scope chain

const firstname='sinan';
const printName=function(){
    const lastname='harsit';
    console.log(firstname);
    console.log(lastname);
}
printName();


