var allCategory = document.getElementById("allCategory");
var myComodity = [
  {
    name: "商品1-0",
    pic: "./images/item1.jpg",
    price: "2000",
    type: "a",
  },
  {
    name: "商品1-1",
    pic: "./images/item1.jpg",
    price: "2000",
    type: "a",
  },
  {
    name: "商品1-2",
    pic: "./images/item1.jpg",
    price: "2000",
    type: "a",
  },
  {
    name: "商品2-0",
    pic: "./images/item2.jpg",
    price: "3000",
    type: "b",
  },
  {
    name: "商品2-1",
    pic: "./images/item2.jpg",
    price: "3000",
    type: "b",
  },
  {
    name: "商品2-2",
    pic: "./images/item2.jpg",
    price: "3000",
    type: "b",
  },
  {
    name: "商品3-0",
    pic: "./images/item3.jpg",
    price:" 3500",
    type: "c",
  },
  {
    name: "商品3-1",
    pic: "./images/item3.jpg",
    price:" 3500",
    type: "c",
  },
  {
    name: "商品3-2",
    pic: "./images/item3.jpg",
    price:" 3500",
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
  </div>
  `;
  });
    allCategory.innerHTML = html;
}
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

