<?php
/*router*/
$page = $_GET['page'];

switch ($page) {
    case "calc":
        $page_title = "Онлайн калькулятор";
        $ad_css = '<link rel="stylesheet" type="text/css" href="css/calc.css" media="screen, print, projection" />';
        $ad_script = '<script src="js/calc.js"></script>';
        break;
    case "sostav":
        $page_title = "Состав изделия";
        $ad_css = '<link rel="stylesheet" type="text/css" href="css/sostav.css" media="screen, print, projection" />';
        #$ad_script = '<script src="js/calc.js"></script>';
        break;
    case "documents":
        $page_title = "Документация";
        $ad_css = '<link rel="stylesheet" type="text/css" href="css/documents.css" media="screen, print, projection" />';
        #$ad_script = '<script src="js/calc.js"></script>';
        break;
    default:
        $page_title = "Пункты коммерческого учета - Гост-Энерго";
        $ad_css = '<link rel="stylesheet" type="text/css" href="css/main_page.css" media="screen, print, projection" />';
        $ad_script = '<script src="js/main_page.js"></script>';
        $page = "main";
        break;
}
?>