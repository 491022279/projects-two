<?php
/**
 * Created by PhpStorm.
 * User: 22967
 * Date: 2017/7/7
 * Time: 18:07
 */
namespace app;
use \Core\Db;
class hot_search{
    function __construct()
    {
//        check_login();
    }

    function index()
    {
        $title = '热门商品';
        include 'app/views/hot_search.html';
    }

    function select_store()
    {
        $db = new Db();
        $stmt = $db->pdo->query('select * from hot_search order by id desc');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function add_store()
    {
        $src1=$_FILES['img']['tmp_name'];
        $ext1=explode('.',$_FILES['img']['name'])[1];
        $file_name1=md5(time()).'1.'.$ext1;
        $dist1='Public/upload/'.$file_name1;
        $name1='/SGC/Public/upload/'.$file_name1;
        move_uploaded_file($src1,$dist1);

        $db = new Db();
        $stmt = $db->pdo->prepare('insert into hot_search (keyword,etext,eword,img) values(?,?,?,?)');
        $stmt->bindValue(1, $_REQUEST['keyword']);
        $stmt->bindValue(2, $_REQUEST['etext']);
        $stmt->bindValue(3, $_REQUEST['eword']);
        $stmt->bindValue(4, $name1);
        $stmt->execute();
//        $stmt->fetchAll();
        $id = $db->pdo->lastInsertId();
        echo $id;
    }

    function delete_store()
    {
        sleep(1);
        $db = new Db();
        $id = $_REQUEST['id'];
        $stmt = $db->pdo->prepare('delete from hot_search where id = ?');
        $stmt->bindValue(1, $id);
        $stmt->execute();
        if ($stmt->rowCount()) {
            echo 123;
        } else {
            echo 'asd';
        }
        echo $stmt->rowCount();   //受影响的行数
        header('Location:/SGC/index.php/hot_search/select_store');
    }

    function updata()
    {
        $db = new Db();
        $id = $_REQUEST['id'];
        $key = $_REQUEST['key'];
        $value = $_REQUEST['value'];
        $stmt = $db->pdo->prepare("update hot_search set {$key} = ? where id = ?");
        $stmt->bindValue(1, $value);
        $stmt->bindValue(2, $id);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}