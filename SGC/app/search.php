<?php
namespace app;

use \Core\Db;
use \Core\Core;

class search extends Core
{
    function index()
    {
        $this->assign('fruit_store',M('fruit_store')->selectAll());
        $this->assign('hot_search',M('hot_search')->selectAll());
        $this->display('search');
    }
    function searchend()
    {
        $this->assign('fruit_store',M('fruit_store')->select());
        $this->assign('fruit_pic',M('fruit_pic')->select());
        $this->assign('fruit_intro',M('fruit_intro')->select());
        $this->assign('fruit_collection',M('fruit_collection')->select());
        $this->assign('hot_search',M()->query('SELECT * FROM hot_search limit 3 '));
        $this->display('searchend');
    }
    function searchfail()
    {
        $this->assign('fruit_store',M('fruit_store')->selectAll());
        $this->assign('hot_search',M('hot_search')->selectAll());
        $this->display('searchfail');
    }
    function searchwifi()
    {
        $this->display('searchwifi');
    }

    function details(){
        $this->assign('fruit_comment',M('fruit_comment')->selectAll());
        $this->assign('fruit_details',M('fruit_details')->select());
        $this->display("details");
    }
}