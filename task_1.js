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

        if (res === 0) {
            my_basket.innerHTML = "Корзина пуста!";

        } else {
            let str = `Общее количество товара: ${count}. Сумма покупки: ${res} рублей!
            В данный момент в корзине находится: `;
            my_basket.textContent = str;
        }


        my_basket.appendChild(basket_container);


    }
}


let my_basket = document.querySelector(".basket");
my_basket.innerHTML = "Корзина пуста!";

let basket_container = document.createElement("div");
basket_container.classList.add('basket_container');

my_basket.appendChild(basket_container);



function basket_view(name) {
    let basket_products = document.createElement('div');
    basket_products.classList.add('basket_products');

    let name_product = document.createElement('p');
    name_product.classLis

    let basket_buttons = document.createElement('div');
    basket_buttons.classList.add('basket_buttons');

    let add_button = document.createElement('button');
    add_button.className = "buy_button";
    add_button.innerHTML = "Добавить";
    add_button.id = name

    add_button.addEventListener('click', (e) => {
        for (let i = 0; i < Product.length; i++) {
            if (e.target.id === Product[i]['name']) {
                let count = Product[i]["num"];
                Product[i]["num"] = count + 1
                let str = `Товар: ${Product[i]["name"]}. Количество: ${Product[i]["num"]}`;
                name_product.innerHTML = str;
                basket.countBasketPrice()
            }
        }
    })

    let odd_button = document.createElement('button');
    odd_button.className = "buy_button";
    odd_button.innerHTML = "Убрать";
    odd_button.id = name;

    odd_button.addEventListener('click', (e) => {
        for (let i = 0; i < Product.length; i++) {
            if (e.target.id === Product[i]['name']) {
                let count = Product[i]["num"];
                Product[i]["num"] = count - 1
                if (Product[i]["num"] === 0) {
                    basket_container.removeChild(basket_products);

                } else {
                    let str = `Товар: ${Product[i]["name"]}. Количество: ${Product[i]["num"]}`;
                    name_product.innerHTML = str;

                }
                basket.countBasketPrice()
            }
        }
    })



    for (let i = 0; i < Product.length; i++) {
        if (name === Product[i]['name']) {
            let str = `Товар: ${Product[i]["name"]}. Количество: ${Product[i]["num"]}`;
            name_product.innerHTML = str;
        }
    }

    basket_buttons.appendChild(add_button);
    basket_buttons.appendChild(odd_button);
    basket_products.appendChild(name_product);
    basket_products.appendChild(basket_buttons);
    basket_container.appendChild(basket_products);


}

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

        buy_button.addEventListener('click', (e) => {
            Buy_Basket(e.target.id)
            basket_view(e.target.id)
            basket.countBasketPrice()
        })


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
