<?php
/**
 * Created by PhpStorm.
 * User: MACHENIKE
 * Date: 2017/7/4
 * Time: 9:05
 */
        include "Core/vendor/autoload.php";
        $whoops = new \Whoops\Run;
        $options = new \Whoops\Handler\PrettyPageHandler();
        $whoops->pushHandler($options);
        $whoops->register();
       ini_set('display_errors', 'On');