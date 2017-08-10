<?php
namespace app;
use \Core\db;
use \Core\Core;
class network extends Core{
    function index(){
        $this->display('network');;
    }
}