document.getElementById('signUpBtn').addEventListener('click', clickedSignup);
document.getElementById('loginBtn').addEventListener('click', clickedLogin);

var AllUsersArr = JSON.parse(localStorage.getItem("Allusers")) || [];

function clickedSignup() {
    event.preventDefault();
    let mobileNum = document.getElementById('MobileNum').value;
    let email= document.getElementById("emailSignUp").value;

    if(document.getElementById("name").value == "" ||
      email == "" ||
      document.getElementById("pswdSignUp").value == ""){

          alert("Fill all the input details");
          return;
      }

    if(mobileNum.length < 4 || mobileNum.length > 15){

        alert('Please Enter a Valid Mobile Number');
        return;
    }

    let usersPhoneArr = AllUsersArr.map((e)=>{return e.mobile})
    let usersEmailArr = AllUsersArr.map((e)=>{return e.email})
    if(usersPhoneArr.includes(mobileNum)){
        alert('Number is already registered. Please Login.');
        document.getElementById('chk').checked = true;
        return;
    }else if(usersEmailArr.includes(email)){
        alert('Email is already registered. Please Login.');
        document.getElementById('chk').checked = true;
        document.getElementById("emailLogIn").value = email;
        return;
    }

    var detailsObj= {
        name: document.getElementById("name").value,
        email: email,
        password: document.getElementById("pswdSignUp").value,
        mobile: mobileNum
      };
      

    localStorage.setItem('userDetails', JSON.stringify(detailsObj));
    var OTP = ["1", "2", "3", "4", "5"];
    localStorage.setItem("OTP", JSON.stringify(OTP));
    window.open("./verify.html", '_self');

}


const matchCredentials = (email, password) => {
    const match = AllUsersArr.find(el => {
       return el.email === email && el.password === password;
    });
    return !!match;
 };


function clickedLogin() {
    event.preventDefault();
    let email = document.getElementById("emailLogIn").value;
    let password = document.getElementById("pswdLogin").value;

    if(matchCredentials(email, password)){
        window.open("./successful.html", '_self');
    }else{
        alert('Wrong Credentials or Email not registered!');
    }
}

