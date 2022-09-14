let checkoutForm = document.getElementById("checkoutform")
let name = document.getElementById("name")
let accountType = document.getElementById("accounttype")
let amount = document.getElementById("amount")
let currency = document.querySelector("currency")
checkoutForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("form submitted");
});#