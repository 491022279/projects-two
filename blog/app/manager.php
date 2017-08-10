<?php
namespace app;
use \core\Db;
use \core\core;
class manager extends core
{
    function index()
    {
        $this->assign('a', M('article')->where($_GET)->select());
        $this->display('manager');
    }

    function update()
    {
        M('article')->pdo->query("update article set content = '{$_REQUEST['content']}'  WHERE id = {$_REQUEST['id']}");
    }

    function upload()
    {
        $src = $_FILES['file']['tmp_name'];
        $filename = md5(time()) . '.' . explode('.', $_FILES['file']['name'])[1];
        $dist = 'assets/images/' . $filename;
        move_uploaded_file($src, $dist);
        $this->json(Array('url' => '/blog/' . $dist));
    }
}