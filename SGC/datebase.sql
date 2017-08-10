DROP TABLE  IF EXISTS product_selling;
CREATE TABLE product_selling(
  id INT(12) PRIMARY KEY  AUTO_INCREMENT,
  pic VARCHAR (255),
  name VARCHAR(255),
  english VARCHAR(255),
  eng VARCHAR (255),
  pink VARCHAR (255),
  blue VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO product_selling(pic,name,english,eng,pink,blue) VALUES
('/SGC/public/img/z_img.png','新鲜草莓','XinXian','CaoMei',2231,1383),
('/SGC/public/img/shiliu1.png','台湾美食石榴','TaiWan','MeiWeiShiLiu',2231,1383),
('/SGC/public/img/333.png','现采摘葡萄','XianCaiZhai','PuTao',2231,1383);


DROP TABLE  IF EXISTS hot_products;
CREATE TABLE hot_products(
  id INT(12) PRIMARY KEY  AUTO_INCREMENT,
  pic1 VARCHAR (255),
  name1 VARCHAR (255),
  english2 VARCHAR (255),
  titles VARCHAR (255),
  xings VARCHAR (255),
  nums1 VARCHAR (255),
  nums2 VARCHAR (255),
  num VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO hot_products(pic1,name1,english2,titles,xings,nums1,nums2,num) VALUES
('/SGC/public/img/z_orange.png','新鲜橙子','XINXIANCHENGZI','新鲜不等待现采摘','/SGC/public/img/xing.png',34567,67892,4),
('/SGC/public/img/shiliu.png','新鲜石榴','XINXIANCHENGZI','新鲜不等待现采摘','/SGC/public/img/xing.png',34567,67892,4),
('/SGC/public/img/guiyuan.png','新鲜荔枝','XINXIANCHENGZI','新鲜不等待现采摘','/SGC/public/img/xing.png',34567,67892,4);


DROP TABLE  IF EXISTS allstore;
CREATE TABLE allstore(
  id INT(12) PRIMARY KEY  AUTO_INCREMENT,
  price VARCHAR (255),
  pic VARCHAR (255),
  name VARCHAR (255),
  title VARCHAR (255),
  xing  VARCHAR (255),
  num VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO allstore(price,pic,name,title,xing,num) VALUES
('32.00','/SGC/public/img/tu1.png','ShiLiu','石榴','/SGC/public/img/all_xing.png',5),
('22.00','/SGC/public/img/tu2.png','XianCheng','鲜橙','/SGC/public/img/all_xing.png',5),
('32.00','/SGC/public/img/tu3.png','YouZi','柚子','/SGC/public/img/all_xing.png',5),
('30.00','/SGC/public/img/tu4.png','NingMeng','柠檬','/SGC/public/img/all_xing.png',5),
('18.00','/SGC/public/img/tu5.png','YingTao','樱桃','/SGC/public/img/all_xing.png',5),
('16.00','/SGC/public/img/tu6.png','XiGua','西瓜','/SGC/public/img/all_xing.png',5),
('32.00','/SGC/public/img/tu7.png','LiZhi','荔枝','/SGC/public/img/all_xing.png',5),
('32.00','/SGC/public/img/tu8.png','XingGuo','杏果','/SGC/public/img/all_xing.png',5);


DROP TABLE  IF EXISTS allstore2;
CREATE TABLE allstore2(
  id INT(12) PRIMARY KEY  AUTO_INCREMENT,
  price VARCHAR (255),
  pic VARCHAR (255),
  name VARCHAR (255),
  title VARCHAR (255),
  xing  VARCHAR (255),
  num VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO allstore2(price,pic,name,title,xing,num) VALUES
('32.00','/SGC/public/img/shiliushiliu.png','ShiLiu','石榴','/SGC/public/img/all_xing.png',5),
('22.00','/SGC/public/img/juzi.png','XianCheng','鲜橙','/SGC/public/img/all_xing.png',5),
('32.00','/SGC/public/img/youzi.png','YouZi','柚子','/SGC/public/img/all_xing.png',5);


DROP TABLE  IF EXISTS tejiatuijian;
CREATE TABLE tejiatuijian(
  id INT(12) PRIMARY KEY  AUTO_INCREMENT,
  pic VARCHAR (255),
  name VARCHAR (255),
  title VARCHAR (255),
  title2 VARCHAR (255),
  content  VARCHAR (255),
  shoucang VARCHAR (255),
  gouwuche VARCHAR (255),
  like1 VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO tejiatuijian(pic,name,title,title2,content,shoucang,gouwuche,like1) VALUES
('/SGC/Public/img/s_stock-photo-gummi.png','青梅和竹马','YIQIDUAN','LIANSHEN','每一粒石榴籽包着一层粉红的薄 膜，亮晶晶的。',123411,1354,1554),
('/SGC/public/img/lenmon.png','酸酸甜甜就是柠檬','YIQIDUAN','YIQIDUAN','每一粒石榴籽包着一层粉红的薄 膜，亮晶晶的，又白又嫩.',123411,2345,2345),
('/SGC/public/img/lenmon2.png','橙就最好的你','YIQIDUAN','YIQIDUAN','亮晶晶的，又白又嫩，一股甜滋滋 的甘露顺着喉咙流进心田！',123411,2345,2345);

DROP TABLE IF EXISTS introduce_matter;
CREATE TABLE introduce_matter(
    id  INT(12) PRIMARY KEY AUTO_InCREMENT,
    name VARCHAR (255),
    content VARCHAR (255),
    pic VARCHAR (255),
    star VARCHAR (255),
    num VARCHAR (255),
    good VARCHAR (255),
    bad VARCHAR (255)
  )DEFAULT CHARSET=utf8;
  INSERT INTO introduce_matter(name,content,pic,star,num,good,bad) VALUES
  ('JenniferAniston','根据身体状况给予您最合适的','/SGC/index.php/Public/img/visiting_card_img1.png','/SGC/index.php/Public/img/nur_star.png',4,111,111),
  ('MerylStreep','您想好吃又健康找我们就对了','/SGC/index.php/Public/img/visiting_card_img2.png','/SGC/index.php/Public/img/nur_star.png',4,111,111);


