<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('user_roles')->delete();
        
        \DB::table('user_roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'role_name' => 'スーパー管理者',
                'created_at' => '2024-12-21 16:13:47',
                'updated_at' => '2024-12-21 16:13:47',
            ),
            1 => 
            array (
                'id' => 2,
                'role_name' => 'オーナー',
                'created_at' => '2024-12-21 16:13:47',
                'updated_at' => '2024-12-21 16:13:47',
            ),
            2 => 
            array (
                'id' => 3,
                'role_name' => 'マネージャー',
                'created_at' => '2024-12-21 16:13:47',
                'updated_at' => '2024-12-21 16:13:47',
            ),
            3 => 
            array (
                'id' => 4,
                'role_name' => '正社員',
                'created_at' => '2024-12-21 16:13:47',
                'updated_at' => '2024-12-21 16:13:47',
            ),
            4 => 
            array (
                'id' => 5,
                'role_name' => 'アルバイト',
                'created_at' => '2024-12-21 16:13:47',
                'updated_at' => '2024-12-21 16:13:47',
            ),
            5 => 
            array (
                'id' => 6,
                'role_name' => '本部役員',
                'created_at' => '2024-12-21 16:13:47',
                'updated_at' => '2024-12-21 16:13:47',
            ),
            6 => 
            array (
                'id' => 7,
                'role_name' => '本部社員',
                'created_at' => '2024-12-21 16:13:47',
                'updated_at' => '2024-12-21 16:13:47',
            ),
        ));
        
        
    }
}