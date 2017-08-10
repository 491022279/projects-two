<?php
namespace app;
use  \Core\Db;
use \Core\Core;
class login extends Core
{
    function index(){
        $this->display('login');;
    }

    function register(){

        $this->display('register');
    }
    function login1(){
        $this->display('login1');
    }
    function setting(){
        $this->display('setting');
    }
    function add(){
        $stmt = M()->pdo->prepare("insert into login (username,password) values(?,?)");
        $stmt->bindValue(1,$_REQUEST['username']);
        $stmt->bindValue(2,$_REQUEST['password']);
        $stmt->execute();
        echo 'ok';
    }
    function select(){
        $username = $_REQUEST['username'];
        $db=new Db();
        $stmt=$db->pdo->prepare("SELECT * FROM login WHERE username=?");
        $stmt->bindValue(1,$username);
        $stmt->execute();
        $data=$stmt->fetch();
        if($data){
            echo 'ok';
        }else{
            echo 'error';
        }
    }

    function select2(){
        $password = $_REQUEST['password'];
        $db = new Db();
        $stmt = $db->pdo->prepare("SELECT * FROM login WHERE password = ?");
        $stmt->bindValue(1,$password);
        $stmt->execute();
        $data = $stmt->fetch();
        if($data){
            echo 'ok';
        }else{
            echo 'error';
        }
    }

    function check(){
        $username=$_REQUEST['username'];
        $password=$_REQUEST['password'];
        $db=new Db();
        $stmt=$db->pdo->prepare("SELECT * FROM login WHERE username=?");
        $stmt->bindValue(1,$username);
        $stmt->execute();
        $data=$stmt->fetch();
        if($data && $data['password'] == $password){
            setcookie('login','ok',time()+60*9999,'/');
            echo 'ok';
        }else{
            echo 'error';
        }
    }
}