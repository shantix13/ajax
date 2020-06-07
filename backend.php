<?php 
$a = $_POST['a'];

if($a == 0){
    echo 'Равна нулю!';
} else if ($a == 1){
    echo 'Равна единице';
} else {
    echo 'Значение не введено!';
}
?>