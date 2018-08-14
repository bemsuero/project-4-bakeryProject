console.log("everything is in control")

function praiseCthulu() {
  page = document.getElementById("page");
  page.classList.toggle("praise");
}

function showCart() {
  cart = document.getElementById("shoppingCart");
  cart.classList.add("show");
  cart.classList.remove("hide");
}

function hideCart() {
  cart = document.getElementById("shoppingCart");
  cart.classList.add("hide");
  cart.classList.remove("show");
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
    if (typeof(Storage) !== "undefined") {
      if (bakedGood.includes("Cookie")) {
      if (localStorage.cookieGood) {
        localStorage.cookieGood = Number(localStorage.cookieGood) + 1;
      } else {
        localStorage.cookieGood = 1;
      }
      currentBaked = localStorage.cookieGood + " " + bakedGood + ": $" + (price * localStorage.cookieGood);
      if (cookieList.length >= 1) {
        document.getElementById("cookieList").innerHTML = cookieList[cookieList.length - 1];
      } else {
        document.getElementById("cookieList").innerHTML = " ";
      }
      cookieList.push(currentBaked);
    }
    } else {
      document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
    }
      if (typeof(Storage) !== "undefined") {
        if (bakedGood.includes("Muffin")) {
        if (localStorage.muffinGood) {
          localStorage.muffinGood = Number(localStorage.muffinGood) + 1;
        } else {
          localStorage.muffinGood = 1;
        }
        currentBaked = localStorage.muffinGood + " " + bakedGood + ": $" + (price * localStorage.muffinGood);
        if (muffinList.length >= 1) {
          document.getElementById("muffinList").innerHTML = muffinList[muffinList.length - 1];
        } else {
          document.getElementById("muffinList").innerHTML = " ";
        }
        muffinList.push(currentBaked);
      }
      } else {
        document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
      }
        if (typeof(Storage) !== "undefined") {
          if (bakedGood.includes("Cake")) {
          if (localStorage.cakeGood) {
            localStorage.cakeGood = Number(localStorage.cakeGood) + 1;
          } else {
            localStorage.cakeGood = 1;
          }
          currentBaked = localStorage.cakeGood + " " + bakedGood + ": $" + (price * localStorage.cakeGood);
          if (cakeList.length >= 1) {
            document.getElementById("cakeList").innerHTML = cakeList[cakeList.length - 1];
          } else {
            document.getElementById("cakeList").innerHTML = " ";
          }
          cakeList.push(currentBaked);
        }
      } else {
        document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
      }
    }

    function clearCart() {
      localStorage.clear();
        // if (typeof(Storage) !== "undefined") {
        //   if (bakedGood.includes("Cookie")) {
        //   if (localStorage.cookieGood) {
        //     localStorage.cookieGood = Number(localStorage.cookieGood) - 1;
        //   } else {
        //     localStorage.cookieGood = 1;
        //   }
        //   currentBaked = localStorage.cookieGood + " " + bakedGood + ": $" + (price * localStorage.cookieGood);
        //   if (cookieList.length >= 1) {
        //     document.getElementById("cookieList").innerHTML = cookieList[cookieList.length - 1];
        //   } else {
        //     document.getElementById("cookieList").innerHTML = " ";
        //   }
        //   cookieList.push(currentBaked);
        // }
        // } else {
        //   document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
        // }
        //   if (typeof(Storage) !== "undefined") {
        //     if (bakedGood.includes("Muffin")) {
        //     if (localStorage.muffinGood) {
        //       localStorage.muffinGood = Number(localStorage.muffinGood) + 1;
        //     } else {
        //       localStorage.muffinGood = 1;
        //     }
        //     currentBaked = localStorage.muffinGood + " " + bakedGood + ": $" + (price * localStorage.muffinGood);
        //     if (muffinList.length >= 1) {
        //       document.getElementById("muffinList").innerHTML = muffinList[muffinList.length - 1];
        //     } else {
        //       document.getElementById("muffinList").innerHTML = " ";
        //     }
        //     muffinList.push(currentBaked);
        //   }
        //   } else {
        //     document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
        //   }
        //     if (typeof(Storage) !== "undefined") {
        //       if (bakedGood.includes("Cake")) {
        //       if (localStorage.cakeGood) {
        //         localStorage.cakeGood = Number(localStorage.cakeGood) + 1;
        //       } else {
        //         localStorage.cakeGood = 1;
        //       }
        //       currentBaked = localStorage.cakeGood + " " + bakedGood + ": $" + (price * localStorage.cakeGood);
        //       if (cakeList.length >= 1) {
        //         document.getElementById("cakeList").innerHTML = cakeList[cakeList.length - 1];
        //       } else {
        //         document.getElementById("cakeList").innerHTML = " ";
        //       }
        //       cakeList.push(currentBaked);
        //     }
        //   } else {
        //     document.getElementById("cookieList").innerHTML = "Sorry, your browser does not support web storage...";
        //   }
        }
