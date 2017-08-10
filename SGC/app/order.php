<?php
/**
 * Created by PhpStorm.
 * User: MACHENIKE
 * Date: 2017/7/5
 * Time: 11:07
 */
namespace app;
use Core\Core;
use Core\Db;
class order extends Core {
    public function index(){
        $id=$this->assigns['id']=2;
        $this->display('order');
    }
    public function orderinfo (){
        $this->display('orderinfo');
    }
    public function paymethod(){
        $this->display('paymethod');
    }
    public function selectcard(){
        $this->display('selectcard');
    }
    public function passwordpay(){
        $this->display('passwordpay');
    }
    public function wallet(){
        $this->display('wallet');
    }
}