const displayCart = document.getElementById("displayCart");
function showCart(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    displayCart.innerHTML = `
    <div class="noCart" style=height:100dvh>
    <i class="fa-solid fa-shop-slash noCart-icon"></i>
    <h2>您尚未加入任何商品</h2>
    </div>`;
  } else {
    let cartHtml = "";
    cart.forEach((item) => {
      cartHtml += `
    <div class="row mt-5 row-hover">
          <div class="col-6 offset-1  col-lg-4  itemSection">
            <img class="myPic img-fluid" src="${item.pic}" alt="" />
          </div>
          <div class="col-4 col-lg-2 item-info">
            <div>
              <p class="item-name mt-2">品名：${item.name}</p>
              <p>價格：${item.price * item.quantity}</p>
              <p>數量：${item.quantity}</p>
              <button onclick="removeCart(${item.id})">移出購物車</button>
            </div>
          </div>
    </div>
    <hr>
    `;
    });
    displayCart.innerHTML = cartHtml;
  }
}
const totalDisplay = document.getElementById("totalDisplay");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalMoney = 0;
cart.forEach((item) => {
  totalMoney += item.price * item.quantity;
});
if (!totalMoney == 0) {
  const totalHtml = `
<div className="row">
  <div className="col-12 col-lg-2">
<div class="moneySection">
  <p>總金額為：${totalMoney} 元</p>
  <div class="font-line"></div>
  </div>
  </div>
  </div>
`;
  totalDisplay.innerHTML = totalHtml;
}

function removeCart(productId){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item=>item.id!==productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}
showCart();


