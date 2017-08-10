<?php
/**
 * Created by PhpStorm.
 * User: 22967
 * Date: 2017/7/7
 * Time: 18:07
 */
namespace app;
use \Core\Db;
class fruit_collection{
    function __construct()
    {
//        check_login();
    }

    function index()
    {
        $title = '商品收藏';
        include 'app/views/fruit_collection.html';
    }

    function select_store()
    {
        $db = new Db();
        $stmt = $db->pdo->query('select * from fruit_collection order by id desc');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function add_store()
    {
        $src1=$_FILES['browse']['tmp_name'];
        $ext1=explode('.',$_FILES['browse']['name'])[1];
        $file_name1=md5(time()).'1.'.$ext1;
        $dist1='Public/upload/'.$file_name1;
        $name1='/SGC/Public/upload/'.$file_name1;
        move_uploaded_file($src1,$dist1);
        $src2=$_FILES['thumb']['tmp_name'];
        $ext2=explode('.',$_FILES['thumb']['name'])[1];
        $file_name2=md5(time()).'2.'.$ext2;
        $dist2='Public/upload/'.$file_name2;
        $name2='/SGC/Public/upload/'.$file_name2;
        move_uploaded_file($src2,$dist2);
        $src3=$_FILES['cart']['tmp_name'];
        $ext3=explode('.',$_FILES['cart']['name'])[1];
        $file_name3=md5(time()).'3.'.$ext3;
        $dist3='Public/upload/'.$file_name3;
        $name3='/SGC/Public/upload/'.$file_name3;
        move_uploaded_file($src3,$dist3);
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into fruit_collection (browse,browsenum,thumb,thumbnum,cart,cartnum) values(?,?,?,?,?,?)');
        $stmt->bindValue(1, $name1);
        $stmt->bindValue(2, $_REQUEST['browsenum']);
        $stmt->bindValue(3, $name2);
        $stmt->bindValue(4, $_REQUEST['thumbnum']);
        $stmt->bindValue(5, $name3);
        $stmt->bindValue(6, $_REQUEST['cartnum']);
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
        $stmt = $db->pdo->prepare('delete from fruit_collection where id = ?');
        $stmt->bindValue(1, $id);
        $stmt->execute();
        if ($stmt->rowCount()) {
            echo 123;
        } else {
            echo 'asd';
        }
        echo $stmt->rowCount();   //受影响的行数
        header('Location:/SGC/index.php/fruit_collection/select_store');
    }

    function updata()
    {
        $db = new Db();
        $id = $_REQUEST['id'];
        $key = $_REQUEST['key'];
        $value = $_REQUEST['value'];
        $stmt = $db->pdo->prepare("update fruit_collection set {$key} = ? where id = ?");
        $stmt->bindValue(1, $value);
        $stmt->bindValue(2, $id);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}