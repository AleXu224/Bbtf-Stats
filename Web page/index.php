<?php
$name = $_GET["name"];
$craftable = $_GET["craftable"];
$quality = $_GET["quality"];
$australium = $_GET["australium"];
$killstreak = $_GET["killstreak"];

$item_list = json_decode(file_get_contents('item_list.json'));

$count = count($item_list);

$item_list[$count]["name"] = $name;
$item_list[$count]["quality"] = $quality;
$item_list[$count]["craftable"] = $craftable;
$item_list[$count]["australium"] = $australium;
$item_list[$count]["killstreak"] = $killstreak;

file_put_contents("item_list.json",json_encode($item_list));

echo "<script>window.close();</script>";
?>
