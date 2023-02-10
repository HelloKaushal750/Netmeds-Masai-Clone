var parsed_data = JSON.parse(localStorage.getItem("products"));

var displaydiv = document.getElementById("rightcontainer");

function showall() {
  let div = document.createElement("div");

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
