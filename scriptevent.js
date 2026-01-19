// console.log('Hello World!');

// document.getElementById('paragraph').innerHTML = "Hello World!";


// let number1 = 20;
// let number2 = 30;

// let result = number1+number2;
// console.log(result);

// document.getElementById('result').innerHTML = result;

function sum(){
    let number1;
    let number2;

    number1 = document.getElementById('number1').value; //'7'
    number2 = document.getElementById('number2').value; //'8'

    let number1Converted = parseFloat(number1); //7.8767
    let number2Converted = parseFloat(number2); //8.877

    // console.log('Number1='+number1);
    // console.log('Number2='+number2);
    

    let result = number1Converted+number2Converted; //78 '7'+'8'
    // console.log('Result='+result);
    document.getElementById('sumResult').innerHTML='The Result is='+result;
}

