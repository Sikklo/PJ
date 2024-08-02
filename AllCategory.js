var allCategory = document.getElementById("allCategory");
var myComodity = [
  {
    id: 1,
    name: "商品1-0",
    pic: "./images/item1.jpg",
    price: "2000",
    type: "a",
  },
  {
    id: 2,
    name: "商品1-1",
    pic: "./images/item1.jpg",
    price: "2000",
    type: "a",
  },
  {
    id: 3,
    name: "商品1-2",
    pic: "./images/item1.jpg",
    price: "2000",
    type: "a",
  },
  {
    id: 4,
    name: "商品2-0",
    pic: "./images/item2.jpg",
    price: "3000",
    type: "b",
  },
  {
    id: 5,
    name: "商品2-1",
    pic: "./images/item2.jpg",
    price: "3000",
    type: "b",
  },
  {
    id: 6,
    name: "商品2-2",
    pic: "./images/item2.jpg",
    price: "3000",
    type: "b",
  },
  {
    id: 7,
    name: "商品3-0",
    pic: "./images/item3.jpg",
    price: " 3500",
    type: "c",
  },
  {
    id: 8,
    name: "商品3-1",
    pic: "./images/item3.jpg",
    price: " 3500",
    type: "c",
  },
  {
    id: 9,
    name: "商品3-2",
    pic: "./images/item3.jpg",
    price: " 3500",
    type: "c",
  },
];
function displayProducts(products){
  var html = "";
  products.forEach((product) => {
    html += `
  <div class='col-12 col-sm-4 offset-sm-1  product'>
  <img class="img-fluid" src="${product.pic}" alt="" />
  <h2>${product.name}</h2>
  <p>價格：${product.price}</p>
  <button onclick="addToCart(${product.id})">加入購物車</button>
  </div>
  `;
  });
    allCategory.innerHTML = html;
}
// 篩選商品
function filterProducts(type) {
  if (type === "all") {
    displayProducts(myComodity);
  } else {
    var filteredProducts = myComodity.filter(
      (product) => product.type === type
    );
    displayProducts(filteredProducts);
  }
}displayProducts(myComodity);
// 加入購物車
function addToCart(productId){
let cart = JSON.parse(localStorage.getItem('cart'))||[];
let product = myComodity.find(p=>p.id===productId);
if(product){
  let cartItem = cart.find(item=>item.id===productId);
  if(cartItem){
    cartItem.quantity+=1;
  }else{
    cart.push({...product,quantity:1});
  }
  localStorage.setItem('cart',JSON.stringify(cart));
  alert(`${product.name}已成功加入購物車!`);
}
}



// ------------------------







// toggler section

const toggler = document.getElementById('toggler');
var listGroup = document.getElementById("listGroup");
var isActive = false;
toggler.onclick = ()=>{
 
  if(isActive){
    listGroup.style.display = "block";
    listGroup.classList.add("active");
    isActive = false;
  }else{
    listGroup.style.display = "none";
    listGroup.classList.remove("active");
    isActive = true;
  }

}

