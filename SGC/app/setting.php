<?php
namespace app;
use \Core\db;
use \Core\Core;
class setting extends Core{
    function index(){
        $this->display('setting');;
    }
}