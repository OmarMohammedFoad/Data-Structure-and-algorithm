<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

class Weather
{
    private $apiKey = "";
    private $uri = "https://api.openweathermap.org/data/2.5/weather";
    private $client;

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
        $this->client = new Client();
    }

    public function getWeather($city)
    {
        try {
            $response = $this->client->request('GET', $this->uri, [
                'query' => [
                    'q' => $city,
                    'appid' => $this->apiKey,
                    'units' => 'metric'
                ]
            ]);
            return json_decode($response->getBody(), true);
        } catch (\Exception $e) {
            return false;
        }
    }
}
