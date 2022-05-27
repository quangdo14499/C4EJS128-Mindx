const list = [
    {
        img: './img/item1-1.webp' ,
        oldPri: '$15.00',
        newPri: '$13.50$',
    },
    {
        img: './img/item2-1.webp',
        oldPri: '$15.00',
        newPri: '$13.50$',
    },
    {
        img: './img/item3-1.webp' ,
        oldPri: '$15.00',
        newPri: '$13.50$',
    },
    {
        img: './img/item4-1.webp' ,
        oldPri: '$15.00',
        newPri: '$13.50$',
    },
    {
        img: './img/item5-1.webp' ,
        oldPri: '$15.00',
        newPri: '$13.50$',
    },
];

const allItem = document.querySelector('#all-item');

let allItemHtml = '';

list.forEach(function (el) {
    itemHtml += `<div class="item-container">
            <div class="item-image" style="background-image: url('${el.img}');">
            <div class="quick-view">Quick View</div>
            </div>
            <p>I'm a product</p>
            <div class="price">
                <div class="old-pri">${el.oldPri}</div>
                <div class="new-pri">${el.newPri}</div>
            </div>
            <button class="add">Add to Cart</button>
    </div>`;
    
});

allItem.innerHTML = allItemHtml;