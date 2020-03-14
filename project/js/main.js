'use strict'

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

// const renderProduct = (title, price, delivery = 'самовывоз', minOrder = 5) => {
//     return `<div class="product-item">
//                 <img src="https://placeimg.com/100/100/any" alt="">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <p>способ доставки: ${delivery}</p>   
//                 <p>минимальный заказ: ${minOrder} шт</p>
//                 <button class="buy-btn">Добавить в корзину</button>
//             </div>`;
// };

const renderProduct = (title, price, delivery = 'самовывоз', minOrder = 5) => 
            `<div class="product-item">
                <img src="https://placeimg.com/100/100/any" alt="img">
                <h3>${title}</h3>
                <p>${price}</p>
                <p>способ доставки: ${delivery}</p>   
                <p>минимальный заказ: ${minOrder} шт</p>
                <button class="buy-btn">Добавить в корзину</button>
            </div>`;

    products.forEach(element => {
            document.querySelector('.products').innerHTML += renderProduct(element.title, element.price)
        })



// const renderProducts = list => {
//     const productList = list.map(item => renderProduct(item.title, item.price));
//     productList.forEach(element => {
//         document.querySelector('.products').innerHTML += element
        
//     });
    
// };

// const renderProducts = list => {
//     const productList = list.map(item => renderProduct(item.title, item.price));
//     document.querySelector('.products').innerHTML = productList;
// };

// const renderProducts = list => {
//     list.forEach(element => {
//         const productList = renderProduct(element.title, element.price)
//         document.querySelector('.products').innerHTML += productList
//     });
// }

// const renderProducts = list => {
//     list.forEach(element => {
//         document.querySelector('.products').innerHTML += renderProduct(element.title, element.price)
//     });
// }

// function renderProducts(list){
//     list.forEach(element => {
//         document.querySelector('.products').innerHTML += renderProduct(element.title, element.price)
//     });
// }




// renderProducts(products);
