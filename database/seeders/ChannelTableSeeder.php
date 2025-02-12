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


            3 => array(
                // 'id' => 1,
                'name' => '決裁',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 5
            ),
            4 => array(
                // 'id' => 1,
                'name' => '業者の売却報告',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 5
            ),
            5 => array(
                // 'id' => 1,
                'name' => '入出金',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 5
            ),
            6 => array(
                // 'id' => 1,
                'name' => '発注依頼',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 5
            ),
            7 => array(
                // 'id' => 1,
                'name' => '購入依頼と送料支払報告',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 5
            ),
            8 => array(
                // 'id' => 1,
                'name' => '出張買取',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 5
            ),
            9 => array(
                // 'id' => 1,
                'name' => '業者来訪',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 5
            ),


            10 => array(
                // 'id' => 1,
                'name' => 'シフト',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 6
            ),
            11 => array(
                // 'id' => 1,
                'name' => '業務情報/引継ぎ',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 6
            ),
            12 => array(
                // 'id' => 1,
                'name' => 'スターフ会議',
                'description' => '',
                'icon' => '',
                'user_id' => '1',
                'community_id' => 0,
                'type' => 6
            ),
        ));
    }
}
