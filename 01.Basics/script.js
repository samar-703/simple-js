// let randomNumber=Math.random();
// let btn=document.querySelector('button');
// btn.addEventListener("click",function(){
//   if(randomNumber >=0 && randomNumber<1/3){
//     console.log('You chose rock!');
//   }
//   else if(randomNumber >=1/3 && randomNumber<2/3){
//     console.log('You chose Paper!');
//   }
//   else if(randomNumber >=2/3 && randomNumber<1 ){
//     console.log('You chose Scissors');
//   }
// })


function sum(num1,num2,fntoCall){
  let result=num1+num2;
  fntoCall(result);
}

function displayResult(data){
  console.log("The result of sum is:"+data);
}
function displayResultPassive(data){
  console.log("Sums's result is:"+data); 
}

// only allowed to call one function after this
const ans=sum(1,2,displayResult);
// callback