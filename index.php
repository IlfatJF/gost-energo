<!DOCTYPE html>
<?php
include ("incl/router.php");

?>
<html>
<head>
    <title>Page Title</title>
    <link rel="stylesheet" type="text/css" href="css/common.css" media="screen, print, projection" />
    <script type="text/javascript" src="js/cufon-yui.js"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/Roboto_300-Roboto_700.font.js"></script>
    <script type="text/javascript">
    Cufon.replace("#main_navigation");
    Cufon.replace("h3");
    Cufon.replace("h1");
    Cufon.replace("h2");
    Cufon.replace("p");
    
    </script>
    
    <?php
    if(isset($ad_css)){
        echo $ad_css;
    }
    if(isset($ad_script)){
        echo $ad_script;
    }
    ?>
    
    
</head>

<body>
     
<div id="page_wrap">
    <div id="page">
        
        <!-- Main_Navigation -->
        <nav id="main_navigation">
            <a id="logo" href="/"></a>
            <ul class="top_level">
                <li class="tm_item">
                    <a href="shop">Интернет магазин</a>
                <ul class="sm_level1">
                    <li class="sl_item"><a href="pku">ПКУ</a></li>
                    <li class="sl_item"><a href="accessories">Комплектующие</a></li>
                    <li class="sl_item"><a href="calc">@nline Калькулятор</a></li>
                </ul>
                </li>
                <li class="tm_item"><a href="sostav">Состав изделия</a></li>
                <li class="tm_item"><a href="documents">Документация</a></li>
                <li class="tm_item"><a href="project">Проект монтаж</a></li>
                <li class="tm_item"><a href="photo">Фотогалерея</a></li>
                <li class="tm_item"><a href="calc">@nline Калькулятор</a></li>
            </ul>
        </nav>
        
        <!--End Of Main_Navigation -->
        <div id="content">
            
            <?php
            require_once ("pages/$page.php");
            ?>
            
        </div>
            
    </div>
</div>

<footer>
    <div>
    <h3><a href="contacts">О Компании</a></h3><h3><a href="contacts">Контакты</a></h3><h3><a href="feedback">Обратная связь</a></h3>
    </div>
</footer>


</body>
</html>
