<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'スーパー管理者',
                'email' => 'super.manager@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$NNqJeAmdfAthA7yp0.8tm.EY1iHxcIXd//99.RTn.K0EYYhbETr.u',
                'role' => 1,
                'status' => 1,
                'last_login' => NULL,
                'active' => 1,
                'remember_token' => 'c2mvSbEJwQCeXErdNLCuNvwOtBDJA5msrSSgcYlOHYkMN7iAZdxutemrtQir',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2025-01-07 02:23:03',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}