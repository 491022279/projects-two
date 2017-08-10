<?php
/**
 * Created by PhpStorm.
 * User: MACHENIKE
 * Date: 2017/7/4
 * Time: 10:35
 */
namespace Core;

class Db{
    public $pdo;
    public $table;
    public $condition;
    public function __construct($table='')
    {
        $this->pdo=new \PDO('mysql:host=localhost;dbname=sgc;port=3306;charset=utf8','root','');
        $this->table=$table;
    }
    public function query($sql){
        $stmt=$this->pdo->query($sql);
       return $stmt->fetchAll();

    }
    public function selectAll()
    {
        if ($this->condition) {
            foreach ($this->condition as $k => $v) {
                $sql = "select * from {$this->table} WHERE {$k} = '{$v}'";
            }
        } else {
            $sql = "select * from {$this->table}";
        }
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }

    public function where($where)
    {
        $this->condition = $where;
        return $this;
    }

    public function select()
    {
        if ($this->condition) {
            foreach ($this->condition as $k => $v) {
                $sql = "select * from {$this->table} WHERE {$k} = {$v}";
            }
        } else {
            $sql = "select * from {$this->table}";
        }
        $stmt = $this->pdo->query($sql);
        return $stmt->fetch();
    }

}