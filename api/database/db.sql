drop database if exists sensor;
create database sensor;
use sensor;

create table if not exists dados(
	id int not null auto_increment primary key,
    sensor_name text not null,
    date datetime not null default now()
);