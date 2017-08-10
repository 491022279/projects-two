<?php
/**
 * Created by PhpStorm.
 * User: MACHENIKE
 * Date: 2017/7/4
 * Time: 8:53
 */
namespace Core;
class Core{
    public $assigns = Array();
    public static function run(){
        if(!isset($_SERVER['PATH_INFO'])||$_SERVER['PATH_INFO']=='/'||$_SERVER['PATH_INFO']==''){
            $class_name="\\app\\home";
            $fn='index';
        }else{
            $path_info=explode('/',substr($_SERVER['PATH_INFO'],1));
            $class_name="\\app\\".$path_info[0];
            $fn=isset($path_info[1])?$path_info[1]:'index';
        }
        if(file_exists(substr(str_replace("\\",'/',$class_name).'.php',1))){
            $o=new $class_name;
            if(method_exists($class_name,$fn)){
                $o->$fn();
            }else{
                include 'app/views/404.html';
            }
        }else{
            include 'app/views/404.html';
        }

    }
    public static function autoload($path){
        include str_replace("\\",'/',$path).'.php';
    }
    function assign($k, $v)
    {
        $this->assigns[$k] = $v;
    }

    function display($file)
    {
        if (count($this->assigns)) {
            extract($this->assigns);
        }
        include VIEW_PATH . $file . '.html';
    }

    function redirect($url)
    {
        header("Location:{$url}");
    }

    function json($data)
    {
        header('Content-Type:text/json');
        echo json_encode($data);
    }

}