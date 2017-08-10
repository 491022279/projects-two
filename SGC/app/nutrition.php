<?php
namespace app;

use \Core\Db;
use \Core\Core;

class nutrition extends Core
{
    function index()
    {
        $this->display('nutrition');
    }
}