<?php
/**
 * Created by PhpStorm.
 * User: 22967
 * Date: 2017/7/7
 * Time: 18:07
 */
namespace app;
use \Core\Db;
class fruit_intro{
    function __construct()
    {
//        check_login();
    }

    function index()
    {
        $title = '商品内容';
        include 'app/views/fruit_intro.html';
    }

    function select_store()
    {
        $db = new Db();
        $stmt = $db->pdo->query('select * from fruit_intro order by id desc');
        $data = $stmt->fetchAll();
        echo json_encode($data);
    }

    function add_store()
    {
        $db = new Db();
        $stmt = $db->pdo->prepare('insert into fruit_intro (word1,word2,word3,word4,word5,word6,word7,word8,word9,word10) values(?,?,?,?,?,?,?,?,?,?)');
        $stmt->bindValue(1, $_REQUEST['word1']);
        $stmt->bindValue(2, $_REQUEST['word2']);
        $stmt->bindValue(3, $_REQUEST['word3']);
        $stmt->bindValue(4, $_REQUEST['word4']);
        $stmt->bindValue(5, $_REQUEST['word5']);
        $stmt->bindValue(6, $_REQUEST['word6']);
        $stmt->bindValue(7, $_REQUEST['word7']);
        $stmt->bindValue(8, $_REQUEST['word8']);
        $stmt->bindValue(9, $_REQUEST['word9']);
        $stmt->bindValue(10, $_REQUEST['word10']);
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
        $stmt = $db->pdo->prepare('delete from fruit_intro where id = ?');
        $stmt->bindValue(1, $id);
        $stmt->execute();
        if ($stmt->rowCount()) {
            echo 123;
        } else {
            echo 'asd';
        }
        echo $stmt->rowCount();   //受影响的行数
        header('Location:/SGC/index.php/fruit_intro/select_store');
    }

    function updata()
    {
        $db = new Db();
        $id = $_REQUEST['id'];
        $key = $_REQUEST['key'];
        $value = $_REQUEST['value'];
        $stmt = $db->pdo->prepare("update fruit_intro set {$key} = ? where id = ?");
        $stmt->bindValue(1, $value);
        $stmt->bindValue(2, $id);
        $stmt->execute();
        echo $stmt->rowCount();
    }
}