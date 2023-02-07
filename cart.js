var display_diV_cart = document.getElementById("displayCartProduct");

//function to append product
function showProduct(el) {
  let productcarddiv = document.createElement("div");

  let productInfoDiv = document.createElement("div");

  let name = document.createElement("h5");
  name.innerText = el.name;

  let manufacturer = document.createElement("p");
  manufacturer.innerText = el.brand;

  let price = document.createElement("p");
  price.innerText = `Rs. ${el.price}`;

  let deliverydate = document.createElement("p");
  deliverydate.innerText = "Delivery between SEPTEMBER 2-SEPTEMBER 5";

  productInfoDiv.append(name, manufacturer, price, deliverydate);

  let image_div = document.createElement("div");

  let image = document.createElement("img");
  image.src = el.image;

  image_div.append(image);

  //horizontalline
  let horizontalline = document.createElement("hr");

  //append to main div
  productcarddiv.append(image_div, productInfoDiv);

  //append to dom

  display_diV_cart.append(productcarddiv, horizontalline);
}
var cartValue = 0;
var product_incart = 0;

function addproduct(el) {
  //get data fromcart
  let cart_data = JSON.parse(localStorage.getItem("cart"));

  //loop through cartdata to get access to individual product

  cart_data.forEach(function (el) {
    showProduct(el);
    product_incart++;
    cartValue += Number(el.price);
  });
}
addproduct();
