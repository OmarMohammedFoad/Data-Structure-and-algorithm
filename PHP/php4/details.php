<?php
require 'vendor/autoload.php';
require 'app.php';


$items = new Items();

// $glasses = $items->index();


$id = $_GET['id'] ?? null;

if ($id) {
    $glass   = $items->show($id);
} else {
    echo "No ID provided.";
    exit;
}






?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($product->name) ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container my-5">
        <div class="card shadow border-0 ">
            <img src="<?= '/' . $basePath . 'images/' . htmlspecialchars($glass->Photo) ?>" class="w-50 h-50 text-center" alt="<?= htmlspecialchars($item['name']) ?>">
            <div class="card-body">
                <h5 class="card-title"><strong>name </strong>: <?= $glass->product_name ?></h5>
                <p class="card-text"> <?= $glass->reorder_level ?></p>
                <p class="card-text"><strong>$<?= number_format($glass->list_price, 2) ?></strong></p>
            </div>
        </div>
        <div class="mt-3">
            <a href="index.php" class="btn btn-primary">Back to Glasses</a>
        </div>
    </div>
</body>

</html>


</html>