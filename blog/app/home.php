<?php
namespace app;

use \core\Db;
use \core\core;
class home extends core
{
    function index()
    {
        $private=1024;
        $this->assign('a',$private);
        $this->assign('article',M('article')->selectAll());
        $this->assign('article_info',M('article_info')->where($_GET)->select());
        $this->display('index');
    }
    function single()
    {
        $private=02;
        $this->assign('b',$private);
        $this->assign('article_info',M('article_info')->where($_GET)->select());
        $this->assign('article',M('article')->where($_GET)->select());
        $this->display('single');
    }
    function add_good()
    {
        $o = M('article_info')->where($_GET)->select();
        $n = $o['good'] + 1;
        M('article_info')->query("update article_info set good = {$n} where article_id = {$_GET['article_id']}");
        $this->json($n);
    }

    function min_good()
    {
        $o = M('article_info')->where($_GET)->select();
        $n = $o['good'] - 1;
        M('article_info')->query("update article_info set good = {$n} where article_id = {$_GET['article_id']}");
        $this->json($n);
    }

    function add_bad()
    {
        $o = M('article_info')->where($_GET)->select();
        $n = $o['bad'] + 1;
        M('article_info')->query("update article_info set bad = {$n} where article_id = {$_GET['article_id']}");
        $this->json($n);
    }
    function min_bad()
    {
        $o = M('article_info')->where($_GET)->select();
        $n = $o['bad'] - 1;
        M('article_info')->query("update article_info set bad = {$n} where article_id = {$_GET['article_id']}");
        $this->json($n);
    }
}