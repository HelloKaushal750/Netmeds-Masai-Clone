localStorage.setItem("CardNumber", "111111111111");
localStorage.setItem("CVV", "123");

document.getElementById("data").addEventListener("submit", carddata);

function carddata() {
  event.preventDefault();
  cardNum = document.getElementById("cardNum").value;
  cvv = document.getElementById("CVV").value;
  month = document.getElementById("Month").value;
  year = document.getElementById("Year").value;
  mobile = document.getElementById("mobile").value
  name = document.getElementById("Name").value;

  if (!name || !date || !cvv || !cardNum || !mobile) {
    alert("Fill all the details");
    return;
  }

  var cdNumber = localStorage.getItem("CardNumber");
  var cv = localStorage.getItem("CVV");

  if (cdNumber === cardNum && cv === cvv) {
    var btn = document.getElementById("btn");
    btn.setAttribute("onclick","window.location.href = 'OTP.html'")
  } else {
    alert("Not getting account details");
  }
}
