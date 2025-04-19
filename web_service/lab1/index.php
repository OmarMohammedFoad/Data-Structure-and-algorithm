<?php
require 'vendor/autoload.php';

$client = new Weather("0af5d37da35add7947369f066c24d14c");

$weatherData = null;
$error = null;
$citiesJson = file_get_contents("egypt.json");
$cities = json_decode($citiesJson, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['city'])) {
    $cityName =  $_POST['city'];
    // print('Selected city name: ' . $cityName);
    try {
        $weatherData = $client->getWeather($cityName);
    } catch (Exception $e) {
        $error = "Error fetching weather data: " . $e->getMessage();
    }

}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Weather App</title>
</head>

<body>
    <h1>Weather App</h1>

    <form method="POST">
        <label for="city">Select a city:</label>
        <select name="city" id="city">
            <?php foreach ($cities as $city): ?>
                <option value="<?= $city['name'] ?>"><?= htmlspecialchars($city['name']) ?></option>
            <?php endforeach; ?>
        </select>
        <button type="submit">Get Weather</button>
    </form>

    <?php if ($weatherData): ?>
        <h2>Weather in <?= htmlspecialchars($weatherData['name']) ?></h2>
        <p>Temperature: <?= htmlspecialchars($weatherData['main']['temp']) ?>°C</p>
        <p>Humidity: <?= htmlspecialchars($weatherData['main']['humidity']) ?>%</p>
        <p>Description: <?= htmlspecialchars($weatherData['weather'][0]['description']) ?></p>
    <?php elseif ($error): ?>
        <p style="color: red;"><?= htmlspecialchars($error) ?></p>
    <?php endif; ?>
</body>

</html>