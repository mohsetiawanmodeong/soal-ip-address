<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$ip = trim($data['ip']);
$mask = intval(trim($data['mask']));
$binary_ip = str_replace('.', '', trim($data['binary_ip'])); // Hapus titik dari binary_ip
$subnet_mask = str_replace('.', '', trim($data['subnet_mask'])); // Hapus titik dari subnet_mask
$network_address = trim($data['network_address']);
$first_host = trim($data['first_host']);
$last_host = trim($data['last_host']);
$broadcast_address = trim($data['broadcast_address']);
$num_bits_host = trim($data['num_bits_host']);
$num_hosts = trim($data['num_hosts']);

$ip_parts = explode('.', $ip);
$binary_ip_correct = implode('', array_map(fn ($part) => str_pad(decbin($part), 8, '0', STR_PAD_LEFT), $ip_parts));

$mask_bits = str_repeat('1', $mask) . str_repeat('0', 32 - $mask);
$subnet_mask_correct = implode('', str_split($mask_bits, 8));

// Periksa kebenaran binary IP dan subnet mask
$binary_ip_grade = ($binary_ip === $binary_ip_correct) ? 100 : 0;
$subnet_mask_grade = ($subnet_mask === $subnet_mask_correct) ? 100 : 0;

$ip_obj = inet_pton($ip);
$subnet_mask_bin = inet_pton(implode('.', array_map('bindec', str_split($subnet_mask_correct, 8))));
$network_address_correct = inet_ntop($ip_obj & $subnet_mask_bin);
$broadcast_address_correct = inet_ntop($ip_obj | ~$subnet_mask_bin);

$first_host_correct = long2ip(ip2long($network_address_correct) + 1);
$last_host_correct = long2ip(ip2long($broadcast_address_correct) - 1);

$num_bits_host_correct = 32 - $mask;
$num_hosts_correct = pow(2, 32 - $mask) - 2;

$grades = [
   'binary_ip' => $binary_ip_grade,
   'subnet_mask' => $subnet_mask_grade,
   'network_address' => $network_address === $network_address_correct ? 100 : 0,
   'first_host' => $first_host === $first_host_correct ? 100 : 0,
   'last_host' => $last_host === $last_host_correct ? 100 : 0,
   'broadcast_address' => $broadcast_address === $broadcast_address_correct ? 100 : 0,
   'num_bits_host' => intval($num_bits_host) === $num_bits_host_correct ? 100 : 0,
   'num_hosts' => intval($num_hosts) === $num_hosts_correct ? 100 : 0,
];

echo json_encode($grades);
