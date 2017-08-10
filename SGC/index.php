<?php
define('CSS_PATH','/SGC/Public/css/');
define('JS_PATH','/SGC/Public/js/');
define('IMG_PATH','/SGC/Public/img/');

define('VIEW_PATH','app/views/');

define('Debug',false);
if(Debug){
    include 'Core/Debug.php';
}

include "Core/Debug.php";
include 'Core/Core.php';
include 'Core/function.php';

spl_autoload_register('\Core\Core::autoload');

\Core\Core::run();
