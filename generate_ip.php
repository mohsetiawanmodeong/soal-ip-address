<?php
header('Content-Type: application/json');

$ip = long2ip(rand(0, "4294967295")); // Generate random IP address
$mask = rand(8, 30); // Random subnet mask

echo json_encode(['ip' => $ip, 'mask' => $mask]);
