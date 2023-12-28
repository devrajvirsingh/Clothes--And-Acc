let hamburger = document.querySelector(".hamburger");
let list = document.querySelector(".list");
let logincart = document.querySelector(".nav-login-cart");

hamburger.addEventListener("click", () => {
  list.classList.toggle("v-class");
  logincart.classList.toggle("v-class");
});

// popular in men

let data_product = [

  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "./Assets/product_14.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img:"./Assets/product_15.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "./Assets/product_16.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    img: "./Assets/product_17.png",
    new_price: 85.0,
    old_price: 120.5,
  },

];

document.addEventListener("DOMContentLoaded", function () {
  let popularitem = document.getElementsByClassName("popular-item");

  data_product.forEach((item, i) => {
    let productcard = document.createElement("div");
    productcard.className = "product-card";

    productcard.innerHTML = `<div class='card'>
    
    <a href="product.html?id=${item.id}"><img src="${item.img}" alt=""></a>
        <p>${item.name}</p>
        <div class="item-prices">
            <div class="item-price-new">
               Rs ${item.new_price}
            </div>
            <div class="item-price-old">
                ${item.old_price}
            </div>
        </div>
    </div>`;

    for (let i = 0; i < popularitem.length; i++) {
      popularitem[i].appendChild(productcard);
    }
  });
});

// new collection

let newcollection_product = [
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "./Assets/product_12.png",
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: "./Assets/product_35.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "./Assets/product_14.png",
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "./Assets/product_8.png",
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "./Assets/product_15.png",
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "./Assets/product_2.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "./Assets/product_17.png",
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: "./Assets/product_28.png",
    new_price: 100.0,
    old_price: 150.0,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let parent = document.getElementsByClassName("collection-item");

  newcollection_product.forEach((item) => {
    let child = document.createElement("div");
    child.className = "product-card";

    child.innerHTML = `
    <div class='card'>
    <a href="product.html?id=${item.id}"><img src="${item.image}" alt=""></a>
        <p>${item.name}</p>
        <div class="item-prices">
            <div class="item-price-new">
               Rs ${item.new_price}
            </div>
            <div class="item-price-old">
                ${item.old_price}
            </div>
        </div>
    </div>`;

    for (let i = 0; i < parent.length; i++) {
      parent[i].appendChild(child);
    }
  });
});
