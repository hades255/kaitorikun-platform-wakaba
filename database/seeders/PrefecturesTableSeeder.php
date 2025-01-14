<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PrefecturesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('prefectures')->delete();
        
        \DB::table('prefectures')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => '北海道',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => '青森県',
                'created_at' => '2024-12-21 16:14:02',
                'updated_at' => '2024-12-21 16:14:02',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => '岩手県',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => '宮城県',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => '秋田県',
                'created_at' => '2024-12-21 16:14:14',
                'updated_at' => '2024-12-21 16:14:14',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => '山形県',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => '福島県',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => '茨城県',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => '栃木県',
                'created_at' => '2024-12-21 16:14:32',
                'updated_at' => '2024-12-21 16:14:32',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => '群馬県',
                'created_at' => '2024-12-21 16:14:35',
                'updated_at' => '2024-12-21 16:14:35',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => '埼玉県',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => '千葉県',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            12 => 
            array (
                'id' => 13,
                'name' => '東京都',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            13 => 
            array (
                'id' => 14,
                'name' => '神奈川県',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            14 => 
            array (
                'id' => 15,
                'name' => '新潟県',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            15 => 
            array (
                'id' => 16,
                'name' => '富山県',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            16 => 
            array (
                'id' => 17,
                'name' => '石川県',
                'created_at' => '2024-12-21 16:15:15',
                'updated_at' => '2024-12-21 16:15:15',
            ),
            17 => 
            array (
                'id' => 18,
                'name' => '福井県',
                'created_at' => '2024-12-21 16:15:20',
                'updated_at' => '2024-12-21 16:15:20',
            ),
            18 => 
            array (
                'id' => 19,
                'name' => '山梨県',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            19 => 
            array (
                'id' => 20,
                'name' => '長野県',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            20 => 
            array (
                'id' => 21,
                'name' => '岐阜県',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            21 => 
            array (
                'id' => 22,
                'name' => '静岡県',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            22 => 
            array (
                'id' => 23,
                'name' => '愛知県',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            23 => 
            array (
                'id' => 24,
                'name' => '三重県',
                'created_at' => '2024-12-21 16:15:57',
                'updated_at' => '2024-12-21 16:15:57',
            ),
            24 => 
            array (
                'id' => 25,
                'name' => '滋賀県',
                'created_at' => '2024-12-21 16:16:02',
                'updated_at' => '2024-12-21 16:16:02',
            ),
            25 => 
            array (
                'id' => 26,
                'name' => '京都府',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            26 => 
            array (
                'id' => 27,
                'name' => '大阪府',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            27 => 
            array (
                'id' => 28,
                'name' => '兵庫県',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            28 => 
            array (
                'id' => 29,
                'name' => '奈良県',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            29 => 
            array (
                'id' => 30,
                'name' => '和歌山県',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            30 => 
            array (
                'id' => 31,
                'name' => '鳥取県',
                'created_at' => '2024-12-21 16:16:46',
                'updated_at' => '2024-12-21 16:16:46',
            ),
            31 => 
            array (
                'id' => 32,
                'name' => '島根県',
                'created_at' => '2024-12-21 16:16:49',
                'updated_at' => '2024-12-21 16:16:49',
            ),
            32 => 
            array (
                'id' => 33,
                'name' => '岡山県',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            33 => 
            array (
                'id' => 34,
                'name' => '広島県',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            34 => 
            array (
                'id' => 35,
                'name' => '山口県',
                'created_at' => '2024-12-21 16:17:01',
                'updated_at' => '2024-12-21 16:17:01',
            ),
            35 => 
            array (
                'id' => 36,
                'name' => '徳島県',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
            36 => 
            array (
                'id' => 37,
                'name' => '香川県',
                'created_at' => '2024-12-21 16:17:09',
                'updated_at' => '2024-12-21 16:17:09',
            ),
            37 => 
            array (
                'id' => 38,
                'name' => '愛媛県',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            38 => 
            array (
                'id' => 39,
                'name' => '高知県',
                'created_at' => '2024-12-21 16:17:14',
                'updated_at' => '2024-12-21 16:17:14',
            ),
            39 => 
            array (
                'id' => 40,
                'name' => '福岡県',
                'created_at' => '2024-12-21 16:17:18',
                'updated_at' => '2024-12-21 16:17:18',
            ),
            40 => 
            array (
                'id' => 41,
                'name' => '佐賀県',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            41 => 
            array (
                'id' => 42,
                'name' => '長崎県',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            42 => 
            array (
                'id' => 43,
                'name' => '熊本県',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            43 => 
            array (
                'id' => 44,
                'name' => '大分県',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            44 => 
            array (
                'id' => 45,
                'name' => '宮崎県',
                'created_at' => '2024-12-21 16:17:40',
                'updated_at' => '2024-12-21 16:17:40',
            ),
            45 => 
            array (
                'id' => 46,
                'name' => '鹿児島県',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            46 => 
            array (
                'id' => 47,
                'name' => '沖縄県',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
        ));
        
        
    }
}