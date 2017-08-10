<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2017/7/5
 * Time: 9:48
 */
namespace app;
use Core\Core;
class home extends Core {
    function index(){
        $this->display('flash');
    }
}