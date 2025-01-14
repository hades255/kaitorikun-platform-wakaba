<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ShopsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('shops')->delete();
        
        \DB::table('shops')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => '店舗A',
                'zipcode' => NULL,
                'address' => NULL,
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'name' => '店舗B',
                'zipcode' => NULL,
                'address' => NULL,
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'name' => '店舗C',
                'zipcode' => NULL,
                'address' => NULL,
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'name' => '店舗D',
                'zipcode' => NULL,
                'address' => NULL,
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}