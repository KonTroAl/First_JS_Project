// 1. Реализовать страницу корзины:
// Добавить возможность не только смотреть состав корзины, 
// но и редактировать его, обновляя общую стоимость или выводя 
// сообщение «Корзина пуста».

//2. На странице корзины:
//  Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
//  Сделать эти поля сворачиваемыми;
//  Заполнять поля по очереди, то есть давать посмотреть состав корзины,
//  внизу которого есть кнопка «Далее». 
//  Если нажать ее, сворачивается «Состав корзины» и открывается «Адрес доставки» 
//  и так далее.


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
            NextButton.classList.remove('is_active');
            address.classList.add('not_active');
            basket_text.textContent = "Корзина пуста!";
            my_basket.appendChild(basket_main);
            my_basket.appendChild(basket_text);
            comments_container.classList.add('not_active');



        } else {
            let str = `Общее количество товара: ${count}. Сумма покупки: ${res} рублей!
            В данный момент в корзине находится: `;
            basket_text.textContent = str;
        }


        my_basket.appendChild(basket_container);
        basket_container.appendChild(NextButton);
        my_basket.appendChild(address);
        my_basket.appendChild(comments_container);

    }
}


let my_basket = document.querySelector(".basket");

let basket_container = document.createElement("div");
basket_container.classList.add('basket_container');

let basket_main = document.createElement('h3');
basket_main.innerText = 'Состав корзины';

let basket_text = document.createElement('p');
basket_text.innerText = "Корзина пуста!";

my_basket.appendChild(basket_main);
my_basket.appendChild(basket_text);
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
        buy_button.className = "buy_button";
        buy_button.innerHTML = "Купить!";
        buy_button.id = `${Product[count]["name"]}`;

        buy_button.addEventListener('click', (e) => {
            Buy_Basket(e.target.id);
            basket_view(e.target.id);
            basket.countBasketPrice();
            NextButton.classList.add('is_active');
            address.classList.remove('not_active');
            comments_container.classList.remove('not_active');

        })


        let str = `Наименование товара: ${Product[count]["name"]}. Цена ${Product[count]["cost"]} рублей.`;
        my_product_text.innerHTML = str;

        my_product.appendChild(my_product_text);
        my_product.appendChild(buy_button);

        products.appendChild(my_product);


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

let NextButton = document.createElement('button');
NextButton.innerText = "Далее";
NextButton.classList.add('NextButton');



// task 2

let address = document.createElement('div');
address.classList.add('address_container');

let addressText = document.createElement('h3');
addressText.innerText = 'Адрес доставки';

let address_text_container = document.createElement('div');
address_text_container.classList.add('comments_text_container');
address_text_container.classList.add('not_active');

let customer = document.createElement('p')
customer.classList.add('input_text');
customer.innerText = 'ФИО покупателя:'

let customerFullName = document.createElement('input');
customerFullName.type = 'text';
customerFullName.placeholder = "Ivanov Ivan";
customerFullName.classList.add('addres_input');

let customer_mail_text = document.createElement('p')
customer_mail_text.classList.add('input_text');
customer_mail_text.innerText = 'Электронный адрес:'

let customerMail = document.createElement('input');
customerMail.type = 'email';
customerMail.placeholder = "mail@mail.ru";
customerMail.classList.add('addres_input');

let customer_phone_text = document.createElement('p')
customer_phone_text.classList.add('input_text');
customer_phone_text.innerText = 'Мобильный телефон:'

let customerPhone = document.createElement('input');
customerPhone.type = 'text';
customerPhone.placeholder = "+7-(999)-999-99-99";
customerPhone.classList.add('addres_input');

let customer_city_text = document.createElement('p')
customer_city_text.classList.add('input_text');
customer_city_text.innerText = 'Адрес доставки:'

let customerCity = document.createElement('input');
customerCity.type = 'text';
customerCity.placeholder = "Россия, ХМАО-Югра, г.Сургут, ул.Ленина, д.39. кв.76";
customerCity.classList.add('addres_input');


let AddressNextButton = document.createElement('button');
AddressNextButton.innerText = "Далее";
AddressNextButton.classList.add('NextButton');
AddressNextButton.classList.add('is_active');

let AddressBackButton = document.createElement('button');
AddressBackButton.innerText = "Вернуться";




address.appendChild(addressText);

address_text_container.appendChild(customer);
address_text_container.appendChild(customerFullName);
address_text_container.appendChild(customer_mail_text);
address_text_container.appendChild(customerMail);
address_text_container.appendChild(customer_phone_text);
address_text_container.appendChild(customerPhone);
address_text_container.appendChild(customer_city_text);
address_text_container.appendChild(customerCity);
address_text_container.appendChild(AddressBackButton);
address_text_container.appendChild(AddressNextButton);

address.appendChild(address_text_container);





let comments_container = document.createElement('div');
comments_container.classList.add('comments_container');

let comments_Main = document.createElement('h3');
comments_Main.innerText = 'Комментарии';

comments_container.appendChild(comments_Main);

let comments_text_container = document.createElement('div');
comments_text_container.classList.add('comments_text_container');
comments_text_container.classList.add('not_active');

let comments_text = document.createElement('p');
comments_text.innerText = 'Комментарии к заказу:';

let comments = document.createElement('textarea');
comments.cols = '30';
comments.rows = '5';
comments.classList.add('comments_area');


let commentsBackButton = document.createElement('button');
commentsBackButton.innerText = "Вернуться";

let sendButton = document.createElement('button');
sendButton.innerText = "Оформить заказ!";





comments_text_container.appendChild(comments_text);
comments_text_container.appendChild(comments);
comments_text_container.appendChild(commentsBackButton);
comments_text_container.appendChild(sendButton);

comments_container.appendChild(comments_text_container);



AddressNextButton.addEventListener('click', () => {
    comments_text_container.classList.remove('not_active');
    address_text_container.classList.add('not_active');
});

commentsBackButton.addEventListener('click', () => {
    comments_text_container.classList.add('not_active');
    address_text_container.classList.remove('not_active');
})


NextButton.addEventListener('click', () => {
    basket_container.classList.add('not_active')
    address_text_container.classList.remove('not_active');
})

AddressBackButton.addEventListener('click', () => {
    address_text_container.classList.add('not_active');
    basket_container.classList.remove('not_active');
})