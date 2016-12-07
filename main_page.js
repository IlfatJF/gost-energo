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


