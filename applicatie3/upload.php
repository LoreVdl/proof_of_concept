<?php

$number = gettimeofday()['usec'];
$numberLength = strlen((string)$number);
$milliseconds;

if ($numberLength == 6) {
  $milliseconds = round($number / 1000);
}

if ($numberLength == 5) {
  $milliseconds = round($number / 100);
}

$filename =  'motion_' . date("Y-m-d") . "_" . date("H.i.s") . "_" . $milliseconds . '.jpg';
$filepath = 'upload/';

move_uploaded_file($_FILES['webcam']['tmp_name'], $filepath.$filename);

echo $filepath.$filename;
?>
