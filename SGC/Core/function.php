<?php
/**
 * Created by PhpStorm.
 * User: MACHENIKE
 * Date: 2017/7/4
 * Time: 10:34
 */
use \Core\Db;

function M($table='')
{
    return new Db($table);
}
function checklogin(){
    if(!isset($_COOKIE['login'])){
        header('Location:/SGC/index.php/login');
    }
}