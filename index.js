/*

how much is pish tegj glob glob ?
how many Credits is glob prok Silver ?
how many Credits is glob prok Gold ?
how many Credits is glob prok Iron ?
how much wood could a woodchuck chuck if a woodchuck could chuck wood ?


glob prok Silver is 68 Credits 
    4 Silver = 68 credits  Silver = 68/4   Silver = 17 
    gold = 57800/4 gold = 14.450
    iron = 782/4 iron =  195,5
*/
let { convertIntergalatic , getIntergalatics} = require('./src/intergalaticsConvert');
let checkRome = require('./src/romanNumberRule');
let valueRome = require('./src/convertRomeToInt');
let checkMaterial = require('./src/checkMaterial')

const inputs = [
    "how much is pish tegj glob glob ?",
    "how many Credits is glob prok Silver ?",
    "how many Credits is glob prok Gold ?",
    "how many Credits is pish prok Gold ?", //meu teste
    "how many Credits is glob prok Iron ?",
    "how much wood could a woodchuck chuck if a woodchuck could chuck wood ?"   
];


try{
    inputs.forEach(input =>{
    let number = "";
    let intergalaticsNumber = "";
    let materialValue = checkMaterial(input);
    let words = input.split(" ");

    words.forEach(element => {
        number += convertIntergalatic(element);
        intergalaticsNumber += getIntergalatics(element)
    });   

    if(number.length == 0)
        throw `${input}\n I have no idea what you are talking about`

    checkRome(number)

    let total = valueRome(number)

    //console.log(number); número romano.
    //console.log(total) valor inteiro do número romano
    
    console.log( `${intergalaticsNumber} is ${ materialValue ? total * materialValue : total } Credits `);
})
}catch(e){
    console.log(e)
}

