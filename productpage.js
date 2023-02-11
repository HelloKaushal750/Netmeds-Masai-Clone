var parsed_data = JSON.parse(localStorage.getItem("products"));

var displaydiv = document.getElementById("rightcontainer");

function showall() {
  let div = document.createElement("div");
  div.setAttribute("id","addto");

  let btn = document.createElement("button");
  btn.setAttribute("class", "cartbutton");
  btn.innerHTML = "ADD TO CART";
  div.append(btn);
  displaydiv.append(div);

  btn.onclick = function () {
    addtoCart(parsed_data[0]);
  };
}
showall();
function addtoCart(el) {
  var cart_data = JSON.parse(localStorage.getItem("cart")) || [];

  cart_data.push(el);
  localStorage.setItem("cart", JSON.stringify(cart_data));
  document.getElementById("lblCartCount").textContent = cart_data.length;
  //total_cart_product++;

  //document.getElementById("carttoal").innerHTML = null;
  //var cart_total_p = document.createElement("p");
  //cart_total_p.innerText = total_cart_product;
  //totacartdisplay.append(cart_total_p);
  //console.log(total_cart_product);
}

var cart_data = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("lblCartCount").textContent = cart_data.length;


// sliding 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}