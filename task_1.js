// 1. Реализовать страницу корзины:
// Добавить возможность не только смотреть состав корзины, 
// но и редактировать его, обновляя общую стоимость или выводя 
// сообщение «Корзина пуста».

"use strict"

let Product = [
    { name: 'PS', cost: 47000, num: 0 },
    { name: 'Xbox', cost: 46000, num: 0 },
    { name: 'PC', cost: 110000, num: 0 },
    { name: 'Iphone_12_Pro_Max', cost: 139000, num: 0 },
]

let basket = {
    Product,
    countBasketPrice() {
        let a = 0;
        let res = 0;
        let is_num = true;
        let count = 0;
        for (let i = 0; i < Product.length; i++) {
            a = (Product[i]["cost"] * Product[i]["num"]);
            if (a != 0) {
                count = count + Product[i]["num"];
            }
            res = res + a;
        }

        let str = `Количество товара: ${count}. Сумма покупки: ${res} рублей!`;
        my_basket.innerHTML = str;


    }
}


let my_basket = document.querySelector(".basket");
my_basket.innerHTML = "Корзина пуста!";


let products = document.querySelector(".products");


function product_view() {
    let count = 0;

    while (count < Product.length) {
        let my_product = document.createElement("div");
        my_product.className = 'product';

        let my_product_text = document.createElement("p");
        my_product_text.className = 'product_text';

        let buy_button = document.createElement("button");
        buy_button.className = "buy_button"
        buy_button.innerHTML = "Купить!";
        buy_button.id = `${Product[count]["name"]}`

        let str = `Наименование товара: ${Product[count]["name"]}. Цена ${Product[count]["cost"]} рублей.`;
        my_product_text.innerHTML = str;

        my_product.appendChild(my_product_text)
        my_product.appendChild(buy_button)
        products.appendChild(my_product)

        count++;
    }
}

product_view()

function Buy_Basket(val) {
    for (let i = 0; i < Product.length; i++) {
        if (val === Product[i]["name"]) {
            let count = Product[i]["num"];
            Product[i]["num"] = count + 1
        }
    }

}

for (let i = 0; i < Product.length; i++) {
    let str = `#${Product[i]["name"]}`;

    document.querySelector(str)
        .addEventListener('click', (e) => {
            Buy_Basket(e.target.id)
            basket.countBasketPrice()
        })
}
