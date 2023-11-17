const printfullname=function(firstname,lastname){
    function printname(){
        console.log(firstname,lastname)
    }
    return printname
}
const ans=printfullname('sinan','haque');
ans();

//example2

function hello(x){
    const a='var1';
    const b='var2';
    return function(){
        console.log(a,b,x);
    }
}
const ans2 =hello('arg');
ans2();




//example3

function calculate(power){
    return function(number){
        return number ** power;
    }
}
const cube=calculate(3);
const answer=cube(3);
console.log(answer);

//1 line function

const calcu2=power=>number=> power**number;
const square=calcu2(2);
const output=square(3);
console.log(output);



// function func(){
//     let counter=0;
//     return function(){
//         if(counter<1){
//             console.log('hi you called me!!');counter++; 
//         }else{
//             console.log('amake already ekbar call kore hoyeche..... ')
//         }
//     }

// }
// const myfunc=func();
// myfunc();


function func(){
    let i=0;
    return function(){
        if(i<1){
            console.log('hiii you called me!!!');i++;
        }else{
            console.log('amake ekbar call kora hoyeche');
        }
    }
}

const myfunc=func();
myfunc();
myfunc()