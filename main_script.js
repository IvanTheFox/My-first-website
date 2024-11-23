var current_cart_sum = 3243
var is_cart_open = false

var open_cart_button = document.getElementById("open_cart_button")
var cart_text = document.getElementById("cart_text")
var cart_popup = document.getElementById("cart_popup")

function open_cart() {
    is_cart_open = !(is_cart_open)
    price_thousand = Math.floor(current_cart_sum / 1000).toString()
    price_other = current_cart_sum - price_thousand * 1000
    if (is_cart_open) {
        cart_text.innerHTML = price_thousand + " " + price_other + " руб. ▲"
        cart_popup.style.visibility = "visible"
    } else {
        cart_text.innerHTML = price_thousand + " " + price_other + " руб. ▼"
        cart_popup.style.visibility = "hidden"
    }
}