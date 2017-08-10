<?php
/**
 * Created by PhpStorm.
 * User: MACHENIKE
 * Date: 2017/7/7
 * Time: 10:38
 */
namespace app;
use Core\Core;
use Core\Db;
class main extends Core
{
    function __construct()
    {
        checklogin();
    }

    function index()
    {
        $id=$this->assigns['id']=0;
        $this->assign('data',M('product_selling')->selectAll());
        $this->assign('data3',M('allstore2')->selectAll());
        $this->assign('data1',M('hot_products')->selectAll());
        $this->assign('data2',M('tejiatuijian')->selectAll());
        $this->display('index');
    }
}