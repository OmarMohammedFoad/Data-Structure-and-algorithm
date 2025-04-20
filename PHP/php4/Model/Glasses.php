<?php

use Illuminate\Database\Eloquent\Model;

class Glasses extends Model
{
    protected $table = 'items';
    public $timestamps = false;

    protected $fillable = ['name', 'PRODUCT_code', 'Photo', 'list_price', 'Units_In_Stock', 'category', 'CouNtry', 'Rating', 'discontinued', 'date'];
}
