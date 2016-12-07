function calc(){
    main_el = document.getElementById('body');
    calc_body = document.createElement('div');
    
    main_el.appendChild(calc_body);
}

function show_select_tt_list(){
    tt_select = document.getElementById('tt_select_list');
    tt_select.style.left = "-40px";
    
}

function hide_select_tt_list(){
    tt_select = document.getElementById('tt_select_list');
    tt_select.style.left = "-3000px";
    
}

function show_select_tn_list(){
    tn_select = document.getElementById('tn_select_list');
    tn_select.style.left = "110px";
    
}

function hide_select_tn_list(){
    tn_select = document.getElementById('tn_select_list');
    tn_select.style.left = "-3000px";
    
}