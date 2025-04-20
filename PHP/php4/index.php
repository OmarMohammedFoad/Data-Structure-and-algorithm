<?php
require 'vendor/autoload.php';
require 'app.php';




$items = new Items();

$glasses = $items->index();





?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">


</head>

<body>

    <h1><?= $basePath ?></h1>
    <h1 class="text-center">Glasses</h1>
    <div class="flex col "> <?php foreach ($glasses as $glass): ?>
            <a href="details.php?id=<?= urlencode($glass->id) ?>" class="text-decoration-none text-dark" style="width: 18rem;">
                <div class="col-md-4 mb-4 flex ">

                    <div class="card h-100">
                        <img src="<?= '/' . $basePath . 'images/' . htmlspecialchars($glass->Photo) ?>" class="card-img-top" alt="<?= htmlspecialchars($item['name']) ?>">
                        <div class="card-body">
                            <h5 class="card-title"><strong>name </strong>: <?= $glass->product_name ?></h5>
                            <p class="card-text"> <?= $glass->reorder_level ?></p>
                            <p class="card-text"><strong>$<?= number_format($glass->list_price, 2) ?></strong></p>
                        </div>
                        <div class="card-footer text-end">
                            <a href="" class="btn btn-primary">view detials</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
    </div>

</body>

</html>