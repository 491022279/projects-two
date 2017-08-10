<?php
namespace core;
class core{
//    数组中的值会传递到页面
    public $assigns=Array();
    static function run(){
        if(!isset($_SERVER['PATH_INFO']) || $_SERVER['PATH_INFO'] == '/' || $_SERVER['PATH_INFO'] == ''){
            $class_name = '\\app\\home';
            $fn = 'index';
        }else{
            $path_info=explode('/',substr($_SERVER['PATH_INFO'],1));
            $class_name='\\app\\'.$path_info[0];
            $fn=(isset($path_info[1])) ? $path_info[1]: 'index';
        }
        $o=new $class_name();
        $o->$fn();
    }
    static function autoload($path){
        include str_replace("\\","/",$path).'.php';
    }
    function assign($k,$v)
    {
        $this->assigns[$k]=$v;
    }
    function display($file)
    {
        if(count($this->assigns)){
            extract($this->assigns);
        }
        include VIEW_PATH.$file.'.html';
    }
    function redirect($url){
        header("Location:{$url}");
    }
    function json($data){
        header("content-Type:text/json");
        echo json_encode($data);
    }
}