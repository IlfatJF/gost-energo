/*mainpage animation*/
var sc = 0;

window.setInterval(Rotate_page,10000);

function Rotate_page(page){
    if(sc==0){sc=1;}
    btn_name = "n"+sc;
    btn_bg = "url('../img/"+sc+"_passiv.png')";
    $('btn_name').css("background", btn_bg);
    
    sc = sc +1;
    
    if(page !== undefined) {
        sc = page;
        page = undefined;
    }
    if(sc >3){
        sc = 1;
    }
    
    slide_str = "url('../img/slide"+sc+".jpg')";
    $('slide').css('background', slide_str);
    
    btn_name = "n"+sc;
    btn_bg = "url('../img/"+sc+"_aktiv.png')";
    $('btn_name').css("background", btn_bg);
}


function Rotate_page1(page){
    slide = document.getElementById('slide');
    if(sc==0){sc=1;}
    btn_name = "n"+sc;
    button = document.getElementById(btn_name);
    btn_bg = "url('../img/"+sc+"_passiv.png')";
    button.style.backgroundImage = btn_bg;
    sc = sc +1;
    if(page !== undefined) {
        sc = page;
        page = undefined;
    }
    if(sc >3){
        sc = 1;
    }
    
    slide_str = "url('../img/slide"+sc+".jpg')";
    
    
    slide.style.backgroundImage = slide_str;
    btn_name = "n"+sc;
    button = document.getElementById(btn_name);
    btn_bg = "url('../img/"+sc+"_aktiv.png')";
    button.style.backgroundImage = btn_bg;
    slogan = document.getElementById('slogan');
    switch(sc){
        case "1":
            slogan.innerHTML = "<h1>ПКУ от производителя<br>по низким ценам</h1>";
            break;
        case "2":
            slogan.innerHTML = "<h1>Высокое качество.</h1>";
            break;
        case "3":
            slogan.innerHTML = "<h1>Индивидуальный подход<br>к каждому клиенту</h1>";
            break;
    }
}