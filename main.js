var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var button = document.querySelector("#check-button");
var results = document.querySelector("#results");
var errorMessage = document.querySelector("#error-message");

function clickHandler(){
    var dob = birthDate.value;
    dob = dob.replaceAll("-","");
    var birthDateSum = dbSum (dob);
    if (birthDateSum&&luckyNumber.value){
        errorMessage.style.display="none"
    calculateResults(birthDateSum);
    }else{
        errorMessage.innerText = "❌ Please enter both the fields!! 😡"
    }
}

function dbSum(dob){
    let sum = 0;
    for (let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    } return sum
}

function calculateResults(birthDateSum){
    if (birthDateSum%luckyNumber.value===0){
        results.innerText = "Your Birthday is Lucky 🕺";
    } else {
        results.innerText = "Your Birthday is not Lucky 🙀, But you Do create your Own Luck 😁";
    }
}

button.addEventListener("click", clickHandler)