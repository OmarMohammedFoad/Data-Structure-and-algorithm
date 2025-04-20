<?
require_once __DIR__ . '/../Model/Glasses.php';

use Glasses;


class Items
{
    public function index()
    {
        $item =  Glasses::all();
        return json_decode($item);
    }

    public function show($id)
    {
        $item = Glasses::find($id);
        return json_decode($item);
    }
}
