<?php
$file = fopen("update.txt","w");
echo fwrite($file,$_POST['Matrix1'].":".$_POST['Matrix2']);
echo "true";
fclose($file);
?>