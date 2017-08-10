<?php
/**
 * Created by PhpStorm.
 * User: 22967
 * Date: 2017/7/7
 * Time: 18:07
 */
namespace app;
use \Core\Db;
class fruit_pic{
    function __construct()
    {
//        check_login();
    }

    function index()
    {
        $title = '商品图片';
        include 'app/views/fruit_pic.html';
    }

    function select_store()
    {
        $db = new Db();
        $stmt = $db->pdo->query('select * from fruit_pic order by id desc');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function add_store()
    {
        $src1=$_FILES['pic1']['tmp_name'];
        $ext1=explode('.',$_FILES['pic1']['name'])[1];
        $file_name1=md5(time()).'1.'.$ext1;
        $dist1='Public/upload/'.$file_name1;
        $name1='/SGC/Public/upload/'.$file_name1;
        move_uploaded_file($src1,$dist1);

        $src2=$_FILES['pic2']['tmp_name'];
        $ext2=explode('.',$_FILES['pic2']['name'])[1];
        $file_name2=md5(time()).'2.'.$ext2;
        $dist2='Public/upload/'.$file_name2;
        $name2='/SGC/Public/upload/'.$file_name2;
        move_uploaded_file($src2,$dist2);

       $src3=$_FILES['pic3']['tmp_name'];
        $ext3=explode('.',$_FILES['pic3']['name'])[1];
        $file_name3=md5(time()).'3.'.$ext3;
        $dist3='Public/upload/'.$file_name3;
        $name3='/SGC/Public/upload/'.$file_name3;
        move_uploaded_file($src3,$dist3);

        $src4=$_FILES['pic4']['tmp_name'];
        $ext4=explode('.',$_FILES['pic4']['name'])[1];
        $file_name4=md5(time()).'4.'.$ext4;
        $dist4='Public/upload/'.$file_name4;
        $name4='/SGC/Public/upload/'.$file_name4;
        move_uploaded_file($src4,$dist4);

        $src5=$_FILES['pic5']['tmp_name'];
        $ext5=explode('.',$_FILES['pic5']['name'])[1];
        $file_name5=md5(time()).'5.'.$ext5;
        $dist5='Public/upload/'.$file_name5;
        $name5='/SGC/Public/upload/'.$file_name5;
        move_uploaded_file($src5,$dist5);


        $db = new Db();
        $stmt = $db->pdo->prepare('insert into fruit_pic (pic1,pic2,pic3,pic4,pic5) values(?,?,?,?,?)');
        $stmt = $db->pdo->prepare('insert into fruit_pic (pic1,pic2) values(?,?)');
        $stmt->bindValue(1, $name1);
        $stmt->bindValue(2, $name2);
        $stmt->bindValue(3, $name3);
        $stmt->bindValue(4, $name4);
        $stmt->bindValue(5, $name5);
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
        $stmt = $db->pdo->prepare('delete from fruit_pic where id = ?');
        $stmt->bindValue(1, $id);
        $stmt->execute();
        if ($stmt->rowCount()) {
            echo 123;
        } else {
            echo 'asd';
        }
        echo $stmt->rowCount();   //受影响的行数
        header('Location:/SGC/index.php/fruit_pic/select_store');
    }

    function updata()
    {
        $db = new Db();
        $id = $_REQUEST['id'];
        $key = $_REQUEST['key'];
        $value = $_REQUEST['value'];
        $stmt = $db->pdo->prepare("update fruit_pic set {$key} = ? where id = ?");
        $stmt->bindValue(1, $value);
        $stmt->bindValue(2, $id);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}