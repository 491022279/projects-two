<?php
namespace app;

use \Core\Db;
use \Core\Core;

class store extends Core
{
    function index()
    {
        $id=$this->assigns['id']=1;
        $this->display('store');
    }
    function allstore(){
        $this->assign('data',M('allstore')->selectAll());
        $this->display('allstore');
    }
    function nutrition()
    {
        $this->display('nutrition');
    }
}
