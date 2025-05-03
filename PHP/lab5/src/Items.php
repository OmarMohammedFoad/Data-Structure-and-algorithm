<?

use Illuminate\Database\Capsule\Manager as Capsule;

require_once __DIR__ . '/Dbhandler.php';

class Items implements DbHandler
{
    private $db;
    private $items = array();
    private $totalRecords = 0;
    private $pages = 0;
    public function __construct()
    {
        $this->db = new Capsule;
        $this->db->addConnection([
            'driver'    => 'mysql',
            'host'      => __HOST__,
            'database'  => __DB__,
            'username'  => __USER__,
            'password'  => __PASS__,
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ]);

        $this->db->setAsGlobal();
        $this->db->bootEloquent();
    }
    public function connect()
    {
        try {
            $this->db->getConnection()->getPdo();
            return true;
        } catch (\Exception $e) {
            error_log('Database connection failed: ' . $e->getMessage());
            return false;
        }
    }

    public function get_data($fields = array(), $start = 0)
    {
        $query = Capsule::table('items');
        $this->items = $query->get()->toArray();
        $this->totalRecords = count($this->items);
        $this->pages = ceil($this->totalRecords / _record_per_page_);
        if (!empty($fields)) {
            $query->select($fields);
        }

        return $query->skip($start)
            ->take(_record_per_page_)
            ->get()
            ->toArray();
    }
    public function search_data($searchData)
    {
        $data =  Capsule::table('items')->where('product_name', 'LIKE', '%' . $searchData . '%')->get()
            ->toArray();
        return $data;
    }


    public function get_pages()
    {
        return $this->pages;
    }
    public function disconnect()
    {
        try {
            if ($this->db->getConnection()->isConnected()) {
                $this->db->getConnection()->disconnect();
                return true;
            }
            return false;
        } catch (\Exception $e) {
            return false;
        }
    }
    public function get_record_by_id($id, $primary_key)
    {
        return Capsule::table('items')
            ->where($primary_key, $id)
            ->first();
    }
}
