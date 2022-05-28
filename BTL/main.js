
// item-colection

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

// phone-cont swap

let i=1;
changeText = function(){
    let texts =['Call Us Now! 123-456-7890','We Deliver to Your Doorste'];
    document.querySelector('.text-1').innerHTML = texts[i];
    i++;
    if(i==2){
        i=0;
    }
}

setInterval(changeText,3000)

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
}


