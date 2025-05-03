<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require 'vendor/autoload.php';
require_once 'src/Items.php';
require './config.php';

$item = new Items();
$items = [];

if ($item->connect()) {
    try {
        if (isset($_GET['id'])) {
            $product = $item->get_record_by_id($_GET['id'], 'id');
        } elseif (isset($_GET['search']) && !empty(trim($_GET['search']))) {
            $searchTerm = trim($_GET['search']);
            $items = $item->search_data($searchTerm);
        } else {

            $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
            $start = ($page - 1) * _record_per_page_;
            $items = $item->get_data([], $start);
            $pages = $item->get_pages();
        }
    } finally {
        $item->disconnect();
    }
}




// If you want to debug:
// echo '<pre>'; print_r($item->get_data([],3)); echo '</pre>';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glasses Store</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>

    <h1 class="text-center my-4">Glasses</h1>
    <div class="text-center my-4">
        <form method="GET" action="index.php">
            <input type="text" name="search" value="<?php echo isset($_GET['search']) ? htmlspecialchars($_GET['search']) : ''; ?>">
            <button type="submit">Search</button>
        </form>
    </div>
    <div class="container">

        <div class="row">

            <?php foreach ($items as $glass): ?>
                <div class="col-md-4 mb-4">
                    <a href="details.php?id=<?= urlencode($glass->id) ?>" class="text-decoration-none text-dark">
                        <div class="card h-100">
                            <img src="/images/<?= htmlspecialchars($glass->Photo ?? 'default.jpg') ?>" class="card-img-top" alt="<?= htmlspecialchars($glass->product_name ?? 'Default') ?>

                                class=" card-img-top"
                                alt="<?= htmlspecialchars($glass->product_name) ?>">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <strong>Name</strong>: <?= htmlspecialchars($glass->product_name) ?>
                                </h5>
                                <p class="card-text">Reorder Level: <?= htmlspecialchars($glass->reorder_level) ?></p>
                                <p class="card-text"><strong>$<?= number_format($glass->list_price, 2) ?></strong></p>
                            </div>
                            <div class="card-footer text-end">
                                <a href="details.php?id=<?= urlencode($glass->id) ?>" class="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="pages">
            <?php
            for ($i = 1; $i <= $pages; $i++) {
                echo "<a href='index.php?page=$i'>$i</a> ";
            }
            ?>
        </div>
    </div>

</body>

</html>