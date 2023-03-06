const prices = document.querySelectorAll('.item__price');

let itemPrices = [];

for (i = 0; i < prices.length; i++) {
    itemPrices.push(Number(prices[i].innerText));
}

let totalPrice = 0;

for (i = 0; i < itemPrices.length; i++) {
    totalPrice += itemPrices[i];
}

document.getElementsByClassName('cart_total_price')[0].innerText = totalPrice;

let discountPrice = [];

function calcDiscount() {
    for (i = 0; i < itemPrices.length; i++) {
        discountPrice = Math.round(itemPrices[i] - (itemPrices[i] / 100 * 20));
        document.querySelectorAll('.item__price')[i].innerText = discountPrice;
    };
    totalPrice = totalPrice - (totalPrice / 100 * 20);
    document.getElementsByClassName('cart_total_price')[0].innerText = totalPrice;
}





