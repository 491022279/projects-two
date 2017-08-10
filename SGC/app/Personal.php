<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2017/7/5
 * Time: 9:48
 */
namespace app;
class Personal{
    function __construct()
    {
        checklogin();
    }

    function index(){
        $id=$this->assigns['id']=3;
        include VIEW_PATH.'Personal.html';
    }
}