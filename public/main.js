console.log("everything is in control")

function praiseCthulu() {

  page = document.getElementById("page");
  page.classList.toggle("praise");
  image = document.getElementById('adImage');
  image.src = "cthulu.gif"
  contactInfo = document.getElementById("contactUs");
  contactInfo.innerHTML = "PRAISE THE DARK LORD";
  contactInfo.style.fontSize = "10vh";
}

function showCart() {
  cart = document.getElementById("shoppingCart");
  cart.classList.toggle("hide");
}

cookieList = [];
muffinList = [];
cakeList = [];

function showItemsInCart() {
document.getElementById("cookieList").innerHTML = cookieList[cookieList.length - 1];
document.getElementById("muffinList").innerHTML = muffinList[muffinList.length - 1];
document.getElementById("cakeList").innerHTML = cakeList[cakeList.length - 1];
}

function addItem(bakedGood, price) {
  // var newCookie = Cookies.set(bakedGood, price, {expires: 1});
  //   if (typeof(Storage) !== "undefined") {
  //     if (bakedGood.includes("Cookie")) {
  //     if (localStorage.cookieGood) {
  //       localStorage.cookieGood = Number(localStorage.cookieGood) + 1;
  //     } else {
  //       localStorage.cookieGood = 1;
  //     }
  //     currentBaked = localStorage.cookieGood + " " + bakedGood + ": $" + (price * localStorage.cookieGood);
  //     if (cookieList.length >= 1) {
  //       document.getElementById("cookieList").innerHTML = Cookies.get(newCookie);
  //     } else {
  //       document.getElementById("cookieList").innerHTML = " ";
  //     }
  //     cookieList.push(currentBaked);
  //   }
  //   } else {
  //     document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
  //   }
  //     if (typeof(Storage) !== "undefined") {
  //       if (bakedGood.includes("Muffin")) {
  //       if (localStorage.muffinGood) {
  //         localStorage.muffinGood = Number(localStorage.muffinGood) + 1;
  //       } else {
  //         localStorage.muffinGood = 1;
  //       }
  //       currentBaked = localStorage.muffinGood + " " + bakedGood + ": $" + (price * localStorage.muffinGood);
  //       if (muffinList.length >= 1) {
  //         document.getElementById("muffinList").innerHTML = muffinList[muffinList.length - 1];
  //       } else {
  //         document.getElementById("muffinList").innerHTML = " ";
  //       }
  //       muffinList.push(currentBaked);
  //     }
  //     } else {
  //       document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
  //     }
  //       if (typeof(Storage) !== "undefined") {
  //         if (bakedGood.includes("Cake")) {
  //         if (localStorage.cakeGood) {
  //           localStorage.cakeGood = Number(localStorage.cakeGood) + 1;
  //         } else {
  //           localStorage.cakeGood = 1;
  //         }
  //         currentBaked = localStorage.cakeGood + " " + bakedGood + ": $" + (price * localStorage.cakeGood);
  //         if (cakeList.length >= 1) {
  //           document.getElementById("cakeList").innerHTML = cakeList[cakeList.length - 1];
  //         } else {
  //           document.getElementById("cakeList").innerHTML = " ";
  //         }
  //         cakeList.push(currentBaked);
  //       }
  //     } else {
  //       document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
  //     }
    }

    function clearCart() {
      localStorage.clear();
        }
