const listItem = document.getElementsByClassName('item');

for (let i = 0; i < listItem.length; i++) {
    let val = listItem[i];
    val.addEventListener('click', function (event) {
        const el = event.target.parentNode;
        for (let i = 0; i < listItem.length; i++) {
            let val = listItem[i];
            val.classList.remove('active');
        }
        el.classList.add('active');
    });
}
