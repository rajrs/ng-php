<?php
$data = json_decode(file_get_contents('php://input'));
$empno= mysql_real_escape_string($data->empno); 
$efname= mysql_real_escape_string($data->efname); 
$elname= mysql_real_escape_string($data->elname); 
$edept= mysql_real_escape_string($data->edept); 
 mysql_connect('localhost','root','');
 mysql_select_db('company');
 mysql_query("INSERT INTO employee( emp_no, first_name, Last_name, dept_name) VALUES ('".$empno."','".$efname."','".$elname."','".$edept."')");
?>