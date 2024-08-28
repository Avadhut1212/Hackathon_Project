create database logapp;


use lagapp;

select blogs.title, blogs.contents,user.full_name,categories.title 
from blogs,user,categories 
where user.id = blogs.user_id and blogs.category_id=categories.id;

create table user(
    id integer primary key auto_increment,
    full_name varchar(50),
    email varchar(50),
    password varchar(50),
    phone_no varchar(15),
    isDeleted integer(1) default 0, -- 0: not deleted, 1: deleted
    createdTimestamp DATETIME default CURRENT_TIMESTAMP
);


create table blogs
(id integer primary key auto_increment,
 title varchar(20),
 contents varchar (200),
 createdTimestamp DATETIME default CURRENT_TIMESTAMP,
 user_id int  ,
 category_id int 
);


create table categories (
 id integer primary key auto_increment,
 title varchar (20),
 description varchar(50)   
);