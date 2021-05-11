let email=document.getElementById("exampleInputEmail1");
let pwd=document.getElementById("exampleInputPassword1");
let emailSign=document.getElementById("inputEmail4");
let pwdSign=document.getElementById("inputPassword4");
let pwdRetype=document.getElementById("retypeInputPassword1");
let error=document.getElementById("error");
let phoneNumber=document.getElementById("phoneNumber");

let regexp=/^([A-Za-z0-9\.-]+)@([[A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/
    let regexp1=/^[0-9]{10}$/
    let regexp2=/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/
    let regexp3=/^([0-9]{3}).([0-9]{3}).([0-9]{4})$/
    let regexp4=/^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/
    let pattern1=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    
function validate1(){
    if(email.value==""){
        alert("Email cannot be empty");
        return false;
    }

    else if(pwd.value==""){
        alert("Password cannot be empty");
        return false;
    }
    /*else if(pwdRetype.value==pwd.value){
        alert(pwdRetype.value);
        return false;*/
    else{
        alert (" Login Validation completed");
        return true;
    }
}
    /*var flag=0;
    let regexp=/^([A-Za-z0-9\.-]+)@([[A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/
    let regexp1=/^[0-9]{10}$/
    let regexp2=/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/
    let regexp3=/^([0-9]{3}).([0-9]{3}).([0-9]{4})$/
    let regexp4=/^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/*/

function validate2(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(emailSign.value)){        
        error.innerHTML="Valid email";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid email";
        error.style.color="red";
        return false;
    }
    
}

function validate3(){
    if((regexp1.test(phoneNumber.value))||(regexp2.test(phoneNumber.value))||(regexp3.test(phoneNumber.value))||(regexp4.test(phoneNumber.value))) {
        error1.innerHTML="Valid phone";
        error1.style.color="green";
        return true;
    }
    else{
        error1.innerHTML="Invalid phone";
        error1.style.color="red";
        return false;
    }

}

function validate4(){
    var pwdtest=pattern1.test(pwdSign.value);
    
    if (pwdtest){
        alert("Password valid.");
    }
    else{
        alert("Password invalid.");
    }
}
/*function validate5(){
    var myInput = document.getElementById("inputPassword4");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    // When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

}*/
    
   
    
function validate5(){

    var myInput = document.getElementById("inputPassword4");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");

    
}

 // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    

  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }



var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }

var password = document.getElementById('inputPassword4');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
  } else {
    text.innerHTML = "";
  }
});
}}