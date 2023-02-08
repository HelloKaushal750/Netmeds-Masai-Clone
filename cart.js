var display_diV_cart = document.getElementById("displayCartProduct");

//function to append product
function showProduct(el, index) {
  // div1

  var div1 = document.createElement("div");
  div1.setAttribute("id", "img-prod");

  var imagediv = document.createElement("div");

  let image = document.createElement("img");
  image.src = el.image;

  imagediv.append(image);

  var productdiv = document.createElement("div");

  let name = document.createElement("h4");
  name.innerText = el.name;

  let manufacturer = document.createElement("p");
  manufacturer.innerText = el.brand;

  productdiv.append(name, manufacturer);

  div1.append(imagediv, productdiv);

  // div2

  var div2 = document.createElement("div");
  div2.setAttribute("id", "price-quan");

  var pricediv = document.createElement("div");
  pricediv.setAttribute("id", "pricevalue");

  let price = document.createElement("p");
  price.innerText = `Rs. ${el.price}`;

  pricediv.append(price);

  var quantitydiv = document.createElement("div");
  quantitydiv.setAttribute("id", "quandiv");

  var quan = document.createElement("h5");
  quan.innerText = "QTY : ";

  var quancount = document.createElement("h5");
  quancount.innerHTML = el.quantity;

  var quanIncrement = document.createElement("button");
  quanIncrement.textContent = "+";
  quanIncrement.addEventListener("click", function () {
    increase(el);
  });

  var quanDecrement = document.createElement("button");
  quanDecrement.textContent = "-";
  quanDecrement.addEventListener("click", function () {
    decrease(el);
  });

  quantitydiv.append(quan, quancount, quanIncrement, quanDecrement);

  div2.append(pricediv, quantitydiv);

  // div3

  var div3 = document.createElement("div");
  div3.setAttribute("id", "delivery-rem");

  var deliverydiv = document.createElement("div");

  let deliverydate = document.createElement("p");
  deliverydate.innerText = "Delivery between Feb 9 6PM-Feb 10 10PM";

  deliverydiv.append(deliverydate);

  var remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.addEventListener("click", function () {
    deleteFun(index);
  });

  div3.append(deliverydiv, remove);

  let horizontalline = document.createElement("hr");

  display_diV_cart.append(div1, div2, div3, horizontalline);
}

function increase(ele) {
  ele.quantity++;
  localStorage.setItem("cart", JSON.stringify(cart_data));
  addproduct(cart_data);
  calcTotal();
}

function decrease(ele) {
  ele.quantity--;
  localStorage.setItem("cart", JSON.stringify(cart_data));
  addproduct(cart_data);
  calcTotal();
}

function deleteFun(index) {
  // document.getElementById("carts").innerHTML = "";
  var remaining = cart_data.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart_data));
  console.log(cart_data);
  addproduct(cart_data);
  calcTotal();
}

function calcTotal() {
  var total = cart_data.reduce(function (acc, curr) {
    return acc + Number(curr.price * curr.quantity);
  }, 0);
  console.log(total);

  total.toFixed(2);

  document.getElementById("mrptotal").innerText = total.toFixed(2);

  document.getElementById("total-amt").innerText = total.toFixed(2);
  document.getElementById("totalamt").innerText = total.toFixed(2);
  localStorage.setItem("Amount", total);
}

let cart_data = JSON.parse(localStorage.getItem("cart")) || [];

function addproduct(cartdata) {
  //get data fromcart
  //loop through cartdata to get access to individual product
  document.getElementById("displayCartProduct").textContent = "";
  cartdata.forEach(function (el, index) {
    showProduct(el, index);
    calcTotal();
  
  });
  var div4 = document.createElement("div");
  div4.setAttribute("id", "additem");

  var addmore = document.createElement("p");
  addmore.innerText = "ADD MORE ITEMS";

  var plus = document.createElement("button");
  plus.textContent = "+";
  plus.setAttribute(
    "onclick",
    "window.location.href = 'Covid-Essentials.html'"
  );

  div4.append(addmore, plus);
  display_diV_cart.append(div4);

  
}
addproduct(cart_data);

// slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Amount
var apply = document.getElementById("apply")
  .addEventListener("click", function () {
    checkcode();
  });
localStorage.setItem("promocode", "masai30");
function checkcode() {
  var code = document.getElementById("code").value;
  var a = localStorage.getItem("promocode");

  if (code === a) {
    alert("Congrats you have got 30% discount");
    var num = Number(document.getElementById("total-amt").textContent);
    console.log(num);
    var remain = (num * 30) / 100;
    document.getElementById("adddiscount").textContent = remain.toFixed(2);
    
    var NUM = Number(num - remain).toFixed(2);
    document.getElementById("total-amt").textContent = NUM;
    document.getElementById("totalamt").innerText = NUM;

    localStorage.setItem("Amount", NUM);
    localStorage.setItem("promocode", "!@#$%^&*&^%##%$");
  } else {
    alert("Invalid Promo Code / Already applied promo code to the Total Price");
  }
}
