const list = [
    {
        img: './img/cacti.webp' ,
        tittle:'cacti',
    },
    {
        img: './img/plants.jpg' ,
        tittle:'plants',
    },
    {
        img: './img/succulents.webp' ,
        tittle:'succulents',
    },
];

const item = document.querySelector('#item');

let itemHtml = '';

list.forEach(function (el) {
    itemHtml += `<div class="item-img item1" style="background-image: url('${el.img}');">
    <h2>${el.tittle}</h2>
    <p class="minus">--</p>
    <button class="btn1">Shop Collection</button>
    </div>`;
});

item.innerHTML = itemHtml;

