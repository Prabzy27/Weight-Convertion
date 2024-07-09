
 const submit = document.getElementById("submit").addEventListener("click", function(event) { event.preventDefault(); conversion();})
const kg_lbs  = document.getElementById("kg_lbs") 
const result = document.getElementById("result");
const kg = document.getElementById("kg");
const lbs = document.getElementById("lbs");
let answer;

lbs

function conversion(){

    if(kg.checked){
answer = Number(kg_lbs.value) * 2.2;
answer = answer.toFixed(2);
result.textContent =  `Your weight is ${answer} in lbs !`;
    }

    else if (lbs.checked){
answer = Number(kg_lbs.value) / 2.2;
answer = answer.toFixed(2);
result.textContent =  `Your weight is ${answer} in kg !`;

    }
    else{
        result.textContent = `Please  select a unit .`
    }
}
