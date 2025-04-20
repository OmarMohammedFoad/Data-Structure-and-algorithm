<?php

require 'config.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule();
$capsule->addConnection([
    'driver' => 'mysql',
    'host' => __HOST__,
    'database' => __DB__,
    'username' => __USER__,
    'password' => __PASS__,
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();
