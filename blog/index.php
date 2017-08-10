<?php
define('CSS_PATH','/blog/assets/css/');
define('JS_PATH','/blog/assets/js/');
define('IMG_PATH','/blog/assets/images/');

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
