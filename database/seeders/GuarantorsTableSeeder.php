<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class GuarantorsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('guarantors')->delete();
        
        \DB::table('guarantors')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => '配偶者',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => '保証人A',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => '保証人B',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => '保証人C',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
            ),
        ));
        
        
    }
}