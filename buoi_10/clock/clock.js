function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();

        var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        var ids = ["dayname","hours","minutes","seconds"];
        var values = [week[dname],hou,min,sec];
        for(var i = 0; i < ids.length ; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}