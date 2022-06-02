
// search-box

const searchWrapper = document.querySelector(".search-cont");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".ti-search");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
           return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); 
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
};



const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}));

const listCart = [
    {   
        title:'',
        name:'Queen of the night cactus',
        bg: './img/img-cart/item1-1.webp' ,
        oldPri: '$15.00',
        newPri: '$13.50',
    },
    {   
        title:'Best seller',
        name:'Echeveria',
        bg: './img/img-cart/item2-1.webp',
        oldPri: '',
        newPri: '$30.00',
    },
    {
        title:'',
        name:'Blue Myrtle Cactus',
        bg: './img/img-cart/item3-1.webp' ,
        oldPri: '',
        newPri: '$20.00',
    },
    {
        title:'',
        name:'Ladyfinger Cactus',
        bg: './img/img-cart/item4-1.webp' ,
        oldPri: '',
        newPri: '$20.00',
    },
    {
        title:'',
        name:'String of Hearts',
        bg: './img/img-cart/item5-1.webp' ,
        oldPri: '$15.00',
        newPri: '$10.00',
    },
    {
        title:'New Arrival',
        name:'Aloe Vera',
        bg: './img/img-cart/item6.webp' ,
        oldPri: '',
        newPri: '$23.00',
    },
    {
        title:'',
        name:'Crassula Ovata',
        bg: './img/img-cart/item7.webp' ,
        oldPri: '',
        newPri: '$20.00',
    },
    {
        title:'New Arrival',
        name:'Mistletoe Cactus',
        bg: './img/img-cart/item8.webp' ,
        oldPri: '',
        newPri: '$20.00',
    },
    {
        title:'',
        name:'Dolphin Succulents',
        bg: './img/img-cart/item9.webp' ,
        oldPri: '',
        newPri: '$20.00',
    },
];

const allItem = document.querySelector('#all-item');

let allItemHtml = '';

listCart.forEach(function (el) {
    allItemHtml += `<div class="item-cont">
    <span class="best-seller">${el.title}</span>
    <div class="item-image" style="background-image: url('${el.bg}');">
    <div class="quick-view">Quick View</div>
    </div>
    <p>${el.name}</p>
    <div class="price">
        <div class="old-pri"><del>${el.oldPri}</del></div>
        <div class="new-pri">${el.newPri}</div>
    </div>
    <button class="add">Add to Cart</button>
    </div>`;
    
});

allItem.innerHTML = allItemHtml;