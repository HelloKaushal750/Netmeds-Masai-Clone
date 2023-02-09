localStorage.setItem("CardNumber", "111111111111");
localStorage.setItem("CVV", "123");

document.getElementById("data").addEventListener("submit", carddata);

function carddata() {
  event.preventDefault();
  cardNum = document.getElementById("cardNum").value;
  cvv = document.getElementById("CVV").value;
  month = document.getElementById("Month").value;
  year = document.getElementById("Year").value;
  mobile = document.getElementById("mobile").value;
  name = document.getElementById("Name").value;

  if (!name || !date || !cvv || !cardNum || !mobile) {
    alert("Fill all the details");
    return;
  }

  var cdNumber = localStorage.getItem("CardNumber");
  var cv = localStorage.getItem("CVV");

  if (cdNumber === cardNum && cv === cvv) {
    var btn = document.getElementById("btn");
    btn.setAttribute("onclick", "window.location.href = 'OTP.html'");
  } else {
    alert("Not getting account details. Try this: CardNo.111111111111, CVV.123, Mob.no.999999999");
  }
}

var products = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("totalproduct").textContent = products.length;

displayItems();

function displayItems() {
  products.map(function (ele) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = ele.name;
    td1.style.textAlign = "left";

    var td3 = document.createElement("td");
    td3.textContent = ele.quantity;

    var td2 = document.createElement("td");
    td2.textContent = ele.price;

    tr.append(td1, td3, td2);
    document.querySelector("tbody").append(tr);
  });
}

var finalamt = JSON.parse(localStorage.getItem("Amount"));
var amt = finalamt.toFixed(2);
document.getElementById("finalamount").textContent = "₹ "+amt;
