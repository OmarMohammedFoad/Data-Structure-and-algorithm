<?php

require 'vendor/autoload.php';
header("Content-Type: application/json");


$db = new MySQLHandler("products");

$method = $_SERVER['REQUEST_METHOD'];

$id = $_GET['id'];

switch ($method) {
    case 'GET':
        if ($id) {
            $result = $db->get_record_by_id($id);
        } else {
            $result = $db->get_data();
        }
        echo json_encode($result);
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        // print (json_encode($data));
        $result = $db->save($data);
        echo json_encode($result);
        break;
    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $result = $db->update($data, $id);
        echo json_encode(['succes' => $result]);
        break;
    case "DELETE":
        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'ID is required for delete']);
            break;
        }
        $result = $db->delete($id);
        echo json_encode(['success' => $result]);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        break;



}
