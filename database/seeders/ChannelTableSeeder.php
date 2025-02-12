<?php

namespace Database\Seeders;

use App\Models\Channel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChannelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // \DB::table('channels')->delete();

        \DB::table('channels')->insert(array(
            0 => array(
                // 'id' => 1,
                'name' => '一般',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 4
            ),
            1 => array(
                // 'id' => 1,
                'name' => '業務連絡',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 4
            ),
            2 => array(
                // 'id' => 1,
                'name' => '1日の報告',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 4
            ),
        ));
    }
}
