<?php
/**
 * Created by PhpStorm.
 * User: 22967
 * Date: 2017/7/7
 * Time: 18:07
 */
namespace app;
use \Core\Db;
class fruit_store{
    function __construct()
    {
//        check_login();
    }

    function index()
    {
        $title = '商品店铺';
        include 'app/views/fruit_store.html';
    }

    function select_store()
    {
        $db = new Db();
        $stmt = $db->pdo->query('select * from fruit_store order by id desc');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function add_store()
    {
        $src1=$_FILES['spic']['tmp_name'];
        $ext1=explode('.',$_FILES['spic']['name'])[1];
        $file_name1=md5(time()).'1.'.$ext1;
        $dist1='public/upload/'.$file_name1;
        $name1='/SGC/public/upload/'.$file_name1;
        move_uploaded_file($src1,$dist1);
        $src2=$_FILES['jewel']['tmp_name'];
        $ext2=explode('.',$_FILES['jewel']['name'])[1];
        $file_name2=md5(time()).'2.'.$ext2;
        $dist2='public/upload/'.$file_name2;
        $name2='/SGC/public/upload/'.$file_name2;
        move_uploaded_file($src2,$dist2);
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into fruit_store (ying,name,ename,spic,jewel,jewelnum,omit) values(?,?,?,?,?,?,?)');
        $stmt->bindValue(1, $_REQUEST['ying']);
        $stmt->bindValue(2, $_REQUEST['name']);
        $stmt->bindValue(3, $_REQUEST['ename']);
        $stmt->bindValue(4, $name1);
        $stmt->bindValue(5, $name2);
        $stmt->bindValue(6, $_REQUEST['jewelnum']);
        $stmt->bindValue(7, $_REQUEST['omit']);
        $stmt->execute();
        $stmt->fetchAll();
        $id = $db->pdo->lastInsertId();
        echo json_encode($id);
    }

    function delete_store()
    {
        sleep(1);
        $db = new Db();
        $id = $_REQUEST['id'];
        $stmt = $db->pdo->prepare('delete from fruit_store where id = ?');
        $stmt->bindValue(1, $id);
        $stmt->execute();
        if ($stmt->rowCount()) {
            echo 123;
        } else {
            echo 'asd';
        }
        echo $stmt->rowCount();   //受影响的行数
        header('Location:/SGC/index.php/fruit_store/select_store');
    }

    function updata()
    {
        $db = new Db();
        $id = $_REQUEST['id'];
        $key = $_REQUEST['key'];
        $value = $_REQUEST['value'];
        $stmt = $db->pdo->prepare("update fruit_store set {$key} = ? where id = ?");
        $stmt->bindValue(1, $value);
        $stmt->bindValue(2, $id);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}