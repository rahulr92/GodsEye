<?php
session_start();
	if($_SESSION['Matrix1']){
		echo $_SESSION['Matrix1'];
		echo '</br>';
		echo $_SESSION['Matrix2'];
		die();
	}
?>