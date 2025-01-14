<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cities')->delete();
        
        \DB::table('cities')->insert(array (
            0 => 
            array (
                'id' => 1,
                'prefecture_id' => 1,
                'zipcode' => '0640941',
                'name' => '札幌市中央区',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
            ),
            1 => 
            array (
                'id' => 2,
                'prefecture_id' => 1,
                'zipcode' => '0010000',
                'name' => '札幌市北区',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
            ),
            2 => 
            array (
                'id' => 3,
                'prefecture_id' => 1,
                'zipcode' => '0650000',
                'name' => '札幌市東区',
                'created_at' => '2024-12-21 16:13:48',
                'updated_at' => '2024-12-21 16:13:48',
            ),
            3 => 
            array (
                'id' => 4,
                'prefecture_id' => 1,
                'zipcode' => '0030000',
                'name' => '札幌市白石区',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            4 => 
            array (
                'id' => 5,
                'prefecture_id' => 1,
                'zipcode' => '0620000',
                'name' => '札幌市豊平区',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            5 => 
            array (
                'id' => 6,
                'prefecture_id' => 1,
                'zipcode' => '0050000',
                'name' => '札幌市南区',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            6 => 
            array (
                'id' => 7,
                'prefecture_id' => 1,
                'zipcode' => '0630000',
                'name' => '札幌市西区',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            7 => 
            array (
                'id' => 8,
                'prefecture_id' => 1,
                'zipcode' => '0040000',
                'name' => '札幌市厚別区',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            8 => 
            array (
                'id' => 9,
                'prefecture_id' => 1,
                'zipcode' => '0060000',
                'name' => '札幌市手稲区',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            9 => 
            array (
                'id' => 10,
                'prefecture_id' => 1,
                'zipcode' => '0040000',
                'name' => '札幌市清田区',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            10 => 
            array (
                'id' => 11,
                'prefecture_id' => 1,
                'zipcode' => '0400000',
                'name' => '函館市',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            11 => 
            array (
                'id' => 12,
                'prefecture_id' => 1,
                'zipcode' => '0470000',
                'name' => '小樽市',
                'created_at' => '2024-12-21 16:13:49',
                'updated_at' => '2024-12-21 16:13:49',
            ),
            12 => 
            array (
                'id' => 13,
                'prefecture_id' => 1,
                'zipcode' => '0700000',
                'name' => '旭川市',
                'created_at' => '2024-12-21 16:13:50',
                'updated_at' => '2024-12-21 16:13:50',
            ),
            13 => 
            array (
                'id' => 14,
                'prefecture_id' => 1,
                'zipcode' => '0500000',
                'name' => '室蘭市',
                'created_at' => '2024-12-21 16:13:50',
                'updated_at' => '2024-12-21 16:13:50',
            ),
            14 => 
            array (
                'id' => 15,
                'prefecture_id' => 1,
                'zipcode' => '0850000',
                'name' => '釧路市',
                'created_at' => '2024-12-21 16:13:50',
                'updated_at' => '2024-12-21 16:13:50',
            ),
            15 => 
            array (
                'id' => 16,
                'prefecture_id' => 1,
                'zipcode' => '0800000',
                'name' => '帯広市',
                'created_at' => '2024-12-21 16:13:50',
                'updated_at' => '2024-12-21 16:13:50',
            ),
            16 => 
            array (
                'id' => 17,
                'prefecture_id' => 1,
                'zipcode' => '0900000',
                'name' => '北見市',
                'created_at' => '2024-12-21 16:13:51',
                'updated_at' => '2024-12-21 16:13:51',
            ),
            17 => 
            array (
                'id' => 18,
                'prefecture_id' => 1,
                'zipcode' => '0680400',
                'name' => '夕張市',
                'created_at' => '2024-12-21 16:13:51',
                'updated_at' => '2024-12-21 16:13:51',
            ),
            18 => 
            array (
                'id' => 19,
                'prefecture_id' => 1,
                'zipcode' => '0680000',
                'name' => '岩見沢市',
                'created_at' => '2024-12-21 16:13:51',
                'updated_at' => '2024-12-21 16:13:51',
            ),
            19 => 
            array (
                'id' => 20,
                'prefecture_id' => 1,
                'zipcode' => '0930000',
                'name' => '網走市',
                'created_at' => '2024-12-21 16:13:51',
                'updated_at' => '2024-12-21 16:13:51',
            ),
            20 => 
            array (
                'id' => 21,
                'prefecture_id' => 1,
                'zipcode' => '0770000',
                'name' => '留萌市',
                'created_at' => '2024-12-21 16:13:51',
                'updated_at' => '2024-12-21 16:13:51',
            ),
            21 => 
            array (
                'id' => 22,
                'prefecture_id' => 1,
                'zipcode' => '0530000',
                'name' => '苫小牧市',
                'created_at' => '2024-12-21 16:13:51',
                'updated_at' => '2024-12-21 16:13:51',
            ),
            22 => 
            array (
                'id' => 23,
                'prefecture_id' => 1,
                'zipcode' => '0970000',
                'name' => '稚内市',
                'created_at' => '2024-12-21 16:13:51',
                'updated_at' => '2024-12-21 16:13:51',
            ),
            23 => 
            array (
                'id' => 24,
                'prefecture_id' => 1,
                'zipcode' => '0720000',
                'name' => '美唄市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            24 => 
            array (
                'id' => 25,
                'prefecture_id' => 1,
                'zipcode' => '0750000',
                'name' => '芦別市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            25 => 
            array (
                'id' => 26,
                'prefecture_id' => 1,
                'zipcode' => '0670000',
                'name' => '江別市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            26 => 
            array (
                'id' => 27,
                'prefecture_id' => 1,
                'zipcode' => '0791100',
                'name' => '赤平市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            27 => 
            array (
                'id' => 28,
                'prefecture_id' => 1,
                'zipcode' => '0940000',
                'name' => '紋別市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            28 => 
            array (
                'id' => 29,
                'prefecture_id' => 1,
                'zipcode' => '0950000',
                'name' => '士別市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            29 => 
            array (
                'id' => 30,
                'prefecture_id' => 1,
                'zipcode' => '0960000',
                'name' => '名寄市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            30 => 
            array (
                'id' => 31,
                'prefecture_id' => 1,
                'zipcode' => '0682100',
                'name' => '三笠市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            31 => 
            array (
                'id' => 32,
                'prefecture_id' => 1,
                'zipcode' => '0870000',
                'name' => '根室市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            32 => 
            array (
                'id' => 33,
                'prefecture_id' => 1,
                'zipcode' => '0660000',
                'name' => '千歳市',
                'created_at' => '2024-12-21 16:13:52',
                'updated_at' => '2024-12-21 16:13:52',
            ),
            33 => 
            array (
                'id' => 34,
                'prefecture_id' => 1,
                'zipcode' => '0730000',
                'name' => '滝川市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            34 => 
            array (
                'id' => 35,
                'prefecture_id' => 1,
                'zipcode' => '0730100',
                'name' => '砂川市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            35 => 
            array (
                'id' => 36,
                'prefecture_id' => 1,
                'zipcode' => '0730400',
                'name' => '歌志内市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            36 => 
            array (
                'id' => 37,
                'prefecture_id' => 1,
                'zipcode' => '0740000',
                'name' => '深川市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            37 => 
            array (
                'id' => 38,
                'prefecture_id' => 1,
                'zipcode' => '0760000',
                'name' => '富良野市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            38 => 
            array (
                'id' => 39,
                'prefecture_id' => 1,
                'zipcode' => '0590000',
                'name' => '登別市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            39 => 
            array (
                'id' => 40,
                'prefecture_id' => 1,
                'zipcode' => '0611400',
                'name' => '恵庭市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            40 => 
            array (
                'id' => 41,
                'prefecture_id' => 1,
                'zipcode' => '0520000',
                'name' => '伊達市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            41 => 
            array (
                'id' => 42,
                'prefecture_id' => 1,
                'zipcode' => '0611100',
                'name' => '北広島市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            42 => 
            array (
                'id' => 43,
                'prefecture_id' => 1,
                'zipcode' => '0613200',
                'name' => '石狩市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            43 => 
            array (
                'id' => 44,
                'prefecture_id' => 1,
                'zipcode' => '0490100',
                'name' => '北斗市',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            44 => 
            array (
                'id' => 45,
                'prefecture_id' => 1,
                'zipcode' => '0610200',
                'name' => '石狩郡当別町',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            45 => 
            array (
                'id' => 46,
                'prefecture_id' => 1,
                'zipcode' => '0681100',
                'name' => '石狩郡新篠津村',
                'created_at' => '2024-12-21 16:13:53',
                'updated_at' => '2024-12-21 16:13:53',
            ),
            46 => 
            array (
                'id' => 47,
                'prefecture_id' => 1,
                'zipcode' => '0491500',
                'name' => '松前郡松前町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            47 => 
            array (
                'id' => 48,
                'prefecture_id' => 1,
                'zipcode' => '0491300',
                'name' => '松前郡福島町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            48 => 
            array (
                'id' => 49,
                'prefecture_id' => 1,
                'zipcode' => '0491100',
                'name' => '上磯郡知内町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            49 => 
            array (
                'id' => 50,
                'prefecture_id' => 1,
                'zipcode' => '0490400',
                'name' => '上磯郡木古内町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            50 => 
            array (
                'id' => 51,
                'prefecture_id' => 1,
                'zipcode' => '0411100',
                'name' => '亀田郡七飯町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            51 => 
            array (
                'id' => 52,
                'prefecture_id' => 1,
                'zipcode' => '0411400',
                'name' => '茅部郡鹿部町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            52 => 
            array (
                'id' => 53,
                'prefecture_id' => 1,
                'zipcode' => '0492300',
                'name' => '茅部郡森町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            53 => 
            array (
                'id' => 54,
                'prefecture_id' => 1,
                'zipcode' => '0493100',
                'name' => '二海郡八雲町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            54 => 
            array (
                'id' => 55,
                'prefecture_id' => 1,
                'zipcode' => '0493500',
                'name' => '山越郡長万部町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            55 => 
            array (
                'id' => 56,
                'prefecture_id' => 1,
                'zipcode' => '0430000',
                'name' => '檜山郡江差町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            56 => 
            array (
                'id' => 57,
                'prefecture_id' => 1,
                'zipcode' => '0490600',
                'name' => '檜山郡上ノ国町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            57 => 
            array (
                'id' => 58,
                'prefecture_id' => 1,
                'zipcode' => '0431100',
                'name' => '檜山郡厚沢部町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            58 => 
            array (
                'id' => 59,
                'prefecture_id' => 1,
                'zipcode' => '0430100',
                'name' => '爾志郡乙部町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            59 => 
            array (
                'id' => 60,
                'prefecture_id' => 1,
                'zipcode' => '0431400',
                'name' => '奥尻郡奥尻町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            60 => 
            array (
                'id' => 61,
                'prefecture_id' => 1,
                'zipcode' => '0494300',
                'name' => '瀬棚郡今金町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            61 => 
            array (
                'id' => 62,
                'prefecture_id' => 1,
                'zipcode' => '0494500',
                'name' => '久遠郡せたな町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            62 => 
            array (
                'id' => 63,
                'prefecture_id' => 1,
                'zipcode' => '0480600',
                'name' => '島牧郡島牧村',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            63 => 
            array (
                'id' => 64,
                'prefecture_id' => 1,
                'zipcode' => '0480400',
                'name' => '寿都郡寿都町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            64 => 
            array (
                'id' => 65,
                'prefecture_id' => 1,
                'zipcode' => '0480100',
                'name' => '寿都郡黒松内町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            65 => 
            array (
                'id' => 66,
                'prefecture_id' => 1,
                'zipcode' => '0481300',
                'name' => '磯谷郡蘭越町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            66 => 
            array (
                'id' => 67,
                'prefecture_id' => 1,
                'zipcode' => '0481500',
                'name' => '虻田郡ニセコ町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            67 => 
            array (
                'id' => 68,
                'prefecture_id' => 1,
                'zipcode' => '0481600',
                'name' => '虻田郡真狩村',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            68 => 
            array (
                'id' => 69,
                'prefecture_id' => 1,
                'zipcode' => '0481700',
                'name' => '虻田郡留寿都村',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            69 => 
            array (
                'id' => 70,
                'prefecture_id' => 1,
                'zipcode' => '0440200',
                'name' => '虻田郡喜茂別町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            70 => 
            array (
                'id' => 71,
                'prefecture_id' => 1,
                'zipcode' => '0440100',
                'name' => '虻田郡京極町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            71 => 
            array (
                'id' => 72,
                'prefecture_id' => 1,
                'zipcode' => '0440000',
                'name' => '虻田郡倶知安町',
                'created_at' => '2024-12-21 16:13:54',
                'updated_at' => '2024-12-21 16:13:54',
            ),
            72 => 
            array (
                'id' => 73,
                'prefecture_id' => 1,
                'zipcode' => '0482200',
                'name' => '岩内郡共和町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            73 => 
            array (
                'id' => 74,
                'prefecture_id' => 1,
                'zipcode' => '0450000',
                'name' => '岩内郡岩内町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            74 => 
            array (
                'id' => 75,
                'prefecture_id' => 1,
                'zipcode' => '0450200',
                'name' => '古宇郡泊村',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            75 => 
            array (
                'id' => 76,
                'prefecture_id' => 1,
                'zipcode' => '0450300',
                'name' => '古宇郡神恵内村',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            76 => 
            array (
                'id' => 77,
                'prefecture_id' => 1,
                'zipcode' => '0460200',
                'name' => '積丹郡積丹町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            77 => 
            array (
                'id' => 78,
                'prefecture_id' => 1,
                'zipcode' => '0460100',
                'name' => '古平郡古平町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            78 => 
            array (
                'id' => 79,
                'prefecture_id' => 1,
                'zipcode' => '0482400',
                'name' => '余市郡仁木町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            79 => 
            array (
                'id' => 80,
                'prefecture_id' => 1,
                'zipcode' => '0460000',
                'name' => '余市郡余市町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            80 => 
            array (
                'id' => 81,
                'prefecture_id' => 1,
                'zipcode' => '0460500',
                'name' => '余市郡赤井川村',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            81 => 
            array (
                'id' => 82,
                'prefecture_id' => 1,
                'zipcode' => '0690200',
                'name' => '空知郡南幌町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            82 => 
            array (
                'id' => 83,
                'prefecture_id' => 1,
                'zipcode' => '0790300',
                'name' => '空知郡奈井江町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            83 => 
            array (
                'id' => 84,
                'prefecture_id' => 1,
                'zipcode' => '0730200',
                'name' => '空知郡上砂川町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            84 => 
            array (
                'id' => 85,
                'prefecture_id' => 1,
                'zipcode' => '0691200',
                'name' => '夕張郡由仁町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            85 => 
            array (
                'id' => 86,
                'prefecture_id' => 1,
                'zipcode' => '0691300',
                'name' => '夕張郡長沼町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            86 => 
            array (
                'id' => 87,
                'prefecture_id' => 1,
                'zipcode' => '0691500',
                'name' => '夕張郡栗山町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            87 => 
            array (
                'id' => 88,
                'prefecture_id' => 1,
                'zipcode' => '0610500',
                'name' => '樺戸郡月形町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            88 => 
            array (
                'id' => 89,
                'prefecture_id' => 1,
                'zipcode' => '0610600',
                'name' => '樺戸郡浦臼町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            89 => 
            array (
                'id' => 90,
                'prefecture_id' => 1,
                'zipcode' => '0731100',
                'name' => '樺戸郡新十津川町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            90 => 
            array (
                'id' => 91,
                'prefecture_id' => 1,
                'zipcode' => '0790500',
                'name' => '雨竜郡妹背牛町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            91 => 
            array (
                'id' => 92,
                'prefecture_id' => 1,
                'zipcode' => '0782100',
                'name' => '雨竜郡秩父別町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            92 => 
            array (
                'id' => 93,
                'prefecture_id' => 1,
                'zipcode' => '0782600',
                'name' => '雨竜郡雨竜町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            93 => 
            array (
                'id' => 94,
                'prefecture_id' => 1,
                'zipcode' => '0782500',
                'name' => '雨竜郡北竜町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            94 => 
            array (
                'id' => 95,
                'prefecture_id' => 1,
                'zipcode' => '0782200',
                'name' => '雨竜郡沼田町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            95 => 
            array (
                'id' => 96,
                'prefecture_id' => 1,
                'zipcode' => '0711200',
                'name' => '上川郡鷹栖町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            96 => 
            array (
                'id' => 97,
                'prefecture_id' => 1,
                'zipcode' => '0711500',
                'name' => '上川郡東神楽町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            97 => 
            array (
                'id' => 98,
                'prefecture_id' => 1,
                'zipcode' => '0781300',
                'name' => '上川郡当麻町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            98 => 
            array (
                'id' => 99,
                'prefecture_id' => 1,
                'zipcode' => '0780300',
                'name' => '上川郡比布町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            99 => 
            array (
                'id' => 100,
                'prefecture_id' => 1,
                'zipcode' => '0781400',
                'name' => '上川郡愛別町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            100 => 
            array (
                'id' => 101,
                'prefecture_id' => 1,
                'zipcode' => '0781700',
                'name' => '上川郡上川町',
                'created_at' => '2024-12-21 16:13:55',
                'updated_at' => '2024-12-21 16:13:55',
            ),
            101 => 
            array (
                'id' => 102,
                'prefecture_id' => 1,
                'zipcode' => '0711400',
                'name' => '上川郡東川町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            102 => 
            array (
                'id' => 103,
                'prefecture_id' => 1,
                'zipcode' => '0710200',
                'name' => '上川郡美瑛町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            103 => 
            array (
                'id' => 104,
                'prefecture_id' => 1,
                'zipcode' => '0710500',
                'name' => '空知郡上富良野町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            104 => 
            array (
                'id' => 105,
                'prefecture_id' => 1,
                'zipcode' => '0710700',
                'name' => '空知郡中富良野町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            105 => 
            array (
                'id' => 106,
                'prefecture_id' => 1,
                'zipcode' => '0792400',
                'name' => '空知郡南富良野町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            106 => 
            array (
                'id' => 107,
                'prefecture_id' => 1,
                'zipcode' => '0792200',
                'name' => '勇払郡占冠村',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            107 => 
            array (
                'id' => 108,
                'prefecture_id' => 1,
                'zipcode' => '0980100',
                'name' => '上川郡和寒町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            108 => 
            array (
                'id' => 109,
                'prefecture_id' => 1,
                'zipcode' => '0980300',
                'name' => '上川郡剣淵町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            109 => 
            array (
                'id' => 110,
                'prefecture_id' => 1,
                'zipcode' => '0981200',
                'name' => '上川郡下川町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            110 => 
            array (
                'id' => 111,
                'prefecture_id' => 1,
                'zipcode' => '0982200',
                'name' => '中川郡美深町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            111 => 
            array (
                'id' => 112,
                'prefecture_id' => 1,
                'zipcode' => '0982500',
                'name' => '中川郡音威子府村',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            112 => 
            array (
                'id' => 113,
                'prefecture_id' => 1,
                'zipcode' => '0982800',
                'name' => '中川郡中川町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            113 => 
            array (
                'id' => 114,
                'prefecture_id' => 1,
                'zipcode' => '0740400',
                'name' => '雨竜郡幌加内町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            114 => 
            array (
                'id' => 115,
                'prefecture_id' => 1,
                'zipcode' => '0770200',
                'name' => '増毛郡増毛町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            115 => 
            array (
                'id' => 116,
                'prefecture_id' => 1,
                'zipcode' => '0783300',
                'name' => '留萌郡小平町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            116 => 
            array (
                'id' => 117,
                'prefecture_id' => 1,
                'zipcode' => '0783700',
                'name' => '苫前郡苫前町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            117 => 
            array (
                'id' => 118,
                'prefecture_id' => 1,
                'zipcode' => '0784100',
                'name' => '苫前郡羽幌町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            118 => 
            array (
                'id' => 119,
                'prefecture_id' => 1,
                'zipcode' => '0784400',
                'name' => '苫前郡初山別村',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            119 => 
            array (
                'id' => 120,
                'prefecture_id' => 1,
                'zipcode' => '0983500',
                'name' => '天塩郡遠別町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            120 => 
            array (
                'id' => 121,
                'prefecture_id' => 1,
                'zipcode' => '0983300',
                'name' => '天塩郡天塩町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            121 => 
            array (
                'id' => 122,
                'prefecture_id' => 1,
                'zipcode' => '0986200',
                'name' => '宗谷郡猿払村',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            122 => 
            array (
                'id' => 123,
                'prefecture_id' => 1,
                'zipcode' => '0985700',
                'name' => '枝幸郡浜頓別町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            123 => 
            array (
                'id' => 124,
                'prefecture_id' => 1,
                'zipcode' => '0985500',
                'name' => '枝幸郡中頓別町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            124 => 
            array (
                'id' => 125,
                'prefecture_id' => 1,
                'zipcode' => '0985800',
                'name' => '枝幸郡枝幸町',
                'created_at' => '2024-12-21 16:13:56',
                'updated_at' => '2024-12-21 16:13:56',
            ),
            125 => 
            array (
                'id' => 126,
                'prefecture_id' => 1,
                'zipcode' => '0984100',
                'name' => '天塩郡豊富町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            126 => 
            array (
                'id' => 127,
                'prefecture_id' => 1,
                'zipcode' => '0971200',
                'name' => '礼文郡礼文町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            127 => 
            array (
                'id' => 128,
                'prefecture_id' => 1,
                'zipcode' => '0970400',
                'name' => '利尻郡利尻町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            128 => 
            array (
                'id' => 129,
                'prefecture_id' => 1,
                'zipcode' => '0970100',
                'name' => '利尻郡利尻富士町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            129 => 
            array (
                'id' => 130,
                'prefecture_id' => 1,
                'zipcode' => '0983200',
                'name' => '天塩郡幌延町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            130 => 
            array (
                'id' => 131,
                'prefecture_id' => 1,
                'zipcode' => '0920000',
                'name' => '網走郡美幌町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            131 => 
            array (
                'id' => 132,
                'prefecture_id' => 1,
                'zipcode' => '0920200',
                'name' => '網走郡津別町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            132 => 
            array (
                'id' => 133,
                'prefecture_id' => 1,
                'zipcode' => '0994100',
                'name' => '斜里郡斜里町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            133 => 
            array (
                'id' => 134,
                'prefecture_id' => 1,
                'zipcode' => '0994400',
                'name' => '斜里郡清里町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            134 => 
            array (
                'id' => 135,
                'prefecture_id' => 1,
                'zipcode' => '0993600',
                'name' => '斜里郡小清水町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            135 => 
            array (
                'id' => 136,
                'prefecture_id' => 1,
                'zipcode' => '0991400',
                'name' => '常呂郡訓子府町',
                'created_at' => '2024-12-21 16:13:57',
                'updated_at' => '2024-12-21 16:13:57',
            ),
            136 => 
            array (
                'id' => 137,
                'prefecture_id' => 1,
                'zipcode' => '0991100',
                'name' => '常呂郡置戸町',
                'created_at' => '2024-12-21 16:13:58',
                'updated_at' => '2024-12-21 16:13:58',
            ),
            137 => 
            array (
                'id' => 138,
                'prefecture_id' => 1,
                'zipcode' => '0930500',
                'name' => '常呂郡佐呂間町',
                'created_at' => '2024-12-21 16:13:58',
                'updated_at' => '2024-12-21 16:13:58',
            ),
            138 => 
            array (
                'id' => 139,
                'prefecture_id' => 1,
                'zipcode' => '0990400',
                'name' => '紋別郡遠軽町',
                'created_at' => '2024-12-21 16:13:58',
                'updated_at' => '2024-12-21 16:13:58',
            ),
            139 => 
            array (
                'id' => 140,
                'prefecture_id' => 1,
                'zipcode' => '0996400',
                'name' => '紋別郡湧別町',
                'created_at' => '2024-12-21 16:13:58',
                'updated_at' => '2024-12-21 16:13:58',
            ),
            140 => 
            array (
                'id' => 141,
                'prefecture_id' => 1,
                'zipcode' => '0995600',
                'name' => '紋別郡滝上町',
                'created_at' => '2024-12-21 16:13:58',
                'updated_at' => '2024-12-21 16:13:58',
            ),
            141 => 
            array (
                'id' => 142,
                'prefecture_id' => 1,
                'zipcode' => '0981600',
                'name' => '紋別郡興部町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            142 => 
            array (
                'id' => 143,
                'prefecture_id' => 1,
                'zipcode' => '0981500',
                'name' => '紋別郡西興部村',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            143 => 
            array (
                'id' => 144,
                'prefecture_id' => 1,
                'zipcode' => '0981700',
                'name' => '紋別郡雄武町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            144 => 
            array (
                'id' => 145,
                'prefecture_id' => 1,
                'zipcode' => '0992300',
                'name' => '網走郡大空町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            145 => 
            array (
                'id' => 146,
                'prefecture_id' => 1,
                'zipcode' => '0495400',
                'name' => '虻田郡豊浦町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            146 => 
            array (
                'id' => 147,
                'prefecture_id' => 1,
                'zipcode' => '0520100',
                'name' => '有珠郡壮瞥町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            147 => 
            array (
                'id' => 148,
                'prefecture_id' => 1,
                'zipcode' => '0590900',
                'name' => '白老郡白老町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            148 => 
            array (
                'id' => 149,
                'prefecture_id' => 1,
                'zipcode' => '0591600',
                'name' => '勇払郡厚真町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            149 => 
            array (
                'id' => 150,
                'prefecture_id' => 1,
                'zipcode' => '0495600',
                'name' => '虻田郡洞爺湖町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            150 => 
            array (
                'id' => 151,
                'prefecture_id' => 1,
                'zipcode' => '0591500',
                'name' => '勇払郡安平町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            151 => 
            array (
                'id' => 152,
                'prefecture_id' => 1,
                'zipcode' => '0540000',
                'name' => '勇払郡むかわ町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            152 => 
            array (
                'id' => 153,
                'prefecture_id' => 1,
                'zipcode' => '0550000',
                'name' => '沙流郡日高町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            153 => 
            array (
                'id' => 154,
                'prefecture_id' => 1,
                'zipcode' => '0550100',
                'name' => '沙流郡平取町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            154 => 
            array (
                'id' => 155,
                'prefecture_id' => 1,
                'zipcode' => '0592400',
                'name' => '新冠郡新冠町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            155 => 
            array (
                'id' => 156,
                'prefecture_id' => 1,
                'zipcode' => '0570000',
                'name' => '浦河郡浦河町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            156 => 
            array (
                'id' => 157,
                'prefecture_id' => 1,
                'zipcode' => '0580000',
                'name' => '様似郡様似町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            157 => 
            array (
                'id' => 158,
                'prefecture_id' => 1,
                'zipcode' => '0580200',
                'name' => '幌泉郡えりも町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            158 => 
            array (
                'id' => 159,
                'prefecture_id' => 1,
                'zipcode' => '0560000',
                'name' => '日高郡新ひだか町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            159 => 
            array (
                'id' => 160,
                'prefecture_id' => 1,
                'zipcode' => '0800100',
                'name' => '河東郡音更町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            160 => 
            array (
                'id' => 161,
                'prefecture_id' => 1,
                'zipcode' => '0801200',
                'name' => '河東郡士幌町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            161 => 
            array (
                'id' => 162,
                'prefecture_id' => 1,
                'zipcode' => '0801400',
                'name' => '河東郡上士幌町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            162 => 
            array (
                'id' => 163,
                'prefecture_id' => 1,
                'zipcode' => '0810200',
                'name' => '河東郡鹿追町',
                'created_at' => '2024-12-21 16:13:59',
                'updated_at' => '2024-12-21 16:13:59',
            ),
            163 => 
            array (
                'id' => 164,
                'prefecture_id' => 1,
                'zipcode' => '0810000',
                'name' => '上川郡新得町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            164 => 
            array (
                'id' => 165,
                'prefecture_id' => 1,
                'zipcode' => '0890100',
                'name' => '上川郡清水町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            165 => 
            array (
                'id' => 166,
                'prefecture_id' => 1,
                'zipcode' => '0820000',
                'name' => '河西郡芽室町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            166 => 
            array (
                'id' => 167,
                'prefecture_id' => 1,
                'zipcode' => '0891300',
                'name' => '河西郡中札内村',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            167 => 
            array (
                'id' => 168,
                'prefecture_id' => 1,
                'zipcode' => '0891500',
                'name' => '河西郡更別村',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            168 => 
            array (
                'id' => 169,
                'prefecture_id' => 1,
                'zipcode' => '0892100',
                'name' => '広尾郡大樹町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            169 => 
            array (
                'id' => 170,
                'prefecture_id' => 1,
                'zipcode' => '0892600',
                'name' => '広尾郡広尾町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            170 => 
            array (
                'id' => 171,
                'prefecture_id' => 1,
                'zipcode' => '0890600',
                'name' => '中川郡幕別町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            171 => 
            array (
                'id' => 172,
                'prefecture_id' => 1,
                'zipcode' => '0830000',
                'name' => '中川郡池田町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            172 => 
            array (
                'id' => 173,
                'prefecture_id' => 1,
                'zipcode' => '0895300',
                'name' => '中川郡豊頃町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            173 => 
            array (
                'id' => 174,
                'prefecture_id' => 1,
                'zipcode' => '0893300',
                'name' => '中川郡本別町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            174 => 
            array (
                'id' => 175,
                'prefecture_id' => 1,
                'zipcode' => '0893700',
                'name' => '足寄郡足寄町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            175 => 
            array (
                'id' => 176,
                'prefecture_id' => 1,
                'zipcode' => '0894300',
                'name' => '足寄郡陸別町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            176 => 
            array (
                'id' => 177,
                'prefecture_id' => 1,
                'zipcode' => '0895600',
                'name' => '十勝郡浦幌町',
                'created_at' => '2024-12-21 16:14:00',
                'updated_at' => '2024-12-21 16:14:00',
            ),
            177 => 
            array (
                'id' => 178,
                'prefecture_id' => 1,
                'zipcode' => '0880600',
                'name' => '釧路郡釧路町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            178 => 
            array (
                'id' => 179,
                'prefecture_id' => 1,
                'zipcode' => '0881100',
                'name' => '厚岸郡厚岸町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            179 => 
            array (
                'id' => 180,
                'prefecture_id' => 1,
                'zipcode' => '0881500',
                'name' => '厚岸郡浜中町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            180 => 
            array (
                'id' => 181,
                'prefecture_id' => 1,
                'zipcode' => '0882300',
                'name' => '川上郡標茶町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            181 => 
            array (
                'id' => 182,
                'prefecture_id' => 1,
                'zipcode' => '0883200',
                'name' => '川上郡弟子屈町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            182 => 
            array (
                'id' => 183,
                'prefecture_id' => 1,
                'zipcode' => '0851200',
                'name' => '阿寒郡鶴居村',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            183 => 
            array (
                'id' => 184,
                'prefecture_id' => 1,
                'zipcode' => '0880300',
                'name' => '白糠郡白糠町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            184 => 
            array (
                'id' => 185,
                'prefecture_id' => 1,
                'zipcode' => '0860200',
                'name' => '野付郡別海町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            185 => 
            array (
                'id' => 186,
                'prefecture_id' => 1,
                'zipcode' => '0861100',
                'name' => '標津郡中標津町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            186 => 
            array (
                'id' => 187,
                'prefecture_id' => 1,
                'zipcode' => '0861600',
                'name' => '標津郡標津町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            187 => 
            array (
                'id' => 188,
                'prefecture_id' => 1,
                'zipcode' => '0861800',
                'name' => '目梨郡羅臼町',
                'created_at' => '2024-12-21 16:14:01',
                'updated_at' => '2024-12-21 16:14:01',
            ),
            188 => 
            array (
                'id' => 189,
                'prefecture_id' => 2,
                'zipcode' => '0380000',
                'name' => '青森市',
                'created_at' => '2024-12-21 16:14:02',
                'updated_at' => '2024-12-21 16:14:02',
            ),
            189 => 
            array (
                'id' => 190,
                'prefecture_id' => 2,
                'zipcode' => '0360000',
                'name' => '弘前市',
                'created_at' => '2024-12-21 16:14:02',
                'updated_at' => '2024-12-21 16:14:02',
            ),
            190 => 
            array (
                'id' => 191,
                'prefecture_id' => 2,
                'zipcode' => '0310000',
                'name' => '八戸市',
                'created_at' => '2024-12-21 16:14:02',
                'updated_at' => '2024-12-21 16:14:02',
            ),
            191 => 
            array (
                'id' => 192,
                'prefecture_id' => 2,
                'zipcode' => '0360300',
                'name' => '黒石市',
                'created_at' => '2024-12-21 16:14:02',
                'updated_at' => '2024-12-21 16:14:02',
            ),
            192 => 
            array (
                'id' => 193,
                'prefecture_id' => 2,
                'zipcode' => '0370000',
                'name' => '五所川原市',
                'created_at' => '2024-12-21 16:14:02',
                'updated_at' => '2024-12-21 16:14:02',
            ),
            193 => 
            array (
                'id' => 194,
                'prefecture_id' => 2,
                'zipcode' => '0340000',
                'name' => '十和田市',
                'created_at' => '2024-12-21 16:14:03',
                'updated_at' => '2024-12-21 16:14:03',
            ),
            194 => 
            array (
                'id' => 195,
                'prefecture_id' => 2,
                'zipcode' => '0330000',
                'name' => '三沢市',
                'created_at' => '2024-12-21 16:14:03',
                'updated_at' => '2024-12-21 16:14:03',
            ),
            195 => 
            array (
                'id' => 196,
                'prefecture_id' => 2,
                'zipcode' => '0350000',
                'name' => 'むつ市',
                'created_at' => '2024-12-21 16:14:03',
                'updated_at' => '2024-12-21 16:14:03',
            ),
            196 => 
            array (
                'id' => 197,
                'prefecture_id' => 2,
                'zipcode' => '0383100',
                'name' => 'つがる市',
                'created_at' => '2024-12-21 16:14:03',
                'updated_at' => '2024-12-21 16:14:03',
            ),
            197 => 
            array (
                'id' => 198,
                'prefecture_id' => 2,
                'zipcode' => '0360100',
                'name' => '平川市',
                'created_at' => '2024-12-21 16:14:03',
                'updated_at' => '2024-12-21 16:14:03',
            ),
            198 => 
            array (
                'id' => 199,
                'prefecture_id' => 2,
                'zipcode' => '0393300',
                'name' => '東津軽郡平内町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            199 => 
            array (
                'id' => 200,
                'prefecture_id' => 2,
                'zipcode' => '0301500',
                'name' => '東津軽郡今別町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            200 => 
            array (
                'id' => 201,
                'prefecture_id' => 2,
                'zipcode' => '0301200',
                'name' => '東津軽郡蓬田村',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            201 => 
            array (
                'id' => 202,
                'prefecture_id' => 2,
                'zipcode' => '0301400',
                'name' => '東津軽郡外ヶ浜町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            202 => 
            array (
                'id' => 203,
                'prefecture_id' => 2,
                'zipcode' => '0382700',
                'name' => '西津軽郡鰺ヶ沢町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            203 => 
            array (
                'id' => 204,
                'prefecture_id' => 2,
                'zipcode' => '0382300',
                'name' => '西津軽郡深浦町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            204 => 
            array (
                'id' => 205,
                'prefecture_id' => 2,
                'zipcode' => '0361400',
                'name' => '中津軽郡西目屋村',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            205 => 
            array (
                'id' => 206,
                'prefecture_id' => 2,
                'zipcode' => '0383800',
                'name' => '南津軽郡藤崎町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            206 => 
            array (
                'id' => 207,
                'prefecture_id' => 2,
                'zipcode' => '0380200',
                'name' => '南津軽郡大鰐町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            207 => 
            array (
                'id' => 208,
                'prefecture_id' => 2,
                'zipcode' => '0381100',
                'name' => '南津軽郡田舎館村',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            208 => 
            array (
                'id' => 209,
                'prefecture_id' => 2,
                'zipcode' => '0383600',
                'name' => '北津軽郡板柳町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            209 => 
            array (
                'id' => 210,
                'prefecture_id' => 2,
                'zipcode' => '0383500',
                'name' => '北津軽郡鶴田町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            210 => 
            array (
                'id' => 211,
                'prefecture_id' => 2,
                'zipcode' => '0370300',
                'name' => '北津軽郡中泊町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            211 => 
            array (
                'id' => 212,
                'prefecture_id' => 2,
                'zipcode' => '0393100',
                'name' => '上北郡野辺地町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            212 => 
            array (
                'id' => 213,
                'prefecture_id' => 2,
                'zipcode' => '0392500',
                'name' => '上北郡七戸町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            213 => 
            array (
                'id' => 214,
                'prefecture_id' => 2,
                'zipcode' => '0392300',
                'name' => '上北郡六戸町',
                'created_at' => '2024-12-21 16:14:04',
                'updated_at' => '2024-12-21 16:14:04',
            ),
            214 => 
            array (
                'id' => 215,
                'prefecture_id' => 2,
                'zipcode' => '0394100',
                'name' => '上北郡横浜町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            215 => 
            array (
                'id' => 216,
                'prefecture_id' => 2,
                'zipcode' => '0392600',
                'name' => '上北郡東北町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            216 => 
            array (
                'id' => 217,
                'prefecture_id' => 2,
                'zipcode' => '0393200',
                'name' => '上北郡六ヶ所村',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            217 => 
            array (
                'id' => 218,
                'prefecture_id' => 2,
                'zipcode' => '0392200',
                'name' => '上北郡おいらせ町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            218 => 
            array (
                'id' => 219,
                'prefecture_id' => 2,
                'zipcode' => '0394600',
                'name' => '下北郡大間町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            219 => 
            array (
                'id' => 220,
                'prefecture_id' => 2,
                'zipcode' => '0350000',
                'name' => '下北郡東通村',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            220 => 
            array (
                'id' => 221,
                'prefecture_id' => 2,
                'zipcode' => '0394500',
                'name' => '下北郡風間浦村',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            221 => 
            array (
                'id' => 222,
                'prefecture_id' => 2,
                'zipcode' => '0394700',
                'name' => '下北郡佐井村',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            222 => 
            array (
                'id' => 223,
                'prefecture_id' => 2,
                'zipcode' => '0390100',
                'name' => '三戸郡三戸町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            223 => 
            array (
                'id' => 224,
                'prefecture_id' => 2,
                'zipcode' => '0391500',
                'name' => '三戸郡五戸町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            224 => 
            array (
                'id' => 225,
                'prefecture_id' => 2,
                'zipcode' => '0390200',
                'name' => '三戸郡田子町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            225 => 
            array (
                'id' => 226,
                'prefecture_id' => 2,
                'zipcode' => '0390100',
                'name' => '三戸郡南部町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            226 => 
            array (
                'id' => 227,
                'prefecture_id' => 2,
                'zipcode' => '0391200',
                'name' => '三戸郡階上町',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            227 => 
            array (
                'id' => 228,
                'prefecture_id' => 2,
                'zipcode' => '0391800',
                'name' => '三戸郡新郷村',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            228 => 
            array (
                'id' => 229,
                'prefecture_id' => 3,
                'zipcode' => '0200000',
                'name' => '盛岡市',
                'created_at' => '2024-12-21 16:14:05',
                'updated_at' => '2024-12-21 16:14:05',
            ),
            229 => 
            array (
                'id' => 230,
                'prefecture_id' => 3,
                'zipcode' => '0270000',
                'name' => '宮古市',
                'created_at' => '2024-12-21 16:14:06',
                'updated_at' => '2024-12-21 16:14:06',
            ),
            230 => 
            array (
                'id' => 231,
                'prefecture_id' => 3,
                'zipcode' => '0220000',
                'name' => '大船渡市',
                'created_at' => '2024-12-21 16:14:06',
                'updated_at' => '2024-12-21 16:14:06',
            ),
            231 => 
            array (
                'id' => 232,
                'prefecture_id' => 3,
                'zipcode' => '0250000',
                'name' => '花巻市',
                'created_at' => '2024-12-21 16:14:06',
                'updated_at' => '2024-12-21 16:14:06',
            ),
            232 => 
            array (
                'id' => 233,
                'prefecture_id' => 3,
                'zipcode' => '0240000',
                'name' => '北上市',
                'created_at' => '2024-12-21 16:14:06',
                'updated_at' => '2024-12-21 16:14:06',
            ),
            233 => 
            array (
                'id' => 234,
                'prefecture_id' => 3,
                'zipcode' => '0280000',
                'name' => '久慈市',
                'created_at' => '2024-12-21 16:14:06',
                'updated_at' => '2024-12-21 16:14:06',
            ),
            234 => 
            array (
                'id' => 235,
                'prefecture_id' => 3,
                'zipcode' => '0280500',
                'name' => '遠野市',
                'created_at' => '2024-12-21 16:14:06',
                'updated_at' => '2024-12-21 16:14:06',
            ),
            235 => 
            array (
                'id' => 236,
                'prefecture_id' => 3,
                'zipcode' => '0210000',
                'name' => '一関市',
                'created_at' => '2024-12-21 16:14:06',
                'updated_at' => '2024-12-21 16:14:06',
            ),
            236 => 
            array (
                'id' => 237,
                'prefecture_id' => 3,
                'zipcode' => '0292200',
                'name' => '陸前高田市',
                'created_at' => '2024-12-21 16:14:07',
                'updated_at' => '2024-12-21 16:14:07',
            ),
            237 => 
            array (
                'id' => 238,
                'prefecture_id' => 3,
                'zipcode' => '0260000',
                'name' => '釜石市',
                'created_at' => '2024-12-21 16:14:07',
                'updated_at' => '2024-12-21 16:14:07',
            ),
            238 => 
            array (
                'id' => 239,
                'prefecture_id' => 3,
                'zipcode' => '0286100',
                'name' => '二戸市',
                'created_at' => '2024-12-21 16:14:07',
                'updated_at' => '2024-12-21 16:14:07',
            ),
            239 => 
            array (
                'id' => 240,
                'prefecture_id' => 3,
                'zipcode' => '0287100',
                'name' => '八幡平市',
                'created_at' => '2024-12-21 16:14:07',
                'updated_at' => '2024-12-21 16:14:07',
            ),
            240 => 
            array (
                'id' => 241,
                'prefecture_id' => 3,
                'zipcode' => '0230000',
                'name' => '奥州市',
                'created_at' => '2024-12-21 16:14:07',
                'updated_at' => '2024-12-21 16:14:07',
            ),
            241 => 
            array (
                'id' => 242,
                'prefecture_id' => 3,
                'zipcode' => '0200600',
                'name' => '滝沢市',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            242 => 
            array (
                'id' => 243,
                'prefecture_id' => 3,
                'zipcode' => '0200500',
                'name' => '岩手郡雫石町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            243 => 
            array (
                'id' => 244,
                'prefecture_id' => 3,
                'zipcode' => '0285400',
                'name' => '岩手郡葛巻町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            244 => 
            array (
                'id' => 245,
                'prefecture_id' => 3,
                'zipcode' => '0284300',
                'name' => '岩手郡岩手町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            245 => 
            array (
                'id' => 246,
                'prefecture_id' => 3,
                'zipcode' => '0283300',
                'name' => '紫波郡紫波町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            246 => 
            array (
                'id' => 247,
                'prefecture_id' => 3,
                'zipcode' => '0283600',
                'name' => '紫波郡矢巾町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            247 => 
            array (
                'id' => 248,
                'prefecture_id' => 3,
                'zipcode' => '0295500',
                'name' => '和賀郡西和賀町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            248 => 
            array (
                'id' => 249,
                'prefecture_id' => 3,
                'zipcode' => '0294500',
                'name' => '胆沢郡金ケ崎町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            249 => 
            array (
                'id' => 250,
                'prefecture_id' => 3,
                'zipcode' => '0294100',
                'name' => '西磐井郡平泉町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            250 => 
            array (
                'id' => 251,
                'prefecture_id' => 3,
                'zipcode' => '0292300',
                'name' => '気仙郡住田町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            251 => 
            array (
                'id' => 252,
                'prefecture_id' => 3,
                'zipcode' => '0281100',
                'name' => '上閉伊郡大槌町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            252 => 
            array (
                'id' => 253,
                'prefecture_id' => 3,
                'zipcode' => '0281300',
                'name' => '下閉伊郡山田町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            253 => 
            array (
                'id' => 254,
                'prefecture_id' => 3,
                'zipcode' => '0270500',
                'name' => '下閉伊郡岩泉町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            254 => 
            array (
                'id' => 255,
                'prefecture_id' => 3,
                'zipcode' => '0288400',
                'name' => '下閉伊郡田野畑村',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            255 => 
            array (
                'id' => 256,
                'prefecture_id' => 3,
                'zipcode' => '0288300',
                'name' => '下閉伊郡普代村',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            256 => 
            array (
                'id' => 257,
                'prefecture_id' => 3,
                'zipcode' => '0286300',
                'name' => '九戸郡軽米町',
                'created_at' => '2024-12-21 16:14:08',
                'updated_at' => '2024-12-21 16:14:08',
            ),
            257 => 
            array (
                'id' => 258,
                'prefecture_id' => 3,
                'zipcode' => '0288200',
                'name' => '九戸郡野田村',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            258 => 
            array (
                'id' => 259,
                'prefecture_id' => 3,
                'zipcode' => '0286500',
                'name' => '九戸郡九戸村',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            259 => 
            array (
                'id' => 260,
                'prefecture_id' => 3,
                'zipcode' => '0287900',
                'name' => '九戸郡洋野町',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            260 => 
            array (
                'id' => 261,
                'prefecture_id' => 3,
                'zipcode' => '0285300',
                'name' => '二戸郡一戸町',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            261 => 
            array (
                'id' => 262,
                'prefecture_id' => 4,
                'zipcode' => '9800000',
                'name' => '仙台市青葉区',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            262 => 
            array (
                'id' => 263,
                'prefecture_id' => 4,
                'zipcode' => '9830000',
                'name' => '仙台市宮城野区',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            263 => 
            array (
                'id' => 264,
                'prefecture_id' => 4,
                'zipcode' => '9840000',
                'name' => '仙台市若林区',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            264 => 
            array (
                'id' => 265,
                'prefecture_id' => 4,
                'zipcode' => '9820000',
                'name' => '仙台市太白区',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            265 => 
            array (
                'id' => 266,
                'prefecture_id' => 4,
                'zipcode' => '9813100',
                'name' => '仙台市泉区',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            266 => 
            array (
                'id' => 267,
                'prefecture_id' => 4,
                'zipcode' => '9860000',
                'name' => '石巻市',
                'created_at' => '2024-12-21 16:14:09',
                'updated_at' => '2024-12-21 16:14:09',
            ),
            267 => 
            array (
                'id' => 268,
                'prefecture_id' => 4,
                'zipcode' => '9850000',
                'name' => '塩竈市',
                'created_at' => '2024-12-21 16:14:10',
                'updated_at' => '2024-12-21 16:14:10',
            ),
            268 => 
            array (
                'id' => 269,
                'prefecture_id' => 4,
                'zipcode' => '9880000',
                'name' => '気仙沼市',
                'created_at' => '2024-12-21 16:14:10',
                'updated_at' => '2024-12-21 16:14:10',
            ),
            269 => 
            array (
                'id' => 270,
                'prefecture_id' => 4,
                'zipcode' => '9890200',
                'name' => '白石市',
                'created_at' => '2024-12-21 16:14:10',
                'updated_at' => '2024-12-21 16:14:10',
            ),
            270 => 
            array (
                'id' => 271,
                'prefecture_id' => 4,
                'zipcode' => '9811200',
                'name' => '名取市',
                'created_at' => '2024-12-21 16:14:10',
                'updated_at' => '2024-12-21 16:14:10',
            ),
            271 => 
            array (
                'id' => 272,
                'prefecture_id' => 4,
                'zipcode' => '9811500',
                'name' => '角田市',
                'created_at' => '2024-12-21 16:14:10',
                'updated_at' => '2024-12-21 16:14:10',
            ),
            272 => 
            array (
                'id' => 273,
                'prefecture_id' => 4,
                'zipcode' => '9850000',
                'name' => '多賀城市',
                'created_at' => '2024-12-21 16:14:11',
                'updated_at' => '2024-12-21 16:14:11',
            ),
            273 => 
            array (
                'id' => 274,
                'prefecture_id' => 4,
                'zipcode' => '9892400',
                'name' => '岩沼市',
                'created_at' => '2024-12-21 16:14:11',
                'updated_at' => '2024-12-21 16:14:11',
            ),
            274 => 
            array (
                'id' => 275,
                'prefecture_id' => 4,
                'zipcode' => '9870500',
                'name' => '登米市',
                'created_at' => '2024-12-21 16:14:11',
                'updated_at' => '2024-12-21 16:14:11',
            ),
            275 => 
            array (
                'id' => 276,
                'prefecture_id' => 4,
                'zipcode' => '9872200',
                'name' => '栗原市',
                'created_at' => '2024-12-21 16:14:11',
                'updated_at' => '2024-12-21 16:14:11',
            ),
            276 => 
            array (
                'id' => 277,
                'prefecture_id' => 4,
                'zipcode' => '9810500',
                'name' => '東松島市',
                'created_at' => '2024-12-21 16:14:12',
                'updated_at' => '2024-12-21 16:14:12',
            ),
            277 => 
            array (
                'id' => 278,
                'prefecture_id' => 4,
                'zipcode' => '9896100',
                'name' => '大崎市',
                'created_at' => '2024-12-21 16:14:12',
                'updated_at' => '2024-12-21 16:14:12',
            ),
            278 => 
            array (
                'id' => 279,
                'prefecture_id' => 4,
                'zipcode' => '9813300',
                'name' => '富谷市',
                'created_at' => '2024-12-21 16:14:12',
                'updated_at' => '2024-12-21 16:14:12',
            ),
            279 => 
            array (
                'id' => 280,
                'prefecture_id' => 4,
                'zipcode' => '9890800',
                'name' => '刈田郡蔵王町',
                'created_at' => '2024-12-21 16:14:12',
                'updated_at' => '2024-12-21 16:14:12',
            ),
            280 => 
            array (
                'id' => 281,
                'prefecture_id' => 4,
                'zipcode' => '9890500',
                'name' => '刈田郡七ヶ宿町',
                'created_at' => '2024-12-21 16:14:12',
                'updated_at' => '2024-12-21 16:14:12',
            ),
            281 => 
            array (
                'id' => 282,
                'prefecture_id' => 4,
                'zipcode' => '9891200',
                'name' => '柴田郡大河原町',
                'created_at' => '2024-12-21 16:14:12',
                'updated_at' => '2024-12-21 16:14:12',
            ),
            282 => 
            array (
                'id' => 283,
                'prefecture_id' => 4,
                'zipcode' => '9891300',
                'name' => '柴田郡村田町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            283 => 
            array (
                'id' => 284,
                'prefecture_id' => 4,
                'zipcode' => '9891600',
                'name' => '柴田郡柴田町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            284 => 
            array (
                'id' => 285,
                'prefecture_id' => 4,
                'zipcode' => '9891500',
                'name' => '柴田郡川崎町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            285 => 
            array (
                'id' => 286,
                'prefecture_id' => 4,
                'zipcode' => '9812100',
                'name' => '伊具郡丸森町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            286 => 
            array (
                'id' => 287,
                'prefecture_id' => 4,
                'zipcode' => '9892300',
                'name' => '亘理郡亘理町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            287 => 
            array (
                'id' => 288,
                'prefecture_id' => 4,
                'zipcode' => '9892200',
                'name' => '亘理郡山元町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            288 => 
            array (
                'id' => 289,
                'prefecture_id' => 4,
                'zipcode' => '9810200',
                'name' => '宮城郡松島町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            289 => 
            array (
                'id' => 290,
                'prefecture_id' => 4,
                'zipcode' => '9850000',
                'name' => '宮城郡七ヶ浜町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            290 => 
            array (
                'id' => 291,
                'prefecture_id' => 4,
                'zipcode' => '9810100',
                'name' => '宮城郡利府町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            291 => 
            array (
                'id' => 292,
                'prefecture_id' => 4,
                'zipcode' => '9813600',
                'name' => '黒川郡大和町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            292 => 
            array (
                'id' => 293,
                'prefecture_id' => 4,
                'zipcode' => '9813500',
                'name' => '黒川郡大郷町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            293 => 
            array (
                'id' => 294,
                'prefecture_id' => 4,
                'zipcode' => '9813600',
                'name' => '黒川郡大衡村',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            294 => 
            array (
                'id' => 295,
                'prefecture_id' => 4,
                'zipcode' => '9814100',
                'name' => '加美郡色麻町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            295 => 
            array (
                'id' => 296,
                'prefecture_id' => 4,
                'zipcode' => '9814200',
                'name' => '加美郡加美町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            296 => 
            array (
                'id' => 297,
                'prefecture_id' => 4,
                'zipcode' => '9870100',
                'name' => '遠田郡涌谷町',
                'created_at' => '2024-12-21 16:14:13',
                'updated_at' => '2024-12-21 16:14:13',
            ),
            297 => 
            array (
                'id' => 298,
                'prefecture_id' => 4,
                'zipcode' => '9870000',
                'name' => '遠田郡美里町',
                'created_at' => '2024-12-21 16:14:14',
                'updated_at' => '2024-12-21 16:14:14',
            ),
            298 => 
            array (
                'id' => 299,
                'prefecture_id' => 4,
                'zipcode' => '9862200',
                'name' => '牡鹿郡女川町',
                'created_at' => '2024-12-21 16:14:14',
                'updated_at' => '2024-12-21 16:14:14',
            ),
            299 => 
            array (
                'id' => 300,
                'prefecture_id' => 4,
                'zipcode' => '9860700',
                'name' => '本吉郡南三陸町',
                'created_at' => '2024-12-21 16:14:14',
                'updated_at' => '2024-12-21 16:14:14',
            ),
            300 => 
            array (
                'id' => 301,
                'prefecture_id' => 5,
                'zipcode' => '0100000',
                'name' => '秋田市',
                'created_at' => '2024-12-21 16:14:14',
                'updated_at' => '2024-12-21 16:14:14',
            ),
            301 => 
            array (
                'id' => 302,
                'prefecture_id' => 5,
                'zipcode' => '0160000',
                'name' => '能代市',
                'created_at' => '2024-12-21 16:14:14',
                'updated_at' => '2024-12-21 16:14:14',
            ),
            302 => 
            array (
                'id' => 303,
                'prefecture_id' => 5,
                'zipcode' => '0130000',
                'name' => '横手市',
                'created_at' => '2024-12-21 16:14:15',
                'updated_at' => '2024-12-21 16:14:15',
            ),
            303 => 
            array (
                'id' => 304,
                'prefecture_id' => 5,
                'zipcode' => '0170000',
                'name' => '大館市',
                'created_at' => '2024-12-21 16:14:15',
                'updated_at' => '2024-12-21 16:14:15',
            ),
            304 => 
            array (
                'id' => 305,
                'prefecture_id' => 5,
                'zipcode' => '0100500',
                'name' => '男鹿市',
                'created_at' => '2024-12-21 16:14:15',
                'updated_at' => '2024-12-21 16:14:15',
            ),
            305 => 
            array (
                'id' => 306,
                'prefecture_id' => 5,
                'zipcode' => '0120000',
                'name' => '湯沢市',
                'created_at' => '2024-12-21 16:14:16',
                'updated_at' => '2024-12-21 16:14:16',
            ),
            306 => 
            array (
                'id' => 307,
                'prefecture_id' => 5,
                'zipcode' => '0185200',
                'name' => '鹿角市',
                'created_at' => '2024-12-21 16:14:16',
                'updated_at' => '2024-12-21 16:14:16',
            ),
            307 => 
            array (
                'id' => 308,
                'prefecture_id' => 5,
                'zipcode' => '0150000',
                'name' => '由利本荘市',
                'created_at' => '2024-12-21 16:14:16',
                'updated_at' => '2024-12-21 16:14:16',
            ),
            308 => 
            array (
                'id' => 309,
                'prefecture_id' => 5,
                'zipcode' => '0181400',
                'name' => '潟上市',
                'created_at' => '2024-12-21 16:14:16',
                'updated_at' => '2024-12-21 16:14:16',
            ),
            309 => 
            array (
                'id' => 310,
                'prefecture_id' => 5,
                'zipcode' => '0140000',
                'name' => '大仙市',
                'created_at' => '2024-12-21 16:14:16',
                'updated_at' => '2024-12-21 16:14:16',
            ),
            310 => 
            array (
                'id' => 311,
                'prefecture_id' => 5,
                'zipcode' => '0183300',
                'name' => '北秋田市',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            311 => 
            array (
                'id' => 312,
                'prefecture_id' => 5,
                'zipcode' => '0180400',
                'name' => 'にかほ市',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            312 => 
            array (
                'id' => 313,
                'prefecture_id' => 5,
                'zipcode' => '0140300',
                'name' => '仙北市',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            313 => 
            array (
                'id' => 314,
                'prefecture_id' => 5,
                'zipcode' => '0170200',
                'name' => '鹿角郡小坂町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            314 => 
            array (
                'id' => 315,
                'prefecture_id' => 5,
                'zipcode' => '0184400',
                'name' => '北秋田郡上小阿仁村',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            315 => 
            array (
                'id' => 316,
                'prefecture_id' => 5,
                'zipcode' => '0183200',
                'name' => '山本郡藤里町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            316 => 
            array (
                'id' => 317,
                'prefecture_id' => 5,
                'zipcode' => '0182400',
                'name' => '山本郡三種町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            317 => 
            array (
                'id' => 318,
                'prefecture_id' => 5,
                'zipcode' => '0182500',
                'name' => '山本郡八峰町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            318 => 
            array (
                'id' => 319,
                'prefecture_id' => 5,
                'zipcode' => '0181700',
                'name' => '南秋田郡五城目町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            319 => 
            array (
                'id' => 320,
                'prefecture_id' => 5,
                'zipcode' => '0181600',
                'name' => '南秋田郡八郎潟町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            320 => 
            array (
                'id' => 321,
                'prefecture_id' => 5,
                'zipcode' => '0181500',
                'name' => '南秋田郡井川町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            321 => 
            array (
                'id' => 322,
                'prefecture_id' => 5,
                'zipcode' => '0100400',
                'name' => '南秋田郡大潟村',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            322 => 
            array (
                'id' => 323,
                'prefecture_id' => 5,
                'zipcode' => '0191400',
                'name' => '仙北郡美郷町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            323 => 
            array (
                'id' => 324,
                'prefecture_id' => 5,
                'zipcode' => '0121100',
                'name' => '雄勝郡羽後町',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            324 => 
            array (
                'id' => 325,
                'prefecture_id' => 5,
                'zipcode' => '0190800',
                'name' => '雄勝郡東成瀬村',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            325 => 
            array (
                'id' => 326,
                'prefecture_id' => 6,
                'zipcode' => '9900000',
                'name' => '山形市',
                'created_at' => '2024-12-21 16:14:17',
                'updated_at' => '2024-12-21 16:14:17',
            ),
            326 => 
            array (
                'id' => 327,
                'prefecture_id' => 6,
                'zipcode' => '9920000',
                'name' => '米沢市',
                'created_at' => '2024-12-21 16:14:18',
                'updated_at' => '2024-12-21 16:14:18',
            ),
            327 => 
            array (
                'id' => 328,
                'prefecture_id' => 6,
                'zipcode' => '9970000',
                'name' => '鶴岡市',
                'created_at' => '2024-12-21 16:14:18',
                'updated_at' => '2024-12-21 16:14:18',
            ),
            328 => 
            array (
                'id' => 329,
                'prefecture_id' => 6,
                'zipcode' => '9980000',
                'name' => '酒田市',
                'created_at' => '2024-12-21 16:14:18',
                'updated_at' => '2024-12-21 16:14:18',
            ),
            329 => 
            array (
                'id' => 330,
                'prefecture_id' => 6,
                'zipcode' => '9960000',
                'name' => '新庄市',
                'created_at' => '2024-12-21 16:14:19',
                'updated_at' => '2024-12-21 16:14:19',
            ),
            330 => 
            array (
                'id' => 331,
                'prefecture_id' => 6,
                'zipcode' => '9910000',
                'name' => '寒河江市',
                'created_at' => '2024-12-21 16:14:19',
                'updated_at' => '2024-12-21 16:14:19',
            ),
            331 => 
            array (
                'id' => 332,
                'prefecture_id' => 6,
                'zipcode' => '9993100',
                'name' => '上山市',
                'created_at' => '2024-12-21 16:14:19',
                'updated_at' => '2024-12-21 16:14:19',
            ),
            332 => 
            array (
                'id' => 333,
                'prefecture_id' => 6,
                'zipcode' => '9950000',
                'name' => '村山市',
                'created_at' => '2024-12-21 16:14:19',
                'updated_at' => '2024-12-21 16:14:19',
            ),
            333 => 
            array (
                'id' => 334,
                'prefecture_id' => 6,
                'zipcode' => '9930000',
                'name' => '長井市',
                'created_at' => '2024-12-21 16:14:19',
                'updated_at' => '2024-12-21 16:14:19',
            ),
            334 => 
            array (
                'id' => 335,
                'prefecture_id' => 6,
                'zipcode' => '9940000',
                'name' => '天童市',
                'created_at' => '2024-12-21 16:14:19',
                'updated_at' => '2024-12-21 16:14:19',
            ),
            335 => 
            array (
                'id' => 336,
                'prefecture_id' => 6,
                'zipcode' => '9993700',
                'name' => '東根市',
                'created_at' => '2024-12-21 16:14:19',
                'updated_at' => '2024-12-21 16:14:19',
            ),
            336 => 
            array (
                'id' => 337,
                'prefecture_id' => 6,
                'zipcode' => '9994200',
                'name' => '尾花沢市',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            337 => 
            array (
                'id' => 338,
                'prefecture_id' => 6,
                'zipcode' => '9992200',
                'name' => '南陽市',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            338 => 
            array (
                'id' => 339,
                'prefecture_id' => 6,
                'zipcode' => '9900300',
                'name' => '東村山郡山辺町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            339 => 
            array (
                'id' => 340,
                'prefecture_id' => 6,
                'zipcode' => '9900400',
                'name' => '東村山郡中山町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            340 => 
            array (
                'id' => 341,
                'prefecture_id' => 6,
                'zipcode' => '9993500',
                'name' => '西村山郡河北町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            341 => 
            array (
                'id' => 342,
                'prefecture_id' => 6,
                'zipcode' => '9900700',
                'name' => '西村山郡西川町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            342 => 
            array (
                'id' => 343,
                'prefecture_id' => 6,
                'zipcode' => '9901400',
                'name' => '西村山郡朝日町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            343 => 
            array (
                'id' => 344,
                'prefecture_id' => 6,
                'zipcode' => '9901100',
                'name' => '西村山郡大江町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            344 => 
            array (
                'id' => 345,
                'prefecture_id' => 6,
                'zipcode' => '9994100',
                'name' => '北村山郡大石田町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            345 => 
            array (
                'id' => 346,
                'prefecture_id' => 6,
                'zipcode' => '9995400',
                'name' => '最上郡金山町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            346 => 
            array (
                'id' => 347,
                'prefecture_id' => 6,
                'zipcode' => '9996100',
                'name' => '最上郡最上町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            347 => 
            array (
                'id' => 348,
                'prefecture_id' => 6,
                'zipcode' => '9994600',
                'name' => '最上郡舟形町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            348 => 
            array (
                'id' => 349,
                'prefecture_id' => 6,
                'zipcode' => '9995300',
                'name' => '最上郡真室川町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            349 => 
            array (
                'id' => 350,
                'prefecture_id' => 6,
                'zipcode' => '9960200',
                'name' => '最上郡大蔵村',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            350 => 
            array (
                'id' => 351,
                'prefecture_id' => 6,
                'zipcode' => '9995200',
                'name' => '最上郡鮭川村',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            351 => 
            array (
                'id' => 352,
                'prefecture_id' => 6,
                'zipcode' => '9996400',
                'name' => '最上郡戸沢村',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            352 => 
            array (
                'id' => 353,
                'prefecture_id' => 6,
                'zipcode' => '9920300',
                'name' => '東置賜郡高畠町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            353 => 
            array (
                'id' => 354,
                'prefecture_id' => 6,
                'zipcode' => '9990100',
                'name' => '東置賜郡川西町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            354 => 
            array (
                'id' => 355,
                'prefecture_id' => 6,
                'zipcode' => '9991300',
                'name' => '西置賜郡小国町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            355 => 
            array (
                'id' => 356,
                'prefecture_id' => 6,
                'zipcode' => '9920800',
                'name' => '西置賜郡白鷹町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            356 => 
            array (
                'id' => 357,
                'prefecture_id' => 6,
                'zipcode' => '9990600',
                'name' => '西置賜郡飯豊町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            357 => 
            array (
                'id' => 358,
                'prefecture_id' => 6,
                'zipcode' => '9971300',
                'name' => '東田川郡三川町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            358 => 
            array (
                'id' => 359,
                'prefecture_id' => 6,
                'zipcode' => '9997700',
                'name' => '東田川郡庄内町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            359 => 
            array (
                'id' => 360,
                'prefecture_id' => 6,
                'zipcode' => '9998300',
                'name' => '飽海郡遊佐町',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            360 => 
            array (
                'id' => 361,
                'prefecture_id' => 7,
                'zipcode' => '9600000',
                'name' => '福島市',
                'created_at' => '2024-12-21 16:14:20',
                'updated_at' => '2024-12-21 16:14:20',
            ),
            361 => 
            array (
                'id' => 362,
                'prefecture_id' => 7,
                'zipcode' => '9650000',
                'name' => '会津若松市',
                'created_at' => '2024-12-21 16:14:21',
                'updated_at' => '2024-12-21 16:14:21',
            ),
            362 => 
            array (
                'id' => 363,
                'prefecture_id' => 7,
                'zipcode' => '9630000',
                'name' => '郡山市',
                'created_at' => '2024-12-21 16:14:21',
                'updated_at' => '2024-12-21 16:14:21',
            ),
            363 => 
            array (
                'id' => 364,
                'prefecture_id' => 7,
                'zipcode' => '9700000',
                'name' => 'いわき市',
                'created_at' => '2024-12-21 16:14:22',
                'updated_at' => '2024-12-21 16:14:22',
            ),
            364 => 
            array (
                'id' => 365,
                'prefecture_id' => 7,
                'zipcode' => '9610000',
                'name' => '白河市',
                'created_at' => '2024-12-21 16:14:22',
                'updated_at' => '2024-12-21 16:14:22',
            ),
            365 => 
            array (
                'id' => 366,
                'prefecture_id' => 7,
                'zipcode' => '9620000',
                'name' => '須賀川市',
                'created_at' => '2024-12-21 16:14:22',
                'updated_at' => '2024-12-21 16:14:22',
            ),
            366 => 
            array (
                'id' => 367,
                'prefecture_id' => 7,
                'zipcode' => '9660000',
                'name' => '喜多方市',
                'created_at' => '2024-12-21 16:14:23',
                'updated_at' => '2024-12-21 16:14:23',
            ),
            367 => 
            array (
                'id' => 368,
                'prefecture_id' => 7,
                'zipcode' => '9760000',
                'name' => '相馬市',
                'created_at' => '2024-12-21 16:14:23',
                'updated_at' => '2024-12-21 16:14:23',
            ),
            368 => 
            array (
                'id' => 369,
                'prefecture_id' => 7,
                'zipcode' => '9640000',
                'name' => '二本松市',
                'created_at' => '2024-12-21 16:14:23',
                'updated_at' => '2024-12-21 16:14:23',
            ),
            369 => 
            array (
                'id' => 370,
                'prefecture_id' => 7,
                'zipcode' => '9634300',
                'name' => '田村市',
                'created_at' => '2024-12-21 16:14:24',
                'updated_at' => '2024-12-21 16:14:24',
            ),
            370 => 
            array (
                'id' => 371,
                'prefecture_id' => 7,
                'zipcode' => '9750000',
                'name' => '南相馬市',
                'created_at' => '2024-12-21 16:14:24',
                'updated_at' => '2024-12-21 16:14:24',
            ),
            371 => 
            array (
                'id' => 372,
                'prefecture_id' => 7,
                'zipcode' => '9691100',
                'name' => '本宮市',
                'created_at' => '2024-12-21 16:14:24',
                'updated_at' => '2024-12-21 16:14:24',
            ),
            372 => 
            array (
                'id' => 373,
                'prefecture_id' => 7,
                'zipcode' => '9691600',
                'name' => '伊達郡桑折町',
                'created_at' => '2024-12-21 16:14:24',
                'updated_at' => '2024-12-21 16:14:24',
            ),
            373 => 
            array (
                'id' => 374,
                'prefecture_id' => 7,
                'zipcode' => '9691700',
                'name' => '伊達郡国見町',
                'created_at' => '2024-12-21 16:14:24',
                'updated_at' => '2024-12-21 16:14:24',
            ),
            374 => 
            array (
                'id' => 375,
                'prefecture_id' => 7,
                'zipcode' => '9601400',
                'name' => '伊達郡川俣町',
                'created_at' => '2024-12-21 16:14:24',
                'updated_at' => '2024-12-21 16:14:24',
            ),
            375 => 
            array (
                'id' => 376,
                'prefecture_id' => 7,
                'zipcode' => '9691300',
                'name' => '安達郡大玉村',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            376 => 
            array (
                'id' => 377,
                'prefecture_id' => 7,
                'zipcode' => '9690400',
                'name' => '岩瀬郡鏡石町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            377 => 
            array (
                'id' => 378,
                'prefecture_id' => 7,
                'zipcode' => '9620500',
                'name' => '岩瀬郡天栄村',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            378 => 
            array (
                'id' => 379,
                'prefecture_id' => 7,
                'zipcode' => '9695300',
                'name' => '南会津郡下郷町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            379 => 
            array (
                'id' => 380,
                'prefecture_id' => 7,
                'zipcode' => '9670500',
                'name' => '南会津郡檜枝岐村',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            380 => 
            array (
                'id' => 381,
                'prefecture_id' => 7,
                'zipcode' => '9680400',
                'name' => '南会津郡只見町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            381 => 
            array (
                'id' => 382,
                'prefecture_id' => 7,
                'zipcode' => '9670000',
                'name' => '南会津郡南会津町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            382 => 
            array (
                'id' => 383,
                'prefecture_id' => 7,
                'zipcode' => '9660400',
                'name' => '耶麻郡北塩原村',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            383 => 
            array (
                'id' => 384,
                'prefecture_id' => 7,
                'zipcode' => '9694400',
                'name' => '耶麻郡西会津町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            384 => 
            array (
                'id' => 385,
                'prefecture_id' => 7,
                'zipcode' => '9693300',
                'name' => '耶麻郡磐梯町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            385 => 
            array (
                'id' => 386,
                'prefecture_id' => 7,
                'zipcode' => '9693100',
                'name' => '耶麻郡猪苗代町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            386 => 
            array (
                'id' => 387,
                'prefecture_id' => 7,
                'zipcode' => '9696500',
                'name' => '河沼郡会津坂下町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            387 => 
            array (
                'id' => 388,
                'prefecture_id' => 7,
                'zipcode' => '9693500',
                'name' => '河沼郡湯川村',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            388 => 
            array (
                'id' => 389,
                'prefecture_id' => 7,
                'zipcode' => '9697200',
                'name' => '河沼郡柳津町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            389 => 
            array (
                'id' => 390,
                'prefecture_id' => 7,
                'zipcode' => '9697500',
                'name' => '大沼郡三島町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            390 => 
            array (
                'id' => 391,
                'prefecture_id' => 7,
                'zipcode' => '9680000',
                'name' => '大沼郡金山町',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            391 => 
            array (
                'id' => 392,
                'prefecture_id' => 7,
                'zipcode' => '9680100',
                'name' => '大沼郡昭和村',
                'created_at' => '2024-12-21 16:14:25',
                'updated_at' => '2024-12-21 16:14:25',
            ),
            392 => 
            array (
                'id' => 393,
                'prefecture_id' => 7,
                'zipcode' => '9696200',
                'name' => '大沼郡会津美里町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            393 => 
            array (
                'id' => 394,
                'prefecture_id' => 7,
                'zipcode' => '9610000',
                'name' => '西白河郡西郷村',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            394 => 
            array (
                'id' => 395,
                'prefecture_id' => 7,
                'zipcode' => '9690100',
                'name' => '西白河郡泉崎村',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            395 => 
            array (
                'id' => 396,
                'prefecture_id' => 7,
                'zipcode' => '9610100',
                'name' => '西白河郡中島村',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            396 => 
            array (
                'id' => 397,
                'prefecture_id' => 7,
                'zipcode' => '9690200',
                'name' => '西白河郡矢吹町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            397 => 
            array (
                'id' => 398,
                'prefecture_id' => 7,
                'zipcode' => '9636100',
                'name' => '東白川郡棚倉町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            398 => 
            array (
                'id' => 399,
                'prefecture_id' => 7,
                'zipcode' => '9635100',
                'name' => '東白川郡矢祭町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            399 => 
            array (
                'id' => 400,
                'prefecture_id' => 7,
                'zipcode' => '9635400',
                'name' => '東白川郡塙町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            400 => 
            array (
                'id' => 401,
                'prefecture_id' => 7,
                'zipcode' => '9638400',
                'name' => '東白川郡鮫川村',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            401 => 
            array (
                'id' => 402,
                'prefecture_id' => 7,
                'zipcode' => '9637800',
                'name' => '石川郡石川町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            402 => 
            array (
                'id' => 403,
                'prefecture_id' => 7,
                'zipcode' => '9636300',
                'name' => '石川郡玉川村',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            403 => 
            array (
                'id' => 404,
                'prefecture_id' => 7,
                'zipcode' => '9638100',
                'name' => '石川郡平田村',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            404 => 
            array (
                'id' => 405,
                'prefecture_id' => 7,
                'zipcode' => '9636200',
                'name' => '石川郡浅川町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            405 => 
            array (
                'id' => 406,
                'prefecture_id' => 7,
                'zipcode' => '9638300',
                'name' => '石川郡古殿町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            406 => 
            array (
                'id' => 407,
                'prefecture_id' => 7,
                'zipcode' => '9637700',
                'name' => '田村郡三春町',
                'created_at' => '2024-12-21 16:14:26',
                'updated_at' => '2024-12-21 16:14:26',
            ),
            407 => 
            array (
                'id' => 408,
                'prefecture_id' => 7,
                'zipcode' => '9633400',
                'name' => '田村郡小野町',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            408 => 
            array (
                'id' => 409,
                'prefecture_id' => 7,
                'zipcode' => '9790400',
                'name' => '双葉郡広野町',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            409 => 
            array (
                'id' => 410,
                'prefecture_id' => 7,
                'zipcode' => '9790600',
                'name' => '双葉郡楢葉町',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            410 => 
            array (
                'id' => 411,
                'prefecture_id' => 7,
                'zipcode' => '9791100',
                'name' => '双葉郡富岡町',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            411 => 
            array (
                'id' => 412,
                'prefecture_id' => 7,
                'zipcode' => '9791200',
                'name' => '双葉郡川内村',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            412 => 
            array (
                'id' => 413,
                'prefecture_id' => 7,
                'zipcode' => '9791300',
                'name' => '双葉郡大熊町',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            413 => 
            array (
                'id' => 414,
                'prefecture_id' => 7,
                'zipcode' => '9791400',
                'name' => '双葉郡双葉町',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            414 => 
            array (
                'id' => 415,
                'prefecture_id' => 7,
                'zipcode' => '9791500',
                'name' => '双葉郡浪江町',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            415 => 
            array (
                'id' => 416,
                'prefecture_id' => 7,
                'zipcode' => '9791600',
                'name' => '双葉郡葛尾村',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            416 => 
            array (
                'id' => 417,
                'prefecture_id' => 7,
                'zipcode' => '9792700',
                'name' => '相馬郡新地町',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            417 => 
            array (
                'id' => 418,
                'prefecture_id' => 7,
                'zipcode' => '9601600',
                'name' => '相馬郡飯舘村',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            418 => 
            array (
                'id' => 419,
                'prefecture_id' => 8,
                'zipcode' => '3100000',
                'name' => '水戸市',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            419 => 
            array (
                'id' => 420,
                'prefecture_id' => 8,
                'zipcode' => '3170000',
                'name' => '日立市',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            420 => 
            array (
                'id' => 421,
                'prefecture_id' => 8,
                'zipcode' => '3000000',
                'name' => '土浦市',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            421 => 
            array (
                'id' => 422,
                'prefecture_id' => 8,
                'zipcode' => '3060000',
                'name' => '古河市',
                'created_at' => '2024-12-21 16:14:27',
                'updated_at' => '2024-12-21 16:14:27',
            ),
            422 => 
            array (
                'id' => 423,
                'prefecture_id' => 8,
                'zipcode' => '3150000',
                'name' => '石岡市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            423 => 
            array (
                'id' => 424,
                'prefecture_id' => 8,
                'zipcode' => '3070000',
                'name' => '結城市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            424 => 
            array (
                'id' => 425,
                'prefecture_id' => 8,
                'zipcode' => '3010000',
                'name' => '龍ケ崎市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            425 => 
            array (
                'id' => 426,
                'prefecture_id' => 8,
                'zipcode' => '3040000',
                'name' => '下妻市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            426 => 
            array (
                'id' => 427,
                'prefecture_id' => 8,
                'zipcode' => '3030000',
                'name' => '常総市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            427 => 
            array (
                'id' => 428,
                'prefecture_id' => 8,
                'zipcode' => '3130000',
                'name' => '常陸太田市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            428 => 
            array (
                'id' => 429,
                'prefecture_id' => 8,
                'zipcode' => '3180000',
                'name' => '高萩市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            429 => 
            array (
                'id' => 430,
                'prefecture_id' => 8,
                'zipcode' => '3191500',
                'name' => '北茨城市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            430 => 
            array (
                'id' => 431,
                'prefecture_id' => 8,
                'zipcode' => '3091600',
                'name' => '笠間市',
                'created_at' => '2024-12-21 16:14:28',
                'updated_at' => '2024-12-21 16:14:28',
            ),
            431 => 
            array (
                'id' => 432,
                'prefecture_id' => 8,
                'zipcode' => '3020000',
                'name' => '取手市',
                'created_at' => '2024-12-21 16:14:29',
                'updated_at' => '2024-12-21 16:14:29',
            ),
            432 => 
            array (
                'id' => 433,
                'prefecture_id' => 8,
                'zipcode' => '3001200',
                'name' => '牛久市',
                'created_at' => '2024-12-21 16:14:29',
                'updated_at' => '2024-12-21 16:14:29',
            ),
            433 => 
            array (
                'id' => 434,
                'prefecture_id' => 8,
                'zipcode' => '3050000',
                'name' => 'つくば市',
                'created_at' => '2024-12-21 16:14:29',
                'updated_at' => '2024-12-21 16:14:29',
            ),
            434 => 
            array (
                'id' => 435,
                'prefecture_id' => 8,
                'zipcode' => '3120000',
                'name' => 'ひたちなか市',
                'created_at' => '2024-12-21 16:14:29',
                'updated_at' => '2024-12-21 16:14:29',
            ),
            435 => 
            array (
                'id' => 436,
                'prefecture_id' => 8,
                'zipcode' => '3140000',
                'name' => '鹿嶋市',
                'created_at' => '2024-12-21 16:14:29',
                'updated_at' => '2024-12-21 16:14:29',
            ),
            436 => 
            array (
                'id' => 437,
                'prefecture_id' => 8,
                'zipcode' => '3112400',
                'name' => '潮来市',
                'created_at' => '2024-12-21 16:14:29',
                'updated_at' => '2024-12-21 16:14:29',
            ),
            437 => 
            array (
                'id' => 438,
                'prefecture_id' => 8,
                'zipcode' => '3020100',
                'name' => '守谷市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            438 => 
            array (
                'id' => 439,
                'prefecture_id' => 8,
                'zipcode' => '3192200',
                'name' => '常陸大宮市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            439 => 
            array (
                'id' => 440,
                'prefecture_id' => 8,
                'zipcode' => '3110100',
                'name' => '那珂市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            440 => 
            array (
                'id' => 441,
                'prefecture_id' => 8,
                'zipcode' => '3080000',
                'name' => '筑西市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            441 => 
            array (
                'id' => 442,
                'prefecture_id' => 8,
                'zipcode' => '3060600',
                'name' => '坂東市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            442 => 
            array (
                'id' => 443,
                'prefecture_id' => 8,
                'zipcode' => '3000500',
                'name' => '稲敷市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            443 => 
            array (
                'id' => 444,
                'prefecture_id' => 8,
                'zipcode' => '3150000',
                'name' => 'かすみがうら市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            444 => 
            array (
                'id' => 445,
                'prefecture_id' => 8,
                'zipcode' => '3091200',
                'name' => '桜川市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            445 => 
            array (
                'id' => 446,
                'prefecture_id' => 8,
                'zipcode' => '3140100',
                'name' => '神栖市',
                'created_at' => '2024-12-21 16:14:30',
                'updated_at' => '2024-12-21 16:14:30',
            ),
            446 => 
            array (
                'id' => 447,
                'prefecture_id' => 8,
                'zipcode' => '3113800',
                'name' => '行方市',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            447 => 
            array (
                'id' => 448,
                'prefecture_id' => 8,
                'zipcode' => '3111500',
                'name' => '鉾田市',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            448 => 
            array (
                'id' => 449,
                'prefecture_id' => 8,
                'zipcode' => '3002300',
                'name' => 'つくばみらい市',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            449 => 
            array (
                'id' => 450,
                'prefecture_id' => 8,
                'zipcode' => '3190100',
                'name' => '小美玉市',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            450 => 
            array (
                'id' => 451,
                'prefecture_id' => 8,
                'zipcode' => '3113100',
                'name' => '東茨城郡茨城町',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            451 => 
            array (
                'id' => 452,
                'prefecture_id' => 8,
                'zipcode' => '3111300',
                'name' => '東茨城郡大洗町',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            452 => 
            array (
                'id' => 453,
                'prefecture_id' => 8,
                'zipcode' => '3114300',
                'name' => '東茨城郡城里町',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            453 => 
            array (
                'id' => 454,
                'prefecture_id' => 8,
                'zipcode' => '3191100',
                'name' => '那珂郡東海村',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            454 => 
            array (
                'id' => 455,
                'prefecture_id' => 8,
                'zipcode' => '3193500',
                'name' => '久慈郡大子町',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            455 => 
            array (
                'id' => 456,
                'prefecture_id' => 8,
                'zipcode' => '3000400',
                'name' => '稲敷郡美浦村',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            456 => 
            array (
                'id' => 457,
                'prefecture_id' => 8,
                'zipcode' => '3000300',
                'name' => '稲敷郡阿見町',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            457 => 
            array (
                'id' => 458,
                'prefecture_id' => 8,
                'zipcode' => '3001300',
                'name' => '稲敷郡河内町',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            458 => 
            array (
                'id' => 459,
                'prefecture_id' => 8,
                'zipcode' => '3003500',
                'name' => '結城郡八千代町',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            459 => 
            array (
                'id' => 460,
                'prefecture_id' => 8,
                'zipcode' => '3060300',
                'name' => '猿島郡五霞町',
                'created_at' => '2024-12-21 16:14:31',
                'updated_at' => '2024-12-21 16:14:31',
            ),
            460 => 
            array (
                'id' => 461,
                'prefecture_id' => 8,
                'zipcode' => '3060400',
                'name' => '猿島郡境町',
                'created_at' => '2024-12-21 16:14:32',
                'updated_at' => '2024-12-21 16:14:32',
            ),
            461 => 
            array (
                'id' => 462,
                'prefecture_id' => 8,
                'zipcode' => '3001600',
                'name' => '北相馬郡利根町',
                'created_at' => '2024-12-21 16:14:32',
                'updated_at' => '2024-12-21 16:14:32',
            ),
            462 => 
            array (
                'id' => 463,
                'prefecture_id' => 9,
                'zipcode' => '3210000',
                'name' => '宇都宮市',
                'created_at' => '2024-12-21 16:14:32',
                'updated_at' => '2024-12-21 16:14:32',
            ),
            463 => 
            array (
                'id' => 464,
                'prefecture_id' => 9,
                'zipcode' => '3260000',
                'name' => '足利市',
                'created_at' => '2024-12-21 16:14:32',
                'updated_at' => '2024-12-21 16:14:32',
            ),
            464 => 
            array (
                'id' => 465,
                'prefecture_id' => 9,
                'zipcode' => '3280000',
                'name' => '栃木市',
                'created_at' => '2024-12-21 16:14:32',
                'updated_at' => '2024-12-21 16:14:32',
            ),
            465 => 
            array (
                'id' => 466,
                'prefecture_id' => 9,
                'zipcode' => '3270000',
                'name' => '佐野市',
                'created_at' => '2024-12-21 16:14:32',
                'updated_at' => '2024-12-21 16:14:32',
            ),
            466 => 
            array (
                'id' => 467,
                'prefecture_id' => 9,
                'zipcode' => '3220000',
                'name' => '鹿沼市',
                'created_at' => '2024-12-21 16:14:33',
                'updated_at' => '2024-12-21 16:14:33',
            ),
            467 => 
            array (
                'id' => 468,
                'prefecture_id' => 9,
                'zipcode' => '3211200',
                'name' => '日光市',
                'created_at' => '2024-12-21 16:14:33',
                'updated_at' => '2024-12-21 16:14:33',
            ),
            468 => 
            array (
                'id' => 469,
                'prefecture_id' => 9,
                'zipcode' => '3230000',
                'name' => '小山市',
                'created_at' => '2024-12-21 16:14:33',
                'updated_at' => '2024-12-21 16:14:33',
            ),
            469 => 
            array (
                'id' => 470,
                'prefecture_id' => 9,
                'zipcode' => '3214300',
                'name' => '真岡市',
                'created_at' => '2024-12-21 16:14:33',
                'updated_at' => '2024-12-21 16:14:33',
            ),
            470 => 
            array (
                'id' => 471,
                'prefecture_id' => 9,
                'zipcode' => '3240000',
                'name' => '大田原市',
                'created_at' => '2024-12-21 16:14:33',
                'updated_at' => '2024-12-21 16:14:33',
            ),
            471 => 
            array (
                'id' => 472,
                'prefecture_id' => 9,
                'zipcode' => '3292100',
                'name' => '矢板市',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            472 => 
            array (
                'id' => 473,
                'prefecture_id' => 9,
                'zipcode' => '3250000',
                'name' => '那須塩原市',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            473 => 
            array (
                'id' => 474,
                'prefecture_id' => 9,
                'zipcode' => '3291300',
                'name' => 'さくら市',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            474 => 
            array (
                'id' => 475,
                'prefecture_id' => 9,
                'zipcode' => '3210600',
                'name' => '那須烏山市',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            475 => 
            array (
                'id' => 476,
                'prefecture_id' => 9,
                'zipcode' => '3290400',
                'name' => '下野市',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            476 => 
            array (
                'id' => 477,
                'prefecture_id' => 9,
                'zipcode' => '3290600',
                'name' => '河内郡上三川町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            477 => 
            array (
                'id' => 478,
                'prefecture_id' => 9,
                'zipcode' => '3214200',
                'name' => '芳賀郡益子町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            478 => 
            array (
                'id' => 479,
                'prefecture_id' => 9,
                'zipcode' => '3213500',
                'name' => '芳賀郡茂木町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            479 => 
            array (
                'id' => 480,
                'prefecture_id' => 9,
                'zipcode' => '3213400',
                'name' => '芳賀郡市貝町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            480 => 
            array (
                'id' => 481,
                'prefecture_id' => 9,
                'zipcode' => '3213300',
                'name' => '芳賀郡芳賀町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            481 => 
            array (
                'id' => 482,
                'prefecture_id' => 9,
                'zipcode' => '3210200',
                'name' => '下都賀郡壬生町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            482 => 
            array (
                'id' => 483,
                'prefecture_id' => 9,
                'zipcode' => '3290100',
                'name' => '下都賀郡野木町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            483 => 
            array (
                'id' => 484,
                'prefecture_id' => 9,
                'zipcode' => '3292200',
                'name' => '塩谷郡塩谷町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            484 => 
            array (
                'id' => 485,
                'prefecture_id' => 9,
                'zipcode' => '3291200',
                'name' => '塩谷郡高根沢町',
                'created_at' => '2024-12-21 16:14:34',
                'updated_at' => '2024-12-21 16:14:34',
            ),
            485 => 
            array (
                'id' => 486,
                'prefecture_id' => 9,
                'zipcode' => '3293200',
                'name' => '那須郡那須町',
                'created_at' => '2024-12-21 16:14:35',
                'updated_at' => '2024-12-21 16:14:35',
            ),
            486 => 
            array (
                'id' => 487,
                'prefecture_id' => 9,
                'zipcode' => '3240600',
                'name' => '那須郡那珂川町',
                'created_at' => '2024-12-21 16:14:35',
                'updated_at' => '2024-12-21 16:14:35',
            ),
            487 => 
            array (
                'id' => 488,
                'prefecture_id' => 10,
                'zipcode' => '3710000',
                'name' => '前橋市',
                'created_at' => '2024-12-21 16:14:35',
                'updated_at' => '2024-12-21 16:14:35',
            ),
            488 => 
            array (
                'id' => 489,
                'prefecture_id' => 10,
                'zipcode' => '3700000',
                'name' => '高崎市',
                'created_at' => '2024-12-21 16:14:35',
                'updated_at' => '2024-12-21 16:14:35',
            ),
            489 => 
            array (
                'id' => 490,
                'prefecture_id' => 10,
                'zipcode' => '3760000',
                'name' => '桐生市',
                'created_at' => '2024-12-21 16:14:35',
                'updated_at' => '2024-12-21 16:14:35',
            ),
            490 => 
            array (
                'id' => 491,
                'prefecture_id' => 10,
                'zipcode' => '3720000',
                'name' => '伊勢崎市',
                'created_at' => '2024-12-21 16:14:35',
                'updated_at' => '2024-12-21 16:14:35',
            ),
            491 => 
            array (
                'id' => 492,
                'prefecture_id' => 10,
                'zipcode' => '3730000',
                'name' => '太田市',
                'created_at' => '2024-12-21 16:14:36',
                'updated_at' => '2024-12-21 16:14:36',
            ),
            492 => 
            array (
                'id' => 493,
                'prefecture_id' => 10,
                'zipcode' => '3780000',
                'name' => '沼田市',
                'created_at' => '2024-12-21 16:14:36',
                'updated_at' => '2024-12-21 16:14:36',
            ),
            493 => 
            array (
                'id' => 494,
                'prefecture_id' => 10,
                'zipcode' => '3740000',
                'name' => '館林市',
                'created_at' => '2024-12-21 16:14:36',
                'updated_at' => '2024-12-21 16:14:36',
            ),
            494 => 
            array (
                'id' => 495,
                'prefecture_id' => 10,
                'zipcode' => '3770000',
                'name' => '渋川市',
                'created_at' => '2024-12-21 16:14:36',
                'updated_at' => '2024-12-21 16:14:36',
            ),
            495 => 
            array (
                'id' => 496,
                'prefecture_id' => 10,
                'zipcode' => '3750000',
                'name' => '藤岡市',
                'created_at' => '2024-12-21 16:14:36',
                'updated_at' => '2024-12-21 16:14:36',
            ),
            496 => 
            array (
                'id' => 497,
                'prefecture_id' => 10,
                'zipcode' => '3702300',
                'name' => '富岡市',
                'created_at' => '2024-12-21 16:14:36',
                'updated_at' => '2024-12-21 16:14:36',
            ),
            497 => 
            array (
                'id' => 498,
                'prefecture_id' => 10,
                'zipcode' => '3790100',
                'name' => '安中市',
                'created_at' => '2024-12-21 16:14:36',
                'updated_at' => '2024-12-21 16:14:36',
            ),
            498 => 
            array (
                'id' => 499,
                'prefecture_id' => 10,
                'zipcode' => '3760100',
                'name' => 'みどり市',
                'created_at' => '2024-12-21 16:14:36',
                'updated_at' => '2024-12-21 16:14:36',
            ),
            499 => 
            array (
                'id' => 500,
                'prefecture_id' => 10,
                'zipcode' => '3703500',
                'name' => '北群馬郡榛東村',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
        ));
        \DB::table('cities')->insert(array (
            0 => 
            array (
                'id' => 501,
                'prefecture_id' => 10,
                'zipcode' => '3703600',
                'name' => '北群馬郡吉岡町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            1 => 
            array (
                'id' => 502,
                'prefecture_id' => 10,
                'zipcode' => '3701600',
                'name' => '多野郡上野村',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            2 => 
            array (
                'id' => 503,
                'prefecture_id' => 10,
                'zipcode' => '3701600',
                'name' => '多野郡神流町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            3 => 
            array (
                'id' => 504,
                'prefecture_id' => 10,
                'zipcode' => '3702600',
                'name' => '甘楽郡下仁田町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            4 => 
            array (
                'id' => 505,
                'prefecture_id' => 10,
                'zipcode' => '3702800',
                'name' => '甘楽郡南牧村',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            5 => 
            array (
                'id' => 506,
                'prefecture_id' => 10,
                'zipcode' => '3702200',
                'name' => '甘楽郡甘楽町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            6 => 
            array (
                'id' => 507,
                'prefecture_id' => 10,
                'zipcode' => '3770400',
                'name' => '吾妻郡中之条町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            7 => 
            array (
                'id' => 508,
                'prefecture_id' => 10,
                'zipcode' => '3771300',
                'name' => '吾妻郡長野原町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            8 => 
            array (
                'id' => 509,
                'prefecture_id' => 10,
                'zipcode' => '3771500',
                'name' => '吾妻郡嬬恋村',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            9 => 
            array (
                'id' => 510,
                'prefecture_id' => 10,
                'zipcode' => '3771700',
                'name' => '吾妻郡草津町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            10 => 
            array (
                'id' => 511,
                'prefecture_id' => 10,
                'zipcode' => '3770700',
                'name' => '吾妻郡高山村',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            11 => 
            array (
                'id' => 512,
                'prefecture_id' => 10,
                'zipcode' => '3770800',
                'name' => '吾妻郡東吾妻町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            12 => 
            array (
                'id' => 513,
                'prefecture_id' => 10,
                'zipcode' => '3780400',
                'name' => '利根郡片品村',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            13 => 
            array (
                'id' => 514,
                'prefecture_id' => 10,
                'zipcode' => '3780100',
                'name' => '利根郡川場村',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            14 => 
            array (
                'id' => 515,
                'prefecture_id' => 10,
                'zipcode' => '3791200',
                'name' => '利根郡昭和村',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            15 => 
            array (
                'id' => 516,
                'prefecture_id' => 10,
                'zipcode' => '3791300',
                'name' => '利根郡みなかみ町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            16 => 
            array (
                'id' => 517,
                'prefecture_id' => 10,
                'zipcode' => '3701100',
                'name' => '佐波郡玉村町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            17 => 
            array (
                'id' => 518,
                'prefecture_id' => 10,
                'zipcode' => '3740100',
                'name' => '邑楽郡板倉町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            18 => 
            array (
                'id' => 519,
                'prefecture_id' => 10,
                'zipcode' => '3700700',
                'name' => '邑楽郡明和町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            19 => 
            array (
                'id' => 520,
                'prefecture_id' => 10,
                'zipcode' => '3700500',
                'name' => '邑楽郡千代田町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            20 => 
            array (
                'id' => 521,
                'prefecture_id' => 10,
                'zipcode' => '3700500',
                'name' => '邑楽郡大泉町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            21 => 
            array (
                'id' => 522,
                'prefecture_id' => 10,
                'zipcode' => '3700600',
                'name' => '邑楽郡邑楽町',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            22 => 
            array (
                'id' => 523,
                'prefecture_id' => 11,
                'zipcode' => '3310000',
                'name' => 'さいたま市西区',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            23 => 
            array (
                'id' => 524,
                'prefecture_id' => 11,
                'zipcode' => '3310800',
                'name' => 'さいたま市北区',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            24 => 
            array (
                'id' => 525,
                'prefecture_id' => 11,
                'zipcode' => '3300800',
                'name' => 'さいたま市大宮区',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            25 => 
            array (
                'id' => 526,
                'prefecture_id' => 11,
                'zipcode' => '3370000',
                'name' => 'さいたま市見沼区',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            26 => 
            array (
                'id' => 527,
                'prefecture_id' => 11,
                'zipcode' => '3300000',
                'name' => 'さいたま市中央区',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            27 => 
            array (
                'id' => 528,
                'prefecture_id' => 11,
                'zipcode' => '3380800',
                'name' => 'さいたま市桜区',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            28 => 
            array (
                'id' => 529,
                'prefecture_id' => 11,
                'zipcode' => '3300000',
                'name' => 'さいたま市浦和区',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            29 => 
            array (
                'id' => 530,
                'prefecture_id' => 11,
                'zipcode' => '3360000',
                'name' => 'さいたま市南区',
                'created_at' => '2024-12-21 16:14:37',
                'updated_at' => '2024-12-21 16:14:37',
            ),
            30 => 
            array (
                'id' => 531,
                'prefecture_id' => 11,
                'zipcode' => '3360900',
                'name' => 'さいたま市緑区',
                'created_at' => '2024-12-21 16:14:38',
                'updated_at' => '2024-12-21 16:14:38',
            ),
            31 => 
            array (
                'id' => 532,
                'prefecture_id' => 11,
                'zipcode' => '3390000',
                'name' => 'さいたま市岩槻区',
                'created_at' => '2024-12-21 16:14:38',
                'updated_at' => '2024-12-21 16:14:38',
            ),
            32 => 
            array (
                'id' => 533,
                'prefecture_id' => 11,
                'zipcode' => '3501100',
                'name' => '川越市',
                'created_at' => '2024-12-21 16:14:38',
                'updated_at' => '2024-12-21 16:14:38',
            ),
            33 => 
            array (
                'id' => 534,
                'prefecture_id' => 11,
                'zipcode' => '3600000',
                'name' => '熊谷市',
                'created_at' => '2024-12-21 16:14:38',
                'updated_at' => '2024-12-21 16:14:38',
            ),
            34 => 
            array (
                'id' => 535,
                'prefecture_id' => 11,
                'zipcode' => '3320000',
                'name' => '川口市',
                'created_at' => '2024-12-21 16:14:38',
                'updated_at' => '2024-12-21 16:14:38',
            ),
            35 => 
            array (
                'id' => 536,
                'prefecture_id' => 11,
                'zipcode' => '3610000',
                'name' => '行田市',
                'created_at' => '2024-12-21 16:14:38',
                'updated_at' => '2024-12-21 16:14:38',
            ),
            36 => 
            array (
                'id' => 537,
                'prefecture_id' => 11,
                'zipcode' => '3680000',
                'name' => '秩父市',
                'created_at' => '2024-12-21 16:14:38',
                'updated_at' => '2024-12-21 16:14:38',
            ),
            37 => 
            array (
                'id' => 538,
                'prefecture_id' => 11,
                'zipcode' => '3590000',
                'name' => '所沢市',
                'created_at' => '2024-12-21 16:14:39',
                'updated_at' => '2024-12-21 16:14:39',
            ),
            38 => 
            array (
                'id' => 539,
                'prefecture_id' => 11,
                'zipcode' => '3570000',
                'name' => '飯能市',
                'created_at' => '2024-12-21 16:14:39',
                'updated_at' => '2024-12-21 16:14:39',
            ),
            39 => 
            array (
                'id' => 540,
                'prefecture_id' => 11,
                'zipcode' => '3470000',
                'name' => '加須市',
                'created_at' => '2024-12-21 16:14:39',
                'updated_at' => '2024-12-21 16:14:39',
            ),
            40 => 
            array (
                'id' => 541,
                'prefecture_id' => 11,
                'zipcode' => '3670000',
                'name' => '本庄市',
                'created_at' => '2024-12-21 16:14:39',
                'updated_at' => '2024-12-21 16:14:39',
            ),
            41 => 
            array (
                'id' => 542,
                'prefecture_id' => 11,
                'zipcode' => '3550000',
                'name' => '東松山市',
                'created_at' => '2024-12-21 16:14:39',
                'updated_at' => '2024-12-21 16:14:39',
            ),
            42 => 
            array (
                'id' => 543,
                'prefecture_id' => 11,
                'zipcode' => '3440000',
                'name' => '春日部市',
                'created_at' => '2024-12-21 16:14:39',
                'updated_at' => '2024-12-21 16:14:39',
            ),
            43 => 
            array (
                'id' => 544,
                'prefecture_id' => 11,
                'zipcode' => '3501300',
                'name' => '狭山市',
                'created_at' => '2024-12-21 16:14:39',
                'updated_at' => '2024-12-21 16:14:39',
            ),
            44 => 
            array (
                'id' => 545,
                'prefecture_id' => 11,
                'zipcode' => '3480000',
                'name' => '羽生市',
                'created_at' => '2024-12-21 16:14:39',
                'updated_at' => '2024-12-21 16:14:39',
            ),
            45 => 
            array (
                'id' => 546,
                'prefecture_id' => 11,
                'zipcode' => '3650000',
                'name' => '鴻巣市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            46 => 
            array (
                'id' => 547,
                'prefecture_id' => 11,
                'zipcode' => '3660000',
                'name' => '深谷市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            47 => 
            array (
                'id' => 548,
                'prefecture_id' => 11,
                'zipcode' => '3620000',
                'name' => '上尾市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            48 => 
            array (
                'id' => 549,
                'prefecture_id' => 11,
                'zipcode' => '3400000',
                'name' => '草加市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            49 => 
            array (
                'id' => 550,
                'prefecture_id' => 11,
                'zipcode' => '3430000',
                'name' => '越谷市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            50 => 
            array (
                'id' => 551,
                'prefecture_id' => 11,
                'zipcode' => '3350000',
                'name' => '蕨市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            51 => 
            array (
                'id' => 552,
                'prefecture_id' => 11,
                'zipcode' => '3350000',
                'name' => '戸田市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            52 => 
            array (
                'id' => 553,
                'prefecture_id' => 11,
                'zipcode' => '3580000',
                'name' => '入間市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            53 => 
            array (
                'id' => 554,
                'prefecture_id' => 11,
                'zipcode' => '3510000',
                'name' => '朝霞市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            54 => 
            array (
                'id' => 555,
                'prefecture_id' => 11,
                'zipcode' => '3530000',
                'name' => '志木市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            55 => 
            array (
                'id' => 556,
                'prefecture_id' => 11,
                'zipcode' => '3510100',
                'name' => '和光市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            56 => 
            array (
                'id' => 557,
                'prefecture_id' => 11,
                'zipcode' => '3520000',
                'name' => '新座市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            57 => 
            array (
                'id' => 558,
                'prefecture_id' => 11,
                'zipcode' => '3630000',
                'name' => '桶川市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            58 => 
            array (
                'id' => 559,
                'prefecture_id' => 11,
                'zipcode' => '3460000',
                'name' => '久喜市',
                'created_at' => '2024-12-21 16:14:40',
                'updated_at' => '2024-12-21 16:14:40',
            ),
            59 => 
            array (
                'id' => 560,
                'prefecture_id' => 11,
                'zipcode' => '3640000',
                'name' => '北本市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            60 => 
            array (
                'id' => 561,
                'prefecture_id' => 11,
                'zipcode' => '3400800',
                'name' => '八潮市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            61 => 
            array (
                'id' => 562,
                'prefecture_id' => 11,
                'zipcode' => '3540000',
                'name' => '富士見市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            62 => 
            array (
                'id' => 563,
                'prefecture_id' => 11,
                'zipcode' => '3410000',
                'name' => '三郷市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            63 => 
            array (
                'id' => 564,
                'prefecture_id' => 11,
                'zipcode' => '3490100',
                'name' => '蓮田市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            64 => 
            array (
                'id' => 565,
                'prefecture_id' => 11,
                'zipcode' => '3500200',
                'name' => '坂戸市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            65 => 
            array (
                'id' => 566,
                'prefecture_id' => 11,
                'zipcode' => '3400100',
                'name' => '幸手市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            66 => 
            array (
                'id' => 567,
                'prefecture_id' => 11,
                'zipcode' => '3502200',
                'name' => '鶴ヶ島市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            67 => 
            array (
                'id' => 568,
                'prefecture_id' => 11,
                'zipcode' => '3501200',
                'name' => '日高市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            68 => 
            array (
                'id' => 569,
                'prefecture_id' => 11,
                'zipcode' => '3420000',
                'name' => '吉川市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            69 => 
            array (
                'id' => 570,
                'prefecture_id' => 11,
                'zipcode' => '3560000',
                'name' => 'ふじみ野市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            70 => 
            array (
                'id' => 571,
                'prefecture_id' => 11,
                'zipcode' => '3490200',
                'name' => '白岡市',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            71 => 
            array (
                'id' => 572,
                'prefecture_id' => 11,
                'zipcode' => '3620800',
                'name' => '北足立郡伊奈町',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            72 => 
            array (
                'id' => 573,
                'prefecture_id' => 11,
                'zipcode' => '3540000',
                'name' => '入間郡三芳町',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            73 => 
            array (
                'id' => 574,
                'prefecture_id' => 11,
                'zipcode' => '3500400',
                'name' => '入間郡毛呂山町',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            74 => 
            array (
                'id' => 575,
                'prefecture_id' => 11,
                'zipcode' => '3500400',
                'name' => '入間郡越生町',
                'created_at' => '2024-12-21 16:14:41',
                'updated_at' => '2024-12-21 16:14:41',
            ),
            75 => 
            array (
                'id' => 576,
                'prefecture_id' => 11,
                'zipcode' => '3550800',
                'name' => '比企郡滑川町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            76 => 
            array (
                'id' => 577,
                'prefecture_id' => 11,
                'zipcode' => '3550200',
                'name' => '比企郡嵐山町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            77 => 
            array (
                'id' => 578,
                'prefecture_id' => 11,
                'zipcode' => '3550300',
                'name' => '比企郡小川町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            78 => 
            array (
                'id' => 579,
                'prefecture_id' => 11,
                'zipcode' => '3500100',
                'name' => '比企郡川島町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            79 => 
            array (
                'id' => 580,
                'prefecture_id' => 11,
                'zipcode' => '3550100',
                'name' => '比企郡吉見町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            80 => 
            array (
                'id' => 581,
                'prefecture_id' => 11,
                'zipcode' => '3500300',
                'name' => '比企郡鳩山町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            81 => 
            array (
                'id' => 582,
                'prefecture_id' => 11,
                'zipcode' => '3550300',
                'name' => '比企郡ときがわ町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            82 => 
            array (
                'id' => 583,
                'prefecture_id' => 11,
                'zipcode' => '3680000',
                'name' => '秩父郡横瀬町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            83 => 
            array (
                'id' => 584,
                'prefecture_id' => 11,
                'zipcode' => '3691400',
                'name' => '秩父郡皆野町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            84 => 
            array (
                'id' => 585,
                'prefecture_id' => 11,
                'zipcode' => '3691300',
                'name' => '秩父郡長瀞町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            85 => 
            array (
                'id' => 586,
                'prefecture_id' => 11,
                'zipcode' => '3680100',
                'name' => '秩父郡小鹿野町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            86 => 
            array (
                'id' => 587,
                'prefecture_id' => 11,
                'zipcode' => '3550300',
                'name' => '秩父郡東秩父村',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            87 => 
            array (
                'id' => 588,
                'prefecture_id' => 11,
                'zipcode' => '3670100',
                'name' => '児玉郡美里町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            88 => 
            array (
                'id' => 589,
                'prefecture_id' => 11,
                'zipcode' => '3670200',
                'name' => '児玉郡神川町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            89 => 
            array (
                'id' => 590,
                'prefecture_id' => 11,
                'zipcode' => '3690300',
                'name' => '児玉郡上里町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            90 => 
            array (
                'id' => 591,
                'prefecture_id' => 11,
                'zipcode' => '3691200',
                'name' => '大里郡寄居町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            91 => 
            array (
                'id' => 592,
                'prefecture_id' => 11,
                'zipcode' => '3450000',
                'name' => '南埼玉郡宮代町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            92 => 
            array (
                'id' => 593,
                'prefecture_id' => 11,
                'zipcode' => '3450000',
                'name' => '北葛飾郡杉戸町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            93 => 
            array (
                'id' => 594,
                'prefecture_id' => 11,
                'zipcode' => '3430100',
                'name' => '北葛飾郡松伏町',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            94 => 
            array (
                'id' => 595,
                'prefecture_id' => 12,
                'zipcode' => '2600000',
                'name' => '千葉市中央区',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            95 => 
            array (
                'id' => 596,
                'prefecture_id' => 12,
                'zipcode' => '2620000',
                'name' => '千葉市花見川区',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            96 => 
            array (
                'id' => 597,
                'prefecture_id' => 12,
                'zipcode' => '2630000',
                'name' => '千葉市稲毛区',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            97 => 
            array (
                'id' => 598,
                'prefecture_id' => 12,
                'zipcode' => '2640000',
                'name' => '千葉市若葉区',
                'created_at' => '2024-12-21 16:14:42',
                'updated_at' => '2024-12-21 16:14:42',
            ),
            98 => 
            array (
                'id' => 599,
                'prefecture_id' => 12,
                'zipcode' => '2660000',
                'name' => '千葉市緑区',
                'created_at' => '2024-12-21 16:14:43',
                'updated_at' => '2024-12-21 16:14:43',
            ),
            99 => 
            array (
                'id' => 600,
                'prefecture_id' => 12,
                'zipcode' => '2610000',
                'name' => '千葉市美浜区',
                'created_at' => '2024-12-21 16:14:43',
                'updated_at' => '2024-12-21 16:14:43',
            ),
            100 => 
            array (
                'id' => 601,
                'prefecture_id' => 12,
                'zipcode' => '2880000',
                'name' => '銚子市',
                'created_at' => '2024-12-21 16:14:43',
                'updated_at' => '2024-12-21 16:14:43',
            ),
            101 => 
            array (
                'id' => 602,
                'prefecture_id' => 12,
                'zipcode' => '2720000',
                'name' => '市川市',
                'created_at' => '2024-12-21 16:14:43',
                'updated_at' => '2024-12-21 16:14:43',
            ),
            102 => 
            array (
                'id' => 603,
                'prefecture_id' => 12,
                'zipcode' => '2730000',
                'name' => '船橋市',
                'created_at' => '2024-12-21 16:14:43',
                'updated_at' => '2024-12-21 16:14:43',
            ),
            103 => 
            array (
                'id' => 604,
                'prefecture_id' => 12,
                'zipcode' => '2940000',
                'name' => '館山市',
                'created_at' => '2024-12-21 16:14:43',
                'updated_at' => '2024-12-21 16:14:43',
            ),
            104 => 
            array (
                'id' => 605,
                'prefecture_id' => 12,
                'zipcode' => '2920000',
                'name' => '木更津市',
                'created_at' => '2024-12-21 16:14:43',
                'updated_at' => '2024-12-21 16:14:43',
            ),
            105 => 
            array (
                'id' => 606,
                'prefecture_id' => 12,
                'zipcode' => '2700000',
                'name' => '松戸市',
                'created_at' => '2024-12-21 16:14:43',
                'updated_at' => '2024-12-21 16:14:43',
            ),
            106 => 
            array (
                'id' => 607,
                'prefecture_id' => 12,
                'zipcode' => '2780000',
                'name' => '野田市',
                'created_at' => '2024-12-21 16:14:44',
                'updated_at' => '2024-12-21 16:14:44',
            ),
            107 => 
            array (
                'id' => 608,
                'prefecture_id' => 12,
                'zipcode' => '2970000',
                'name' => '茂原市',
                'created_at' => '2024-12-21 16:14:44',
                'updated_at' => '2024-12-21 16:14:44',
            ),
            108 => 
            array (
                'id' => 609,
                'prefecture_id' => 12,
                'zipcode' => '2860000',
                'name' => '成田市',
                'created_at' => '2024-12-21 16:14:44',
                'updated_at' => '2024-12-21 16:14:44',
            ),
            109 => 
            array (
                'id' => 610,
                'prefecture_id' => 12,
                'zipcode' => '2850000',
                'name' => '佐倉市',
                'created_at' => '2024-12-21 16:14:44',
                'updated_at' => '2024-12-21 16:14:44',
            ),
            110 => 
            array (
                'id' => 611,
                'prefecture_id' => 12,
                'zipcode' => '2830000',
                'name' => '東金市',
                'created_at' => '2024-12-21 16:14:44',
                'updated_at' => '2024-12-21 16:14:44',
            ),
            111 => 
            array (
                'id' => 612,
                'prefecture_id' => 12,
                'zipcode' => '2892500',
                'name' => '旭市',
                'created_at' => '2024-12-21 16:14:45',
                'updated_at' => '2024-12-21 16:14:45',
            ),
            112 => 
            array (
                'id' => 613,
                'prefecture_id' => 12,
                'zipcode' => '2750000',
                'name' => '習志野市',
                'created_at' => '2024-12-21 16:14:45',
                'updated_at' => '2024-12-21 16:14:45',
            ),
            113 => 
            array (
                'id' => 614,
                'prefecture_id' => 12,
                'zipcode' => '2770000',
                'name' => '柏市',
                'created_at' => '2024-12-21 16:14:45',
                'updated_at' => '2024-12-21 16:14:45',
            ),
            114 => 
            array (
                'id' => 615,
                'prefecture_id' => 12,
                'zipcode' => '2995200',
                'name' => '勝浦市',
                'created_at' => '2024-12-21 16:14:45',
                'updated_at' => '2024-12-21 16:14:45',
            ),
            115 => 
            array (
                'id' => 616,
                'prefecture_id' => 12,
                'zipcode' => '2900000',
                'name' => '市原市',
                'created_at' => '2024-12-21 16:14:45',
                'updated_at' => '2024-12-21 16:14:45',
            ),
            116 => 
            array (
                'id' => 617,
                'prefecture_id' => 12,
                'zipcode' => '2700100',
                'name' => '流山市',
                'created_at' => '2024-12-21 16:14:45',
                'updated_at' => '2024-12-21 16:14:45',
            ),
            117 => 
            array (
                'id' => 618,
                'prefecture_id' => 12,
                'zipcode' => '2760000',
                'name' => '八千代市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            118 => 
            array (
                'id' => 619,
                'prefecture_id' => 12,
                'zipcode' => '2701100',
                'name' => '我孫子市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            119 => 
            array (
                'id' => 620,
                'prefecture_id' => 12,
                'zipcode' => '2960000',
                'name' => '鴨川市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            120 => 
            array (
                'id' => 621,
                'prefecture_id' => 12,
                'zipcode' => '2730100',
                'name' => '鎌ケ谷市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            121 => 
            array (
                'id' => 622,
                'prefecture_id' => 12,
                'zipcode' => '2991100',
                'name' => '君津市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            122 => 
            array (
                'id' => 623,
                'prefecture_id' => 12,
                'zipcode' => '2930000',
                'name' => '富津市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            123 => 
            array (
                'id' => 624,
                'prefecture_id' => 12,
                'zipcode' => '2790000',
                'name' => '浦安市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            124 => 
            array (
                'id' => 625,
                'prefecture_id' => 12,
                'zipcode' => '2840000',
                'name' => '四街道市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            125 => 
            array (
                'id' => 626,
                'prefecture_id' => 12,
                'zipcode' => '2990200',
                'name' => '袖ケ浦市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            126 => 
            array (
                'id' => 627,
                'prefecture_id' => 12,
                'zipcode' => '2891100',
                'name' => '八街市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            127 => 
            array (
                'id' => 628,
                'prefecture_id' => 12,
                'zipcode' => '2701300',
                'name' => '印西市',
                'created_at' => '2024-12-21 16:14:46',
                'updated_at' => '2024-12-21 16:14:46',
            ),
            128 => 
            array (
                'id' => 629,
                'prefecture_id' => 12,
                'zipcode' => '2701400',
                'name' => '白井市',
                'created_at' => '2024-12-21 16:14:47',
                'updated_at' => '2024-12-21 16:14:47',
            ),
            129 => 
            array (
                'id' => 630,
                'prefecture_id' => 12,
                'zipcode' => '2860200',
                'name' => '富里市',
                'created_at' => '2024-12-21 16:14:47',
                'updated_at' => '2024-12-21 16:14:47',
            ),
            130 => 
            array (
                'id' => 631,
                'prefecture_id' => 12,
                'zipcode' => '2992400',
                'name' => '南房総市',
                'created_at' => '2024-12-21 16:14:47',
                'updated_at' => '2024-12-21 16:14:47',
            ),
            131 => 
            array (
                'id' => 632,
                'prefecture_id' => 12,
                'zipcode' => '2892100',
                'name' => '匝瑳市',
                'created_at' => '2024-12-21 16:14:47',
                'updated_at' => '2024-12-21 16:14:47',
            ),
            132 => 
            array (
                'id' => 633,
                'prefecture_id' => 12,
                'zipcode' => '2870000',
                'name' => '香取市',
                'created_at' => '2024-12-21 16:14:47',
                'updated_at' => '2024-12-21 16:14:47',
            ),
            133 => 
            array (
                'id' => 634,
                'prefecture_id' => 12,
                'zipcode' => '2891300',
                'name' => '山武市',
                'created_at' => '2024-12-21 16:14:47',
                'updated_at' => '2024-12-21 16:14:47',
            ),
            134 => 
            array (
                'id' => 635,
                'prefecture_id' => 12,
                'zipcode' => '2980000',
                'name' => 'いすみ市',
                'created_at' => '2024-12-21 16:14:47',
                'updated_at' => '2024-12-21 16:14:47',
            ),
            135 => 
            array (
                'id' => 636,
                'prefecture_id' => 12,
                'zipcode' => '2993200',
                'name' => '大網白里市',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            136 => 
            array (
                'id' => 637,
                'prefecture_id' => 12,
                'zipcode' => '2850900',
                'name' => '印旛郡酒々井町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            137 => 
            array (
                'id' => 638,
                'prefecture_id' => 12,
                'zipcode' => '2701500',
                'name' => '印旛郡栄町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            138 => 
            array (
                'id' => 639,
                'prefecture_id' => 12,
                'zipcode' => '2890100',
                'name' => '香取郡神崎町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            139 => 
            array (
                'id' => 640,
                'prefecture_id' => 12,
                'zipcode' => '2892200',
                'name' => '香取郡多古町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            140 => 
            array (
                'id' => 641,
                'prefecture_id' => 12,
                'zipcode' => '2890600',
                'name' => '香取郡東庄町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            141 => 
            array (
                'id' => 642,
                'prefecture_id' => 12,
                'zipcode' => '2830100',
                'name' => '山武郡九十九里町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            142 => 
            array (
                'id' => 643,
                'prefecture_id' => 12,
                'zipcode' => '2891600',
                'name' => '山武郡芝山町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            143 => 
            array (
                'id' => 644,
                'prefecture_id' => 12,
                'zipcode' => '2891700',
                'name' => '山武郡横芝光町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            144 => 
            array (
                'id' => 645,
                'prefecture_id' => 12,
                'zipcode' => '2994300',
                'name' => '長生郡一宮町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            145 => 
            array (
                'id' => 646,
                'prefecture_id' => 12,
                'zipcode' => '2994400',
                'name' => '長生郡睦沢町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            146 => 
            array (
                'id' => 647,
                'prefecture_id' => 12,
                'zipcode' => '2994300',
                'name' => '長生郡長生村',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            147 => 
            array (
                'id' => 648,
                'prefecture_id' => 12,
                'zipcode' => '2994200',
                'name' => '長生郡白子町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            148 => 
            array (
                'id' => 649,
                'prefecture_id' => 12,
                'zipcode' => '2970200',
                'name' => '長生郡長柄町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            149 => 
            array (
                'id' => 650,
                'prefecture_id' => 12,
                'zipcode' => '2970100',
                'name' => '長生郡長南町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            150 => 
            array (
                'id' => 651,
                'prefecture_id' => 12,
                'zipcode' => '2980200',
                'name' => '夷隅郡大多喜町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            151 => 
            array (
                'id' => 652,
                'prefecture_id' => 12,
                'zipcode' => '2995100',
                'name' => '夷隅郡御宿町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            152 => 
            array (
                'id' => 653,
                'prefecture_id' => 12,
                'zipcode' => '2992100',
                'name' => '安房郡鋸南町',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            153 => 
            array (
                'id' => 654,
                'prefecture_id' => 13,
                'zipcode' => '1000000',
                'name' => '千代田区',
                'created_at' => '2024-12-21 16:14:48',
                'updated_at' => '2024-12-21 16:14:48',
            ),
            154 => 
            array (
                'id' => 655,
                'prefecture_id' => 13,
                'zipcode' => '1030000',
                'name' => '中央区',
                'created_at' => '2024-12-21 16:14:49',
                'updated_at' => '2024-12-21 16:14:49',
            ),
            155 => 
            array (
                'id' => 656,
                'prefecture_id' => 13,
                'zipcode' => '1050000',
                'name' => '港区',
                'created_at' => '2024-12-21 16:14:50',
                'updated_at' => '2024-12-21 16:14:50',
            ),
            156 => 
            array (
                'id' => 657,
                'prefecture_id' => 13,
                'zipcode' => '1600000',
                'name' => '新宿区',
                'created_at' => '2024-12-21 16:14:51',
                'updated_at' => '2024-12-21 16:14:51',
            ),
            157 => 
            array (
                'id' => 658,
                'prefecture_id' => 13,
                'zipcode' => '1120000',
                'name' => '文京区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            158 => 
            array (
                'id' => 659,
                'prefecture_id' => 13,
                'zipcode' => '1100000',
                'name' => '台東区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            159 => 
            array (
                'id' => 660,
                'prefecture_id' => 13,
                'zipcode' => '1300000',
                'name' => '墨田区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            160 => 
            array (
                'id' => 661,
                'prefecture_id' => 13,
                'zipcode' => '1350000',
                'name' => '江東区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            161 => 
            array (
                'id' => 662,
                'prefecture_id' => 13,
                'zipcode' => '1400000',
                'name' => '品川区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            162 => 
            array (
                'id' => 663,
                'prefecture_id' => 13,
                'zipcode' => '1520000',
                'name' => '目黒区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            163 => 
            array (
                'id' => 664,
                'prefecture_id' => 13,
                'zipcode' => '1440000',
                'name' => '大田区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            164 => 
            array (
                'id' => 665,
                'prefecture_id' => 13,
                'zipcode' => '1540000',
                'name' => '世田谷区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            165 => 
            array (
                'id' => 666,
                'prefecture_id' => 13,
                'zipcode' => '1500000',
                'name' => '渋谷区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            166 => 
            array (
                'id' => 667,
                'prefecture_id' => 13,
                'zipcode' => '1640000',
                'name' => '中野区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            167 => 
            array (
                'id' => 668,
                'prefecture_id' => 13,
                'zipcode' => '1660000',
                'name' => '杉並区',
                'created_at' => '2024-12-21 16:14:53',
                'updated_at' => '2024-12-21 16:14:53',
            ),
            168 => 
            array (
                'id' => 669,
                'prefecture_id' => 13,
                'zipcode' => '1700000',
                'name' => '豊島区',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            169 => 
            array (
                'id' => 670,
                'prefecture_id' => 13,
                'zipcode' => '1140000',
                'name' => '北区',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            170 => 
            array (
                'id' => 671,
                'prefecture_id' => 13,
                'zipcode' => '1160000',
                'name' => '荒川区',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            171 => 
            array (
                'id' => 672,
                'prefecture_id' => 13,
                'zipcode' => '1740000',
                'name' => '板橋区',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            172 => 
            array (
                'id' => 673,
                'prefecture_id' => 13,
                'zipcode' => '1760000',
                'name' => '練馬区',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            173 => 
            array (
                'id' => 674,
                'prefecture_id' => 13,
                'zipcode' => '1200000',
                'name' => '足立区',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            174 => 
            array (
                'id' => 675,
                'prefecture_id' => 13,
                'zipcode' => '1240000',
                'name' => '葛飾区',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            175 => 
            array (
                'id' => 676,
                'prefecture_id' => 13,
                'zipcode' => '1320000',
                'name' => '江戸川区',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            176 => 
            array (
                'id' => 677,
                'prefecture_id' => 13,
                'zipcode' => '1920000',
                'name' => '八王子市',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            177 => 
            array (
                'id' => 678,
                'prefecture_id' => 13,
                'zipcode' => '1900000',
                'name' => '立川市',
                'created_at' => '2024-12-21 16:14:54',
                'updated_at' => '2024-12-21 16:14:54',
            ),
            178 => 
            array (
                'id' => 679,
                'prefecture_id' => 13,
                'zipcode' => '1800000',
                'name' => '武蔵野市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            179 => 
            array (
                'id' => 680,
                'prefecture_id' => 13,
                'zipcode' => '1810000',
                'name' => '三鷹市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            180 => 
            array (
                'id' => 681,
                'prefecture_id' => 13,
                'zipcode' => '1980000',
                'name' => '青梅市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            181 => 
            array (
                'id' => 682,
                'prefecture_id' => 13,
                'zipcode' => '1830000',
                'name' => '府中市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            182 => 
            array (
                'id' => 683,
                'prefecture_id' => 13,
                'zipcode' => '1960000',
                'name' => '昭島市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            183 => 
            array (
                'id' => 684,
                'prefecture_id' => 13,
                'zipcode' => '1820000',
                'name' => '調布市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            184 => 
            array (
                'id' => 685,
                'prefecture_id' => 13,
                'zipcode' => '1940000',
                'name' => '町田市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            185 => 
            array (
                'id' => 686,
                'prefecture_id' => 13,
                'zipcode' => '1840000',
                'name' => '小金井市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            186 => 
            array (
                'id' => 687,
                'prefecture_id' => 13,
                'zipcode' => '1870000',
                'name' => '小平市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            187 => 
            array (
                'id' => 688,
                'prefecture_id' => 13,
                'zipcode' => '1910000',
                'name' => '日野市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            188 => 
            array (
                'id' => 689,
                'prefecture_id' => 13,
                'zipcode' => '1890000',
                'name' => '東村山市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            189 => 
            array (
                'id' => 690,
                'prefecture_id' => 13,
                'zipcode' => '1850000',
                'name' => '国分寺市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            190 => 
            array (
                'id' => 691,
                'prefecture_id' => 13,
                'zipcode' => '1860000',
                'name' => '国立市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            191 => 
            array (
                'id' => 692,
                'prefecture_id' => 13,
                'zipcode' => '1970000',
                'name' => '福生市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            192 => 
            array (
                'id' => 693,
                'prefecture_id' => 13,
                'zipcode' => '2010000',
                'name' => '狛江市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            193 => 
            array (
                'id' => 694,
                'prefecture_id' => 13,
                'zipcode' => '2070000',
                'name' => '東大和市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            194 => 
            array (
                'id' => 695,
                'prefecture_id' => 13,
                'zipcode' => '2040000',
                'name' => '清瀬市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            195 => 
            array (
                'id' => 696,
                'prefecture_id' => 13,
                'zipcode' => '2030000',
                'name' => '東久留米市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            196 => 
            array (
                'id' => 697,
                'prefecture_id' => 13,
                'zipcode' => '2080000',
                'name' => '武蔵村山市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            197 => 
            array (
                'id' => 698,
                'prefecture_id' => 13,
                'zipcode' => '2060000',
                'name' => '多摩市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            198 => 
            array (
                'id' => 699,
                'prefecture_id' => 13,
                'zipcode' => '2060000',
                'name' => '稲城市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            199 => 
            array (
                'id' => 700,
                'prefecture_id' => 13,
                'zipcode' => '2050000',
                'name' => '羽村市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            200 => 
            array (
                'id' => 701,
                'prefecture_id' => 13,
                'zipcode' => '1900100',
                'name' => 'あきる野市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            201 => 
            array (
                'id' => 702,
                'prefecture_id' => 13,
                'zipcode' => '2020000',
                'name' => '西東京市',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            202 => 
            array (
                'id' => 703,
                'prefecture_id' => 13,
                'zipcode' => '1901200',
                'name' => '西多摩郡瑞穂町',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            203 => 
            array (
                'id' => 704,
                'prefecture_id' => 13,
                'zipcode' => '1900100',
                'name' => '西多摩郡日の出町',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            204 => 
            array (
                'id' => 705,
                'prefecture_id' => 13,
                'zipcode' => '1900200',
                'name' => '西多摩郡檜原村',
                'created_at' => '2024-12-21 16:14:55',
                'updated_at' => '2024-12-21 16:14:55',
            ),
            205 => 
            array (
                'id' => 706,
                'prefecture_id' => 13,
                'zipcode' => '1980000',
                'name' => '西多摩郡奥多摩町',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            206 => 
            array (
                'id' => 707,
                'prefecture_id' => 13,
                'zipcode' => '1000100',
                'name' => '大島町',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            207 => 
            array (
                'id' => 708,
                'prefecture_id' => 13,
                'zipcode' => '1000301',
                'name' => '利島村',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            208 => 
            array (
                'id' => 709,
                'prefecture_id' => 13,
                'zipcode' => '1000400',
                'name' => '新島村',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            209 => 
            array (
                'id' => 710,
                'prefecture_id' => 13,
                'zipcode' => '1000601',
                'name' => '神津島村',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            210 => 
            array (
                'id' => 711,
                'prefecture_id' => 13,
                'zipcode' => '1001100',
                'name' => '三宅島三宅村',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            211 => 
            array (
                'id' => 712,
                'prefecture_id' => 13,
                'zipcode' => '1001301',
                'name' => '御蔵島村',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            212 => 
            array (
                'id' => 713,
                'prefecture_id' => 13,
                'zipcode' => '1001400',
                'name' => '八丈島八丈町',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            213 => 
            array (
                'id' => 714,
                'prefecture_id' => 13,
                'zipcode' => '1001701',
                'name' => '青ヶ島村',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            214 => 
            array (
                'id' => 715,
                'prefecture_id' => 13,
                'zipcode' => '1002100',
                'name' => '小笠原村',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            215 => 
            array (
                'id' => 716,
                'prefecture_id' => 14,
                'zipcode' => '2300000',
                'name' => '横浜市鶴見区',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            216 => 
            array (
                'id' => 717,
                'prefecture_id' => 14,
                'zipcode' => '2210000',
                'name' => '横浜市神奈川区',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            217 => 
            array (
                'id' => 718,
                'prefecture_id' => 14,
                'zipcode' => '2200000',
                'name' => '横浜市西区',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            218 => 
            array (
                'id' => 719,
                'prefecture_id' => 14,
                'zipcode' => '2310000',
                'name' => '横浜市中区',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            219 => 
            array (
                'id' => 720,
                'prefecture_id' => 14,
                'zipcode' => '2320000',
                'name' => '横浜市南区',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            220 => 
            array (
                'id' => 721,
                'prefecture_id' => 14,
                'zipcode' => '2400000',
                'name' => '横浜市保土ケ谷区',
                'created_at' => '2024-12-21 16:14:56',
                'updated_at' => '2024-12-21 16:14:56',
            ),
            221 => 
            array (
                'id' => 722,
                'prefecture_id' => 14,
                'zipcode' => '2350000',
                'name' => '横浜市磯子区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            222 => 
            array (
                'id' => 723,
                'prefecture_id' => 14,
                'zipcode' => '2360000',
                'name' => '横浜市金沢区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            223 => 
            array (
                'id' => 724,
                'prefecture_id' => 14,
                'zipcode' => '2220000',
                'name' => '横浜市港北区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            224 => 
            array (
                'id' => 725,
                'prefecture_id' => 14,
                'zipcode' => '2440000',
                'name' => '横浜市戸塚区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            225 => 
            array (
                'id' => 726,
                'prefecture_id' => 14,
                'zipcode' => '2330000',
                'name' => '横浜市港南区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            226 => 
            array (
                'id' => 727,
                'prefecture_id' => 14,
                'zipcode' => '2410000',
                'name' => '横浜市旭区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            227 => 
            array (
                'id' => 728,
                'prefecture_id' => 14,
                'zipcode' => '2260000',
                'name' => '横浜市緑区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            228 => 
            array (
                'id' => 729,
                'prefecture_id' => 14,
                'zipcode' => '2460000',
                'name' => '横浜市瀬谷区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            229 => 
            array (
                'id' => 730,
                'prefecture_id' => 14,
                'zipcode' => '2470000',
                'name' => '横浜市栄区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            230 => 
            array (
                'id' => 731,
                'prefecture_id' => 14,
                'zipcode' => '2450000',
                'name' => '横浜市泉区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            231 => 
            array (
                'id' => 732,
                'prefecture_id' => 14,
                'zipcode' => '2270000',
                'name' => '横浜市青葉区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            232 => 
            array (
                'id' => 733,
                'prefecture_id' => 14,
                'zipcode' => '2240000',
                'name' => '横浜市都筑区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            233 => 
            array (
                'id' => 734,
                'prefecture_id' => 14,
                'zipcode' => '2100000',
                'name' => '川崎市川崎区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            234 => 
            array (
                'id' => 735,
                'prefecture_id' => 14,
                'zipcode' => '2120000',
                'name' => '川崎市幸区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            235 => 
            array (
                'id' => 736,
                'prefecture_id' => 14,
                'zipcode' => '2110000',
                'name' => '川崎市中原区',
                'created_at' => '2024-12-21 16:14:57',
                'updated_at' => '2024-12-21 16:14:57',
            ),
            236 => 
            array (
                'id' => 737,
                'prefecture_id' => 14,
                'zipcode' => '2130000',
                'name' => '川崎市高津区',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            237 => 
            array (
                'id' => 738,
                'prefecture_id' => 14,
                'zipcode' => '2140000',
                'name' => '川崎市多摩区',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            238 => 
            array (
                'id' => 739,
                'prefecture_id' => 14,
                'zipcode' => '2160000',
                'name' => '川崎市宮前区',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            239 => 
            array (
                'id' => 740,
                'prefecture_id' => 14,
                'zipcode' => '2150000',
                'name' => '川崎市麻生区',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            240 => 
            array (
                'id' => 741,
                'prefecture_id' => 14,
                'zipcode' => '2520100',
                'name' => '相模原市緑区',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            241 => 
            array (
                'id' => 742,
                'prefecture_id' => 14,
                'zipcode' => '2520200',
                'name' => '相模原市中央区',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            242 => 
            array (
                'id' => 743,
                'prefecture_id' => 14,
                'zipcode' => '2520300',
                'name' => '相模原市南区',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            243 => 
            array (
                'id' => 744,
                'prefecture_id' => 14,
                'zipcode' => '2380000',
                'name' => '横須賀市',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            244 => 
            array (
                'id' => 745,
                'prefecture_id' => 14,
                'zipcode' => '2540000',
                'name' => '平塚市',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            245 => 
            array (
                'id' => 746,
                'prefecture_id' => 14,
                'zipcode' => '2480000',
                'name' => '鎌倉市',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            246 => 
            array (
                'id' => 747,
                'prefecture_id' => 14,
                'zipcode' => '2510000',
                'name' => '藤沢市',
                'created_at' => '2024-12-21 16:14:58',
                'updated_at' => '2024-12-21 16:14:58',
            ),
            247 => 
            array (
                'id' => 748,
                'prefecture_id' => 14,
                'zipcode' => '2500000',
                'name' => '小田原市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            248 => 
            array (
                'id' => 749,
                'prefecture_id' => 14,
                'zipcode' => '2530000',
                'name' => '茅ヶ崎市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            249 => 
            array (
                'id' => 750,
                'prefecture_id' => 14,
                'zipcode' => '2490000',
                'name' => '逗子市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            250 => 
            array (
                'id' => 751,
                'prefecture_id' => 14,
                'zipcode' => '2380200',
                'name' => '三浦市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            251 => 
            array (
                'id' => 752,
                'prefecture_id' => 14,
                'zipcode' => '2570000',
                'name' => '秦野市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            252 => 
            array (
                'id' => 753,
                'prefecture_id' => 14,
                'zipcode' => '2430000',
                'name' => '厚木市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            253 => 
            array (
                'id' => 754,
                'prefecture_id' => 14,
                'zipcode' => '2420000',
                'name' => '大和市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            254 => 
            array (
                'id' => 755,
                'prefecture_id' => 14,
                'zipcode' => '2591100',
                'name' => '伊勢原市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            255 => 
            array (
                'id' => 756,
                'prefecture_id' => 14,
                'zipcode' => '2430400',
                'name' => '海老名市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            256 => 
            array (
                'id' => 757,
                'prefecture_id' => 14,
                'zipcode' => '2520000',
                'name' => '座間市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            257 => 
            array (
                'id' => 758,
                'prefecture_id' => 14,
                'zipcode' => '2500100',
                'name' => '南足柄市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            258 => 
            array (
                'id' => 759,
                'prefecture_id' => 14,
                'zipcode' => '2521100',
                'name' => '綾瀬市',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            259 => 
            array (
                'id' => 760,
                'prefecture_id' => 14,
                'zipcode' => '2400100',
                'name' => '三浦郡葉山町',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            260 => 
            array (
                'id' => 761,
                'prefecture_id' => 14,
                'zipcode' => '2530100',
                'name' => '高座郡寒川町',
                'created_at' => '2024-12-21 16:14:59',
                'updated_at' => '2024-12-21 16:14:59',
            ),
            261 => 
            array (
                'id' => 762,
                'prefecture_id' => 14,
                'zipcode' => '2550000',
                'name' => '中郡大磯町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            262 => 
            array (
                'id' => 763,
                'prefecture_id' => 14,
                'zipcode' => '2590100',
                'name' => '中郡二宮町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            263 => 
            array (
                'id' => 764,
                'prefecture_id' => 14,
                'zipcode' => '2590100',
                'name' => '足柄上郡中井町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            264 => 
            array (
                'id' => 765,
                'prefecture_id' => 14,
                'zipcode' => '2580000',
                'name' => '足柄上郡大井町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            265 => 
            array (
                'id' => 766,
                'prefecture_id' => 14,
                'zipcode' => '2580000',
                'name' => '足柄上郡松田町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            266 => 
            array (
                'id' => 767,
                'prefecture_id' => 14,
                'zipcode' => '2580100',
                'name' => '足柄上郡山北町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            267 => 
            array (
                'id' => 768,
                'prefecture_id' => 14,
                'zipcode' => '2580000',
                'name' => '足柄上郡開成町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            268 => 
            array (
                'id' => 769,
                'prefecture_id' => 14,
                'zipcode' => '2500500',
                'name' => '足柄下郡箱根町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            269 => 
            array (
                'id' => 770,
                'prefecture_id' => 14,
                'zipcode' => '2590200',
                'name' => '足柄下郡真鶴町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            270 => 
            array (
                'id' => 771,
                'prefecture_id' => 14,
                'zipcode' => '2590300',
                'name' => '足柄下郡湯河原町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            271 => 
            array (
                'id' => 772,
                'prefecture_id' => 14,
                'zipcode' => '2430300',
                'name' => '愛甲郡愛川町',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            272 => 
            array (
                'id' => 773,
                'prefecture_id' => 14,
                'zipcode' => '2430100',
                'name' => '愛甲郡清川村',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            273 => 
            array (
                'id' => 774,
                'prefecture_id' => 15,
                'zipcode' => '9500000',
                'name' => '新潟市北区',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            274 => 
            array (
                'id' => 775,
                'prefecture_id' => 15,
                'zipcode' => '9500000',
                'name' => '新潟市東区',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            275 => 
            array (
                'id' => 776,
                'prefecture_id' => 15,
                'zipcode' => '9500000',
                'name' => '新潟市中央区',
                'created_at' => '2024-12-21 16:15:00',
                'updated_at' => '2024-12-21 16:15:00',
            ),
            276 => 
            array (
                'id' => 777,
                'prefecture_id' => 15,
                'zipcode' => '9500000',
                'name' => '新潟市江南区',
                'created_at' => '2024-12-21 16:15:01',
                'updated_at' => '2024-12-21 16:15:01',
            ),
            277 => 
            array (
                'id' => 778,
                'prefecture_id' => 15,
                'zipcode' => '9560000',
                'name' => '新潟市秋葉区',
                'created_at' => '2024-12-21 16:15:01',
                'updated_at' => '2024-12-21 16:15:01',
            ),
            278 => 
            array (
                'id' => 779,
                'prefecture_id' => 15,
                'zipcode' => '9501200',
                'name' => '新潟市南区',
                'created_at' => '2024-12-21 16:15:01',
                'updated_at' => '2024-12-21 16:15:01',
            ),
            279 => 
            array (
                'id' => 780,
                'prefecture_id' => 15,
                'zipcode' => '9500000',
                'name' => '新潟市西区',
                'created_at' => '2024-12-21 16:15:01',
                'updated_at' => '2024-12-21 16:15:01',
            ),
            280 => 
            array (
                'id' => 781,
                'prefecture_id' => 15,
                'zipcode' => '9500000',
                'name' => '新潟市西蒲区',
                'created_at' => '2024-12-21 16:15:01',
                'updated_at' => '2024-12-21 16:15:01',
            ),
            281 => 
            array (
                'id' => 782,
                'prefecture_id' => 15,
                'zipcode' => '9400000',
                'name' => '長岡市',
                'created_at' => '2024-12-21 16:15:02',
                'updated_at' => '2024-12-21 16:15:02',
            ),
            282 => 
            array (
                'id' => 783,
                'prefecture_id' => 15,
                'zipcode' => '9550000',
                'name' => '三条市',
                'created_at' => '2024-12-21 16:15:03',
                'updated_at' => '2024-12-21 16:15:03',
            ),
            283 => 
            array (
                'id' => 784,
                'prefecture_id' => 15,
                'zipcode' => '9450000',
                'name' => '柏崎市',
                'created_at' => '2024-12-21 16:15:03',
                'updated_at' => '2024-12-21 16:15:03',
            ),
            284 => 
            array (
                'id' => 785,
                'prefecture_id' => 15,
                'zipcode' => '9570000',
                'name' => '新発田市',
                'created_at' => '2024-12-21 16:15:03',
                'updated_at' => '2024-12-21 16:15:03',
            ),
            285 => 
            array (
                'id' => 786,
                'prefecture_id' => 15,
                'zipcode' => '9470000',
                'name' => '小千谷市',
                'created_at' => '2024-12-21 16:15:04',
                'updated_at' => '2024-12-21 16:15:04',
            ),
            286 => 
            array (
                'id' => 787,
                'prefecture_id' => 15,
                'zipcode' => '9591300',
                'name' => '加茂市',
                'created_at' => '2024-12-21 16:15:04',
                'updated_at' => '2024-12-21 16:15:04',
            ),
            287 => 
            array (
                'id' => 788,
                'prefecture_id' => 15,
                'zipcode' => '9480000',
                'name' => '十日町市',
                'created_at' => '2024-12-21 16:15:04',
                'updated_at' => '2024-12-21 16:15:04',
            ),
            288 => 
            array (
                'id' => 789,
                'prefecture_id' => 15,
                'zipcode' => '9540000',
                'name' => '見附市',
                'created_at' => '2024-12-21 16:15:04',
                'updated_at' => '2024-12-21 16:15:04',
            ),
            289 => 
            array (
                'id' => 790,
                'prefecture_id' => 15,
                'zipcode' => '9580000',
                'name' => '村上市',
                'created_at' => '2024-12-21 16:15:04',
                'updated_at' => '2024-12-21 16:15:04',
            ),
            290 => 
            array (
                'id' => 791,
                'prefecture_id' => 15,
                'zipcode' => '9591200',
                'name' => '燕市',
                'created_at' => '2024-12-21 16:15:05',
                'updated_at' => '2024-12-21 16:15:05',
            ),
            291 => 
            array (
                'id' => 792,
                'prefecture_id' => 15,
                'zipcode' => '9410000',
                'name' => '糸魚川市',
                'created_at' => '2024-12-21 16:15:05',
                'updated_at' => '2024-12-21 16:15:05',
            ),
            292 => 
            array (
                'id' => 793,
                'prefecture_id' => 15,
                'zipcode' => '9440000',
                'name' => '妙高市',
                'created_at' => '2024-12-21 16:15:05',
                'updated_at' => '2024-12-21 16:15:05',
            ),
            293 => 
            array (
                'id' => 794,
                'prefecture_id' => 15,
                'zipcode' => '9591600',
                'name' => '五泉市',
                'created_at' => '2024-12-21 16:15:06',
                'updated_at' => '2024-12-21 16:15:06',
            ),
            294 => 
            array (
                'id' => 795,
                'prefecture_id' => 15,
                'zipcode' => '9430000',
                'name' => '上越市',
                'created_at' => '2024-12-21 16:15:06',
                'updated_at' => '2024-12-21 16:15:06',
            ),
            295 => 
            array (
                'id' => 796,
                'prefecture_id' => 15,
                'zipcode' => '9592000',
                'name' => '阿賀野市',
                'created_at' => '2024-12-21 16:15:07',
                'updated_at' => '2024-12-21 16:15:07',
            ),
            296 => 
            array (
                'id' => 797,
                'prefecture_id' => 15,
                'zipcode' => '9520000',
                'name' => '佐渡市',
                'created_at' => '2024-12-21 16:15:08',
                'updated_at' => '2024-12-21 16:15:08',
            ),
            297 => 
            array (
                'id' => 798,
                'prefecture_id' => 15,
                'zipcode' => '9460000',
                'name' => '魚沼市',
                'created_at' => '2024-12-21 16:15:08',
                'updated_at' => '2024-12-21 16:15:08',
            ),
            298 => 
            array (
                'id' => 799,
                'prefecture_id' => 15,
                'zipcode' => '9496600',
                'name' => '南魚沼市',
                'created_at' => '2024-12-21 16:15:08',
                'updated_at' => '2024-12-21 16:15:08',
            ),
            299 => 
            array (
                'id' => 800,
                'prefecture_id' => 15,
                'zipcode' => '9592600',
                'name' => '胎内市',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            300 => 
            array (
                'id' => 801,
                'prefecture_id' => 15,
                'zipcode' => '9570100',
                'name' => '北蒲原郡聖籠町',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            301 => 
            array (
                'id' => 802,
                'prefecture_id' => 15,
                'zipcode' => '9590300',
                'name' => '西蒲原郡弥彦村',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            302 => 
            array (
                'id' => 803,
                'prefecture_id' => 15,
                'zipcode' => '9591500',
                'name' => '南蒲原郡田上町',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            303 => 
            array (
                'id' => 804,
                'prefecture_id' => 15,
                'zipcode' => '9594400',
                'name' => '東蒲原郡阿賀町',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            304 => 
            array (
                'id' => 805,
                'prefecture_id' => 15,
                'zipcode' => '9494300',
                'name' => '三島郡出雲崎町',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            305 => 
            array (
                'id' => 806,
                'prefecture_id' => 15,
                'zipcode' => '9496100',
                'name' => '南魚沼郡湯沢町',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            306 => 
            array (
                'id' => 807,
                'prefecture_id' => 15,
                'zipcode' => '9498200',
                'name' => '中魚沼郡津南町',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            307 => 
            array (
                'id' => 808,
                'prefecture_id' => 15,
                'zipcode' => '9450300',
                'name' => '刈羽郡刈羽村',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            308 => 
            array (
                'id' => 809,
                'prefecture_id' => 15,
                'zipcode' => '9593200',
                'name' => '岩船郡関川村',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            309 => 
            array (
                'id' => 810,
                'prefecture_id' => 15,
                'zipcode' => '9580061',
                'name' => '岩船郡粟島浦村',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            310 => 
            array (
                'id' => 811,
                'prefecture_id' => 16,
                'zipcode' => '9390000',
                'name' => '富山市',
                'created_at' => '2024-12-21 16:15:09',
                'updated_at' => '2024-12-21 16:15:09',
            ),
            311 => 
            array (
                'id' => 812,
                'prefecture_id' => 16,
                'zipcode' => '9330000',
                'name' => '高岡市',
                'created_at' => '2024-12-21 16:15:11',
                'updated_at' => '2024-12-21 16:15:11',
            ),
            312 => 
            array (
                'id' => 813,
                'prefecture_id' => 16,
                'zipcode' => '9370000',
                'name' => '魚津市',
                'created_at' => '2024-12-21 16:15:12',
                'updated_at' => '2024-12-21 16:15:12',
            ),
            313 => 
            array (
                'id' => 814,
                'prefecture_id' => 16,
                'zipcode' => '9350000',
                'name' => '氷見市',
                'created_at' => '2024-12-21 16:15:12',
                'updated_at' => '2024-12-21 16:15:12',
            ),
            314 => 
            array (
                'id' => 815,
                'prefecture_id' => 16,
                'zipcode' => '9360000',
                'name' => '滑川市',
                'created_at' => '2024-12-21 16:15:13',
                'updated_at' => '2024-12-21 16:15:13',
            ),
            315 => 
            array (
                'id' => 816,
                'prefecture_id' => 16,
                'zipcode' => '9380000',
                'name' => '黒部市',
                'created_at' => '2024-12-21 16:15:13',
                'updated_at' => '2024-12-21 16:15:13',
            ),
            316 => 
            array (
                'id' => 817,
                'prefecture_id' => 16,
                'zipcode' => '9391300',
                'name' => '砺波市',
                'created_at' => '2024-12-21 16:15:13',
                'updated_at' => '2024-12-21 16:15:13',
            ),
            317 => 
            array (
                'id' => 818,
                'prefecture_id' => 16,
                'zipcode' => '9320000',
                'name' => '小矢部市',
                'created_at' => '2024-12-21 16:15:13',
                'updated_at' => '2024-12-21 16:15:13',
            ),
            318 => 
            array (
                'id' => 819,
                'prefecture_id' => 16,
                'zipcode' => '9391600',
                'name' => '南砺市',
                'created_at' => '2024-12-21 16:15:13',
                'updated_at' => '2024-12-21 16:15:13',
            ),
            319 => 
            array (
                'id' => 820,
                'prefecture_id' => 16,
                'zipcode' => '9390300',
                'name' => '射水市',
                'created_at' => '2024-12-21 16:15:14',
                'updated_at' => '2024-12-21 16:15:14',
            ),
            320 => 
            array (
                'id' => 821,
                'prefecture_id' => 16,
                'zipcode' => '9300200',
                'name' => '中新川郡舟橋村',
                'created_at' => '2024-12-21 16:15:15',
                'updated_at' => '2024-12-21 16:15:15',
            ),
            321 => 
            array (
                'id' => 822,
                'prefecture_id' => 16,
                'zipcode' => '9300300',
                'name' => '中新川郡上市町',
                'created_at' => '2024-12-21 16:15:15',
                'updated_at' => '2024-12-21 16:15:15',
            ),
            322 => 
            array (
                'id' => 823,
                'prefecture_id' => 16,
                'zipcode' => '9300200',
                'name' => '中新川郡立山町',
                'created_at' => '2024-12-21 16:15:15',
                'updated_at' => '2024-12-21 16:15:15',
            ),
            323 => 
            array (
                'id' => 824,
                'prefecture_id' => 16,
                'zipcode' => '9390600',
                'name' => '下新川郡入善町',
                'created_at' => '2024-12-21 16:15:15',
                'updated_at' => '2024-12-21 16:15:15',
            ),
            324 => 
            array (
                'id' => 825,
                'prefecture_id' => 16,
                'zipcode' => '9390700',
                'name' => '下新川郡朝日町',
                'created_at' => '2024-12-21 16:15:15',
                'updated_at' => '2024-12-21 16:15:15',
            ),
            325 => 
            array (
                'id' => 826,
                'prefecture_id' => 17,
                'zipcode' => '9200000',
                'name' => '金沢市',
                'created_at' => '2024-12-21 16:15:15',
                'updated_at' => '2024-12-21 16:15:15',
            ),
            326 => 
            array (
                'id' => 827,
                'prefecture_id' => 17,
                'zipcode' => '9260000',
                'name' => '七尾市',
                'created_at' => '2024-12-21 16:15:17',
                'updated_at' => '2024-12-21 16:15:17',
            ),
            327 => 
            array (
                'id' => 828,
                'prefecture_id' => 17,
                'zipcode' => '9230000',
                'name' => '小松市',
                'created_at' => '2024-12-21 16:15:17',
                'updated_at' => '2024-12-21 16:15:17',
            ),
            328 => 
            array (
                'id' => 829,
                'prefecture_id' => 17,
                'zipcode' => '9280000',
                'name' => '輪島市',
                'created_at' => '2024-12-21 16:15:17',
                'updated_at' => '2024-12-21 16:15:17',
            ),
            329 => 
            array (
                'id' => 830,
                'prefecture_id' => 17,
                'zipcode' => '9271200',
                'name' => '珠洲市',
                'created_at' => '2024-12-21 16:15:18',
                'updated_at' => '2024-12-21 16:15:18',
            ),
            330 => 
            array (
                'id' => 831,
                'prefecture_id' => 17,
                'zipcode' => '9220000',
                'name' => '加賀市',
                'created_at' => '2024-12-21 16:15:18',
                'updated_at' => '2024-12-21 16:15:18',
            ),
            331 => 
            array (
                'id' => 832,
                'prefecture_id' => 17,
                'zipcode' => '9250000',
                'name' => '羽咋市',
                'created_at' => '2024-12-21 16:15:18',
                'updated_at' => '2024-12-21 16:15:18',
            ),
            332 => 
            array (
                'id' => 833,
                'prefecture_id' => 17,
                'zipcode' => '9291100',
                'name' => 'かほく市',
                'created_at' => '2024-12-21 16:15:18',
                'updated_at' => '2024-12-21 16:15:18',
            ),
            333 => 
            array (
                'id' => 834,
                'prefecture_id' => 17,
                'zipcode' => '9240000',
                'name' => '白山市',
                'created_at' => '2024-12-21 16:15:19',
                'updated_at' => '2024-12-21 16:15:19',
            ),
            334 => 
            array (
                'id' => 835,
                'prefecture_id' => 17,
                'zipcode' => '9231100',
                'name' => '能美市',
                'created_at' => '2024-12-21 16:15:19',
                'updated_at' => '2024-12-21 16:15:19',
            ),
            335 => 
            array (
                'id' => 836,
                'prefecture_id' => 17,
                'zipcode' => '9210000',
                'name' => '野々市市',
                'created_at' => '2024-12-21 16:15:19',
                'updated_at' => '2024-12-21 16:15:19',
            ),
            336 => 
            array (
                'id' => 837,
                'prefecture_id' => 17,
                'zipcode' => '9231200',
                'name' => '能美郡川北町',
                'created_at' => '2024-12-21 16:15:19',
                'updated_at' => '2024-12-21 16:15:19',
            ),
            337 => 
            array (
                'id' => 838,
                'prefecture_id' => 17,
                'zipcode' => '9290300',
                'name' => '河北郡津幡町',
                'created_at' => '2024-12-21 16:15:19',
                'updated_at' => '2024-12-21 16:15:19',
            ),
            338 => 
            array (
                'id' => 839,
                'prefecture_id' => 17,
                'zipcode' => '9200200',
                'name' => '河北郡内灘町',
                'created_at' => '2024-12-21 16:15:19',
                'updated_at' => '2024-12-21 16:15:19',
            ),
            339 => 
            array (
                'id' => 840,
                'prefecture_id' => 17,
                'zipcode' => '9250100',
                'name' => '羽咋郡志賀町',
                'created_at' => '2024-12-21 16:15:20',
                'updated_at' => '2024-12-21 16:15:20',
            ),
            340 => 
            array (
                'id' => 841,
                'prefecture_id' => 17,
                'zipcode' => '9291300',
                'name' => '羽咋郡宝達志水町',
                'created_at' => '2024-12-21 16:15:20',
                'updated_at' => '2024-12-21 16:15:20',
            ),
            341 => 
            array (
                'id' => 842,
                'prefecture_id' => 17,
                'zipcode' => '9291700',
                'name' => '鹿島郡中能登町',
                'created_at' => '2024-12-21 16:15:20',
                'updated_at' => '2024-12-21 16:15:20',
            ),
            342 => 
            array (
                'id' => 843,
                'prefecture_id' => 17,
                'zipcode' => '9270000',
                'name' => '鳳珠郡穴水町',
                'created_at' => '2024-12-21 16:15:20',
                'updated_at' => '2024-12-21 16:15:20',
            ),
            343 => 
            array (
                'id' => 844,
                'prefecture_id' => 17,
                'zipcode' => '9270400',
                'name' => '鳳珠郡能登町',
                'created_at' => '2024-12-21 16:15:20',
                'updated_at' => '2024-12-21 16:15:20',
            ),
            344 => 
            array (
                'id' => 845,
                'prefecture_id' => 18,
                'zipcode' => '9180000',
                'name' => '福井市',
                'created_at' => '2024-12-21 16:15:20',
                'updated_at' => '2024-12-21 16:15:20',
            ),
            345 => 
            array (
                'id' => 846,
                'prefecture_id' => 18,
                'zipcode' => '9140000',
                'name' => '敦賀市',
                'created_at' => '2024-12-21 16:15:21',
                'updated_at' => '2024-12-21 16:15:21',
            ),
            346 => 
            array (
                'id' => 847,
                'prefecture_id' => 18,
                'zipcode' => '9170000',
                'name' => '小浜市',
                'created_at' => '2024-12-21 16:15:21',
                'updated_at' => '2024-12-21 16:15:21',
            ),
            347 => 
            array (
                'id' => 848,
                'prefecture_id' => 18,
                'zipcode' => '9120000',
                'name' => '大野市',
                'created_at' => '2024-12-21 16:15:22',
                'updated_at' => '2024-12-21 16:15:22',
            ),
            348 => 
            array (
                'id' => 849,
                'prefecture_id' => 18,
                'zipcode' => '9110000',
                'name' => '勝山市',
                'created_at' => '2024-12-21 16:15:22',
                'updated_at' => '2024-12-21 16:15:22',
            ),
            349 => 
            array (
                'id' => 850,
                'prefecture_id' => 18,
                'zipcode' => '9160000',
                'name' => '鯖江市',
                'created_at' => '2024-12-21 16:15:22',
                'updated_at' => '2024-12-21 16:15:22',
            ),
            350 => 
            array (
                'id' => 851,
                'prefecture_id' => 18,
                'zipcode' => '9190600',
                'name' => 'あわら市',
                'created_at' => '2024-12-21 16:15:22',
                'updated_at' => '2024-12-21 16:15:22',
            ),
            351 => 
            array (
                'id' => 852,
                'prefecture_id' => 18,
                'zipcode' => '9150000',
                'name' => '越前市',
                'created_at' => '2024-12-21 16:15:23',
                'updated_at' => '2024-12-21 16:15:23',
            ),
            352 => 
            array (
                'id' => 853,
                'prefecture_id' => 18,
                'zipcode' => '9100200',
                'name' => '坂井市',
                'created_at' => '2024-12-21 16:15:23',
                'updated_at' => '2024-12-21 16:15:23',
            ),
            353 => 
            array (
                'id' => 854,
                'prefecture_id' => 18,
                'zipcode' => '9101100',
                'name' => '吉田郡永平寺町',
                'created_at' => '2024-12-21 16:15:23',
                'updated_at' => '2024-12-21 16:15:23',
            ),
            354 => 
            array (
                'id' => 855,
                'prefecture_id' => 18,
                'zipcode' => '9102500',
                'name' => '今立郡池田町',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            355 => 
            array (
                'id' => 856,
                'prefecture_id' => 18,
                'zipcode' => '9190200',
                'name' => '南条郡南越前町',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            356 => 
            array (
                'id' => 857,
                'prefecture_id' => 18,
                'zipcode' => '9160200',
                'name' => '丹生郡越前町',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            357 => 
            array (
                'id' => 858,
                'prefecture_id' => 18,
                'zipcode' => '9191100',
                'name' => '三方郡美浜町',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            358 => 
            array (
                'id' => 859,
                'prefecture_id' => 18,
                'zipcode' => '9192200',
                'name' => '大飯郡高浜町',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            359 => 
            array (
                'id' => 860,
                'prefecture_id' => 18,
                'zipcode' => '9192100',
                'name' => '大飯郡おおい町',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            360 => 
            array (
                'id' => 861,
                'prefecture_id' => 18,
                'zipcode' => '9191300',
                'name' => '三方上中郡若狭町',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            361 => 
            array (
                'id' => 862,
                'prefecture_id' => 19,
                'zipcode' => '4000000',
                'name' => '甲府市',
                'created_at' => '2024-12-21 16:15:24',
                'updated_at' => '2024-12-21 16:15:24',
            ),
            362 => 
            array (
                'id' => 863,
                'prefecture_id' => 19,
                'zipcode' => '4030000',
                'name' => '富士吉田市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            363 => 
            array (
                'id' => 864,
                'prefecture_id' => 19,
                'zipcode' => '4020000',
                'name' => '都留市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            364 => 
            array (
                'id' => 865,
                'prefecture_id' => 19,
                'zipcode' => '4050000',
                'name' => '山梨市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            365 => 
            array (
                'id' => 866,
                'prefecture_id' => 19,
                'zipcode' => '4010000',
                'name' => '大月市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            366 => 
            array (
                'id' => 867,
                'prefecture_id' => 19,
                'zipcode' => '4070000',
                'name' => '韮崎市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            367 => 
            array (
                'id' => 868,
                'prefecture_id' => 19,
                'zipcode' => '4000400',
                'name' => '南アルプス市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            368 => 
            array (
                'id' => 869,
                'prefecture_id' => 19,
                'zipcode' => '4080000',
                'name' => '北杜市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            369 => 
            array (
                'id' => 870,
                'prefecture_id' => 19,
                'zipcode' => '4000100',
                'name' => '甲斐市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            370 => 
            array (
                'id' => 871,
                'prefecture_id' => 19,
                'zipcode' => '4060000',
                'name' => '笛吹市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            371 => 
            array (
                'id' => 872,
                'prefecture_id' => 19,
                'zipcode' => '4090100',
                'name' => '上野原市',
                'created_at' => '2024-12-21 16:15:25',
                'updated_at' => '2024-12-21 16:15:25',
            ),
            372 => 
            array (
                'id' => 873,
                'prefecture_id' => 19,
                'zipcode' => '4040000',
                'name' => '甲州市',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            373 => 
            array (
                'id' => 874,
                'prefecture_id' => 19,
                'zipcode' => '4093800',
                'name' => '中央市',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            374 => 
            array (
                'id' => 875,
                'prefecture_id' => 19,
                'zipcode' => '4093600',
                'name' => '西八代郡市川三郷町',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            375 => 
            array (
                'id' => 876,
                'prefecture_id' => 19,
                'zipcode' => '4092700',
                'name' => '南巨摩郡早川町',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            376 => 
            array (
                'id' => 877,
                'prefecture_id' => 19,
                'zipcode' => '4092500',
                'name' => '南巨摩郡身延町',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            377 => 
            array (
                'id' => 878,
                'prefecture_id' => 19,
                'zipcode' => '4092100',
                'name' => '南巨摩郡南部町',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            378 => 
            array (
                'id' => 879,
                'prefecture_id' => 19,
                'zipcode' => '4000500',
                'name' => '南巨摩郡富士川町',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            379 => 
            array (
                'id' => 880,
                'prefecture_id' => 19,
                'zipcode' => '4093800',
                'name' => '中巨摩郡昭和町',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            380 => 
            array (
                'id' => 881,
                'prefecture_id' => 19,
                'zipcode' => '4020200',
                'name' => '南都留郡道志村',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            381 => 
            array (
                'id' => 882,
                'prefecture_id' => 19,
                'zipcode' => '4030000',
                'name' => '南都留郡西桂町',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            382 => 
            array (
                'id' => 883,
                'prefecture_id' => 19,
                'zipcode' => '4010500',
                'name' => '南都留郡忍野村',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            383 => 
            array (
                'id' => 884,
                'prefecture_id' => 19,
                'zipcode' => '4010500',
                'name' => '南都留郡山中湖村',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            384 => 
            array (
                'id' => 885,
                'prefecture_id' => 19,
                'zipcode' => '4010320',
                'name' => '南都留郡鳴沢村',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            385 => 
            array (
                'id' => 886,
                'prefecture_id' => 19,
                'zipcode' => '4010300',
                'name' => '南都留郡富士河口湖町',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            386 => 
            array (
                'id' => 887,
                'prefecture_id' => 19,
                'zipcode' => '4090200',
                'name' => '北都留郡小菅村',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            387 => 
            array (
                'id' => 888,
                'prefecture_id' => 19,
                'zipcode' => '4090300',
                'name' => '北都留郡丹波山村',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            388 => 
            array (
                'id' => 889,
                'prefecture_id' => 20,
                'zipcode' => '3810000',
                'name' => '長野市',
                'created_at' => '2024-12-21 16:15:26',
                'updated_at' => '2024-12-21 16:15:26',
            ),
            389 => 
            array (
                'id' => 890,
                'prefecture_id' => 20,
                'zipcode' => '3990000',
                'name' => '松本市',
                'created_at' => '2024-12-21 16:15:27',
                'updated_at' => '2024-12-21 16:15:27',
            ),
            390 => 
            array (
                'id' => 891,
                'prefecture_id' => 20,
                'zipcode' => '3860000',
                'name' => '上田市',
                'created_at' => '2024-12-21 16:15:27',
                'updated_at' => '2024-12-21 16:15:27',
            ),
            391 => 
            array (
                'id' => 892,
                'prefecture_id' => 20,
                'zipcode' => '3940000',
                'name' => '岡谷市',
                'created_at' => '2024-12-21 16:15:27',
                'updated_at' => '2024-12-21 16:15:27',
            ),
            392 => 
            array (
                'id' => 893,
                'prefecture_id' => 20,
                'zipcode' => '3950000',
                'name' => '飯田市',
                'created_at' => '2024-12-21 16:15:27',
                'updated_at' => '2024-12-21 16:15:27',
            ),
            393 => 
            array (
                'id' => 894,
                'prefecture_id' => 20,
                'zipcode' => '3920000',
                'name' => '諏訪市',
                'created_at' => '2024-12-21 16:15:27',
                'updated_at' => '2024-12-21 16:15:27',
            ),
            394 => 
            array (
                'id' => 895,
                'prefecture_id' => 20,
                'zipcode' => '3820000',
                'name' => '須坂市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            395 => 
            array (
                'id' => 896,
                'prefecture_id' => 20,
                'zipcode' => '3840000',
                'name' => '小諸市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            396 => 
            array (
                'id' => 897,
                'prefecture_id' => 20,
                'zipcode' => '3960000',
                'name' => '伊那市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            397 => 
            array (
                'id' => 898,
                'prefecture_id' => 20,
                'zipcode' => '3994100',
                'name' => '駒ヶ根市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            398 => 
            array (
                'id' => 899,
                'prefecture_id' => 20,
                'zipcode' => '3830000',
                'name' => '中野市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            399 => 
            array (
                'id' => 900,
                'prefecture_id' => 20,
                'zipcode' => '3980000',
                'name' => '大町市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            400 => 
            array (
                'id' => 901,
                'prefecture_id' => 20,
                'zipcode' => '3892200',
                'name' => '飯山市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            401 => 
            array (
                'id' => 902,
                'prefecture_id' => 20,
                'zipcode' => '3910000',
                'name' => '茅野市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            402 => 
            array (
                'id' => 903,
                'prefecture_id' => 20,
                'zipcode' => '3990700',
                'name' => '塩尻市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            403 => 
            array (
                'id' => 904,
                'prefecture_id' => 20,
                'zipcode' => '3850000',
                'name' => '佐久市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            404 => 
            array (
                'id' => 905,
                'prefecture_id' => 20,
                'zipcode' => '3870000',
                'name' => '千曲市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            405 => 
            array (
                'id' => 906,
                'prefecture_id' => 20,
                'zipcode' => '3890500',
                'name' => '東御市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            406 => 
            array (
                'id' => 907,
                'prefecture_id' => 20,
                'zipcode' => '3998200',
                'name' => '安曇野市',
                'created_at' => '2024-12-21 16:15:28',
                'updated_at' => '2024-12-21 16:15:28',
            ),
            407 => 
            array (
                'id' => 908,
                'prefecture_id' => 20,
                'zipcode' => '3841100',
                'name' => '南佐久郡小海町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            408 => 
            array (
                'id' => 909,
                'prefecture_id' => 20,
                'zipcode' => '3841400',
                'name' => '南佐久郡川上村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            409 => 
            array (
                'id' => 910,
                'prefecture_id' => 20,
                'zipcode' => '3841300',
                'name' => '南佐久郡南牧村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            410 => 
            array (
                'id' => 911,
                'prefecture_id' => 20,
                'zipcode' => '3841211',
                'name' => '南佐久郡南相木村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            411 => 
            array (
                'id' => 912,
                'prefecture_id' => 20,
                'zipcode' => '3841201',
                'name' => '南佐久郡北相木村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            412 => 
            array (
                'id' => 913,
                'prefecture_id' => 20,
                'zipcode' => '3840600',
                'name' => '南佐久郡佐久穂町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            413 => 
            array (
                'id' => 914,
                'prefecture_id' => 20,
                'zipcode' => '3890100',
                'name' => '北佐久郡軽井沢町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            414 => 
            array (
                'id' => 915,
                'prefecture_id' => 20,
                'zipcode' => '3890200',
                'name' => '北佐久郡御代田町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            415 => 
            array (
                'id' => 916,
                'prefecture_id' => 20,
                'zipcode' => '3842300',
                'name' => '北佐久郡立科町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            416 => 
            array (
                'id' => 917,
                'prefecture_id' => 20,
                'zipcode' => '3861600',
                'name' => '小県郡青木村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            417 => 
            array (
                'id' => 918,
                'prefecture_id' => 20,
                'zipcode' => '3860600',
                'name' => '小県郡長和町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            418 => 
            array (
                'id' => 919,
                'prefecture_id' => 20,
                'zipcode' => '3930000',
                'name' => '諏訪郡下諏訪町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            419 => 
            array (
                'id' => 920,
                'prefecture_id' => 20,
                'zipcode' => '3990200',
                'name' => '諏訪郡富士見町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            420 => 
            array (
                'id' => 921,
                'prefecture_id' => 20,
                'zipcode' => '3910100',
                'name' => '諏訪郡原村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            421 => 
            array (
                'id' => 922,
                'prefecture_id' => 20,
                'zipcode' => '3990400',
                'name' => '上伊那郡辰野町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            422 => 
            array (
                'id' => 923,
                'prefecture_id' => 20,
                'zipcode' => '3994600',
                'name' => '上伊那郡箕輪町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            423 => 
            array (
                'id' => 924,
                'prefecture_id' => 20,
                'zipcode' => '3993700',
                'name' => '上伊那郡飯島町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            424 => 
            array (
                'id' => 925,
                'prefecture_id' => 20,
                'zipcode' => '3994511',
                'name' => '上伊那郡南箕輪村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            425 => 
            array (
                'id' => 926,
                'prefecture_id' => 20,
                'zipcode' => '3993800',
                'name' => '上伊那郡中川村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            426 => 
            array (
                'id' => 927,
                'prefecture_id' => 20,
                'zipcode' => '3994301',
                'name' => '上伊那郡宮田村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            427 => 
            array (
                'id' => 928,
                'prefecture_id' => 20,
                'zipcode' => '3993300',
                'name' => '下伊那郡松川町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            428 => 
            array (
                'id' => 929,
                'prefecture_id' => 20,
                'zipcode' => '3993100',
                'name' => '下伊那郡高森町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            429 => 
            array (
                'id' => 930,
                'prefecture_id' => 20,
                'zipcode' => '3991500',
                'name' => '下伊那郡阿南町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            430 => 
            array (
                'id' => 931,
                'prefecture_id' => 20,
                'zipcode' => '3950300',
                'name' => '下伊那郡阿智村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            431 => 
            array (
                'id' => 932,
                'prefecture_id' => 20,
                'zipcode' => '3950601',
                'name' => '下伊那郡平谷村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            432 => 
            array (
                'id' => 933,
                'prefecture_id' => 20,
                'zipcode' => '3950701',
                'name' => '下伊那郡根羽村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            433 => 
            array (
                'id' => 934,
                'prefecture_id' => 20,
                'zipcode' => '3992100',
                'name' => '下伊那郡下條村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            434 => 
            array (
                'id' => 935,
                'prefecture_id' => 20,
                'zipcode' => '3991601',
                'name' => '下伊那郡売木村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            435 => 
            array (
                'id' => 936,
                'prefecture_id' => 20,
                'zipcode' => '3991200',
                'name' => '下伊那郡天龍村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            436 => 
            array (
                'id' => 937,
                'prefecture_id' => 20,
                'zipcode' => '3991801',
                'name' => '下伊那郡泰阜村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            437 => 
            array (
                'id' => 938,
                'prefecture_id' => 20,
                'zipcode' => '3951100',
                'name' => '下伊那郡喬木村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            438 => 
            array (
                'id' => 939,
                'prefecture_id' => 20,
                'zipcode' => '3993200',
                'name' => '下伊那郡豊丘村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            439 => 
            array (
                'id' => 940,
                'prefecture_id' => 20,
                'zipcode' => '3993500',
                'name' => '下伊那郡大鹿村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            440 => 
            array (
                'id' => 941,
                'prefecture_id' => 20,
                'zipcode' => '3995600',
                'name' => '木曽郡上松町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            441 => 
            array (
                'id' => 942,
                'prefecture_id' => 20,
                'zipcode' => '3995300',
                'name' => '木曽郡南木曽町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            442 => 
            array (
                'id' => 943,
                'prefecture_id' => 20,
                'zipcode' => '3996200',
                'name' => '木曽郡木祖村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            443 => 
            array (
                'id' => 944,
                'prefecture_id' => 20,
                'zipcode' => '3970201',
                'name' => '木曽郡王滝村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            444 => 
            array (
                'id' => 945,
                'prefecture_id' => 20,
                'zipcode' => '3995500',
                'name' => '木曽郡大桑村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            445 => 
            array (
                'id' => 946,
                'prefecture_id' => 20,
                'zipcode' => '3970000',
                'name' => '木曽郡木曽町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            446 => 
            array (
                'id' => 947,
                'prefecture_id' => 20,
                'zipcode' => '3997700',
                'name' => '東筑摩郡麻績村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            447 => 
            array (
                'id' => 948,
                'prefecture_id' => 20,
                'zipcode' => '3997200',
                'name' => '東筑摩郡生坂村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            448 => 
            array (
                'id' => 949,
                'prefecture_id' => 20,
                'zipcode' => '3901301',
                'name' => '東筑摩郡山形村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            449 => 
            array (
                'id' => 950,
                'prefecture_id' => 20,
                'zipcode' => '3901100',
                'name' => '東筑摩郡朝日村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            450 => 
            array (
                'id' => 951,
                'prefecture_id' => 20,
                'zipcode' => '3997500',
                'name' => '東筑摩郡筑北村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            451 => 
            array (
                'id' => 952,
                'prefecture_id' => 20,
                'zipcode' => '3998600',
                'name' => '北安曇郡池田町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            452 => 
            array (
                'id' => 953,
                'prefecture_id' => 20,
                'zipcode' => '3998501',
                'name' => '北安曇郡松川村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            453 => 
            array (
                'id' => 954,
                'prefecture_id' => 20,
                'zipcode' => '3999300',
                'name' => '北安曇郡白馬村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            454 => 
            array (
                'id' => 955,
                'prefecture_id' => 20,
                'zipcode' => '3999400',
                'name' => '北安曇郡小谷村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            455 => 
            array (
                'id' => 956,
                'prefecture_id' => 20,
                'zipcode' => '3890600',
                'name' => '埴科郡坂城町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            456 => 
            array (
                'id' => 957,
                'prefecture_id' => 20,
                'zipcode' => '3810200',
                'name' => '上高井郡小布施町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            457 => 
            array (
                'id' => 958,
                'prefecture_id' => 20,
                'zipcode' => '3820800',
                'name' => '上高井郡高山村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            458 => 
            array (
                'id' => 959,
                'prefecture_id' => 20,
                'zipcode' => '3810400',
                'name' => '下高井郡山ノ内町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            459 => 
            array (
                'id' => 960,
                'prefecture_id' => 20,
                'zipcode' => '3892300',
                'name' => '下高井郡木島平村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            460 => 
            array (
                'id' => 961,
                'prefecture_id' => 20,
                'zipcode' => '3892500',
                'name' => '下高井郡野沢温泉村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            461 => 
            array (
                'id' => 962,
                'prefecture_id' => 20,
                'zipcode' => '3891300',
                'name' => '上水内郡信濃町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            462 => 
            array (
                'id' => 963,
                'prefecture_id' => 20,
                'zipcode' => '3813300',
                'name' => '上水内郡小川村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            463 => 
            array (
                'id' => 964,
                'prefecture_id' => 20,
                'zipcode' => '3891200',
                'name' => '上水内郡飯綱町',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            464 => 
            array (
                'id' => 965,
                'prefecture_id' => 20,
                'zipcode' => '3892700',
                'name' => '下水内郡栄村',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            465 => 
            array (
                'id' => 966,
                'prefecture_id' => 21,
                'zipcode' => '5000000',
                'name' => '岐阜市',
                'created_at' => '2024-12-21 16:15:29',
                'updated_at' => '2024-12-21 16:15:29',
            ),
            466 => 
            array (
                'id' => 967,
                'prefecture_id' => 21,
                'zipcode' => '5030000',
                'name' => '大垣市',
                'created_at' => '2024-12-21 16:15:31',
                'updated_at' => '2024-12-21 16:15:31',
            ),
            467 => 
            array (
                'id' => 968,
                'prefecture_id' => 21,
                'zipcode' => '5060000',
                'name' => '高山市',
                'created_at' => '2024-12-21 16:15:31',
                'updated_at' => '2024-12-21 16:15:31',
            ),
            468 => 
            array (
                'id' => 969,
                'prefecture_id' => 21,
                'zipcode' => '5070000',
                'name' => '多治見市',
                'created_at' => '2024-12-21 16:15:32',
                'updated_at' => '2024-12-21 16:15:32',
            ),
            469 => 
            array (
                'id' => 970,
                'prefecture_id' => 21,
                'zipcode' => '5013200',
                'name' => '関市',
                'created_at' => '2024-12-21 16:15:32',
                'updated_at' => '2024-12-21 16:15:32',
            ),
            470 => 
            array (
                'id' => 971,
                'prefecture_id' => 21,
                'zipcode' => '5080000',
                'name' => '中津川市',
                'created_at' => '2024-12-21 16:15:33',
                'updated_at' => '2024-12-21 16:15:33',
            ),
            471 => 
            array (
                'id' => 972,
                'prefecture_id' => 21,
                'zipcode' => '5013700',
                'name' => '美濃市',
                'created_at' => '2024-12-21 16:15:33',
                'updated_at' => '2024-12-21 16:15:33',
            ),
            472 => 
            array (
                'id' => 973,
                'prefecture_id' => 21,
                'zipcode' => '5096100',
                'name' => '瑞浪市',
                'created_at' => '2024-12-21 16:15:33',
                'updated_at' => '2024-12-21 16:15:33',
            ),
            473 => 
            array (
                'id' => 974,
                'prefecture_id' => 21,
                'zipcode' => '5016200',
                'name' => '羽島市',
                'created_at' => '2024-12-21 16:15:33',
                'updated_at' => '2024-12-21 16:15:33',
            ),
            474 => 
            array (
                'id' => 975,
                'prefecture_id' => 21,
                'zipcode' => '5097200',
                'name' => '恵那市',
                'created_at' => '2024-12-21 16:15:33',
                'updated_at' => '2024-12-21 16:15:33',
            ),
            475 => 
            array (
                'id' => 976,
                'prefecture_id' => 21,
                'zipcode' => '5050000',
                'name' => '美濃加茂市',
                'created_at' => '2024-12-21 16:15:33',
                'updated_at' => '2024-12-21 16:15:33',
            ),
            476 => 
            array (
                'id' => 977,
                'prefecture_id' => 21,
                'zipcode' => '5095100',
                'name' => '土岐市',
                'created_at' => '2024-12-21 16:15:33',
                'updated_at' => '2024-12-21 16:15:33',
            ),
            477 => 
            array (
                'id' => 978,
                'prefecture_id' => 21,
                'zipcode' => '5040000',
                'name' => '各務原市',
                'created_at' => '2024-12-21 16:15:33',
                'updated_at' => '2024-12-21 16:15:33',
            ),
            478 => 
            array (
                'id' => 979,
                'prefecture_id' => 21,
                'zipcode' => '5090200',
                'name' => '可児市',
                'created_at' => '2024-12-21 16:15:34',
                'updated_at' => '2024-12-21 16:15:34',
            ),
            479 => 
            array (
                'id' => 980,
                'prefecture_id' => 21,
                'zipcode' => '5012100',
                'name' => '山県市',
                'created_at' => '2024-12-21 16:15:34',
                'updated_at' => '2024-12-21 16:15:34',
            ),
            480 => 
            array (
                'id' => 981,
                'prefecture_id' => 21,
                'zipcode' => '5010200',
                'name' => '瑞穂市',
                'created_at' => '2024-12-21 16:15:34',
                'updated_at' => '2024-12-21 16:15:34',
            ),
            481 => 
            array (
                'id' => 982,
                'prefecture_id' => 21,
                'zipcode' => '5061100',
                'name' => '飛騨市',
                'created_at' => '2024-12-21 16:15:34',
                'updated_at' => '2024-12-21 16:15:34',
            ),
            482 => 
            array (
                'id' => 983,
                'prefecture_id' => 21,
                'zipcode' => '5010400',
                'name' => '本巣市',
                'created_at' => '2024-12-21 16:15:34',
                'updated_at' => '2024-12-21 16:15:34',
            ),
            483 => 
            array (
                'id' => 984,
                'prefecture_id' => 21,
                'zipcode' => '5014200',
                'name' => '郡上市',
                'created_at' => '2024-12-21 16:15:34',
                'updated_at' => '2024-12-21 16:15:34',
            ),
            484 => 
            array (
                'id' => 985,
                'prefecture_id' => 21,
                'zipcode' => '5092200',
                'name' => '下呂市',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            485 => 
            array (
                'id' => 986,
                'prefecture_id' => 21,
                'zipcode' => '5030600',
                'name' => '海津市',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            486 => 
            array (
                'id' => 987,
                'prefecture_id' => 21,
                'zipcode' => '5016100',
                'name' => '羽島郡岐南町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            487 => 
            array (
                'id' => 988,
                'prefecture_id' => 21,
                'zipcode' => '5016100',
                'name' => '羽島郡笠松町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            488 => 
            array (
                'id' => 989,
                'prefecture_id' => 21,
                'zipcode' => '5031300',
                'name' => '養老郡養老町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            489 => 
            array (
                'id' => 990,
                'prefecture_id' => 21,
                'zipcode' => '5032100',
                'name' => '不破郡垂井町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            490 => 
            array (
                'id' => 991,
                'prefecture_id' => 21,
                'zipcode' => '5031500',
                'name' => '不破郡関ケ原町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            491 => 
            array (
                'id' => 992,
                'prefecture_id' => 21,
                'zipcode' => '5032300',
                'name' => '安八郡神戸町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            492 => 
            array (
                'id' => 993,
                'prefecture_id' => 21,
                'zipcode' => '5030200',
                'name' => '安八郡輪之内町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            493 => 
            array (
                'id' => 994,
                'prefecture_id' => 21,
                'zipcode' => '5030100',
                'name' => '安八郡安八町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            494 => 
            array (
                'id' => 995,
                'prefecture_id' => 21,
                'zipcode' => '5010600',
                'name' => '揖斐郡揖斐川町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            495 => 
            array (
                'id' => 996,
                'prefecture_id' => 21,
                'zipcode' => '5010500',
                'name' => '揖斐郡大野町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            496 => 
            array (
                'id' => 997,
                'prefecture_id' => 21,
                'zipcode' => '5032400',
                'name' => '揖斐郡池田町',
                'created_at' => '2024-12-21 16:15:35',
                'updated_at' => '2024-12-21 16:15:35',
            ),
            497 => 
            array (
                'id' => 998,
                'prefecture_id' => 21,
                'zipcode' => '5010400',
                'name' => '本巣郡北方町',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            498 => 
            array (
                'id' => 999,
                'prefecture_id' => 21,
                'zipcode' => '5050000',
                'name' => '加茂郡坂祝町',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            499 => 
            array (
                'id' => 1000,
                'prefecture_id' => 21,
                'zipcode' => '5013300',
                'name' => '加茂郡富加町',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
        ));
        \DB::table('cities')->insert(array (
            0 => 
            array (
                'id' => 1001,
                'prefecture_id' => 21,
                'zipcode' => '5090300',
                'name' => '加茂郡川辺町',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            1 => 
            array (
                'id' => 1002,
                'prefecture_id' => 21,
                'zipcode' => '5090400',
                'name' => '加茂郡七宗町',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            2 => 
            array (
                'id' => 1003,
                'prefecture_id' => 21,
                'zipcode' => '5050300',
                'name' => '加茂郡八百津町',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            3 => 
            array (
                'id' => 1004,
                'prefecture_id' => 21,
                'zipcode' => '5091100',
                'name' => '加茂郡白川町',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            4 => 
            array (
                'id' => 1005,
                'prefecture_id' => 21,
                'zipcode' => '5091300',
                'name' => '加茂郡東白川村',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            5 => 
            array (
                'id' => 1006,
                'prefecture_id' => 21,
                'zipcode' => '5050100',
                'name' => '可児郡御嵩町',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            6 => 
            array (
                'id' => 1007,
                'prefecture_id' => 21,
                'zipcode' => '5015600',
                'name' => '大野郡白川村',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            7 => 
            array (
                'id' => 1008,
                'prefecture_id' => 22,
                'zipcode' => '4220000',
                'name' => '静岡市葵区',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            8 => 
            array (
                'id' => 1009,
                'prefecture_id' => 22,
                'zipcode' => '4220000',
                'name' => '静岡市駿河区',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            9 => 
            array (
                'id' => 1010,
                'prefecture_id' => 22,
                'zipcode' => '4220000',
                'name' => '静岡市清水区',
                'created_at' => '2024-12-21 16:15:36',
                'updated_at' => '2024-12-21 16:15:36',
            ),
            10 => 
            array (
                'id' => 1011,
                'prefecture_id' => 22,
                'zipcode' => '4320000',
                'name' => '浜松市中央区',
                'created_at' => '2024-12-21 16:15:37',
                'updated_at' => '2024-12-21 16:15:37',
            ),
            11 => 
            array (
                'id' => 1012,
                'prefecture_id' => 22,
                'zipcode' => '4320000',
                'name' => '浜松市浜名区',
                'created_at' => '2024-12-21 16:15:37',
                'updated_at' => '2024-12-21 16:15:37',
            ),
            12 => 
            array (
                'id' => 1013,
                'prefecture_id' => 22,
                'zipcode' => '4320000',
                'name' => '浜松市天竜区',
                'created_at' => '2024-12-21 16:15:38',
                'updated_at' => '2024-12-21 16:15:38',
            ),
            13 => 
            array (
                'id' => 1014,
                'prefecture_id' => 22,
                'zipcode' => '4100000',
                'name' => '沼津市',
                'created_at' => '2024-12-21 16:15:38',
                'updated_at' => '2024-12-21 16:15:38',
            ),
            14 => 
            array (
                'id' => 1015,
                'prefecture_id' => 22,
                'zipcode' => '4130000',
                'name' => '熱海市',
                'created_at' => '2024-12-21 16:15:38',
                'updated_at' => '2024-12-21 16:15:38',
            ),
            15 => 
            array (
                'id' => 1016,
                'prefecture_id' => 22,
                'zipcode' => '4110000',
                'name' => '三島市',
                'created_at' => '2024-12-21 16:15:38',
                'updated_at' => '2024-12-21 16:15:38',
            ),
            16 => 
            array (
                'id' => 1017,
                'prefecture_id' => 22,
                'zipcode' => '4180000',
                'name' => '富士宮市',
                'created_at' => '2024-12-21 16:15:38',
                'updated_at' => '2024-12-21 16:15:38',
            ),
            17 => 
            array (
                'id' => 1018,
                'prefecture_id' => 22,
                'zipcode' => '4140000',
                'name' => '伊東市',
                'created_at' => '2024-12-21 16:15:38',
                'updated_at' => '2024-12-21 16:15:38',
            ),
            18 => 
            array (
                'id' => 1019,
                'prefecture_id' => 22,
                'zipcode' => '4270000',
                'name' => '島田市',
                'created_at' => '2024-12-21 16:15:39',
                'updated_at' => '2024-12-21 16:15:39',
            ),
            19 => 
            array (
                'id' => 1020,
                'prefecture_id' => 22,
                'zipcode' => '4170000',
                'name' => '富士市',
                'created_at' => '2024-12-21 16:15:39',
                'updated_at' => '2024-12-21 16:15:39',
            ),
            20 => 
            array (
                'id' => 1021,
                'prefecture_id' => 22,
                'zipcode' => '4380000',
                'name' => '磐田市',
                'created_at' => '2024-12-21 16:15:39',
                'updated_at' => '2024-12-21 16:15:39',
            ),
            21 => 
            array (
                'id' => 1022,
                'prefecture_id' => 22,
                'zipcode' => '4250000',
                'name' => '焼津市',
                'created_at' => '2024-12-21 16:15:39',
                'updated_at' => '2024-12-21 16:15:39',
            ),
            22 => 
            array (
                'id' => 1023,
                'prefecture_id' => 22,
                'zipcode' => '4360000',
                'name' => '掛川市',
                'created_at' => '2024-12-21 16:15:40',
                'updated_at' => '2024-12-21 16:15:40',
            ),
            23 => 
            array (
                'id' => 1024,
                'prefecture_id' => 22,
                'zipcode' => '4260000',
                'name' => '藤枝市',
                'created_at' => '2024-12-21 16:15:40',
                'updated_at' => '2024-12-21 16:15:40',
            ),
            24 => 
            array (
                'id' => 1025,
                'prefecture_id' => 22,
                'zipcode' => '4120000',
                'name' => '御殿場市',
                'created_at' => '2024-12-21 16:15:40',
                'updated_at' => '2024-12-21 16:15:40',
            ),
            25 => 
            array (
                'id' => 1026,
                'prefecture_id' => 22,
                'zipcode' => '4370000',
                'name' => '袋井市',
                'created_at' => '2024-12-21 16:15:40',
                'updated_at' => '2024-12-21 16:15:40',
            ),
            26 => 
            array (
                'id' => 1027,
                'prefecture_id' => 22,
                'zipcode' => '4150000',
                'name' => '下田市',
                'created_at' => '2024-12-21 16:15:40',
                'updated_at' => '2024-12-21 16:15:40',
            ),
            27 => 
            array (
                'id' => 1028,
                'prefecture_id' => 22,
                'zipcode' => '4101100',
                'name' => '裾野市',
                'created_at' => '2024-12-21 16:15:40',
                'updated_at' => '2024-12-21 16:15:40',
            ),
            28 => 
            array (
                'id' => 1029,
                'prefecture_id' => 22,
                'zipcode' => '4310400',
                'name' => '湖西市',
                'created_at' => '2024-12-21 16:15:40',
                'updated_at' => '2024-12-21 16:15:40',
            ),
            29 => 
            array (
                'id' => 1030,
                'prefecture_id' => 22,
                'zipcode' => '4102400',
                'name' => '伊豆市',
                'created_at' => '2024-12-21 16:15:40',
                'updated_at' => '2024-12-21 16:15:40',
            ),
            30 => 
            array (
                'id' => 1031,
                'prefecture_id' => 22,
                'zipcode' => '4371600',
                'name' => '御前崎市',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            31 => 
            array (
                'id' => 1032,
                'prefecture_id' => 22,
                'zipcode' => '4390000',
                'name' => '菊川市',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            32 => 
            array (
                'id' => 1033,
                'prefecture_id' => 22,
                'zipcode' => '4102200',
                'name' => '伊豆の国市',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            33 => 
            array (
                'id' => 1034,
                'prefecture_id' => 22,
                'zipcode' => '4210500',
                'name' => '牧之原市',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            34 => 
            array (
                'id' => 1035,
                'prefecture_id' => 22,
                'zipcode' => '4130300',
                'name' => '賀茂郡東伊豆町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            35 => 
            array (
                'id' => 1036,
                'prefecture_id' => 22,
                'zipcode' => '4130500',
                'name' => '賀茂郡河津町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            36 => 
            array (
                'id' => 1037,
                'prefecture_id' => 22,
                'zipcode' => '4150300',
                'name' => '賀茂郡南伊豆町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            37 => 
            array (
                'id' => 1038,
                'prefecture_id' => 22,
                'zipcode' => '4103600',
                'name' => '賀茂郡松崎町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            38 => 
            array (
                'id' => 1039,
                'prefecture_id' => 22,
                'zipcode' => '4103500',
                'name' => '賀茂郡西伊豆町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            39 => 
            array (
                'id' => 1040,
                'prefecture_id' => 22,
                'zipcode' => '4190100',
                'name' => '田方郡函南町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            40 => 
            array (
                'id' => 1041,
                'prefecture_id' => 22,
                'zipcode' => '4110000',
                'name' => '駿東郡清水町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            41 => 
            array (
                'id' => 1042,
                'prefecture_id' => 22,
                'zipcode' => '4110000',
                'name' => '駿東郡長泉町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            42 => 
            array (
                'id' => 1043,
                'prefecture_id' => 22,
                'zipcode' => '4101300',
                'name' => '駿東郡小山町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            43 => 
            array (
                'id' => 1044,
                'prefecture_id' => 22,
                'zipcode' => '4210300',
                'name' => '榛原郡吉田町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            44 => 
            array (
                'id' => 1045,
                'prefecture_id' => 22,
                'zipcode' => '4280300',
                'name' => '榛原郡川根本町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            45 => 
            array (
                'id' => 1046,
                'prefecture_id' => 22,
                'zipcode' => '4370200',
                'name' => '周智郡森町',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            46 => 
            array (
                'id' => 1047,
                'prefecture_id' => 23,
                'zipcode' => '4640000',
                'name' => '名古屋市千種区',
                'created_at' => '2024-12-21 16:15:41',
                'updated_at' => '2024-12-21 16:15:41',
            ),
            47 => 
            array (
                'id' => 1048,
                'prefecture_id' => 23,
                'zipcode' => '4610000',
                'name' => '名古屋市東区',
                'created_at' => '2024-12-21 16:15:42',
                'updated_at' => '2024-12-21 16:15:42',
            ),
            48 => 
            array (
                'id' => 1049,
                'prefecture_id' => 23,
                'zipcode' => '4620000',
                'name' => '名古屋市北区',
                'created_at' => '2024-12-21 16:15:42',
                'updated_at' => '2024-12-21 16:15:42',
            ),
            49 => 
            array (
                'id' => 1050,
                'prefecture_id' => 23,
                'zipcode' => '4510000',
                'name' => '名古屋市西区',
                'created_at' => '2024-12-21 16:15:42',
                'updated_at' => '2024-12-21 16:15:42',
            ),
            50 => 
            array (
                'id' => 1051,
                'prefecture_id' => 23,
                'zipcode' => '4530000',
                'name' => '名古屋市中村区',
                'created_at' => '2024-12-21 16:15:42',
                'updated_at' => '2024-12-21 16:15:42',
            ),
            51 => 
            array (
                'id' => 1052,
                'prefecture_id' => 23,
                'zipcode' => '4600000',
                'name' => '名古屋市中区',
                'created_at' => '2024-12-21 16:15:43',
                'updated_at' => '2024-12-21 16:15:43',
            ),
            52 => 
            array (
                'id' => 1053,
                'prefecture_id' => 23,
                'zipcode' => '4660000',
                'name' => '名古屋市昭和区',
                'created_at' => '2024-12-21 16:15:43',
                'updated_at' => '2024-12-21 16:15:43',
            ),
            53 => 
            array (
                'id' => 1054,
                'prefecture_id' => 23,
                'zipcode' => '4670000',
                'name' => '名古屋市瑞穂区',
                'created_at' => '2024-12-21 16:15:43',
                'updated_at' => '2024-12-21 16:15:43',
            ),
            54 => 
            array (
                'id' => 1055,
                'prefecture_id' => 23,
                'zipcode' => '4560000',
                'name' => '名古屋市熱田区',
                'created_at' => '2024-12-21 16:15:43',
                'updated_at' => '2024-12-21 16:15:43',
            ),
            55 => 
            array (
                'id' => 1056,
                'prefecture_id' => 23,
                'zipcode' => '4540000',
                'name' => '名古屋市中川区',
                'created_at' => '2024-12-21 16:15:43',
                'updated_at' => '2024-12-21 16:15:43',
            ),
            56 => 
            array (
                'id' => 1057,
                'prefecture_id' => 23,
                'zipcode' => '4550000',
                'name' => '名古屋市港区',
                'created_at' => '2024-12-21 16:15:44',
                'updated_at' => '2024-12-21 16:15:44',
            ),
            57 => 
            array (
                'id' => 1058,
                'prefecture_id' => 23,
                'zipcode' => '4570000',
                'name' => '名古屋市南区',
                'created_at' => '2024-12-21 16:15:44',
                'updated_at' => '2024-12-21 16:15:44',
            ),
            58 => 
            array (
                'id' => 1059,
                'prefecture_id' => 23,
                'zipcode' => '4630000',
                'name' => '名古屋市守山区',
                'created_at' => '2024-12-21 16:15:44',
                'updated_at' => '2024-12-21 16:15:44',
            ),
            59 => 
            array (
                'id' => 1060,
                'prefecture_id' => 23,
                'zipcode' => '4580000',
                'name' => '名古屋市緑区',
                'created_at' => '2024-12-21 16:15:44',
                'updated_at' => '2024-12-21 16:15:44',
            ),
            60 => 
            array (
                'id' => 1061,
                'prefecture_id' => 23,
                'zipcode' => '4650000',
                'name' => '名古屋市名東区',
                'created_at' => '2024-12-21 16:15:45',
                'updated_at' => '2024-12-21 16:15:45',
            ),
            61 => 
            array (
                'id' => 1062,
                'prefecture_id' => 23,
                'zipcode' => '4680000',
                'name' => '名古屋市天白区',
                'created_at' => '2024-12-21 16:15:45',
                'updated_at' => '2024-12-21 16:15:45',
            ),
            62 => 
            array (
                'id' => 1063,
                'prefecture_id' => 23,
                'zipcode' => '4410000',
                'name' => '豊橋市',
                'created_at' => '2024-12-21 16:15:45',
                'updated_at' => '2024-12-21 16:15:45',
            ),
            63 => 
            array (
                'id' => 1064,
                'prefecture_id' => 23,
                'zipcode' => '4440000',
                'name' => '岡崎市',
                'created_at' => '2024-12-21 16:15:46',
                'updated_at' => '2024-12-21 16:15:46',
            ),
            64 => 
            array (
                'id' => 1065,
                'prefecture_id' => 23,
                'zipcode' => '4910000',
                'name' => '一宮市',
                'created_at' => '2024-12-21 16:15:46',
                'updated_at' => '2024-12-21 16:15:46',
            ),
            65 => 
            array (
                'id' => 1066,
                'prefecture_id' => 23,
                'zipcode' => '4890000',
                'name' => '瀬戸市',
                'created_at' => '2024-12-21 16:15:47',
                'updated_at' => '2024-12-21 16:15:47',
            ),
            66 => 
            array (
                'id' => 1067,
                'prefecture_id' => 23,
                'zipcode' => '4750000',
                'name' => '半田市',
                'created_at' => '2024-12-21 16:15:47',
                'updated_at' => '2024-12-21 16:15:47',
            ),
            67 => 
            array (
                'id' => 1068,
                'prefecture_id' => 23,
                'zipcode' => '4860000',
                'name' => '春日井市',
                'created_at' => '2024-12-21 16:15:48',
                'updated_at' => '2024-12-21 16:15:48',
            ),
            68 => 
            array (
                'id' => 1069,
                'prefecture_id' => 23,
                'zipcode' => '4420000',
                'name' => '豊川市',
                'created_at' => '2024-12-21 16:15:48',
                'updated_at' => '2024-12-21 16:15:48',
            ),
            69 => 
            array (
                'id' => 1070,
                'prefecture_id' => 23,
                'zipcode' => '4960000',
                'name' => '津島市',
                'created_at' => '2024-12-21 16:15:49',
                'updated_at' => '2024-12-21 16:15:49',
            ),
            70 => 
            array (
                'id' => 1071,
                'prefecture_id' => 23,
                'zipcode' => '4470000',
                'name' => '碧南市',
                'created_at' => '2024-12-21 16:15:49',
                'updated_at' => '2024-12-21 16:15:49',
            ),
            71 => 
            array (
                'id' => 1072,
                'prefecture_id' => 23,
                'zipcode' => '4480000',
                'name' => '刈谷市',
                'created_at' => '2024-12-21 16:15:49',
                'updated_at' => '2024-12-21 16:15:49',
            ),
            72 => 
            array (
                'id' => 1073,
                'prefecture_id' => 23,
                'zipcode' => '4710000',
                'name' => '豊田市',
                'created_at' => '2024-12-21 16:15:50',
                'updated_at' => '2024-12-21 16:15:50',
            ),
            73 => 
            array (
                'id' => 1074,
                'prefecture_id' => 23,
                'zipcode' => '4460000',
                'name' => '安城市',
                'created_at' => '2024-12-21 16:15:50',
                'updated_at' => '2024-12-21 16:15:50',
            ),
            74 => 
            array (
                'id' => 1075,
                'prefecture_id' => 23,
                'zipcode' => '4450000',
                'name' => '西尾市',
                'created_at' => '2024-12-21 16:15:51',
                'updated_at' => '2024-12-21 16:15:51',
            ),
            75 => 
            array (
                'id' => 1076,
                'prefecture_id' => 23,
                'zipcode' => '4430000',
                'name' => '蒲郡市',
                'created_at' => '2024-12-21 16:15:51',
                'updated_at' => '2024-12-21 16:15:51',
            ),
            76 => 
            array (
                'id' => 1077,
                'prefecture_id' => 23,
                'zipcode' => '4840000',
                'name' => '犬山市',
                'created_at' => '2024-12-21 16:15:51',
                'updated_at' => '2024-12-21 16:15:51',
            ),
            77 => 
            array (
                'id' => 1078,
                'prefecture_id' => 23,
                'zipcode' => '4790000',
                'name' => '常滑市',
                'created_at' => '2024-12-21 16:15:52',
                'updated_at' => '2024-12-21 16:15:52',
            ),
            78 => 
            array (
                'id' => 1079,
                'prefecture_id' => 23,
                'zipcode' => '4830000',
                'name' => '江南市',
                'created_at' => '2024-12-21 16:15:52',
                'updated_at' => '2024-12-21 16:15:52',
            ),
            79 => 
            array (
                'id' => 1080,
                'prefecture_id' => 23,
                'zipcode' => '4850000',
                'name' => '小牧市',
                'created_at' => '2024-12-21 16:15:53',
                'updated_at' => '2024-12-21 16:15:53',
            ),
            80 => 
            array (
                'id' => 1081,
                'prefecture_id' => 23,
                'zipcode' => '4920000',
                'name' => '稲沢市',
                'created_at' => '2024-12-21 16:15:53',
                'updated_at' => '2024-12-21 16:15:53',
            ),
            81 => 
            array (
                'id' => 1082,
                'prefecture_id' => 23,
                'zipcode' => '4411300',
                'name' => '新城市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            82 => 
            array (
                'id' => 1083,
                'prefecture_id' => 23,
                'zipcode' => '4760000',
                'name' => '東海市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            83 => 
            array (
                'id' => 1084,
                'prefecture_id' => 23,
                'zipcode' => '4740000',
                'name' => '大府市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            84 => 
            array (
                'id' => 1085,
                'prefecture_id' => 23,
                'zipcode' => '4780000',
                'name' => '知多市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            85 => 
            array (
                'id' => 1086,
                'prefecture_id' => 23,
                'zipcode' => '4720000',
                'name' => '知立市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            86 => 
            array (
                'id' => 1087,
                'prefecture_id' => 23,
                'zipcode' => '4880000',
                'name' => '尾張旭市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            87 => 
            array (
                'id' => 1088,
                'prefecture_id' => 23,
                'zipcode' => '4441300',
                'name' => '高浜市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            88 => 
            array (
                'id' => 1089,
                'prefecture_id' => 23,
                'zipcode' => '4820000',
                'name' => '岩倉市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            89 => 
            array (
                'id' => 1090,
                'prefecture_id' => 23,
                'zipcode' => '4701100',
                'name' => '豊明市',
                'created_at' => '2024-12-21 16:15:54',
                'updated_at' => '2024-12-21 16:15:54',
            ),
            90 => 
            array (
                'id' => 1091,
                'prefecture_id' => 23,
                'zipcode' => '4700100',
                'name' => '日進市',
                'created_at' => '2024-12-21 16:15:55',
                'updated_at' => '2024-12-21 16:15:55',
            ),
            91 => 
            array (
                'id' => 1092,
                'prefecture_id' => 23,
                'zipcode' => '4413400',
                'name' => '田原市',
                'created_at' => '2024-12-21 16:15:55',
                'updated_at' => '2024-12-21 16:15:55',
            ),
            92 => 
            array (
                'id' => 1093,
                'prefecture_id' => 23,
                'zipcode' => '4960000',
                'name' => '愛西市',
                'created_at' => '2024-12-21 16:15:55',
                'updated_at' => '2024-12-21 16:15:55',
            ),
            93 => 
            array (
                'id' => 1094,
                'prefecture_id' => 23,
                'zipcode' => '4520000',
                'name' => '清須市',
                'created_at' => '2024-12-21 16:15:55',
                'updated_at' => '2024-12-21 16:15:55',
            ),
            94 => 
            array (
                'id' => 1095,
                'prefecture_id' => 23,
                'zipcode' => '4810000',
                'name' => '北名古屋市',
                'created_at' => '2024-12-21 16:15:55',
                'updated_at' => '2024-12-21 16:15:55',
            ),
            95 => 
            array (
                'id' => 1096,
                'prefecture_id' => 23,
                'zipcode' => '4980000',
                'name' => '弥富市',
                'created_at' => '2024-12-21 16:15:55',
                'updated_at' => '2024-12-21 16:15:55',
            ),
            96 => 
            array (
                'id' => 1097,
                'prefecture_id' => 23,
                'zipcode' => '4700200',
                'name' => 'みよし市',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            97 => 
            array (
                'id' => 1098,
                'prefecture_id' => 23,
                'zipcode' => '4901200',
                'name' => 'あま市',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            98 => 
            array (
                'id' => 1099,
                'prefecture_id' => 23,
                'zipcode' => '4801100',
                'name' => '長久手市',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            99 => 
            array (
                'id' => 1100,
                'prefecture_id' => 23,
                'zipcode' => '4700100',
                'name' => '愛知郡東郷町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            100 => 
            array (
                'id' => 1101,
                'prefecture_id' => 23,
                'zipcode' => '4800200',
                'name' => '西春日井郡豊山町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            101 => 
            array (
                'id' => 1102,
                'prefecture_id' => 23,
                'zipcode' => '4800100',
                'name' => '丹羽郡大口町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            102 => 
            array (
                'id' => 1103,
                'prefecture_id' => 23,
                'zipcode' => '4800100',
                'name' => '丹羽郡扶桑町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            103 => 
            array (
                'id' => 1104,
                'prefecture_id' => 23,
                'zipcode' => '4901100',
                'name' => '海部郡大治町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            104 => 
            array (
                'id' => 1105,
                'prefecture_id' => 23,
                'zipcode' => '4970000',
                'name' => '海部郡蟹江町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            105 => 
            array (
                'id' => 1106,
                'prefecture_id' => 23,
                'zipcode' => '4901400',
                'name' => '海部郡飛島村',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            106 => 
            array (
                'id' => 1107,
                'prefecture_id' => 23,
                'zipcode' => '4702200',
                'name' => '知多郡阿久比町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            107 => 
            array (
                'id' => 1108,
                'prefecture_id' => 23,
                'zipcode' => '4702100',
                'name' => '知多郡東浦町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            108 => 
            array (
                'id' => 1109,
                'prefecture_id' => 23,
                'zipcode' => '4703300',
                'name' => '知多郡南知多町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            109 => 
            array (
                'id' => 1110,
                'prefecture_id' => 23,
                'zipcode' => '4703200',
                'name' => '知多郡美浜町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            110 => 
            array (
                'id' => 1111,
                'prefecture_id' => 23,
                'zipcode' => '4702300',
                'name' => '知多郡武豊町',
                'created_at' => '2024-12-21 16:15:56',
                'updated_at' => '2024-12-21 16:15:56',
            ),
            111 => 
            array (
                'id' => 1112,
                'prefecture_id' => 23,
                'zipcode' => '4440100',
                'name' => '額田郡幸田町',
                'created_at' => '2024-12-21 16:15:57',
                'updated_at' => '2024-12-21 16:15:57',
            ),
            112 => 
            array (
                'id' => 1113,
                'prefecture_id' => 23,
                'zipcode' => '4412300',
                'name' => '北設楽郡設楽町',
                'created_at' => '2024-12-21 16:15:57',
                'updated_at' => '2024-12-21 16:15:57',
            ),
            113 => 
            array (
                'id' => 1114,
                'prefecture_id' => 23,
                'zipcode' => '4490200',
                'name' => '北設楽郡東栄町',
                'created_at' => '2024-12-21 16:15:57',
                'updated_at' => '2024-12-21 16:15:57',
            ),
            114 => 
            array (
                'id' => 1115,
                'prefecture_id' => 23,
                'zipcode' => '4490400',
                'name' => '北設楽郡豊根村',
                'created_at' => '2024-12-21 16:15:57',
                'updated_at' => '2024-12-21 16:15:57',
            ),
            115 => 
            array (
                'id' => 1116,
                'prefecture_id' => 24,
                'zipcode' => '5140000',
                'name' => '津市',
                'created_at' => '2024-12-21 16:15:57',
                'updated_at' => '2024-12-21 16:15:57',
            ),
            116 => 
            array (
                'id' => 1117,
                'prefecture_id' => 24,
                'zipcode' => '5100000',
                'name' => '四日市市',
                'created_at' => '2024-12-21 16:15:57',
                'updated_at' => '2024-12-21 16:15:57',
            ),
            117 => 
            array (
                'id' => 1118,
                'prefecture_id' => 24,
                'zipcode' => '5160000',
                'name' => '伊勢市',
                'created_at' => '2024-12-21 16:15:58',
                'updated_at' => '2024-12-21 16:15:58',
            ),
            118 => 
            array (
                'id' => 1119,
                'prefecture_id' => 24,
                'zipcode' => '5150000',
                'name' => '松阪市',
                'created_at' => '2024-12-21 16:15:58',
                'updated_at' => '2024-12-21 16:15:58',
            ),
            119 => 
            array (
                'id' => 1120,
                'prefecture_id' => 24,
                'zipcode' => '5110000',
                'name' => '桑名市',
                'created_at' => '2024-12-21 16:15:59',
                'updated_at' => '2024-12-21 16:15:59',
            ),
            120 => 
            array (
                'id' => 1121,
                'prefecture_id' => 24,
                'zipcode' => '5130000',
                'name' => '鈴鹿市',
                'created_at' => '2024-12-21 16:15:59',
                'updated_at' => '2024-12-21 16:15:59',
            ),
            121 => 
            array (
                'id' => 1122,
                'prefecture_id' => 24,
                'zipcode' => '5180400',
                'name' => '名張市',
                'created_at' => '2024-12-21 16:15:59',
                'updated_at' => '2024-12-21 16:15:59',
            ),
            122 => 
            array (
                'id' => 1123,
                'prefecture_id' => 24,
                'zipcode' => '5193600',
                'name' => '尾鷲市',
                'created_at' => '2024-12-21 16:16:00',
                'updated_at' => '2024-12-21 16:16:00',
            ),
            123 => 
            array (
                'id' => 1124,
                'prefecture_id' => 24,
                'zipcode' => '5190100',
                'name' => '亀山市',
                'created_at' => '2024-12-21 16:16:00',
                'updated_at' => '2024-12-21 16:16:00',
            ),
            124 => 
            array (
                'id' => 1125,
                'prefecture_id' => 24,
                'zipcode' => '5170000',
                'name' => '鳥羽市',
                'created_at' => '2024-12-21 16:16:00',
                'updated_at' => '2024-12-21 16:16:00',
            ),
            125 => 
            array (
                'id' => 1126,
                'prefecture_id' => 24,
                'zipcode' => '5194300',
                'name' => '熊野市',
                'created_at' => '2024-12-21 16:16:00',
                'updated_at' => '2024-12-21 16:16:00',
            ),
            126 => 
            array (
                'id' => 1127,
                'prefecture_id' => 24,
                'zipcode' => '5110200',
                'name' => 'いなべ市',
                'created_at' => '2024-12-21 16:16:00',
                'updated_at' => '2024-12-21 16:16:00',
            ),
            127 => 
            array (
                'id' => 1128,
                'prefecture_id' => 24,
                'zipcode' => '5170500',
                'name' => '志摩市',
                'created_at' => '2024-12-21 16:16:00',
                'updated_at' => '2024-12-21 16:16:00',
            ),
            128 => 
            array (
                'id' => 1129,
                'prefecture_id' => 24,
                'zipcode' => '5180000',
                'name' => '伊賀市',
                'created_at' => '2024-12-21 16:16:00',
                'updated_at' => '2024-12-21 16:16:00',
            ),
            129 => 
            array (
                'id' => 1130,
                'prefecture_id' => 24,
                'zipcode' => '4980000',
                'name' => '桑名郡木曽岬町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            130 => 
            array (
                'id' => 1131,
                'prefecture_id' => 24,
                'zipcode' => '5110200',
                'name' => '員弁郡東員町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            131 => 
            array (
                'id' => 1132,
                'prefecture_id' => 24,
                'zipcode' => '5101200',
                'name' => '三重郡菰野町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            132 => 
            array (
                'id' => 1133,
                'prefecture_id' => 24,
                'zipcode' => '5100000',
                'name' => '三重郡朝日町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            133 => 
            array (
                'id' => 1134,
                'prefecture_id' => 24,
                'zipcode' => '5100000',
                'name' => '三重郡川越町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            134 => 
            array (
                'id' => 1135,
                'prefecture_id' => 24,
                'zipcode' => '5192100',
                'name' => '多気郡多気町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            135 => 
            array (
                'id' => 1136,
                'prefecture_id' => 24,
                'zipcode' => '5150300',
                'name' => '多気郡明和町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            136 => 
            array (
                'id' => 1137,
                'prefecture_id' => 24,
                'zipcode' => '5192400',
                'name' => '多気郡大台町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            137 => 
            array (
                'id' => 1138,
                'prefecture_id' => 24,
                'zipcode' => '5190400',
                'name' => '度会郡玉城町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            138 => 
            array (
                'id' => 1139,
                'prefecture_id' => 24,
                'zipcode' => '5162100',
                'name' => '度会郡度会町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            139 => 
            array (
                'id' => 1140,
                'prefecture_id' => 24,
                'zipcode' => '5192700',
                'name' => '度会郡大紀町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            140 => 
            array (
                'id' => 1141,
                'prefecture_id' => 24,
                'zipcode' => '5160100',
                'name' => '度会郡南伊勢町',
                'created_at' => '2024-12-21 16:16:01',
                'updated_at' => '2024-12-21 16:16:01',
            ),
            141 => 
            array (
                'id' => 1142,
                'prefecture_id' => 24,
                'zipcode' => '5193400',
                'name' => '北牟婁郡紀北町',
                'created_at' => '2024-12-21 16:16:02',
                'updated_at' => '2024-12-21 16:16:02',
            ),
            142 => 
            array (
                'id' => 1143,
                'prefecture_id' => 24,
                'zipcode' => '5195200',
                'name' => '南牟婁郡御浜町',
                'created_at' => '2024-12-21 16:16:02',
                'updated_at' => '2024-12-21 16:16:02',
            ),
            143 => 
            array (
                'id' => 1144,
                'prefecture_id' => 24,
                'zipcode' => '5195700',
                'name' => '南牟婁郡紀宝町',
                'created_at' => '2024-12-21 16:16:02',
                'updated_at' => '2024-12-21 16:16:02',
            ),
            144 => 
            array (
                'id' => 1145,
                'prefecture_id' => 25,
                'zipcode' => '5200000',
                'name' => '大津市',
                'created_at' => '2024-12-21 16:16:02',
                'updated_at' => '2024-12-21 16:16:02',
            ),
            145 => 
            array (
                'id' => 1146,
                'prefecture_id' => 25,
                'zipcode' => '5220000',
                'name' => '彦根市',
                'created_at' => '2024-12-21 16:16:02',
                'updated_at' => '2024-12-21 16:16:02',
            ),
            146 => 
            array (
                'id' => 1147,
                'prefecture_id' => 25,
                'zipcode' => '5260000',
                'name' => '長浜市',
                'created_at' => '2024-12-21 16:16:02',
                'updated_at' => '2024-12-21 16:16:02',
            ),
            147 => 
            array (
                'id' => 1148,
                'prefecture_id' => 25,
                'zipcode' => '5230000',
                'name' => '近江八幡市',
                'created_at' => '2024-12-21 16:16:03',
                'updated_at' => '2024-12-21 16:16:03',
            ),
            148 => 
            array (
                'id' => 1149,
                'prefecture_id' => 25,
                'zipcode' => '5250000',
                'name' => '草津市',
                'created_at' => '2024-12-21 16:16:03',
                'updated_at' => '2024-12-21 16:16:03',
            ),
            149 => 
            array (
                'id' => 1150,
                'prefecture_id' => 25,
                'zipcode' => '5240000',
                'name' => '守山市',
                'created_at' => '2024-12-21 16:16:03',
                'updated_at' => '2024-12-21 16:16:03',
            ),
            150 => 
            array (
                'id' => 1151,
                'prefecture_id' => 25,
                'zipcode' => '5203000',
                'name' => '栗東市',
                'created_at' => '2024-12-21 16:16:03',
                'updated_at' => '2024-12-21 16:16:03',
            ),
            151 => 
            array (
                'id' => 1152,
                'prefecture_id' => 25,
                'zipcode' => '5280000',
                'name' => '甲賀市',
                'created_at' => '2024-12-21 16:16:03',
                'updated_at' => '2024-12-21 16:16:03',
            ),
            152 => 
            array (
                'id' => 1153,
                'prefecture_id' => 25,
                'zipcode' => '5202300',
                'name' => '野洲市',
                'created_at' => '2024-12-21 16:16:04',
                'updated_at' => '2024-12-21 16:16:04',
            ),
            153 => 
            array (
                'id' => 1154,
                'prefecture_id' => 25,
                'zipcode' => '5203200',
                'name' => '湖南市',
                'created_at' => '2024-12-21 16:16:04',
                'updated_at' => '2024-12-21 16:16:04',
            ),
            154 => 
            array (
                'id' => 1155,
                'prefecture_id' => 25,
                'zipcode' => '5201100',
                'name' => '高島市',
                'created_at' => '2024-12-21 16:16:04',
                'updated_at' => '2024-12-21 16:16:04',
            ),
            155 => 
            array (
                'id' => 1156,
                'prefecture_id' => 25,
                'zipcode' => '5270000',
                'name' => '東近江市',
                'created_at' => '2024-12-21 16:16:04',
                'updated_at' => '2024-12-21 16:16:04',
            ),
            156 => 
            array (
                'id' => 1157,
                'prefecture_id' => 25,
                'zipcode' => '5210000',
                'name' => '米原市',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            157 => 
            array (
                'id' => 1158,
                'prefecture_id' => 25,
                'zipcode' => '5291600',
                'name' => '蒲生郡日野町',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            158 => 
            array (
                'id' => 1159,
                'prefecture_id' => 25,
                'zipcode' => '5202500',
                'name' => '蒲生郡竜王町',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            159 => 
            array (
                'id' => 1160,
                'prefecture_id' => 25,
                'zipcode' => '5291300',
                'name' => '愛知郡愛荘町',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            160 => 
            array (
                'id' => 1161,
                'prefecture_id' => 25,
                'zipcode' => '5291100',
                'name' => '犬上郡豊郷町',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            161 => 
            array (
                'id' => 1162,
                'prefecture_id' => 25,
                'zipcode' => '5220200',
                'name' => '犬上郡甲良町',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            162 => 
            array (
                'id' => 1163,
                'prefecture_id' => 25,
                'zipcode' => '5220300',
                'name' => '犬上郡多賀町',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            163 => 
            array (
                'id' => 1164,
                'prefecture_id' => 26,
                'zipcode' => '6030000',
                'name' => '京都市北区',
                'created_at' => '2024-12-21 16:16:05',
                'updated_at' => '2024-12-21 16:16:05',
            ),
            164 => 
            array (
                'id' => 1165,
                'prefecture_id' => 26,
                'zipcode' => '6020000',
                'name' => '京都市上京区',
                'created_at' => '2024-12-21 16:16:06',
                'updated_at' => '2024-12-21 16:16:06',
            ),
            165 => 
            array (
                'id' => 1166,
                'prefecture_id' => 26,
                'zipcode' => '6060000',
                'name' => '京都市左京区',
                'created_at' => '2024-12-21 16:16:08',
                'updated_at' => '2024-12-21 16:16:08',
            ),
            166 => 
            array (
                'id' => 1167,
                'prefecture_id' => 26,
                'zipcode' => '6040000',
                'name' => '京都市中京区',
                'created_at' => '2024-12-21 16:16:09',
                'updated_at' => '2024-12-21 16:16:09',
            ),
            167 => 
            array (
                'id' => 1168,
                'prefecture_id' => 26,
                'zipcode' => '6050000',
                'name' => '京都市東山区',
                'created_at' => '2024-12-21 16:16:10',
                'updated_at' => '2024-12-21 16:16:10',
            ),
            168 => 
            array (
                'id' => 1169,
                'prefecture_id' => 26,
                'zipcode' => '6000000',
                'name' => '京都市下京区',
                'created_at' => '2024-12-21 16:16:11',
                'updated_at' => '2024-12-21 16:16:11',
            ),
            169 => 
            array (
                'id' => 1170,
                'prefecture_id' => 26,
                'zipcode' => '6010000',
                'name' => '京都市南区',
                'created_at' => '2024-12-21 16:16:13',
                'updated_at' => '2024-12-21 16:16:13',
            ),
            170 => 
            array (
                'id' => 1171,
                'prefecture_id' => 26,
                'zipcode' => '6160000',
                'name' => '京都市右京区',
                'created_at' => '2024-12-21 16:16:13',
                'updated_at' => '2024-12-21 16:16:13',
            ),
            171 => 
            array (
                'id' => 1172,
                'prefecture_id' => 26,
                'zipcode' => '6120000',
                'name' => '京都市伏見区',
                'created_at' => '2024-12-21 16:16:14',
                'updated_at' => '2024-12-21 16:16:14',
            ),
            172 => 
            array (
                'id' => 1173,
                'prefecture_id' => 26,
                'zipcode' => '6070000',
                'name' => '京都市山科区',
                'created_at' => '2024-12-21 16:16:15',
                'updated_at' => '2024-12-21 16:16:15',
            ),
            173 => 
            array (
                'id' => 1174,
                'prefecture_id' => 26,
                'zipcode' => '6100000',
                'name' => '京都市西京区',
                'created_at' => '2024-12-21 16:16:16',
                'updated_at' => '2024-12-21 16:16:16',
            ),
            174 => 
            array (
                'id' => 1175,
                'prefecture_id' => 26,
                'zipcode' => '6200000',
                'name' => '福知山市',
                'created_at' => '2024-12-21 16:16:16',
                'updated_at' => '2024-12-21 16:16:16',
            ),
            175 => 
            array (
                'id' => 1176,
                'prefecture_id' => 26,
                'zipcode' => '6250000',
                'name' => '舞鶴市',
                'created_at' => '2024-12-21 16:16:17',
                'updated_at' => '2024-12-21 16:16:17',
            ),
            176 => 
            array (
                'id' => 1177,
                'prefecture_id' => 26,
                'zipcode' => '6230000',
                'name' => '綾部市',
                'created_at' => '2024-12-21 16:16:17',
                'updated_at' => '2024-12-21 16:16:17',
            ),
            177 => 
            array (
                'id' => 1178,
                'prefecture_id' => 26,
                'zipcode' => '6110000',
                'name' => '宇治市',
                'created_at' => '2024-12-21 16:16:18',
                'updated_at' => '2024-12-21 16:16:18',
            ),
            178 => 
            array (
                'id' => 1179,
                'prefecture_id' => 26,
                'zipcode' => '6260000',
                'name' => '宮津市',
                'created_at' => '2024-12-21 16:16:18',
                'updated_at' => '2024-12-21 16:16:18',
            ),
            179 => 
            array (
                'id' => 1180,
                'prefecture_id' => 26,
                'zipcode' => '6210000',
                'name' => '亀岡市',
                'created_at' => '2024-12-21 16:16:18',
                'updated_at' => '2024-12-21 16:16:18',
            ),
            180 => 
            array (
                'id' => 1181,
                'prefecture_id' => 26,
                'zipcode' => '6100100',
                'name' => '城陽市',
                'created_at' => '2024-12-21 16:16:18',
                'updated_at' => '2024-12-21 16:16:18',
            ),
            181 => 
            array (
                'id' => 1182,
                'prefecture_id' => 26,
                'zipcode' => '6170000',
                'name' => '向日市',
                'created_at' => '2024-12-21 16:16:18',
                'updated_at' => '2024-12-21 16:16:18',
            ),
            182 => 
            array (
                'id' => 1183,
                'prefecture_id' => 26,
                'zipcode' => '6170000',
                'name' => '長岡京市',
                'created_at' => '2024-12-21 16:16:18',
                'updated_at' => '2024-12-21 16:16:18',
            ),
            183 => 
            array (
                'id' => 1184,
                'prefecture_id' => 26,
                'zipcode' => '6140000',
                'name' => '八幡市',
                'created_at' => '2024-12-21 16:16:18',
                'updated_at' => '2024-12-21 16:16:18',
            ),
            184 => 
            array (
                'id' => 1185,
                'prefecture_id' => 26,
                'zipcode' => '6100300',
                'name' => '京田辺市',
                'created_at' => '2024-12-21 16:16:19',
                'updated_at' => '2024-12-21 16:16:19',
            ),
            185 => 
            array (
                'id' => 1186,
                'prefecture_id' => 26,
                'zipcode' => '6270000',
                'name' => '京丹後市',
                'created_at' => '2024-12-21 16:16:19',
                'updated_at' => '2024-12-21 16:16:19',
            ),
            186 => 
            array (
                'id' => 1187,
                'prefecture_id' => 26,
                'zipcode' => '6220000',
                'name' => '南丹市',
                'created_at' => '2024-12-21 16:16:19',
                'updated_at' => '2024-12-21 16:16:19',
            ),
            187 => 
            array (
                'id' => 1188,
                'prefecture_id' => 26,
                'zipcode' => '6190200',
                'name' => '木津川市',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            188 => 
            array (
                'id' => 1189,
                'prefecture_id' => 26,
                'zipcode' => '6180000',
                'name' => '乙訓郡大山崎町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            189 => 
            array (
                'id' => 1190,
                'prefecture_id' => 26,
                'zipcode' => '6130000',
                'name' => '久世郡久御山町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            190 => 
            array (
                'id' => 1191,
                'prefecture_id' => 26,
                'zipcode' => '6100300',
                'name' => '綴喜郡井手町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            191 => 
            array (
                'id' => 1192,
                'prefecture_id' => 26,
                'zipcode' => '6100200',
                'name' => '綴喜郡宇治田原町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            192 => 
            array (
                'id' => 1193,
                'prefecture_id' => 26,
                'zipcode' => '6191300',
                'name' => '相楽郡笠置町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            193 => 
            array (
                'id' => 1194,
                'prefecture_id' => 26,
                'zipcode' => '6191200',
                'name' => '相楽郡和束町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            194 => 
            array (
                'id' => 1195,
                'prefecture_id' => 26,
                'zipcode' => '6190200',
                'name' => '相楽郡精華町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            195 => 
            array (
                'id' => 1196,
                'prefecture_id' => 26,
                'zipcode' => '6191400',
                'name' => '相楽郡南山城村',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            196 => 
            array (
                'id' => 1197,
                'prefecture_id' => 26,
                'zipcode' => '6220200',
                'name' => '船井郡京丹波町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            197 => 
            array (
                'id' => 1198,
                'prefecture_id' => 26,
                'zipcode' => '6260400',
                'name' => '与謝郡伊根町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            198 => 
            array (
                'id' => 1199,
                'prefecture_id' => 26,
                'zipcode' => '6292200',
                'name' => '与謝郡与謝野町',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            199 => 
            array (
                'id' => 1200,
                'prefecture_id' => 27,
                'zipcode' => '5340000',
                'name' => '大阪市都島区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            200 => 
            array (
                'id' => 1201,
                'prefecture_id' => 27,
                'zipcode' => '5530000',
                'name' => '大阪市福島区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            201 => 
            array (
                'id' => 1202,
                'prefecture_id' => 27,
                'zipcode' => '5540000',
                'name' => '大阪市此花区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            202 => 
            array (
                'id' => 1203,
                'prefecture_id' => 27,
                'zipcode' => '5500000',
                'name' => '大阪市西区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            203 => 
            array (
                'id' => 1204,
                'prefecture_id' => 27,
                'zipcode' => '5520000',
                'name' => '大阪市港区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            204 => 
            array (
                'id' => 1205,
                'prefecture_id' => 27,
                'zipcode' => '5510000',
                'name' => '大阪市大正区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            205 => 
            array (
                'id' => 1206,
                'prefecture_id' => 27,
                'zipcode' => '5430000',
                'name' => '大阪市天王寺区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            206 => 
            array (
                'id' => 1207,
                'prefecture_id' => 27,
                'zipcode' => '5560000',
                'name' => '大阪市浪速区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            207 => 
            array (
                'id' => 1208,
                'prefecture_id' => 27,
                'zipcode' => '5550000',
                'name' => '大阪市西淀川区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            208 => 
            array (
                'id' => 1209,
                'prefecture_id' => 27,
                'zipcode' => '5330000',
                'name' => '大阪市東淀川区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            209 => 
            array (
                'id' => 1210,
                'prefecture_id' => 27,
                'zipcode' => '5370000',
                'name' => '大阪市東成区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            210 => 
            array (
                'id' => 1211,
                'prefecture_id' => 27,
                'zipcode' => '5440000',
                'name' => '大阪市生野区',
                'created_at' => '2024-12-21 16:16:20',
                'updated_at' => '2024-12-21 16:16:20',
            ),
            211 => 
            array (
                'id' => 1212,
                'prefecture_id' => 27,
                'zipcode' => '5350000',
                'name' => '大阪市旭区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            212 => 
            array (
                'id' => 1213,
                'prefecture_id' => 27,
                'zipcode' => '5360000',
                'name' => '大阪市城東区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            213 => 
            array (
                'id' => 1214,
                'prefecture_id' => 27,
                'zipcode' => '5450000',
                'name' => '大阪市阿倍野区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            214 => 
            array (
                'id' => 1215,
                'prefecture_id' => 27,
                'zipcode' => '5580000',
                'name' => '大阪市住吉区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            215 => 
            array (
                'id' => 1216,
                'prefecture_id' => 27,
                'zipcode' => '5460000',
                'name' => '大阪市東住吉区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            216 => 
            array (
                'id' => 1217,
                'prefecture_id' => 27,
                'zipcode' => '5570000',
                'name' => '大阪市西成区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            217 => 
            array (
                'id' => 1218,
                'prefecture_id' => 27,
                'zipcode' => '5320000',
                'name' => '大阪市淀川区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            218 => 
            array (
                'id' => 1219,
                'prefecture_id' => 27,
                'zipcode' => '5380000',
                'name' => '大阪市鶴見区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            219 => 
            array (
                'id' => 1220,
                'prefecture_id' => 27,
                'zipcode' => '5590000',
                'name' => '大阪市住之江区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            220 => 
            array (
                'id' => 1221,
                'prefecture_id' => 27,
                'zipcode' => '5470000',
                'name' => '大阪市平野区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            221 => 
            array (
                'id' => 1222,
                'prefecture_id' => 27,
                'zipcode' => '5300000',
                'name' => '大阪市北区',
                'created_at' => '2024-12-21 16:16:21',
                'updated_at' => '2024-12-21 16:16:21',
            ),
            222 => 
            array (
                'id' => 1223,
                'prefecture_id' => 27,
                'zipcode' => '5390000',
                'name' => '大阪市中央区',
                'created_at' => '2024-12-21 16:16:22',
                'updated_at' => '2024-12-21 16:16:22',
            ),
            223 => 
            array (
                'id' => 1224,
                'prefecture_id' => 27,
                'zipcode' => '5900000',
                'name' => '堺市堺区',
                'created_at' => '2024-12-21 16:16:22',
                'updated_at' => '2024-12-21 16:16:22',
            ),
            224 => 
            array (
                'id' => 1225,
                'prefecture_id' => 27,
                'zipcode' => '5990000',
                'name' => '堺市中区',
                'created_at' => '2024-12-21 16:16:22',
                'updated_at' => '2024-12-21 16:16:22',
            ),
            225 => 
            array (
                'id' => 1226,
                'prefecture_id' => 27,
                'zipcode' => '5990000',
                'name' => '堺市東区',
                'created_at' => '2024-12-21 16:16:22',
                'updated_at' => '2024-12-21 16:16:22',
            ),
            226 => 
            array (
                'id' => 1227,
                'prefecture_id' => 27,
                'zipcode' => '5930000',
                'name' => '堺市西区',
                'created_at' => '2024-12-21 16:16:22',
                'updated_at' => '2024-12-21 16:16:22',
            ),
            227 => 
            array (
                'id' => 1228,
                'prefecture_id' => 27,
                'zipcode' => '5900100',
                'name' => '堺市南区',
                'created_at' => '2024-12-21 16:16:23',
                'updated_at' => '2024-12-21 16:16:23',
            ),
            228 => 
            array (
                'id' => 1229,
                'prefecture_id' => 27,
                'zipcode' => '5910000',
                'name' => '堺市北区',
                'created_at' => '2024-12-21 16:16:23',
                'updated_at' => '2024-12-21 16:16:23',
            ),
            229 => 
            array (
                'id' => 1230,
                'prefecture_id' => 27,
                'zipcode' => '5870000',
                'name' => '堺市美原区',
                'created_at' => '2024-12-21 16:16:23',
                'updated_at' => '2024-12-21 16:16:23',
            ),
            230 => 
            array (
                'id' => 1231,
                'prefecture_id' => 27,
                'zipcode' => '5960000',
                'name' => '岸和田市',
                'created_at' => '2024-12-21 16:16:23',
                'updated_at' => '2024-12-21 16:16:23',
            ),
            231 => 
            array (
                'id' => 1232,
                'prefecture_id' => 27,
                'zipcode' => '5600000',
                'name' => '豊中市',
                'created_at' => '2024-12-21 16:16:23',
                'updated_at' => '2024-12-21 16:16:23',
            ),
            232 => 
            array (
                'id' => 1233,
                'prefecture_id' => 27,
                'zipcode' => '5630000',
                'name' => '池田市',
                'created_at' => '2024-12-21 16:16:23',
                'updated_at' => '2024-12-21 16:16:23',
            ),
            233 => 
            array (
                'id' => 1234,
                'prefecture_id' => 27,
                'zipcode' => '5640000',
                'name' => '吹田市',
                'created_at' => '2024-12-21 16:16:23',
                'updated_at' => '2024-12-21 16:16:23',
            ),
            234 => 
            array (
                'id' => 1235,
                'prefecture_id' => 27,
                'zipcode' => '5950000',
                'name' => '泉大津市',
                'created_at' => '2024-12-21 16:16:23',
                'updated_at' => '2024-12-21 16:16:23',
            ),
            235 => 
            array (
                'id' => 1236,
                'prefecture_id' => 27,
                'zipcode' => '5690000',
                'name' => '高槻市',
                'created_at' => '2024-12-21 16:16:24',
                'updated_at' => '2024-12-21 16:16:24',
            ),
            236 => 
            array (
                'id' => 1237,
                'prefecture_id' => 27,
                'zipcode' => '5970000',
                'name' => '貝塚市',
                'created_at' => '2024-12-21 16:16:24',
                'updated_at' => '2024-12-21 16:16:24',
            ),
            237 => 
            array (
                'id' => 1238,
                'prefecture_id' => 27,
                'zipcode' => '5700000',
                'name' => '守口市',
                'created_at' => '2024-12-21 16:16:24',
                'updated_at' => '2024-12-21 16:16:24',
            ),
            238 => 
            array (
                'id' => 1239,
                'prefecture_id' => 27,
                'zipcode' => '5730000',
                'name' => '枚方市',
                'created_at' => '2024-12-21 16:16:24',
                'updated_at' => '2024-12-21 16:16:24',
            ),
            239 => 
            array (
                'id' => 1240,
                'prefecture_id' => 27,
                'zipcode' => '5670000',
                'name' => '茨木市',
                'created_at' => '2024-12-21 16:16:25',
                'updated_at' => '2024-12-21 16:16:25',
            ),
            240 => 
            array (
                'id' => 1241,
                'prefecture_id' => 27,
                'zipcode' => '5810000',
                'name' => '八尾市',
                'created_at' => '2024-12-21 16:16:25',
                'updated_at' => '2024-12-21 16:16:25',
            ),
            241 => 
            array (
                'id' => 1242,
                'prefecture_id' => 27,
                'zipcode' => '5980000',
                'name' => '泉佐野市',
                'created_at' => '2024-12-21 16:16:25',
                'updated_at' => '2024-12-21 16:16:25',
            ),
            242 => 
            array (
                'id' => 1243,
                'prefecture_id' => 27,
                'zipcode' => '5840000',
                'name' => '富田林市',
                'created_at' => '2024-12-21 16:16:25',
                'updated_at' => '2024-12-21 16:16:25',
            ),
            243 => 
            array (
                'id' => 1244,
                'prefecture_id' => 27,
                'zipcode' => '5720000',
                'name' => '寝屋川市',
                'created_at' => '2024-12-21 16:16:26',
                'updated_at' => '2024-12-21 16:16:26',
            ),
            244 => 
            array (
                'id' => 1245,
                'prefecture_id' => 27,
                'zipcode' => '5860000',
                'name' => '河内長野市',
                'created_at' => '2024-12-21 16:16:26',
                'updated_at' => '2024-12-21 16:16:26',
            ),
            245 => 
            array (
                'id' => 1246,
                'prefecture_id' => 27,
                'zipcode' => '5800000',
                'name' => '松原市',
                'created_at' => '2024-12-21 16:16:26',
                'updated_at' => '2024-12-21 16:16:26',
            ),
            246 => 
            array (
                'id' => 1247,
                'prefecture_id' => 27,
                'zipcode' => '5740000',
                'name' => '大東市',
                'created_at' => '2024-12-21 16:16:26',
                'updated_at' => '2024-12-21 16:16:26',
            ),
            247 => 
            array (
                'id' => 1248,
                'prefecture_id' => 27,
                'zipcode' => '5940000',
                'name' => '和泉市',
                'created_at' => '2024-12-21 16:16:26',
                'updated_at' => '2024-12-21 16:16:26',
            ),
            248 => 
            array (
                'id' => 1249,
                'prefecture_id' => 27,
                'zipcode' => '5620000',
                'name' => '箕面市',
                'created_at' => '2024-12-21 16:16:26',
                'updated_at' => '2024-12-21 16:16:26',
            ),
            249 => 
            array (
                'id' => 1250,
                'prefecture_id' => 27,
                'zipcode' => '5820000',
                'name' => '柏原市',
                'created_at' => '2024-12-21 16:16:26',
                'updated_at' => '2024-12-21 16:16:26',
            ),
            250 => 
            array (
                'id' => 1251,
                'prefecture_id' => 27,
                'zipcode' => '5830000',
                'name' => '羽曳野市',
                'created_at' => '2024-12-21 16:16:26',
                'updated_at' => '2024-12-21 16:16:26',
            ),
            251 => 
            array (
                'id' => 1252,
                'prefecture_id' => 27,
                'zipcode' => '5710000',
                'name' => '門真市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            252 => 
            array (
                'id' => 1253,
                'prefecture_id' => 27,
                'zipcode' => '5660000',
                'name' => '摂津市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            253 => 
            array (
                'id' => 1254,
                'prefecture_id' => 27,
                'zipcode' => '5920000',
                'name' => '高石市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            254 => 
            array (
                'id' => 1255,
                'prefecture_id' => 27,
                'zipcode' => '5830000',
                'name' => '藤井寺市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            255 => 
            array (
                'id' => 1256,
                'prefecture_id' => 27,
                'zipcode' => '5770000',
                'name' => '東大阪市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            256 => 
            array (
                'id' => 1257,
                'prefecture_id' => 27,
                'zipcode' => '5900500',
                'name' => '泉南市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            257 => 
            array (
                'id' => 1258,
                'prefecture_id' => 27,
                'zipcode' => '5750000',
                'name' => '四條畷市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            258 => 
            array (
                'id' => 1259,
                'prefecture_id' => 27,
                'zipcode' => '5760000',
                'name' => '交野市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            259 => 
            array (
                'id' => 1260,
                'prefecture_id' => 27,
                'zipcode' => '5890000',
                'name' => '大阪狭山市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            260 => 
            array (
                'id' => 1261,
                'prefecture_id' => 27,
                'zipcode' => '5990200',
                'name' => '阪南市',
                'created_at' => '2024-12-21 16:16:27',
                'updated_at' => '2024-12-21 16:16:27',
            ),
            261 => 
            array (
                'id' => 1262,
                'prefecture_id' => 27,
                'zipcode' => '6180000',
                'name' => '三島郡島本町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            262 => 
            array (
                'id' => 1263,
                'prefecture_id' => 27,
                'zipcode' => '5630100',
                'name' => '豊能郡豊能町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            263 => 
            array (
                'id' => 1264,
                'prefecture_id' => 27,
                'zipcode' => '5630300',
                'name' => '豊能郡能勢町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            264 => 
            array (
                'id' => 1265,
                'prefecture_id' => 27,
                'zipcode' => '5950000',
                'name' => '泉北郡忠岡町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            265 => 
            array (
                'id' => 1266,
                'prefecture_id' => 27,
                'zipcode' => '5900400',
                'name' => '泉南郡熊取町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            266 => 
            array (
                'id' => 1267,
                'prefecture_id' => 27,
                'zipcode' => '5980000',
                'name' => '泉南郡田尻町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            267 => 
            array (
                'id' => 1268,
                'prefecture_id' => 27,
                'zipcode' => '5990300',
                'name' => '泉南郡岬町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            268 => 
            array (
                'id' => 1269,
                'prefecture_id' => 27,
                'zipcode' => '5830000',
                'name' => '南河内郡太子町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            269 => 
            array (
                'id' => 1270,
                'prefecture_id' => 27,
                'zipcode' => '5850000',
                'name' => '南河内郡河南町',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            270 => 
            array (
                'id' => 1271,
                'prefecture_id' => 27,
                'zipcode' => '5850000',
                'name' => '南河内郡千早赤阪村',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            271 => 
            array (
                'id' => 1272,
                'prefecture_id' => 28,
                'zipcode' => '6580000',
                'name' => '神戸市東灘区',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            272 => 
            array (
                'id' => 1273,
                'prefecture_id' => 28,
                'zipcode' => '6570000',
                'name' => '神戸市灘区',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            273 => 
            array (
                'id' => 1274,
                'prefecture_id' => 28,
                'zipcode' => '6520000',
                'name' => '神戸市兵庫区',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            274 => 
            array (
                'id' => 1275,
                'prefecture_id' => 28,
                'zipcode' => '6530000',
                'name' => '神戸市長田区',
                'created_at' => '2024-12-21 16:16:28',
                'updated_at' => '2024-12-21 16:16:28',
            ),
            275 => 
            array (
                'id' => 1276,
                'prefecture_id' => 28,
                'zipcode' => '6540000',
                'name' => '神戸市須磨区',
                'created_at' => '2024-12-21 16:16:29',
                'updated_at' => '2024-12-21 16:16:29',
            ),
            276 => 
            array (
                'id' => 1277,
                'prefecture_id' => 28,
                'zipcode' => '6550000',
                'name' => '神戸市垂水区',
                'created_at' => '2024-12-21 16:16:29',
                'updated_at' => '2024-12-21 16:16:29',
            ),
            277 => 
            array (
                'id' => 1278,
                'prefecture_id' => 28,
                'zipcode' => '6511100',
                'name' => '神戸市北区',
                'created_at' => '2024-12-21 16:16:29',
                'updated_at' => '2024-12-21 16:16:29',
            ),
            278 => 
            array (
                'id' => 1279,
                'prefecture_id' => 28,
                'zipcode' => '6500000',
                'name' => '神戸市中央区',
                'created_at' => '2024-12-21 16:16:29',
                'updated_at' => '2024-12-21 16:16:29',
            ),
            279 => 
            array (
                'id' => 1280,
                'prefecture_id' => 28,
                'zipcode' => '6500000',
                'name' => '神戸市西区',
                'created_at' => '2024-12-21 16:16:29',
                'updated_at' => '2024-12-21 16:16:29',
            ),
            280 => 
            array (
                'id' => 1281,
                'prefecture_id' => 28,
                'zipcode' => '6700000',
                'name' => '姫路市',
                'created_at' => '2024-12-21 16:16:30',
                'updated_at' => '2024-12-21 16:16:30',
            ),
            281 => 
            array (
                'id' => 1282,
                'prefecture_id' => 28,
                'zipcode' => '6600000',
                'name' => '尼崎市',
                'created_at' => '2024-12-21 16:16:31',
                'updated_at' => '2024-12-21 16:16:31',
            ),
            282 => 
            array (
                'id' => 1283,
                'prefecture_id' => 28,
                'zipcode' => '6730000',
                'name' => '明石市',
                'created_at' => '2024-12-21 16:16:31',
                'updated_at' => '2024-12-21 16:16:31',
            ),
            283 => 
            array (
                'id' => 1284,
                'prefecture_id' => 28,
                'zipcode' => '6620000',
                'name' => '西宮市',
                'created_at' => '2024-12-21 16:16:31',
                'updated_at' => '2024-12-21 16:16:31',
            ),
            284 => 
            array (
                'id' => 1285,
                'prefecture_id' => 28,
                'zipcode' => '6560000',
                'name' => '洲本市',
                'created_at' => '2024-12-21 16:16:32',
                'updated_at' => '2024-12-21 16:16:32',
            ),
            285 => 
            array (
                'id' => 1286,
                'prefecture_id' => 28,
                'zipcode' => '6590000',
                'name' => '芦屋市',
                'created_at' => '2024-12-21 16:16:32',
                'updated_at' => '2024-12-21 16:16:32',
            ),
            286 => 
            array (
                'id' => 1287,
                'prefecture_id' => 28,
                'zipcode' => '6640000',
                'name' => '伊丹市',
                'created_at' => '2024-12-21 16:16:32',
                'updated_at' => '2024-12-21 16:16:32',
            ),
            287 => 
            array (
                'id' => 1288,
                'prefecture_id' => 28,
                'zipcode' => '6780000',
                'name' => '相生市',
                'created_at' => '2024-12-21 16:16:32',
                'updated_at' => '2024-12-21 16:16:32',
            ),
            288 => 
            array (
                'id' => 1289,
                'prefecture_id' => 28,
                'zipcode' => '6680000',
                'name' => '豊岡市',
                'created_at' => '2024-12-21 16:16:32',
                'updated_at' => '2024-12-21 16:16:32',
            ),
            289 => 
            array (
                'id' => 1290,
                'prefecture_id' => 28,
                'zipcode' => '6750000',
                'name' => '加古川市',
                'created_at' => '2024-12-21 16:16:33',
                'updated_at' => '2024-12-21 16:16:33',
            ),
            290 => 
            array (
                'id' => 1291,
                'prefecture_id' => 28,
                'zipcode' => '6780200',
                'name' => '赤穂市',
                'created_at' => '2024-12-21 16:16:33',
                'updated_at' => '2024-12-21 16:16:33',
            ),
            291 => 
            array (
                'id' => 1292,
                'prefecture_id' => 28,
                'zipcode' => '6770000',
                'name' => '西脇市',
                'created_at' => '2024-12-21 16:16:33',
                'updated_at' => '2024-12-21 16:16:33',
            ),
            292 => 
            array (
                'id' => 1293,
                'prefecture_id' => 28,
                'zipcode' => '6650000',
                'name' => '宝塚市',
                'created_at' => '2024-12-21 16:16:34',
                'updated_at' => '2024-12-21 16:16:34',
            ),
            293 => 
            array (
                'id' => 1294,
                'prefecture_id' => 28,
                'zipcode' => '6730400',
                'name' => '三木市',
                'created_at' => '2024-12-21 16:16:34',
                'updated_at' => '2024-12-21 16:16:34',
            ),
            294 => 
            array (
                'id' => 1295,
                'prefecture_id' => 28,
                'zipcode' => '6760000',
                'name' => '高砂市',
                'created_at' => '2024-12-21 16:16:34',
                'updated_at' => '2024-12-21 16:16:34',
            ),
            295 => 
            array (
                'id' => 1296,
                'prefecture_id' => 28,
                'zipcode' => '6660000',
                'name' => '川西市',
                'created_at' => '2024-12-21 16:16:34',
                'updated_at' => '2024-12-21 16:16:34',
            ),
            296 => 
            array (
                'id' => 1297,
                'prefecture_id' => 28,
                'zipcode' => '6751300',
                'name' => '小野市',
                'created_at' => '2024-12-21 16:16:34',
                'updated_at' => '2024-12-21 16:16:34',
            ),
            297 => 
            array (
                'id' => 1298,
                'prefecture_id' => 28,
                'zipcode' => '6691300',
                'name' => '三田市',
                'created_at' => '2024-12-21 16:16:35',
                'updated_at' => '2024-12-21 16:16:35',
            ),
            298 => 
            array (
                'id' => 1299,
                'prefecture_id' => 28,
                'zipcode' => '6750000',
                'name' => '加西市',
                'created_at' => '2024-12-21 16:16:35',
                'updated_at' => '2024-12-21 16:16:35',
            ),
            299 => 
            array (
                'id' => 1300,
                'prefecture_id' => 28,
                'zipcode' => '6692300',
                'name' => '丹波篠山市',
                'created_at' => '2024-12-21 16:16:35',
                'updated_at' => '2024-12-21 16:16:35',
            ),
            300 => 
            array (
                'id' => 1301,
                'prefecture_id' => 28,
                'zipcode' => '6670000',
                'name' => '養父市',
                'created_at' => '2024-12-21 16:16:35',
                'updated_at' => '2024-12-21 16:16:35',
            ),
            301 => 
            array (
                'id' => 1302,
                'prefecture_id' => 28,
                'zipcode' => '6693300',
                'name' => '丹波市',
                'created_at' => '2024-12-21 16:16:36',
                'updated_at' => '2024-12-21 16:16:36',
            ),
            302 => 
            array (
                'id' => 1303,
                'prefecture_id' => 28,
                'zipcode' => '6560400',
                'name' => '南あわじ市',
                'created_at' => '2024-12-21 16:16:36',
                'updated_at' => '2024-12-21 16:16:36',
            ),
            303 => 
            array (
                'id' => 1304,
                'prefecture_id' => 28,
                'zipcode' => '6695200',
                'name' => '朝来市',
                'created_at' => '2024-12-21 16:16:36',
                'updated_at' => '2024-12-21 16:16:36',
            ),
            304 => 
            array (
                'id' => 1305,
                'prefecture_id' => 28,
                'zipcode' => '6562100',
                'name' => '淡路市',
                'created_at' => '2024-12-21 16:16:36',
                'updated_at' => '2024-12-21 16:16:36',
            ),
            305 => 
            array (
                'id' => 1306,
                'prefecture_id' => 28,
                'zipcode' => '6712500',
                'name' => '宍粟市',
                'created_at' => '2024-12-21 16:16:37',
                'updated_at' => '2024-12-21 16:16:37',
            ),
            306 => 
            array (
                'id' => 1307,
                'prefecture_id' => 28,
                'zipcode' => '6731400',
                'name' => '加東市',
                'created_at' => '2024-12-21 16:16:37',
                'updated_at' => '2024-12-21 16:16:37',
            ),
            307 => 
            array (
                'id' => 1308,
                'prefecture_id' => 28,
                'zipcode' => '6794100',
                'name' => 'たつの市',
                'created_at' => '2024-12-21 16:16:37',
                'updated_at' => '2024-12-21 16:16:37',
            ),
            308 => 
            array (
                'id' => 1309,
                'prefecture_id' => 28,
                'zipcode' => '6660200',
                'name' => '川辺郡猪名川町',
                'created_at' => '2024-12-21 16:16:37',
                'updated_at' => '2024-12-21 16:16:37',
            ),
            309 => 
            array (
                'id' => 1310,
                'prefecture_id' => 28,
                'zipcode' => '6791100',
                'name' => '多可郡多可町',
                'created_at' => '2024-12-21 16:16:37',
                'updated_at' => '2024-12-21 16:16:37',
            ),
            310 => 
            array (
                'id' => 1311,
                'prefecture_id' => 28,
                'zipcode' => '6751100',
                'name' => '加古郡稲美町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            311 => 
            array (
                'id' => 1312,
                'prefecture_id' => 28,
                'zipcode' => '6750100',
                'name' => '加古郡播磨町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            312 => 
            array (
                'id' => 1313,
                'prefecture_id' => 28,
                'zipcode' => '6792300',
                'name' => '神崎郡市川町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            313 => 
            array (
                'id' => 1314,
                'prefecture_id' => 28,
                'zipcode' => '6792200',
                'name' => '神崎郡福崎町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            314 => 
            array (
                'id' => 1315,
                'prefecture_id' => 28,
                'zipcode' => '6793100',
                'name' => '神崎郡神河町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            315 => 
            array (
                'id' => 1316,
                'prefecture_id' => 28,
                'zipcode' => '6711500',
                'name' => '揖保郡太子町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            316 => 
            array (
                'id' => 1317,
                'prefecture_id' => 28,
                'zipcode' => '6781200',
                'name' => '赤穂郡上郡町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            317 => 
            array (
                'id' => 1318,
                'prefecture_id' => 28,
                'zipcode' => '6795300',
                'name' => '佐用郡佐用町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            318 => 
            array (
                'id' => 1319,
                'prefecture_id' => 28,
                'zipcode' => '6696500',
                'name' => '美方郡香美町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            319 => 
            array (
                'id' => 1320,
                'prefecture_id' => 28,
                'zipcode' => '6696700',
                'name' => '美方郡新温泉町',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            320 => 
            array (
                'id' => 1321,
                'prefecture_id' => 29,
                'zipcode' => '6300000',
                'name' => '奈良市',
                'created_at' => '2024-12-21 16:16:38',
                'updated_at' => '2024-12-21 16:16:38',
            ),
            321 => 
            array (
                'id' => 1322,
                'prefecture_id' => 29,
                'zipcode' => '6350000',
                'name' => '大和高田市',
                'created_at' => '2024-12-21 16:16:39',
                'updated_at' => '2024-12-21 16:16:39',
            ),
            322 => 
            array (
                'id' => 1323,
                'prefecture_id' => 29,
                'zipcode' => '6391100',
                'name' => '大和郡山市',
                'created_at' => '2024-12-21 16:16:39',
                'updated_at' => '2024-12-21 16:16:39',
            ),
            323 => 
            array (
                'id' => 1324,
                'prefecture_id' => 29,
                'zipcode' => '6320000',
                'name' => '天理市',
                'created_at' => '2024-12-21 16:16:40',
                'updated_at' => '2024-12-21 16:16:40',
            ),
            324 => 
            array (
                'id' => 1325,
                'prefecture_id' => 29,
                'zipcode' => '6340000',
                'name' => '橿原市',
                'created_at' => '2024-12-21 16:16:40',
                'updated_at' => '2024-12-21 16:16:40',
            ),
            325 => 
            array (
                'id' => 1326,
                'prefecture_id' => 29,
                'zipcode' => '6330000',
                'name' => '桜井市',
                'created_at' => '2024-12-21 16:16:40',
                'updated_at' => '2024-12-21 16:16:40',
            ),
            326 => 
            array (
                'id' => 1327,
                'prefecture_id' => 29,
                'zipcode' => '6370000',
                'name' => '五條市',
                'created_at' => '2024-12-21 16:16:40',
                'updated_at' => '2024-12-21 16:16:40',
            ),
            327 => 
            array (
                'id' => 1328,
                'prefecture_id' => 29,
                'zipcode' => '6392200',
                'name' => '御所市',
                'created_at' => '2024-12-21 16:16:40',
                'updated_at' => '2024-12-21 16:16:40',
            ),
            328 => 
            array (
                'id' => 1329,
                'prefecture_id' => 29,
                'zipcode' => '6300200',
                'name' => '生駒市',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            329 => 
            array (
                'id' => 1330,
                'prefecture_id' => 29,
                'zipcode' => '6390200',
                'name' => '香芝市',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            330 => 
            array (
                'id' => 1331,
                'prefecture_id' => 29,
                'zipcode' => '6392100',
                'name' => '葛城市',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            331 => 
            array (
                'id' => 1332,
                'prefecture_id' => 29,
                'zipcode' => '6330200',
                'name' => '宇陀市',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            332 => 
            array (
                'id' => 1333,
                'prefecture_id' => 29,
                'zipcode' => '6300000',
                'name' => '山辺郡山添村',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            333 => 
            array (
                'id' => 1334,
                'prefecture_id' => 29,
                'zipcode' => '6360000',
                'name' => '生駒郡平群町',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            334 => 
            array (
                'id' => 1335,
                'prefecture_id' => 29,
                'zipcode' => '6360000',
                'name' => '生駒郡三郷町',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            335 => 
            array (
                'id' => 1336,
                'prefecture_id' => 29,
                'zipcode' => '6360100',
                'name' => '生駒郡斑鳩町',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            336 => 
            array (
                'id' => 1337,
                'prefecture_id' => 29,
                'zipcode' => '6391100',
                'name' => '生駒郡安堵町',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            337 => 
            array (
                'id' => 1338,
                'prefecture_id' => 29,
                'zipcode' => '6360300',
                'name' => '磯城郡川西町',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            338 => 
            array (
                'id' => 1339,
                'prefecture_id' => 29,
                'zipcode' => '6360300',
                'name' => '磯城郡三宅町',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            339 => 
            array (
                'id' => 1340,
                'prefecture_id' => 29,
                'zipcode' => '6360300',
                'name' => '磯城郡田原本町',
                'created_at' => '2024-12-21 16:16:41',
                'updated_at' => '2024-12-21 16:16:41',
            ),
            340 => 
            array (
                'id' => 1341,
                'prefecture_id' => 29,
                'zipcode' => '6331200',
                'name' => '宇陀郡曽爾村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            341 => 
            array (
                'id' => 1342,
                'prefecture_id' => 29,
                'zipcode' => '6331300',
                'name' => '宇陀郡御杖村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            342 => 
            array (
                'id' => 1343,
                'prefecture_id' => 29,
                'zipcode' => '6350100',
                'name' => '高市郡高取町',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            343 => 
            array (
                'id' => 1344,
                'prefecture_id' => 29,
                'zipcode' => '6340100',
                'name' => '高市郡明日香村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            344 => 
            array (
                'id' => 1345,
                'prefecture_id' => 29,
                'zipcode' => '6390200',
                'name' => '北葛城郡上牧町',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            345 => 
            array (
                'id' => 1346,
                'prefecture_id' => 29,
                'zipcode' => '6360000',
                'name' => '北葛城郡王寺町',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            346 => 
            array (
                'id' => 1347,
                'prefecture_id' => 29,
                'zipcode' => '6350000',
                'name' => '北葛城郡広陵町',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            347 => 
            array (
                'id' => 1348,
                'prefecture_id' => 29,
                'zipcode' => '6360000',
                'name' => '北葛城郡河合町',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            348 => 
            array (
                'id' => 1349,
                'prefecture_id' => 29,
                'zipcode' => '6393100',
                'name' => '吉野郡吉野町',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            349 => 
            array (
                'id' => 1350,
                'prefecture_id' => 29,
                'zipcode' => '6380000',
                'name' => '吉野郡大淀町',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            350 => 
            array (
                'id' => 1351,
                'prefecture_id' => 29,
                'zipcode' => '6380000',
                'name' => '吉野郡下市町',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            351 => 
            array (
                'id' => 1352,
                'prefecture_id' => 29,
                'zipcode' => '6380200',
                'name' => '吉野郡黒滝村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            352 => 
            array (
                'id' => 1353,
                'prefecture_id' => 29,
                'zipcode' => '6380300',
                'name' => '吉野郡天川村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            353 => 
            array (
                'id' => 1354,
                'prefecture_id' => 29,
                'zipcode' => '6480300',
                'name' => '吉野郡野迫川村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            354 => 
            array (
                'id' => 1355,
                'prefecture_id' => 29,
                'zipcode' => '6371500',
                'name' => '吉野郡十津川村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            355 => 
            array (
                'id' => 1356,
                'prefecture_id' => 29,
                'zipcode' => '6393800',
                'name' => '吉野郡下北山村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            356 => 
            array (
                'id' => 1357,
                'prefecture_id' => 29,
                'zipcode' => '6393700',
                'name' => '吉野郡上北山村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            357 => 
            array (
                'id' => 1358,
                'prefecture_id' => 29,
                'zipcode' => '6393500',
                'name' => '吉野郡川上村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            358 => 
            array (
                'id' => 1359,
                'prefecture_id' => 29,
                'zipcode' => '6332400',
                'name' => '吉野郡東吉野村',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            359 => 
            array (
                'id' => 1360,
                'prefecture_id' => 30,
                'zipcode' => '6400000',
                'name' => '和歌山市',
                'created_at' => '2024-12-21 16:16:42',
                'updated_at' => '2024-12-21 16:16:42',
            ),
            360 => 
            array (
                'id' => 1361,
                'prefecture_id' => 30,
                'zipcode' => '6420000',
                'name' => '海南市',
                'created_at' => '2024-12-21 16:16:43',
                'updated_at' => '2024-12-21 16:16:43',
            ),
            361 => 
            array (
                'id' => 1362,
                'prefecture_id' => 30,
                'zipcode' => '6480000',
                'name' => '橋本市',
                'created_at' => '2024-12-21 16:16:43',
                'updated_at' => '2024-12-21 16:16:43',
            ),
            362 => 
            array (
                'id' => 1363,
                'prefecture_id' => 30,
                'zipcode' => '6490300',
                'name' => '有田市',
                'created_at' => '2024-12-21 16:16:44',
                'updated_at' => '2024-12-21 16:16:44',
            ),
            363 => 
            array (
                'id' => 1364,
                'prefecture_id' => 30,
                'zipcode' => '6440000',
                'name' => '御坊市',
                'created_at' => '2024-12-21 16:16:44',
                'updated_at' => '2024-12-21 16:16:44',
            ),
            364 => 
            array (
                'id' => 1365,
                'prefecture_id' => 30,
                'zipcode' => '6460000',
                'name' => '田辺市',
                'created_at' => '2024-12-21 16:16:44',
                'updated_at' => '2024-12-21 16:16:44',
            ),
            365 => 
            array (
                'id' => 1366,
                'prefecture_id' => 30,
                'zipcode' => '6470000',
                'name' => '新宮市',
                'created_at' => '2024-12-21 16:16:44',
                'updated_at' => '2024-12-21 16:16:44',
            ),
            366 => 
            array (
                'id' => 1367,
                'prefecture_id' => 30,
                'zipcode' => '6496400',
                'name' => '紀の川市',
                'created_at' => '2024-12-21 16:16:44',
                'updated_at' => '2024-12-21 16:16:44',
            ),
            367 => 
            array (
                'id' => 1368,
                'prefecture_id' => 30,
                'zipcode' => '6496200',
                'name' => '岩出市',
                'created_at' => '2024-12-21 16:16:44',
                'updated_at' => '2024-12-21 16:16:44',
            ),
            368 => 
            array (
                'id' => 1369,
                'prefecture_id' => 30,
                'zipcode' => '6401100',
                'name' => '海草郡紀美野町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            369 => 
            array (
                'id' => 1370,
                'prefecture_id' => 30,
                'zipcode' => '6497100',
                'name' => '伊都郡かつらぎ町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            370 => 
            array (
                'id' => 1371,
                'prefecture_id' => 30,
                'zipcode' => '6480100',
                'name' => '伊都郡九度山町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            371 => 
            array (
                'id' => 1372,
                'prefecture_id' => 30,
                'zipcode' => '6480200',
                'name' => '伊都郡高野町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            372 => 
            array (
                'id' => 1373,
                'prefecture_id' => 30,
                'zipcode' => '6430000',
                'name' => '有田郡湯浅町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            373 => 
            array (
                'id' => 1374,
                'prefecture_id' => 30,
                'zipcode' => '6430000',
                'name' => '有田郡広川町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            374 => 
            array (
                'id' => 1375,
                'prefecture_id' => 30,
                'zipcode' => '6430000',
                'name' => '有田郡有田川町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            375 => 
            array (
                'id' => 1376,
                'prefecture_id' => 30,
                'zipcode' => '6440000',
                'name' => '日高郡美浜町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            376 => 
            array (
                'id' => 1377,
                'prefecture_id' => 30,
                'zipcode' => '6491200',
                'name' => '日高郡日高町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            377 => 
            array (
                'id' => 1378,
                'prefecture_id' => 30,
                'zipcode' => '6491100',
                'name' => '日高郡由良町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            378 => 
            array (
                'id' => 1379,
                'prefecture_id' => 30,
                'zipcode' => '6491500',
                'name' => '日高郡印南町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            379 => 
            array (
                'id' => 1380,
                'prefecture_id' => 30,
                'zipcode' => '6450000',
                'name' => '日高郡みなべ町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            380 => 
            array (
                'id' => 1381,
                'prefecture_id' => 30,
                'zipcode' => '6491300',
                'name' => '日高郡日高川町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            381 => 
            array (
                'id' => 1382,
                'prefecture_id' => 30,
                'zipcode' => '6492200',
                'name' => '西牟婁郡白浜町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            382 => 
            array (
                'id' => 1383,
                'prefecture_id' => 30,
                'zipcode' => '6492100',
                'name' => '西牟婁郡上富田町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            383 => 
            array (
                'id' => 1384,
                'prefecture_id' => 30,
                'zipcode' => '6492600',
                'name' => '西牟婁郡すさみ町',
                'created_at' => '2024-12-21 16:16:45',
                'updated_at' => '2024-12-21 16:16:45',
            ),
            384 => 
            array (
                'id' => 1385,
                'prefecture_id' => 30,
                'zipcode' => '6495300',
                'name' => '東牟婁郡那智勝浦町',
                'created_at' => '2024-12-21 16:16:46',
                'updated_at' => '2024-12-21 16:16:46',
            ),
            385 => 
            array (
                'id' => 1386,
                'prefecture_id' => 30,
                'zipcode' => '6495100',
                'name' => '東牟婁郡太地町',
                'created_at' => '2024-12-21 16:16:46',
                'updated_at' => '2024-12-21 16:16:46',
            ),
            386 => 
            array (
                'id' => 1387,
                'prefecture_id' => 30,
                'zipcode' => '6494100',
                'name' => '東牟婁郡古座川町',
                'created_at' => '2024-12-21 16:16:46',
                'updated_at' => '2024-12-21 16:16:46',
            ),
            387 => 
            array (
                'id' => 1388,
                'prefecture_id' => 30,
                'zipcode' => '6471600',
                'name' => '東牟婁郡北山村',
                'created_at' => '2024-12-21 16:16:46',
                'updated_at' => '2024-12-21 16:16:46',
            ),
            388 => 
            array (
                'id' => 1389,
                'prefecture_id' => 30,
                'zipcode' => '6493500',
                'name' => '東牟婁郡串本町',
                'created_at' => '2024-12-21 16:16:46',
                'updated_at' => '2024-12-21 16:16:46',
            ),
            389 => 
            array (
                'id' => 1390,
                'prefecture_id' => 31,
                'zipcode' => '6800000',
                'name' => '鳥取市',
                'created_at' => '2024-12-21 16:16:46',
                'updated_at' => '2024-12-21 16:16:46',
            ),
            390 => 
            array (
                'id' => 1391,
                'prefecture_id' => 31,
                'zipcode' => '6830000',
                'name' => '米子市',
                'created_at' => '2024-12-21 16:16:47',
                'updated_at' => '2024-12-21 16:16:47',
            ),
            391 => 
            array (
                'id' => 1392,
                'prefecture_id' => 31,
                'zipcode' => '6820000',
                'name' => '倉吉市',
                'created_at' => '2024-12-21 16:16:47',
                'updated_at' => '2024-12-21 16:16:47',
            ),
            392 => 
            array (
                'id' => 1393,
                'prefecture_id' => 31,
                'zipcode' => '6840000',
                'name' => '境港市',
                'created_at' => '2024-12-21 16:16:47',
                'updated_at' => '2024-12-21 16:16:47',
            ),
            393 => 
            array (
                'id' => 1394,
                'prefecture_id' => 31,
                'zipcode' => '6810000',
                'name' => '岩美郡岩美町',
                'created_at' => '2024-12-21 16:16:47',
                'updated_at' => '2024-12-21 16:16:47',
            ),
            394 => 
            array (
                'id' => 1395,
                'prefecture_id' => 31,
                'zipcode' => '6800700',
                'name' => '八頭郡若桜町',
                'created_at' => '2024-12-21 16:16:47',
                'updated_at' => '2024-12-21 16:16:47',
            ),
            395 => 
            array (
                'id' => 1396,
                'prefecture_id' => 31,
                'zipcode' => '6891400',
                'name' => '八頭郡智頭町',
                'created_at' => '2024-12-21 16:16:47',
                'updated_at' => '2024-12-21 16:16:47',
            ),
            396 => 
            array (
                'id' => 1397,
                'prefecture_id' => 31,
                'zipcode' => '6800400',
                'name' => '八頭郡八頭町',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            397 => 
            array (
                'id' => 1398,
                'prefecture_id' => 31,
                'zipcode' => '6820100',
                'name' => '東伯郡三朝町',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            398 => 
            array (
                'id' => 1399,
                'prefecture_id' => 31,
                'zipcode' => '6820700',
                'name' => '東伯郡湯梨浜町',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            399 => 
            array (
                'id' => 1400,
                'prefecture_id' => 31,
                'zipcode' => '6892300',
                'name' => '東伯郡琴浦町',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            400 => 
            array (
                'id' => 1401,
                'prefecture_id' => 31,
                'zipcode' => '6892200',
                'name' => '東伯郡北栄町',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            401 => 
            array (
                'id' => 1402,
                'prefecture_id' => 31,
                'zipcode' => '6893500',
                'name' => '西伯郡日吉津村',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            402 => 
            array (
                'id' => 1403,
                'prefecture_id' => 31,
                'zipcode' => '6893200',
                'name' => '西伯郡大山町',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            403 => 
            array (
                'id' => 1404,
                'prefecture_id' => 31,
                'zipcode' => '6830300',
                'name' => '西伯郡南部町',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            404 => 
            array (
                'id' => 1405,
                'prefecture_id' => 31,
                'zipcode' => '6894100',
                'name' => '西伯郡伯耆町',
                'created_at' => '2024-12-21 16:16:48',
                'updated_at' => '2024-12-21 16:16:48',
            ),
            405 => 
            array (
                'id' => 1406,
                'prefecture_id' => 31,
                'zipcode' => '6895200',
                'name' => '日野郡日南町',
                'created_at' => '2024-12-21 16:16:49',
                'updated_at' => '2024-12-21 16:16:49',
            ),
            406 => 
            array (
                'id' => 1407,
                'prefecture_id' => 31,
                'zipcode' => '6894500',
                'name' => '日野郡日野町',
                'created_at' => '2024-12-21 16:16:49',
                'updated_at' => '2024-12-21 16:16:49',
            ),
            407 => 
            array (
                'id' => 1408,
                'prefecture_id' => 31,
                'zipcode' => '6894400',
                'name' => '日野郡江府町',
                'created_at' => '2024-12-21 16:16:49',
                'updated_at' => '2024-12-21 16:16:49',
            ),
            408 => 
            array (
                'id' => 1409,
                'prefecture_id' => 32,
                'zipcode' => '6900000',
                'name' => '松江市',
                'created_at' => '2024-12-21 16:16:49',
                'updated_at' => '2024-12-21 16:16:49',
            ),
            409 => 
            array (
                'id' => 1410,
                'prefecture_id' => 32,
                'zipcode' => '6970000',
                'name' => '浜田市',
                'created_at' => '2024-12-21 16:16:49',
                'updated_at' => '2024-12-21 16:16:49',
            ),
            410 => 
            array (
                'id' => 1411,
                'prefecture_id' => 32,
                'zipcode' => '6930000',
                'name' => '出雲市',
                'created_at' => '2024-12-21 16:16:49',
                'updated_at' => '2024-12-21 16:16:49',
            ),
            411 => 
            array (
                'id' => 1412,
                'prefecture_id' => 32,
                'zipcode' => '6980000',
                'name' => '益田市',
                'created_at' => '2024-12-21 16:16:50',
                'updated_at' => '2024-12-21 16:16:50',
            ),
            412 => 
            array (
                'id' => 1413,
                'prefecture_id' => 32,
                'zipcode' => '6940000',
                'name' => '大田市',
                'created_at' => '2024-12-21 16:16:50',
                'updated_at' => '2024-12-21 16:16:50',
            ),
            413 => 
            array (
                'id' => 1414,
                'prefecture_id' => 32,
                'zipcode' => '6920000',
                'name' => '安来市',
                'created_at' => '2024-12-21 16:16:50',
                'updated_at' => '2024-12-21 16:16:50',
            ),
            414 => 
            array (
                'id' => 1415,
                'prefecture_id' => 32,
                'zipcode' => '6950000',
                'name' => '江津市',
                'created_at' => '2024-12-21 16:16:50',
                'updated_at' => '2024-12-21 16:16:50',
            ),
            415 => 
            array (
                'id' => 1416,
                'prefecture_id' => 32,
                'zipcode' => '6902400',
                'name' => '雲南市',
                'created_at' => '2024-12-21 16:16:50',
                'updated_at' => '2024-12-21 16:16:50',
            ),
            416 => 
            array (
                'id' => 1417,
                'prefecture_id' => 32,
                'zipcode' => '6991500',
                'name' => '仁多郡奥出雲町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            417 => 
            array (
                'id' => 1418,
                'prefecture_id' => 32,
                'zipcode' => '6903200',
                'name' => '飯石郡飯南町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            418 => 
            array (
                'id' => 1419,
                'prefecture_id' => 32,
                'zipcode' => '6960000',
                'name' => '邑智郡川本町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            419 => 
            array (
                'id' => 1420,
                'prefecture_id' => 32,
                'zipcode' => '6994600',
                'name' => '邑智郡美郷町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            420 => 
            array (
                'id' => 1421,
                'prefecture_id' => 32,
                'zipcode' => '6960100',
                'name' => '邑智郡邑南町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            421 => 
            array (
                'id' => 1422,
                'prefecture_id' => 32,
                'zipcode' => '6995600',
                'name' => '鹿足郡津和野町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            422 => 
            array (
                'id' => 1423,
                'prefecture_id' => 32,
                'zipcode' => '6995500',
                'name' => '鹿足郡吉賀町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            423 => 
            array (
                'id' => 1424,
                'prefecture_id' => 32,
                'zipcode' => '6840400',
                'name' => '隠岐郡海士町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            424 => 
            array (
                'id' => 1425,
                'prefecture_id' => 32,
                'zipcode' => '6840300',
                'name' => '隠岐郡西ノ島町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            425 => 
            array (
                'id' => 1426,
                'prefecture_id' => 32,
                'zipcode' => '6840100',
                'name' => '隠岐郡知夫村',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            426 => 
            array (
                'id' => 1427,
                'prefecture_id' => 32,
                'zipcode' => '6850000',
                'name' => '隠岐郡隠岐の島町',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            427 => 
            array (
                'id' => 1428,
                'prefecture_id' => 33,
                'zipcode' => '7000000',
                'name' => '岡山市北区',
                'created_at' => '2024-12-21 16:16:51',
                'updated_at' => '2024-12-21 16:16:51',
            ),
            428 => 
            array (
                'id' => 1429,
                'prefecture_id' => 33,
                'zipcode' => '7000000',
                'name' => '岡山市中区',
                'created_at' => '2024-12-21 16:16:52',
                'updated_at' => '2024-12-21 16:16:52',
            ),
            429 => 
            array (
                'id' => 1430,
                'prefecture_id' => 33,
                'zipcode' => '7000000',
                'name' => '岡山市東区',
                'created_at' => '2024-12-21 16:16:52',
                'updated_at' => '2024-12-21 16:16:52',
            ),
            430 => 
            array (
                'id' => 1431,
                'prefecture_id' => 33,
                'zipcode' => '7000000',
                'name' => '岡山市南区',
                'created_at' => '2024-12-21 16:16:52',
                'updated_at' => '2024-12-21 16:16:52',
            ),
            431 => 
            array (
                'id' => 1432,
                'prefecture_id' => 33,
                'zipcode' => '7100000',
                'name' => '倉敷市',
                'created_at' => '2024-12-21 16:16:52',
                'updated_at' => '2024-12-21 16:16:52',
            ),
            432 => 
            array (
                'id' => 1433,
                'prefecture_id' => 33,
                'zipcode' => '7080000',
                'name' => '津山市',
                'created_at' => '2024-12-21 16:16:53',
                'updated_at' => '2024-12-21 16:16:53',
            ),
            433 => 
            array (
                'id' => 1434,
                'prefecture_id' => 33,
                'zipcode' => '7060000',
                'name' => '玉野市',
                'created_at' => '2024-12-21 16:16:53',
                'updated_at' => '2024-12-21 16:16:53',
            ),
            434 => 
            array (
                'id' => 1435,
                'prefecture_id' => 33,
                'zipcode' => '7140000',
                'name' => '笠岡市',
                'created_at' => '2024-12-21 16:16:53',
                'updated_at' => '2024-12-21 16:16:53',
            ),
            435 => 
            array (
                'id' => 1436,
                'prefecture_id' => 33,
                'zipcode' => '7150000',
                'name' => '井原市',
                'created_at' => '2024-12-21 16:16:54',
                'updated_at' => '2024-12-21 16:16:54',
            ),
            436 => 
            array (
                'id' => 1437,
                'prefecture_id' => 33,
                'zipcode' => '7191100',
                'name' => '総社市',
                'created_at' => '2024-12-21 16:16:54',
                'updated_at' => '2024-12-21 16:16:54',
            ),
            437 => 
            array (
                'id' => 1438,
                'prefecture_id' => 33,
                'zipcode' => '7160000',
                'name' => '高梁市',
                'created_at' => '2024-12-21 16:16:54',
                'updated_at' => '2024-12-21 16:16:54',
            ),
            438 => 
            array (
                'id' => 1439,
                'prefecture_id' => 33,
                'zipcode' => '7180000',
                'name' => '新見市',
                'created_at' => '2024-12-21 16:16:54',
                'updated_at' => '2024-12-21 16:16:54',
            ),
            439 => 
            array (
                'id' => 1440,
                'prefecture_id' => 33,
                'zipcode' => '7050000',
                'name' => '備前市',
                'created_at' => '2024-12-21 16:16:54',
                'updated_at' => '2024-12-21 16:16:54',
            ),
            440 => 
            array (
                'id' => 1441,
                'prefecture_id' => 33,
                'zipcode' => '7014200',
                'name' => '瀬戸内市',
                'created_at' => '2024-12-21 16:16:54',
                'updated_at' => '2024-12-21 16:16:54',
            ),
            441 => 
            array (
                'id' => 1442,
                'prefecture_id' => 33,
                'zipcode' => '7090800',
                'name' => '赤磐市',
                'created_at' => '2024-12-21 16:16:54',
                'updated_at' => '2024-12-21 16:16:54',
            ),
            442 => 
            array (
                'id' => 1443,
                'prefecture_id' => 33,
                'zipcode' => '7193100',
                'name' => '真庭市',
                'created_at' => '2024-12-21 16:16:54',
                'updated_at' => '2024-12-21 16:16:54',
            ),
            443 => 
            array (
                'id' => 1444,
                'prefecture_id' => 33,
                'zipcode' => '7070000',
                'name' => '美作市',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            444 => 
            array (
                'id' => 1445,
                'prefecture_id' => 33,
                'zipcode' => '7190200',
                'name' => '浅口市',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            445 => 
            array (
                'id' => 1446,
                'prefecture_id' => 33,
                'zipcode' => '7090400',
                'name' => '和気郡和気町',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            446 => 
            array (
                'id' => 1447,
                'prefecture_id' => 33,
                'zipcode' => '7010300',
                'name' => '都窪郡早島町',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            447 => 
            array (
                'id' => 1448,
                'prefecture_id' => 33,
                'zipcode' => '7190300',
                'name' => '浅口郡里庄町',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            448 => 
            array (
                'id' => 1449,
                'prefecture_id' => 33,
                'zipcode' => '7141200',
                'name' => '小田郡矢掛町',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            449 => 
            array (
                'id' => 1450,
                'prefecture_id' => 33,
                'zipcode' => '7170201',
                'name' => '真庭郡新庄村',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            450 => 
            array (
                'id' => 1451,
                'prefecture_id' => 33,
                'zipcode' => '7080300',
                'name' => '苫田郡鏡野町',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            451 => 
            array (
                'id' => 1452,
                'prefecture_id' => 33,
                'zipcode' => '7094300',
                'name' => '勝田郡勝央町',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            452 => 
            array (
                'id' => 1453,
                'prefecture_id' => 33,
                'zipcode' => '7081300',
                'name' => '勝田郡奈義町',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            453 => 
            array (
                'id' => 1454,
                'prefecture_id' => 33,
                'zipcode' => '7070500',
                'name' => '英田郡西粟倉村',
                'created_at' => '2024-12-21 16:16:55',
                'updated_at' => '2024-12-21 16:16:55',
            ),
            454 => 
            array (
                'id' => 1455,
                'prefecture_id' => 33,
                'zipcode' => '7093600',
                'name' => '久米郡久米南町',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            455 => 
            array (
                'id' => 1456,
                'prefecture_id' => 33,
                'zipcode' => '7093700',
                'name' => '久米郡美咲町',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            456 => 
            array (
                'id' => 1457,
                'prefecture_id' => 33,
                'zipcode' => '7161100',
                'name' => '加賀郡吉備中央町',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            457 => 
            array (
                'id' => 1458,
                'prefecture_id' => 34,
                'zipcode' => '7300000',
                'name' => '広島市中区',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            458 => 
            array (
                'id' => 1459,
                'prefecture_id' => 34,
                'zipcode' => '7320000',
                'name' => '広島市東区',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            459 => 
            array (
                'id' => 1460,
                'prefecture_id' => 34,
                'zipcode' => '7340000',
                'name' => '広島市南区',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            460 => 
            array (
                'id' => 1461,
                'prefecture_id' => 34,
                'zipcode' => '7330000',
                'name' => '広島市西区',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            461 => 
            array (
                'id' => 1462,
                'prefecture_id' => 34,
                'zipcode' => '7310100',
                'name' => '広島市安佐南区',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            462 => 
            array (
                'id' => 1463,
                'prefecture_id' => 34,
                'zipcode' => '7391700',
                'name' => '広島市安佐北区',
                'created_at' => '2024-12-21 16:16:56',
                'updated_at' => '2024-12-21 16:16:56',
            ),
            463 => 
            array (
                'id' => 1464,
                'prefecture_id' => 34,
                'zipcode' => '7360000',
                'name' => '広島市安芸区',
                'created_at' => '2024-12-21 16:16:57',
                'updated_at' => '2024-12-21 16:16:57',
            ),
            464 => 
            array (
                'id' => 1465,
                'prefecture_id' => 34,
                'zipcode' => '7315100',
                'name' => '広島市佐伯区',
                'created_at' => '2024-12-21 16:16:57',
                'updated_at' => '2024-12-21 16:16:57',
            ),
            465 => 
            array (
                'id' => 1466,
                'prefecture_id' => 34,
                'zipcode' => '7370000',
                'name' => '呉市',
                'created_at' => '2024-12-21 16:16:57',
                'updated_at' => '2024-12-21 16:16:57',
            ),
            466 => 
            array (
                'id' => 1467,
                'prefecture_id' => 34,
                'zipcode' => '7250000',
                'name' => '竹原市',
                'created_at' => '2024-12-21 16:16:57',
                'updated_at' => '2024-12-21 16:16:57',
            ),
            467 => 
            array (
                'id' => 1468,
                'prefecture_id' => 34,
                'zipcode' => '7230000',
                'name' => '三原市',
                'created_at' => '2024-12-21 16:16:57',
                'updated_at' => '2024-12-21 16:16:57',
            ),
            468 => 
            array (
                'id' => 1469,
                'prefecture_id' => 34,
                'zipcode' => '7220000',
                'name' => '尾道市',
                'created_at' => '2024-12-21 16:16:58',
                'updated_at' => '2024-12-21 16:16:58',
            ),
            469 => 
            array (
                'id' => 1470,
                'prefecture_id' => 34,
                'zipcode' => '7210000',
                'name' => '福山市',
                'created_at' => '2024-12-21 16:16:58',
                'updated_at' => '2024-12-21 16:16:58',
            ),
            470 => 
            array (
                'id' => 1471,
                'prefecture_id' => 34,
                'zipcode' => '7280000',
                'name' => '三次市',
                'created_at' => '2024-12-21 16:16:58',
                'updated_at' => '2024-12-21 16:16:58',
            ),
            471 => 
            array (
                'id' => 1472,
                'prefecture_id' => 34,
                'zipcode' => '7270000',
                'name' => '庄原市',
                'created_at' => '2024-12-21 16:16:59',
                'updated_at' => '2024-12-21 16:16:59',
            ),
            472 => 
            array (
                'id' => 1473,
                'prefecture_id' => 34,
                'zipcode' => '7390600',
                'name' => '大竹市',
                'created_at' => '2024-12-21 16:16:59',
                'updated_at' => '2024-12-21 16:16:59',
            ),
            473 => 
            array (
                'id' => 1474,
                'prefecture_id' => 34,
                'zipcode' => '7390000',
                'name' => '東広島市',
                'created_at' => '2024-12-21 16:16:59',
                'updated_at' => '2024-12-21 16:16:59',
            ),
            474 => 
            array (
                'id' => 1475,
                'prefecture_id' => 34,
                'zipcode' => '7380000',
                'name' => '廿日市市',
                'created_at' => '2024-12-21 16:16:59',
                'updated_at' => '2024-12-21 16:16:59',
            ),
            475 => 
            array (
                'id' => 1476,
                'prefecture_id' => 34,
                'zipcode' => '7310500',
                'name' => '安芸高田市',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            476 => 
            array (
                'id' => 1477,
                'prefecture_id' => 34,
                'zipcode' => '7372100',
                'name' => '江田島市',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            477 => 
            array (
                'id' => 1478,
                'prefecture_id' => 34,
                'zipcode' => '7350000',
                'name' => '安芸郡府中町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            478 => 
            array (
                'id' => 1479,
                'prefecture_id' => 34,
                'zipcode' => '7360000',
                'name' => '安芸郡海田町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            479 => 
            array (
                'id' => 1480,
                'prefecture_id' => 34,
                'zipcode' => '7314200',
                'name' => '安芸郡熊野町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            480 => 
            array (
                'id' => 1481,
                'prefecture_id' => 34,
                'zipcode' => '7314300',
                'name' => '安芸郡坂町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            481 => 
            array (
                'id' => 1482,
                'prefecture_id' => 34,
                'zipcode' => '7313500',
                'name' => '山県郡安芸太田町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            482 => 
            array (
                'id' => 1483,
                'prefecture_id' => 34,
                'zipcode' => '7311500',
                'name' => '山県郡北広島町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            483 => 
            array (
                'id' => 1484,
                'prefecture_id' => 34,
                'zipcode' => '7250200',
                'name' => '豊田郡大崎上島町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            484 => 
            array (
                'id' => 1485,
                'prefecture_id' => 34,
                'zipcode' => '7221100',
                'name' => '世羅郡世羅町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            485 => 
            array (
                'id' => 1486,
                'prefecture_id' => 34,
                'zipcode' => '7201800',
                'name' => '神石郡神石高原町',
                'created_at' => '2024-12-21 16:17:00',
                'updated_at' => '2024-12-21 16:17:00',
            ),
            486 => 
            array (
                'id' => 1487,
                'prefecture_id' => 35,
                'zipcode' => '7500000',
                'name' => '下関市',
                'created_at' => '2024-12-21 16:17:01',
                'updated_at' => '2024-12-21 16:17:01',
            ),
            487 => 
            array (
                'id' => 1488,
                'prefecture_id' => 35,
                'zipcode' => '7550000',
                'name' => '宇部市',
                'created_at' => '2024-12-21 16:17:01',
                'updated_at' => '2024-12-21 16:17:01',
            ),
            488 => 
            array (
                'id' => 1489,
                'prefecture_id' => 35,
                'zipcode' => '7530000',
                'name' => '山口市',
                'created_at' => '2024-12-21 16:17:02',
                'updated_at' => '2024-12-21 16:17:02',
            ),
            489 => 
            array (
                'id' => 1490,
                'prefecture_id' => 35,
                'zipcode' => '7580000',
                'name' => '萩市',
                'created_at' => '2024-12-21 16:17:02',
                'updated_at' => '2024-12-21 16:17:02',
            ),
            490 => 
            array (
                'id' => 1491,
                'prefecture_id' => 35,
                'zipcode' => '7470000',
                'name' => '防府市',
                'created_at' => '2024-12-21 16:17:02',
                'updated_at' => '2024-12-21 16:17:02',
            ),
            491 => 
            array (
                'id' => 1492,
                'prefecture_id' => 35,
                'zipcode' => '7440000',
                'name' => '下松市',
                'created_at' => '2024-12-21 16:17:02',
                'updated_at' => '2024-12-21 16:17:02',
            ),
            492 => 
            array (
                'id' => 1493,
                'prefecture_id' => 35,
                'zipcode' => '7400000',
                'name' => '岩国市',
                'created_at' => '2024-12-21 16:17:03',
                'updated_at' => '2024-12-21 16:17:03',
            ),
            493 => 
            array (
                'id' => 1494,
                'prefecture_id' => 35,
                'zipcode' => '7430000',
                'name' => '光市',
                'created_at' => '2024-12-21 16:17:03',
                'updated_at' => '2024-12-21 16:17:03',
            ),
            494 => 
            array (
                'id' => 1495,
                'prefecture_id' => 35,
                'zipcode' => '7594100',
                'name' => '長門市',
                'created_at' => '2024-12-21 16:17:03',
                'updated_at' => '2024-12-21 16:17:03',
            ),
            495 => 
            array (
                'id' => 1496,
                'prefecture_id' => 35,
                'zipcode' => '7420000',
                'name' => '柳井市',
                'created_at' => '2024-12-21 16:17:03',
                'updated_at' => '2024-12-21 16:17:03',
            ),
            496 => 
            array (
                'id' => 1497,
                'prefecture_id' => 35,
                'zipcode' => '7592200',
                'name' => '美祢市',
                'created_at' => '2024-12-21 16:17:03',
                'updated_at' => '2024-12-21 16:17:03',
            ),
            497 => 
            array (
                'id' => 1498,
                'prefecture_id' => 35,
                'zipcode' => '7450000',
                'name' => '周南市',
                'created_at' => '2024-12-21 16:17:03',
                'updated_at' => '2024-12-21 16:17:03',
            ),
            498 => 
            array (
                'id' => 1499,
                'prefecture_id' => 35,
                'zipcode' => '7560000',
                'name' => '山陽小野田市',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
            499 => 
            array (
                'id' => 1500,
                'prefecture_id' => 35,
                'zipcode' => '7422100',
                'name' => '大島郡周防大島町',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
        ));
        \DB::table('cities')->insert(array (
            0 => 
            array (
                'id' => 1501,
                'prefecture_id' => 35,
                'zipcode' => '7400000',
                'name' => '玖珂郡和木町',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
            1 => 
            array (
                'id' => 1502,
                'prefecture_id' => 35,
                'zipcode' => '7421400',
                'name' => '熊毛郡上関町',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
            2 => 
            array (
                'id' => 1503,
                'prefecture_id' => 35,
                'zipcode' => '7421500',
                'name' => '熊毛郡田布施町',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
            3 => 
            array (
                'id' => 1504,
                'prefecture_id' => 35,
                'zipcode' => '7421100',
                'name' => '熊毛郡平生町',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
            4 => 
            array (
                'id' => 1505,
                'prefecture_id' => 35,
                'zipcode' => '7593600',
                'name' => '阿武郡阿武町',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
            5 => 
            array (
                'id' => 1506,
                'prefecture_id' => 36,
                'zipcode' => '7700000',
                'name' => '徳島市',
                'created_at' => '2024-12-21 16:17:04',
                'updated_at' => '2024-12-21 16:17:04',
            ),
            6 => 
            array (
                'id' => 1507,
                'prefecture_id' => 36,
                'zipcode' => '7720000',
                'name' => '鳴門市',
                'created_at' => '2024-12-21 16:17:05',
                'updated_at' => '2024-12-21 16:17:05',
            ),
            7 => 
            array (
                'id' => 1508,
                'prefecture_id' => 36,
                'zipcode' => '7730000',
                'name' => '小松島市',
                'created_at' => '2024-12-21 16:17:05',
                'updated_at' => '2024-12-21 16:17:05',
            ),
            8 => 
            array (
                'id' => 1509,
                'prefecture_id' => 36,
                'zipcode' => '7740000',
                'name' => '阿南市',
                'created_at' => '2024-12-21 16:17:05',
                'updated_at' => '2024-12-21 16:17:05',
            ),
            9 => 
            array (
                'id' => 1510,
                'prefecture_id' => 36,
                'zipcode' => '7760000',
                'name' => '吉野川市',
                'created_at' => '2024-12-21 16:17:06',
                'updated_at' => '2024-12-21 16:17:06',
            ),
            10 => 
            array (
                'id' => 1511,
                'prefecture_id' => 36,
                'zipcode' => '7711700',
                'name' => '阿波市',
                'created_at' => '2024-12-21 16:17:06',
                'updated_at' => '2024-12-21 16:17:06',
            ),
            11 => 
            array (
                'id' => 1512,
                'prefecture_id' => 36,
                'zipcode' => '7793600',
                'name' => '美馬市',
                'created_at' => '2024-12-21 16:17:06',
                'updated_at' => '2024-12-21 16:17:06',
            ),
            12 => 
            array (
                'id' => 1513,
                'prefecture_id' => 36,
                'zipcode' => '7780000',
                'name' => '三好市',
                'created_at' => '2024-12-21 16:17:07',
                'updated_at' => '2024-12-21 16:17:07',
            ),
            13 => 
            array (
                'id' => 1514,
                'prefecture_id' => 36,
                'zipcode' => '7714300',
                'name' => '勝浦郡勝浦町',
                'created_at' => '2024-12-21 16:17:07',
                'updated_at' => '2024-12-21 16:17:07',
            ),
            14 => 
            array (
                'id' => 1515,
                'prefecture_id' => 36,
                'zipcode' => '7714500',
                'name' => '勝浦郡上勝町',
                'created_at' => '2024-12-21 16:17:07',
                'updated_at' => '2024-12-21 16:17:07',
            ),
            15 => 
            array (
                'id' => 1516,
                'prefecture_id' => 36,
                'zipcode' => '7714100',
                'name' => '名東郡佐那河内村',
                'created_at' => '2024-12-21 16:17:07',
                'updated_at' => '2024-12-21 16:17:07',
            ),
            16 => 
            array (
                'id' => 1517,
                'prefecture_id' => 36,
                'zipcode' => '7793200',
                'name' => '名西郡石井町',
                'created_at' => '2024-12-21 16:17:07',
                'updated_at' => '2024-12-21 16:17:07',
            ),
            17 => 
            array (
                'id' => 1518,
                'prefecture_id' => 36,
                'zipcode' => '7713200',
                'name' => '名西郡神山町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            18 => 
            array (
                'id' => 1519,
                'prefecture_id' => 36,
                'zipcode' => '7715200',
                'name' => '那賀郡那賀町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            19 => 
            array (
                'id' => 1520,
                'prefecture_id' => 36,
                'zipcode' => '7750000',
                'name' => '海部郡牟岐町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            20 => 
            array (
                'id' => 1521,
                'prefecture_id' => 36,
                'zipcode' => '7792300',
                'name' => '海部郡美波町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            21 => 
            array (
                'id' => 1522,
                'prefecture_id' => 36,
                'zipcode' => '7750200',
                'name' => '海部郡海陽町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            22 => 
            array (
                'id' => 1523,
                'prefecture_id' => 36,
                'zipcode' => '7710200',
                'name' => '板野郡松茂町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            23 => 
            array (
                'id' => 1524,
                'prefecture_id' => 36,
                'zipcode' => '7710200',
                'name' => '板野郡北島町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            24 => 
            array (
                'id' => 1525,
                'prefecture_id' => 36,
                'zipcode' => '7711200',
                'name' => '板野郡藍住町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            25 => 
            array (
                'id' => 1526,
                'prefecture_id' => 36,
                'zipcode' => '7790100',
                'name' => '板野郡板野町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            26 => 
            array (
                'id' => 1527,
                'prefecture_id' => 36,
                'zipcode' => '7711300',
                'name' => '板野郡上板町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            27 => 
            array (
                'id' => 1528,
                'prefecture_id' => 36,
                'zipcode' => '7794100',
                'name' => '美馬郡つるぎ町',
                'created_at' => '2024-12-21 16:17:08',
                'updated_at' => '2024-12-21 16:17:08',
            ),
            28 => 
            array (
                'id' => 1529,
                'prefecture_id' => 36,
                'zipcode' => '7794700',
                'name' => '三好郡東みよし町',
                'created_at' => '2024-12-21 16:17:09',
                'updated_at' => '2024-12-21 16:17:09',
            ),
            29 => 
            array (
                'id' => 1530,
                'prefecture_id' => 37,
                'zipcode' => '7600000',
                'name' => '高松市',
                'created_at' => '2024-12-21 16:17:09',
                'updated_at' => '2024-12-21 16:17:09',
            ),
            30 => 
            array (
                'id' => 1531,
                'prefecture_id' => 37,
                'zipcode' => '7630000',
                'name' => '丸亀市',
                'created_at' => '2024-12-21 16:17:09',
                'updated_at' => '2024-12-21 16:17:09',
            ),
            31 => 
            array (
                'id' => 1532,
                'prefecture_id' => 37,
                'zipcode' => '7620000',
                'name' => '坂出市',
                'created_at' => '2024-12-21 16:17:09',
                'updated_at' => '2024-12-21 16:17:09',
            ),
            32 => 
            array (
                'id' => 1533,
                'prefecture_id' => 37,
                'zipcode' => '7650000',
                'name' => '善通寺市',
                'created_at' => '2024-12-21 16:17:09',
                'updated_at' => '2024-12-21 16:17:09',
            ),
            33 => 
            array (
                'id' => 1534,
                'prefecture_id' => 37,
                'zipcode' => '7680000',
                'name' => '観音寺市',
                'created_at' => '2024-12-21 16:17:09',
                'updated_at' => '2024-12-21 16:17:09',
            ),
            34 => 
            array (
                'id' => 1535,
                'prefecture_id' => 37,
                'zipcode' => '7692300',
                'name' => 'さぬき市',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            35 => 
            array (
                'id' => 1536,
                'prefecture_id' => 37,
                'zipcode' => '7692700',
                'name' => '東かがわ市',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            36 => 
            array (
                'id' => 1537,
                'prefecture_id' => 37,
                'zipcode' => '7670000',
                'name' => '三豊市',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            37 => 
            array (
                'id' => 1538,
                'prefecture_id' => 37,
                'zipcode' => '7614100',
                'name' => '小豆郡土庄町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            38 => 
            array (
                'id' => 1539,
                'prefecture_id' => 37,
                'zipcode' => '7614300',
                'name' => '小豆郡小豆島町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            39 => 
            array (
                'id' => 1540,
                'prefecture_id' => 37,
                'zipcode' => '7610700',
                'name' => '木田郡三木町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            40 => 
            array (
                'id' => 1541,
                'prefecture_id' => 37,
                'zipcode' => '7613110',
                'name' => '香川郡直島町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            41 => 
            array (
                'id' => 1542,
                'prefecture_id' => 37,
                'zipcode' => '7690200',
                'name' => '綾歌郡宇多津町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            42 => 
            array (
                'id' => 1543,
                'prefecture_id' => 37,
                'zipcode' => '7612300',
                'name' => '綾歌郡綾川町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            43 => 
            array (
                'id' => 1544,
                'prefecture_id' => 37,
                'zipcode' => '7660000',
                'name' => '仲多度郡琴平町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            44 => 
            array (
                'id' => 1545,
                'prefecture_id' => 37,
                'zipcode' => '7640000',
                'name' => '仲多度郡多度津町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            45 => 
            array (
                'id' => 1546,
                'prefecture_id' => 37,
                'zipcode' => '7660000',
                'name' => '仲多度郡まんのう町',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            46 => 
            array (
                'id' => 1547,
                'prefecture_id' => 38,
                'zipcode' => '7910000',
                'name' => '松山市',
                'created_at' => '2024-12-21 16:17:10',
                'updated_at' => '2024-12-21 16:17:10',
            ),
            47 => 
            array (
                'id' => 1548,
                'prefecture_id' => 38,
                'zipcode' => '7940000',
                'name' => '今治市',
                'created_at' => '2024-12-21 16:17:11',
                'updated_at' => '2024-12-21 16:17:11',
            ),
            48 => 
            array (
                'id' => 1549,
                'prefecture_id' => 38,
                'zipcode' => '7980000',
                'name' => '宇和島市',
                'created_at' => '2024-12-21 16:17:11',
                'updated_at' => '2024-12-21 16:17:11',
            ),
            49 => 
            array (
                'id' => 1550,
                'prefecture_id' => 38,
                'zipcode' => '7960000',
                'name' => '八幡浜市',
                'created_at' => '2024-12-21 16:17:12',
                'updated_at' => '2024-12-21 16:17:12',
            ),
            50 => 
            array (
                'id' => 1551,
                'prefecture_id' => 38,
                'zipcode' => '7920000',
                'name' => '新居浜市',
                'created_at' => '2024-12-21 16:17:12',
                'updated_at' => '2024-12-21 16:17:12',
            ),
            51 => 
            array (
                'id' => 1552,
                'prefecture_id' => 38,
                'zipcode' => '7930000',
                'name' => '西条市',
                'created_at' => '2024-12-21 16:17:12',
                'updated_at' => '2024-12-21 16:17:12',
            ),
            52 => 
            array (
                'id' => 1553,
                'prefecture_id' => 38,
                'zipcode' => '7950000',
                'name' => '大洲市',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            53 => 
            array (
                'id' => 1554,
                'prefecture_id' => 38,
                'zipcode' => '7993100',
                'name' => '伊予市',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            54 => 
            array (
                'id' => 1555,
                'prefecture_id' => 38,
                'zipcode' => '7990400',
                'name' => '四国中央市',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            55 => 
            array (
                'id' => 1556,
                'prefecture_id' => 38,
                'zipcode' => '7970000',
                'name' => '西予市',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            56 => 
            array (
                'id' => 1557,
                'prefecture_id' => 38,
                'zipcode' => '7910200',
                'name' => '東温市',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            57 => 
            array (
                'id' => 1558,
                'prefecture_id' => 38,
                'zipcode' => '7942500',
                'name' => '越智郡上島町',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            58 => 
            array (
                'id' => 1559,
                'prefecture_id' => 38,
                'zipcode' => '7911200',
                'name' => '上浮穴郡久万高原町',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            59 => 
            array (
                'id' => 1560,
                'prefecture_id' => 38,
                'zipcode' => '7913100',
                'name' => '伊予郡松前町',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            60 => 
            array (
                'id' => 1561,
                'prefecture_id' => 38,
                'zipcode' => '7912100',
                'name' => '伊予郡砥部町',
                'created_at' => '2024-12-21 16:17:13',
                'updated_at' => '2024-12-21 16:17:13',
            ),
            61 => 
            array (
                'id' => 1562,
                'prefecture_id' => 38,
                'zipcode' => '7913300',
                'name' => '喜多郡内子町',
                'created_at' => '2024-12-21 16:17:14',
                'updated_at' => '2024-12-21 16:17:14',
            ),
            62 => 
            array (
                'id' => 1563,
                'prefecture_id' => 38,
                'zipcode' => '7960300',
                'name' => '西宇和郡伊方町',
                'created_at' => '2024-12-21 16:17:14',
                'updated_at' => '2024-12-21 16:17:14',
            ),
            63 => 
            array (
                'id' => 1564,
                'prefecture_id' => 38,
                'zipcode' => '7982100',
                'name' => '北宇和郡松野町',
                'created_at' => '2024-12-21 16:17:14',
                'updated_at' => '2024-12-21 16:17:14',
            ),
            64 => 
            array (
                'id' => 1565,
                'prefecture_id' => 38,
                'zipcode' => '7981300',
                'name' => '北宇和郡鬼北町',
                'created_at' => '2024-12-21 16:17:14',
                'updated_at' => '2024-12-21 16:17:14',
            ),
            65 => 
            array (
                'id' => 1566,
                'prefecture_id' => 38,
                'zipcode' => '7984100',
                'name' => '南宇和郡愛南町',
                'created_at' => '2024-12-21 16:17:14',
                'updated_at' => '2024-12-21 16:17:14',
            ),
            66 => 
            array (
                'id' => 1567,
                'prefecture_id' => 39,
                'zipcode' => '7800000',
                'name' => '高知市',
                'created_at' => '2024-12-21 16:17:14',
                'updated_at' => '2024-12-21 16:17:14',
            ),
            67 => 
            array (
                'id' => 1568,
                'prefecture_id' => 39,
                'zipcode' => '7817100',
                'name' => '室戸市',
                'created_at' => '2024-12-21 16:17:15',
                'updated_at' => '2024-12-21 16:17:15',
            ),
            68 => 
            array (
                'id' => 1569,
                'prefecture_id' => 39,
                'zipcode' => '7840000',
                'name' => '安芸市',
                'created_at' => '2024-12-21 16:17:15',
                'updated_at' => '2024-12-21 16:17:15',
            ),
            69 => 
            array (
                'id' => 1570,
                'prefecture_id' => 39,
                'zipcode' => '7830000',
                'name' => '南国市',
                'created_at' => '2024-12-21 16:17:15',
                'updated_at' => '2024-12-21 16:17:15',
            ),
            70 => 
            array (
                'id' => 1571,
                'prefecture_id' => 39,
                'zipcode' => '7811100',
                'name' => '土佐市',
                'created_at' => '2024-12-21 16:17:15',
                'updated_at' => '2024-12-21 16:17:15',
            ),
            71 => 
            array (
                'id' => 1572,
                'prefecture_id' => 39,
                'zipcode' => '7850000',
                'name' => '須崎市',
                'created_at' => '2024-12-21 16:17:15',
                'updated_at' => '2024-12-21 16:17:15',
            ),
            72 => 
            array (
                'id' => 1573,
                'prefecture_id' => 39,
                'zipcode' => '7880000',
                'name' => '宿毛市',
                'created_at' => '2024-12-21 16:17:15',
                'updated_at' => '2024-12-21 16:17:15',
            ),
            73 => 
            array (
                'id' => 1574,
                'prefecture_id' => 39,
                'zipcode' => '7870300',
                'name' => '土佐清水市',
                'created_at' => '2024-12-21 16:17:15',
                'updated_at' => '2024-12-21 16:17:15',
            ),
            74 => 
            array (
                'id' => 1575,
                'prefecture_id' => 39,
                'zipcode' => '7870000',
                'name' => '四万十市',
                'created_at' => '2024-12-21 16:17:15',
                'updated_at' => '2024-12-21 16:17:15',
            ),
            75 => 
            array (
                'id' => 1576,
                'prefecture_id' => 39,
                'zipcode' => '7815200',
                'name' => '香南市',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            76 => 
            array (
                'id' => 1577,
                'prefecture_id' => 39,
                'zipcode' => '7820000',
                'name' => '香美市',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            77 => 
            array (
                'id' => 1578,
                'prefecture_id' => 39,
                'zipcode' => '7817300',
                'name' => '安芸郡東洋町',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            78 => 
            array (
                'id' => 1579,
                'prefecture_id' => 39,
                'zipcode' => '7816400',
                'name' => '安芸郡奈半利町',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            79 => 
            array (
                'id' => 1580,
                'prefecture_id' => 39,
                'zipcode' => '7816410',
                'name' => '安芸郡田野町',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            80 => 
            array (
                'id' => 1581,
                'prefecture_id' => 39,
                'zipcode' => '7816400',
                'name' => '安芸郡安田町',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            81 => 
            array (
                'id' => 1582,
                'prefecture_id' => 39,
                'zipcode' => '7816400',
                'name' => '安芸郡北川村',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            82 => 
            array (
                'id' => 1583,
                'prefecture_id' => 39,
                'zipcode' => '7816200',
                'name' => '安芸郡馬路村',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            83 => 
            array (
                'id' => 1584,
                'prefecture_id' => 39,
                'zipcode' => '7815700',
                'name' => '安芸郡芸西村',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            84 => 
            array (
                'id' => 1585,
                'prefecture_id' => 39,
                'zipcode' => '7813600',
                'name' => '長岡郡本山町',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            85 => 
            array (
                'id' => 1586,
                'prefecture_id' => 39,
                'zipcode' => '7890300',
                'name' => '長岡郡大豊町',
                'created_at' => '2024-12-21 16:17:16',
                'updated_at' => '2024-12-21 16:17:16',
            ),
            86 => 
            array (
                'id' => 1587,
                'prefecture_id' => 39,
                'zipcode' => '7813400',
                'name' => '土佐郡土佐町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            87 => 
            array (
                'id' => 1588,
                'prefecture_id' => 39,
                'zipcode' => '7813700',
                'name' => '土佐郡大川村',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            88 => 
            array (
                'id' => 1589,
                'prefecture_id' => 39,
                'zipcode' => '7812100',
                'name' => '吾川郡いの町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            89 => 
            array (
                'id' => 1590,
                'prefecture_id' => 39,
                'zipcode' => '7811500',
                'name' => '吾川郡仁淀川町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            90 => 
            array (
                'id' => 1591,
                'prefecture_id' => 39,
                'zipcode' => '7891300',
                'name' => '高岡郡中土佐町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            91 => 
            array (
                'id' => 1592,
                'prefecture_id' => 39,
                'zipcode' => '7891200',
                'name' => '高岡郡佐川町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            92 => 
            array (
                'id' => 1593,
                'prefecture_id' => 39,
                'zipcode' => '7811300',
                'name' => '高岡郡越知町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            93 => 
            array (
                'id' => 1594,
                'prefecture_id' => 39,
                'zipcode' => '7850600',
                'name' => '高岡郡檮原町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            94 => 
            array (
                'id' => 1595,
                'prefecture_id' => 39,
                'zipcode' => '7812100',
                'name' => '高岡郡日高村',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            95 => 
            array (
                'id' => 1596,
                'prefecture_id' => 39,
                'zipcode' => '7850200',
                'name' => '高岡郡津野町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            96 => 
            array (
                'id' => 1597,
                'prefecture_id' => 39,
                'zipcode' => '7860000',
                'name' => '高岡郡四万十町',
                'created_at' => '2024-12-21 16:17:17',
                'updated_at' => '2024-12-21 16:17:17',
            ),
            97 => 
            array (
                'id' => 1598,
                'prefecture_id' => 39,
                'zipcode' => '7880300',
                'name' => '幡多郡大月町',
                'created_at' => '2024-12-21 16:17:18',
                'updated_at' => '2024-12-21 16:17:18',
            ),
            98 => 
            array (
                'id' => 1599,
                'prefecture_id' => 39,
                'zipcode' => '7870800',
                'name' => '幡多郡三原村',
                'created_at' => '2024-12-21 16:17:18',
                'updated_at' => '2024-12-21 16:17:18',
            ),
            99 => 
            array (
                'id' => 1600,
                'prefecture_id' => 39,
                'zipcode' => '7891900',
                'name' => '幡多郡黒潮町',
                'created_at' => '2024-12-21 16:17:18',
                'updated_at' => '2024-12-21 16:17:18',
            ),
            100 => 
            array (
                'id' => 1601,
                'prefecture_id' => 40,
                'zipcode' => '8000000',
                'name' => '北九州市門司区',
                'created_at' => '2024-12-21 16:17:18',
                'updated_at' => '2024-12-21 16:17:18',
            ),
            101 => 
            array (
                'id' => 1602,
                'prefecture_id' => 40,
                'zipcode' => '8080000',
                'name' => '北九州市若松区',
                'created_at' => '2024-12-21 16:17:18',
                'updated_at' => '2024-12-21 16:17:18',
            ),
            102 => 
            array (
                'id' => 1603,
                'prefecture_id' => 40,
                'zipcode' => '8040000',
                'name' => '北九州市戸畑区',
                'created_at' => '2024-12-21 16:17:18',
                'updated_at' => '2024-12-21 16:17:18',
            ),
            103 => 
            array (
                'id' => 1604,
                'prefecture_id' => 40,
                'zipcode' => '8020000',
                'name' => '北九州市小倉北区',
                'created_at' => '2024-12-21 16:17:18',
                'updated_at' => '2024-12-21 16:17:18',
            ),
            104 => 
            array (
                'id' => 1605,
                'prefecture_id' => 40,
                'zipcode' => '8020000',
                'name' => '北九州市小倉南区',
                'created_at' => '2024-12-21 16:17:19',
                'updated_at' => '2024-12-21 16:17:19',
            ),
            105 => 
            array (
                'id' => 1606,
                'prefecture_id' => 40,
                'zipcode' => '8050000',
                'name' => '北九州市八幡東区',
                'created_at' => '2024-12-21 16:17:19',
                'updated_at' => '2024-12-21 16:17:19',
            ),
            106 => 
            array (
                'id' => 1607,
                'prefecture_id' => 40,
                'zipcode' => '8060000',
                'name' => '北九州市八幡西区',
                'created_at' => '2024-12-21 16:17:19',
                'updated_at' => '2024-12-21 16:17:19',
            ),
            107 => 
            array (
                'id' => 1608,
                'prefecture_id' => 40,
                'zipcode' => '8130000',
                'name' => '福岡市東区',
                'created_at' => '2024-12-21 16:17:19',
                'updated_at' => '2024-12-21 16:17:19',
            ),
            108 => 
            array (
                'id' => 1609,
                'prefecture_id' => 40,
                'zipcode' => '8120000',
                'name' => '福岡市博多区',
                'created_at' => '2024-12-21 16:17:20',
                'updated_at' => '2024-12-21 16:17:20',
            ),
            109 => 
            array (
                'id' => 1610,
                'prefecture_id' => 40,
                'zipcode' => '8100000',
                'name' => '福岡市中央区',
                'created_at' => '2024-12-21 16:17:20',
                'updated_at' => '2024-12-21 16:17:20',
            ),
            110 => 
            array (
                'id' => 1611,
                'prefecture_id' => 40,
                'zipcode' => '8150000',
                'name' => '福岡市南区',
                'created_at' => '2024-12-21 16:17:20',
                'updated_at' => '2024-12-21 16:17:20',
            ),
            111 => 
            array (
                'id' => 1612,
                'prefecture_id' => 40,
                'zipcode' => '8190000',
                'name' => '福岡市西区',
                'created_at' => '2024-12-21 16:17:20',
                'updated_at' => '2024-12-21 16:17:20',
            ),
            112 => 
            array (
                'id' => 1613,
                'prefecture_id' => 40,
                'zipcode' => '8140100',
                'name' => '福岡市城南区',
                'created_at' => '2024-12-21 16:17:20',
                'updated_at' => '2024-12-21 16:17:20',
            ),
            113 => 
            array (
                'id' => 1614,
                'prefecture_id' => 40,
                'zipcode' => '8140000',
                'name' => '福岡市早良区',
                'created_at' => '2024-12-21 16:17:20',
                'updated_at' => '2024-12-21 16:17:20',
            ),
            114 => 
            array (
                'id' => 1615,
                'prefecture_id' => 40,
                'zipcode' => '8360000',
                'name' => '大牟田市',
                'created_at' => '2024-12-21 16:17:20',
                'updated_at' => '2024-12-21 16:17:20',
            ),
            115 => 
            array (
                'id' => 1616,
                'prefecture_id' => 40,
                'zipcode' => '8390000',
                'name' => '久留米市',
                'created_at' => '2024-12-21 16:17:21',
                'updated_at' => '2024-12-21 16:17:21',
            ),
            116 => 
            array (
                'id' => 1617,
                'prefecture_id' => 40,
                'zipcode' => '8220000',
                'name' => '直方市',
                'created_at' => '2024-12-21 16:17:21',
                'updated_at' => '2024-12-21 16:17:21',
            ),
            117 => 
            array (
                'id' => 1618,
                'prefecture_id' => 40,
                'zipcode' => '8200000',
                'name' => '飯塚市',
                'created_at' => '2024-12-21 16:17:21',
                'updated_at' => '2024-12-21 16:17:21',
            ),
            118 => 
            array (
                'id' => 1619,
                'prefecture_id' => 40,
                'zipcode' => '8250000',
                'name' => '田川市',
                'created_at' => '2024-12-21 16:17:21',
                'updated_at' => '2024-12-21 16:17:21',
            ),
            119 => 
            array (
                'id' => 1620,
                'prefecture_id' => 40,
                'zipcode' => '8320000',
                'name' => '柳川市',
                'created_at' => '2024-12-21 16:17:21',
                'updated_at' => '2024-12-21 16:17:21',
            ),
            120 => 
            array (
                'id' => 1621,
                'prefecture_id' => 40,
                'zipcode' => '8340000',
                'name' => '八女市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            121 => 
            array (
                'id' => 1622,
                'prefecture_id' => 40,
                'zipcode' => '8330000',
                'name' => '筑後市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            122 => 
            array (
                'id' => 1623,
                'prefecture_id' => 40,
                'zipcode' => '8310000',
                'name' => '大川市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            123 => 
            array (
                'id' => 1624,
                'prefecture_id' => 40,
                'zipcode' => '8240000',
                'name' => '行橋市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            124 => 
            array (
                'id' => 1625,
                'prefecture_id' => 40,
                'zipcode' => '8280000',
                'name' => '豊前市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            125 => 
            array (
                'id' => 1626,
                'prefecture_id' => 40,
                'zipcode' => '8090000',
                'name' => '中間市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            126 => 
            array (
                'id' => 1627,
                'prefecture_id' => 40,
                'zipcode' => '8380100',
                'name' => '小郡市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            127 => 
            array (
                'id' => 1628,
                'prefecture_id' => 40,
                'zipcode' => '8180000',
                'name' => '筑紫野市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            128 => 
            array (
                'id' => 1629,
                'prefecture_id' => 40,
                'zipcode' => '8160000',
                'name' => '春日市',
                'created_at' => '2024-12-21 16:17:22',
                'updated_at' => '2024-12-21 16:17:22',
            ),
            129 => 
            array (
                'id' => 1630,
                'prefecture_id' => 40,
                'zipcode' => '8160000',
                'name' => '大野城市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            130 => 
            array (
                'id' => 1631,
                'prefecture_id' => 40,
                'zipcode' => '8113400',
                'name' => '宗像市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            131 => 
            array (
                'id' => 1632,
                'prefecture_id' => 40,
                'zipcode' => '8180100',
                'name' => '太宰府市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            132 => 
            array (
                'id' => 1633,
                'prefecture_id' => 40,
                'zipcode' => '8113100',
                'name' => '古賀市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            133 => 
            array (
                'id' => 1634,
                'prefecture_id' => 40,
                'zipcode' => '8113200',
                'name' => '福津市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            134 => 
            array (
                'id' => 1635,
                'prefecture_id' => 40,
                'zipcode' => '8391400',
                'name' => 'うきは市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            135 => 
            array (
                'id' => 1636,
                'prefecture_id' => 40,
                'zipcode' => '8230000',
                'name' => '宮若市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            136 => 
            array (
                'id' => 1637,
                'prefecture_id' => 40,
                'zipcode' => '8200200',
                'name' => '嘉麻市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            137 => 
            array (
                'id' => 1638,
                'prefecture_id' => 40,
                'zipcode' => '8380000',
                'name' => '朝倉市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            138 => 
            array (
                'id' => 1639,
                'prefecture_id' => 40,
                'zipcode' => '8350000',
                'name' => 'みやま市',
                'created_at' => '2024-12-21 16:17:23',
                'updated_at' => '2024-12-21 16:17:23',
            ),
            139 => 
            array (
                'id' => 1640,
                'prefecture_id' => 40,
                'zipcode' => '8191100',
                'name' => '糸島市',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            140 => 
            array (
                'id' => 1641,
                'prefecture_id' => 40,
                'zipcode' => '8111200',
                'name' => '那珂川市',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            141 => 
            array (
                'id' => 1642,
                'prefecture_id' => 40,
                'zipcode' => '8112100',
                'name' => '糟屋郡宇美町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            142 => 
            array (
                'id' => 1643,
                'prefecture_id' => 40,
                'zipcode' => '8112400',
                'name' => '糟屋郡篠栗町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            143 => 
            array (
                'id' => 1644,
                'prefecture_id' => 40,
                'zipcode' => '8112200',
                'name' => '糟屋郡志免町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            144 => 
            array (
                'id' => 1645,
                'prefecture_id' => 40,
                'zipcode' => '8112100',
                'name' => '糟屋郡須惠町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            145 => 
            array (
                'id' => 1646,
                'prefecture_id' => 40,
                'zipcode' => '8110100',
                'name' => '糟屋郡新宮町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            146 => 
            array (
                'id' => 1647,
                'prefecture_id' => 40,
                'zipcode' => '8112500',
                'name' => '糟屋郡久山町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            147 => 
            array (
                'id' => 1648,
                'prefecture_id' => 40,
                'zipcode' => '8112300',
                'name' => '糟屋郡粕屋町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            148 => 
            array (
                'id' => 1649,
                'prefecture_id' => 40,
                'zipcode' => '8070100',
                'name' => '遠賀郡芦屋町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            149 => 
            array (
                'id' => 1650,
                'prefecture_id' => 40,
                'zipcode' => '8070000',
                'name' => '遠賀郡水巻町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            150 => 
            array (
                'id' => 1651,
                'prefecture_id' => 40,
                'zipcode' => '8114200',
                'name' => '遠賀郡岡垣町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            151 => 
            array (
                'id' => 1652,
                'prefecture_id' => 40,
                'zipcode' => '8114300',
                'name' => '遠賀郡遠賀町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            152 => 
            array (
                'id' => 1653,
                'prefecture_id' => 40,
                'zipcode' => '8201100',
                'name' => '鞍手郡小竹町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            153 => 
            array (
                'id' => 1654,
                'prefecture_id' => 40,
                'zipcode' => '8071300',
                'name' => '鞍手郡鞍手町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            154 => 
            array (
                'id' => 1655,
                'prefecture_id' => 40,
                'zipcode' => '8200600',
                'name' => '嘉穂郡桂川町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            155 => 
            array (
                'id' => 1656,
                'prefecture_id' => 40,
                'zipcode' => '8380000',
                'name' => '朝倉郡筑前町',
                'created_at' => '2024-12-21 16:17:24',
                'updated_at' => '2024-12-21 16:17:24',
            ),
            156 => 
            array (
                'id' => 1657,
                'prefecture_id' => 40,
                'zipcode' => '8381700',
                'name' => '朝倉郡東峰村',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            157 => 
            array (
                'id' => 1658,
                'prefecture_id' => 40,
                'zipcode' => '8301200',
                'name' => '三井郡大刀洗町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            158 => 
            array (
                'id' => 1659,
                'prefecture_id' => 40,
                'zipcode' => '8300400',
                'name' => '三潴郡大木町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            159 => 
            array (
                'id' => 1660,
                'prefecture_id' => 40,
                'zipcode' => '8340100',
                'name' => '八女郡広川町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            160 => 
            array (
                'id' => 1661,
                'prefecture_id' => 40,
                'zipcode' => '8221400',
                'name' => '田川郡香春町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            161 => 
            array (
                'id' => 1662,
                'prefecture_id' => 40,
                'zipcode' => '8240600',
                'name' => '田川郡添田町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            162 => 
            array (
                'id' => 1663,
                'prefecture_id' => 40,
                'zipcode' => '8221300',
                'name' => '田川郡糸田町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            163 => 
            array (
                'id' => 1664,
                'prefecture_id' => 40,
                'zipcode' => '8270000',
                'name' => '田川郡川崎町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            164 => 
            array (
                'id' => 1665,
                'prefecture_id' => 40,
                'zipcode' => '8240500',
                'name' => '田川郡大任町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            165 => 
            array (
                'id' => 1666,
                'prefecture_id' => 40,
                'zipcode' => '8240400',
                'name' => '田川郡赤村',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            166 => 
            array (
                'id' => 1667,
                'prefecture_id' => 40,
                'zipcode' => '8221200',
                'name' => '田川郡福智町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            167 => 
            array (
                'id' => 1668,
                'prefecture_id' => 40,
                'zipcode' => '8000300',
                'name' => '京都郡苅田町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            168 => 
            array (
                'id' => 1669,
                'prefecture_id' => 40,
                'zipcode' => '8240800',
                'name' => '京都郡みやこ町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            169 => 
            array (
                'id' => 1670,
                'prefecture_id' => 40,
                'zipcode' => '8710000',
                'name' => '築上郡吉富町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            170 => 
            array (
                'id' => 1671,
                'prefecture_id' => 40,
                'zipcode' => '8710900',
                'name' => '築上郡上毛町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            171 => 
            array (
                'id' => 1672,
                'prefecture_id' => 40,
                'zipcode' => '8290100',
                'name' => '築上郡築上町',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            172 => 
            array (
                'id' => 1673,
                'prefecture_id' => 41,
                'zipcode' => '8490000',
                'name' => '佐賀市',
                'created_at' => '2024-12-21 16:17:25',
                'updated_at' => '2024-12-21 16:17:25',
            ),
            173 => 
            array (
                'id' => 1674,
                'prefecture_id' => 41,
                'zipcode' => '8470000',
                'name' => '唐津市',
                'created_at' => '2024-12-21 16:17:26',
                'updated_at' => '2024-12-21 16:17:26',
            ),
            174 => 
            array (
                'id' => 1675,
                'prefecture_id' => 41,
                'zipcode' => '8410000',
                'name' => '鳥栖市',
                'created_at' => '2024-12-21 16:17:26',
                'updated_at' => '2024-12-21 16:17:26',
            ),
            175 => 
            array (
                'id' => 1676,
                'prefecture_id' => 41,
                'zipcode' => '8460000',
                'name' => '多久市',
                'created_at' => '2024-12-21 16:17:26',
                'updated_at' => '2024-12-21 16:17:26',
            ),
            176 => 
            array (
                'id' => 1677,
                'prefecture_id' => 41,
                'zipcode' => '8480000',
                'name' => '伊万里市',
                'created_at' => '2024-12-21 16:17:26',
                'updated_at' => '2024-12-21 16:17:26',
            ),
            177 => 
            array (
                'id' => 1678,
                'prefecture_id' => 41,
                'zipcode' => '8430000',
                'name' => '武雄市',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            178 => 
            array (
                'id' => 1679,
                'prefecture_id' => 41,
                'zipcode' => '8491300',
                'name' => '鹿島市',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            179 => 
            array (
                'id' => 1680,
                'prefecture_id' => 41,
                'zipcode' => '8450000',
                'name' => '小城市',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            180 => 
            array (
                'id' => 1681,
                'prefecture_id' => 41,
                'zipcode' => '8430300',
                'name' => '嬉野市',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            181 => 
            array (
                'id' => 1682,
                'prefecture_id' => 41,
                'zipcode' => '8420000',
                'name' => '神埼市',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            182 => 
            array (
                'id' => 1683,
                'prefecture_id' => 41,
                'zipcode' => '8420000',
                'name' => '神埼郡吉野ヶ里町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            183 => 
            array (
                'id' => 1684,
                'prefecture_id' => 41,
                'zipcode' => '8410200',
                'name' => '三養基郡基山町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            184 => 
            array (
                'id' => 1685,
                'prefecture_id' => 41,
                'zipcode' => '8490100',
                'name' => '三養基郡上峰町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            185 => 
            array (
                'id' => 1686,
                'prefecture_id' => 41,
                'zipcode' => '8490100',
                'name' => '三養基郡みやき町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            186 => 
            array (
                'id' => 1687,
                'prefecture_id' => 41,
                'zipcode' => '8471400',
                'name' => '東松浦郡玄海町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            187 => 
            array (
                'id' => 1688,
                'prefecture_id' => 41,
                'zipcode' => '8440000',
                'name' => '西松浦郡有田町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            188 => 
            array (
                'id' => 1689,
                'prefecture_id' => 41,
                'zipcode' => '8492100',
                'name' => '杵島郡大町町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            189 => 
            array (
                'id' => 1690,
                'prefecture_id' => 41,
                'zipcode' => '8490500',
                'name' => '杵島郡江北町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            190 => 
            array (
                'id' => 1691,
                'prefecture_id' => 41,
                'zipcode' => '8491100',
                'name' => '杵島郡白石町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            191 => 
            array (
                'id' => 1692,
                'prefecture_id' => 41,
                'zipcode' => '8491600',
                'name' => '藤津郡太良町',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            192 => 
            array (
                'id' => 1693,
                'prefecture_id' => 42,
                'zipcode' => '8500000',
                'name' => '長崎市',
                'created_at' => '2024-12-21 16:17:27',
                'updated_at' => '2024-12-21 16:17:27',
            ),
            193 => 
            array (
                'id' => 1694,
                'prefecture_id' => 42,
                'zipcode' => '8570000',
                'name' => '佐世保市',
                'created_at' => '2024-12-21 16:17:28',
                'updated_at' => '2024-12-21 16:17:28',
            ),
            194 => 
            array (
                'id' => 1695,
                'prefecture_id' => 42,
                'zipcode' => '8550000',
                'name' => '島原市',
                'created_at' => '2024-12-21 16:17:29',
                'updated_at' => '2024-12-21 16:17:29',
            ),
            195 => 
            array (
                'id' => 1696,
                'prefecture_id' => 42,
                'zipcode' => '8540000',
                'name' => '諫早市',
                'created_at' => '2024-12-21 16:17:29',
                'updated_at' => '2024-12-21 16:17:29',
            ),
            196 => 
            array (
                'id' => 1697,
                'prefecture_id' => 42,
                'zipcode' => '8560000',
                'name' => '大村市',
                'created_at' => '2024-12-21 16:17:29',
                'updated_at' => '2024-12-21 16:17:29',
            ),
            197 => 
            array (
                'id' => 1698,
                'prefecture_id' => 42,
                'zipcode' => '8595100',
                'name' => '平戸市',
                'created_at' => '2024-12-21 16:17:29',
                'updated_at' => '2024-12-21 16:17:29',
            ),
            198 => 
            array (
                'id' => 1699,
                'prefecture_id' => 42,
                'zipcode' => '8594500',
                'name' => '松浦市',
                'created_at' => '2024-12-21 16:17:30',
                'updated_at' => '2024-12-21 16:17:30',
            ),
            199 => 
            array (
                'id' => 1700,
                'prefecture_id' => 42,
                'zipcode' => '8170000',
                'name' => '対馬市',
                'created_at' => '2024-12-21 16:17:30',
                'updated_at' => '2024-12-21 16:17:30',
            ),
            200 => 
            array (
                'id' => 1701,
                'prefecture_id' => 42,
                'zipcode' => '8115100',
                'name' => '壱岐市',
                'created_at' => '2024-12-21 16:17:30',
                'updated_at' => '2024-12-21 16:17:30',
            ),
            201 => 
            array (
                'id' => 1702,
                'prefecture_id' => 42,
                'zipcode' => '8530000',
                'name' => '五島市',
                'created_at' => '2024-12-21 16:17:30',
                'updated_at' => '2024-12-21 16:17:30',
            ),
            202 => 
            array (
                'id' => 1703,
                'prefecture_id' => 42,
                'zipcode' => '8513500',
                'name' => '西海市',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            203 => 
            array (
                'id' => 1704,
                'prefecture_id' => 42,
                'zipcode' => '8540500',
                'name' => '雲仙市',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            204 => 
            array (
                'id' => 1705,
                'prefecture_id' => 42,
                'zipcode' => '8592600',
                'name' => '南島原市',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            205 => 
            array (
                'id' => 1706,
                'prefecture_id' => 42,
                'zipcode' => '8512100',
                'name' => '西彼杵郡長与町',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            206 => 
            array (
                'id' => 1707,
                'prefecture_id' => 42,
                'zipcode' => '8512100',
                'name' => '西彼杵郡時津町',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            207 => 
            array (
                'id' => 1708,
                'prefecture_id' => 42,
                'zipcode' => '8593800',
                'name' => '東彼杵郡東彼杵町',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            208 => 
            array (
                'id' => 1709,
                'prefecture_id' => 42,
                'zipcode' => '8593600',
                'name' => '東彼杵郡川棚町',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            209 => 
            array (
                'id' => 1710,
                'prefecture_id' => 42,
                'zipcode' => '8593700',
                'name' => '東彼杵郡波佐見町',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            210 => 
            array (
                'id' => 1711,
                'prefecture_id' => 42,
                'zipcode' => '8574700',
                'name' => '北松浦郡小値賀町',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            211 => 
            array (
                'id' => 1712,
                'prefecture_id' => 42,
                'zipcode' => '8570300',
                'name' => '北松浦郡佐々町',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            212 => 
            array (
                'id' => 1713,
                'prefecture_id' => 42,
                'zipcode' => '8574400',
                'name' => '南松浦郡新上五島町',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            213 => 
            array (
                'id' => 1714,
                'prefecture_id' => 43,
                'zipcode' => '8610000',
                'name' => '熊本市中央区',
                'created_at' => '2024-12-21 16:17:31',
                'updated_at' => '2024-12-21 16:17:31',
            ),
            214 => 
            array (
                'id' => 1715,
                'prefecture_id' => 43,
                'zipcode' => '8610000',
                'name' => '熊本市東区',
                'created_at' => '2024-12-21 16:17:32',
                'updated_at' => '2024-12-21 16:17:32',
            ),
            215 => 
            array (
                'id' => 1716,
                'prefecture_id' => 43,
                'zipcode' => '8610000',
                'name' => '熊本市西区',
                'created_at' => '2024-12-21 16:17:32',
                'updated_at' => '2024-12-21 16:17:32',
            ),
            216 => 
            array (
                'id' => 1717,
                'prefecture_id' => 43,
                'zipcode' => '8610000',
                'name' => '熊本市南区',
                'created_at' => '2024-12-21 16:17:32',
                'updated_at' => '2024-12-21 16:17:32',
            ),
            217 => 
            array (
                'id' => 1718,
                'prefecture_id' => 43,
                'zipcode' => '8610000',
                'name' => '熊本市北区',
                'created_at' => '2024-12-21 16:17:32',
                'updated_at' => '2024-12-21 16:17:32',
            ),
            218 => 
            array (
                'id' => 1719,
                'prefecture_id' => 43,
                'zipcode' => '8660000',
                'name' => '八代市',
                'created_at' => '2024-12-21 16:17:32',
                'updated_at' => '2024-12-21 16:17:32',
            ),
            219 => 
            array (
                'id' => 1720,
                'prefecture_id' => 43,
                'zipcode' => '8680000',
                'name' => '人吉市',
                'created_at' => '2024-12-21 16:17:33',
                'updated_at' => '2024-12-21 16:17:33',
            ),
            220 => 
            array (
                'id' => 1721,
                'prefecture_id' => 43,
                'zipcode' => '8640000',
                'name' => '荒尾市',
                'created_at' => '2024-12-21 16:17:33',
                'updated_at' => '2024-12-21 16:17:33',
            ),
            221 => 
            array (
                'id' => 1722,
                'prefecture_id' => 43,
                'zipcode' => '8670000',
                'name' => '水俣市',
                'created_at' => '2024-12-21 16:17:33',
                'updated_at' => '2024-12-21 16:17:33',
            ),
            222 => 
            array (
                'id' => 1723,
                'prefecture_id' => 43,
                'zipcode' => '8650000',
                'name' => '玉名市',
                'created_at' => '2024-12-21 16:17:33',
                'updated_at' => '2024-12-21 16:17:33',
            ),
            223 => 
            array (
                'id' => 1724,
                'prefecture_id' => 43,
                'zipcode' => '8610500',
                'name' => '山鹿市',
                'created_at' => '2024-12-21 16:17:33',
                'updated_at' => '2024-12-21 16:17:33',
            ),
            224 => 
            array (
                'id' => 1725,
                'prefecture_id' => 43,
                'zipcode' => '8611300',
                'name' => '菊池市',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            225 => 
            array (
                'id' => 1726,
                'prefecture_id' => 43,
                'zipcode' => '8690400',
                'name' => '宇土市',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            226 => 
            array (
                'id' => 1727,
                'prefecture_id' => 43,
                'zipcode' => '8693600',
                'name' => '上天草市',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            227 => 
            array (
                'id' => 1728,
                'prefecture_id' => 43,
                'zipcode' => '8690500',
                'name' => '宇城市',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            228 => 
            array (
                'id' => 1729,
                'prefecture_id' => 43,
                'zipcode' => '8692600',
                'name' => '阿蘇市',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            229 => 
            array (
                'id' => 1730,
                'prefecture_id' => 43,
                'zipcode' => '8630000',
                'name' => '天草市',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            230 => 
            array (
                'id' => 1731,
                'prefecture_id' => 43,
                'zipcode' => '8611100',
                'name' => '合志市',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            231 => 
            array (
                'id' => 1732,
                'prefecture_id' => 43,
                'zipcode' => '8614700',
                'name' => '下益城郡美里町',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            232 => 
            array (
                'id' => 1733,
                'prefecture_id' => 43,
                'zipcode' => '8690300',
                'name' => '玉名郡玉東町',
                'created_at' => '2024-12-21 16:17:34',
                'updated_at' => '2024-12-21 16:17:34',
            ),
            233 => 
            array (
                'id' => 1734,
                'prefecture_id' => 43,
                'zipcode' => '8610800',
                'name' => '玉名郡南関町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            234 => 
            array (
                'id' => 1735,
                'prefecture_id' => 43,
                'zipcode' => '8690100',
                'name' => '玉名郡長洲町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            235 => 
            array (
                'id' => 1736,
                'prefecture_id' => 43,
                'zipcode' => '8650100',
                'name' => '玉名郡和水町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            236 => 
            array (
                'id' => 1737,
                'prefecture_id' => 43,
                'zipcode' => '8691200',
                'name' => '菊池郡大津町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            237 => 
            array (
                'id' => 1738,
                'prefecture_id' => 43,
                'zipcode' => '8691100',
                'name' => '菊池郡菊陽町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            238 => 
            array (
                'id' => 1739,
                'prefecture_id' => 43,
                'zipcode' => '8692400',
                'name' => '阿蘇郡南小国町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            239 => 
            array (
                'id' => 1740,
                'prefecture_id' => 43,
                'zipcode' => '8692500',
                'name' => '阿蘇郡小国町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            240 => 
            array (
                'id' => 1741,
                'prefecture_id' => 43,
                'zipcode' => '8692700',
                'name' => '阿蘇郡産山村',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            241 => 
            array (
                'id' => 1742,
                'prefecture_id' => 43,
                'zipcode' => '8691600',
                'name' => '阿蘇郡高森町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            242 => 
            array (
                'id' => 1743,
                'prefecture_id' => 43,
                'zipcode' => '8612400',
                'name' => '阿蘇郡西原村',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            243 => 
            array (
                'id' => 1744,
                'prefecture_id' => 43,
                'zipcode' => '8691400',
                'name' => '阿蘇郡南阿蘇村',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            244 => 
            array (
                'id' => 1745,
                'prefecture_id' => 43,
                'zipcode' => '8613200',
                'name' => '上益城郡御船町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            245 => 
            array (
                'id' => 1746,
                'prefecture_id' => 43,
                'zipcode' => '8613100',
                'name' => '上益城郡嘉島町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            246 => 
            array (
                'id' => 1747,
                'prefecture_id' => 43,
                'zipcode' => '8612200',
                'name' => '上益城郡益城町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            247 => 
            array (
                'id' => 1748,
                'prefecture_id' => 43,
                'zipcode' => '8614600',
                'name' => '上益城郡甲佐町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            248 => 
            array (
                'id' => 1749,
                'prefecture_id' => 43,
                'zipcode' => '8613500',
                'name' => '上益城郡山都町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            249 => 
            array (
                'id' => 1750,
                'prefecture_id' => 43,
                'zipcode' => '8694600',
                'name' => '八代郡氷川町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            250 => 
            array (
                'id' => 1751,
                'prefecture_id' => 43,
                'zipcode' => '8695400',
                'name' => '葦北郡芦北町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            251 => 
            array (
                'id' => 1752,
                'prefecture_id' => 43,
                'zipcode' => '8695600',
                'name' => '葦北郡津奈木町',
                'created_at' => '2024-12-21 16:17:35',
                'updated_at' => '2024-12-21 16:17:35',
            ),
            252 => 
            array (
                'id' => 1753,
                'prefecture_id' => 43,
                'zipcode' => '8680300',
                'name' => '球磨郡錦町',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            253 => 
            array (
                'id' => 1754,
                'prefecture_id' => 43,
                'zipcode' => '8680500',
                'name' => '球磨郡多良木町',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            254 => 
            array (
                'id' => 1755,
                'prefecture_id' => 43,
                'zipcode' => '8680600',
                'name' => '球磨郡湯前町',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            255 => 
            array (
                'id' => 1756,
                'prefecture_id' => 43,
                'zipcode' => '8680700',
                'name' => '球磨郡水上村',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            256 => 
            array (
                'id' => 1757,
                'prefecture_id' => 43,
                'zipcode' => '8680000',
                'name' => '球磨郡相良村',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            257 => 
            array (
                'id' => 1758,
                'prefecture_id' => 43,
                'zipcode' => '8680200',
                'name' => '球磨郡五木村',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            258 => 
            array (
                'id' => 1759,
                'prefecture_id' => 43,
                'zipcode' => '8680000',
                'name' => '球磨郡山江村',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            259 => 
            array (
                'id' => 1760,
                'prefecture_id' => 43,
                'zipcode' => '8696400',
                'name' => '球磨郡球磨村',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            260 => 
            array (
                'id' => 1761,
                'prefecture_id' => 43,
                'zipcode' => '8680400',
                'name' => '球磨郡あさぎり町',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            261 => 
            array (
                'id' => 1762,
                'prefecture_id' => 43,
                'zipcode' => '8632500',
                'name' => '天草郡苓北町',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            262 => 
            array (
                'id' => 1763,
                'prefecture_id' => 44,
                'zipcode' => '8700100',
                'name' => '大分市',
                'created_at' => '2024-12-21 16:17:36',
                'updated_at' => '2024-12-21 16:17:36',
            ),
            263 => 
            array (
                'id' => 1764,
                'prefecture_id' => 44,
                'zipcode' => '8740000',
                'name' => '別府市',
                'created_at' => '2024-12-21 16:17:37',
                'updated_at' => '2024-12-21 16:17:37',
            ),
            264 => 
            array (
                'id' => 1765,
                'prefecture_id' => 44,
                'zipcode' => '8710000',
                'name' => '中津市',
                'created_at' => '2024-12-21 16:17:37',
                'updated_at' => '2024-12-21 16:17:37',
            ),
            265 => 
            array (
                'id' => 1766,
                'prefecture_id' => 44,
                'zipcode' => '8770000',
                'name' => '日田市',
                'created_at' => '2024-12-21 16:17:37',
                'updated_at' => '2024-12-21 16:17:37',
            ),
            266 => 
            array (
                'id' => 1767,
                'prefecture_id' => 44,
                'zipcode' => '8760000',
                'name' => '佐伯市',
                'created_at' => '2024-12-21 16:17:38',
                'updated_at' => '2024-12-21 16:17:38',
            ),
            267 => 
            array (
                'id' => 1768,
                'prefecture_id' => 44,
                'zipcode' => '8750000',
                'name' => '臼杵市',
                'created_at' => '2024-12-21 16:17:38',
                'updated_at' => '2024-12-21 16:17:38',
            ),
            268 => 
            array (
                'id' => 1769,
                'prefecture_id' => 44,
                'zipcode' => '8792400',
                'name' => '津久見市',
                'created_at' => '2024-12-21 16:17:38',
                'updated_at' => '2024-12-21 16:17:38',
            ),
            269 => 
            array (
                'id' => 1770,
                'prefecture_id' => 44,
                'zipcode' => '8780000',
                'name' => '竹田市',
                'created_at' => '2024-12-21 16:17:38',
                'updated_at' => '2024-12-21 16:17:38',
            ),
            270 => 
            array (
                'id' => 1771,
                'prefecture_id' => 44,
                'zipcode' => '8790600',
                'name' => '豊後高田市',
                'created_at' => '2024-12-21 16:17:39',
                'updated_at' => '2024-12-21 16:17:39',
            ),
            271 => 
            array (
                'id' => 1772,
                'prefecture_id' => 44,
                'zipcode' => '8730000',
                'name' => '杵築市',
                'created_at' => '2024-12-21 16:17:39',
                'updated_at' => '2024-12-21 16:17:39',
            ),
            272 => 
            array (
                'id' => 1773,
                'prefecture_id' => 44,
                'zipcode' => '8720000',
                'name' => '宇佐市',
                'created_at' => '2024-12-21 16:17:39',
                'updated_at' => '2024-12-21 16:17:39',
            ),
            273 => 
            array (
                'id' => 1774,
                'prefecture_id' => 44,
                'zipcode' => '8797100',
                'name' => '豊後大野市',
                'created_at' => '2024-12-21 16:17:39',
                'updated_at' => '2024-12-21 16:17:39',
            ),
            274 => 
            array (
                'id' => 1775,
                'prefecture_id' => 44,
                'zipcode' => '8795400',
                'name' => '由布市',
                'created_at' => '2024-12-21 16:17:40',
                'updated_at' => '2024-12-21 16:17:40',
            ),
            275 => 
            array (
                'id' => 1776,
                'prefecture_id' => 44,
                'zipcode' => '8730500',
                'name' => '国東市',
                'created_at' => '2024-12-21 16:17:40',
                'updated_at' => '2024-12-21 16:17:40',
            ),
            276 => 
            array (
                'id' => 1777,
                'prefecture_id' => 44,
                'zipcode' => '8721501',
                'name' => '東国東郡姫島村',
                'created_at' => '2024-12-21 16:17:40',
                'updated_at' => '2024-12-21 16:17:40',
            ),
            277 => 
            array (
                'id' => 1778,
                'prefecture_id' => 44,
                'zipcode' => '8791500',
                'name' => '速見郡日出町',
                'created_at' => '2024-12-21 16:17:40',
                'updated_at' => '2024-12-21 16:17:40',
            ),
            278 => 
            array (
                'id' => 1779,
                'prefecture_id' => 44,
                'zipcode' => '8794800',
                'name' => '玖珠郡九重町',
                'created_at' => '2024-12-21 16:17:40',
                'updated_at' => '2024-12-21 16:17:40',
            ),
            279 => 
            array (
                'id' => 1780,
                'prefecture_id' => 44,
                'zipcode' => '8794400',
                'name' => '玖珠郡玖珠町',
                'created_at' => '2024-12-21 16:17:40',
                'updated_at' => '2024-12-21 16:17:40',
            ),
            280 => 
            array (
                'id' => 1781,
                'prefecture_id' => 45,
                'zipcode' => '8800000',
                'name' => '宮崎市',
                'created_at' => '2024-12-21 16:17:40',
                'updated_at' => '2024-12-21 16:17:40',
            ),
            281 => 
            array (
                'id' => 1782,
                'prefecture_id' => 45,
                'zipcode' => '8850000',
                'name' => '都城市',
                'created_at' => '2024-12-21 16:17:41',
                'updated_at' => '2024-12-21 16:17:41',
            ),
            282 => 
            array (
                'id' => 1783,
                'prefecture_id' => 45,
                'zipcode' => '8820000',
                'name' => '延岡市',
                'created_at' => '2024-12-21 16:17:41',
                'updated_at' => '2024-12-21 16:17:41',
            ),
            283 => 
            array (
                'id' => 1784,
                'prefecture_id' => 45,
                'zipcode' => '8870000',
                'name' => '日南市',
                'created_at' => '2024-12-21 16:17:41',
                'updated_at' => '2024-12-21 16:17:41',
            ),
            284 => 
            array (
                'id' => 1785,
                'prefecture_id' => 45,
                'zipcode' => '8860000',
                'name' => '小林市',
                'created_at' => '2024-12-21 16:17:41',
                'updated_at' => '2024-12-21 16:17:41',
            ),
            285 => 
            array (
                'id' => 1786,
                'prefecture_id' => 45,
                'zipcode' => '8830000',
                'name' => '日向市',
                'created_at' => '2024-12-21 16:17:41',
                'updated_at' => '2024-12-21 16:17:41',
            ),
            286 => 
            array (
                'id' => 1787,
                'prefecture_id' => 45,
                'zipcode' => '8880000',
                'name' => '串間市',
                'created_at' => '2024-12-21 16:17:41',
                'updated_at' => '2024-12-21 16:17:41',
            ),
            287 => 
            array (
                'id' => 1788,
                'prefecture_id' => 45,
                'zipcode' => '8810000',
                'name' => '西都市',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            288 => 
            array (
                'id' => 1789,
                'prefecture_id' => 45,
                'zipcode' => '8894300',
                'name' => 'えびの市',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            289 => 
            array (
                'id' => 1790,
                'prefecture_id' => 45,
                'zipcode' => '8891900',
                'name' => '北諸県郡三股町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            290 => 
            array (
                'id' => 1791,
                'prefecture_id' => 45,
                'zipcode' => '8894400',
                'name' => '西諸県郡高原町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            291 => 
            array (
                'id' => 1792,
                'prefecture_id' => 45,
                'zipcode' => '8801100',
                'name' => '東諸県郡国富町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            292 => 
            array (
                'id' => 1793,
                'prefecture_id' => 45,
                'zipcode' => '8801300',
                'name' => '東諸県郡綾町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            293 => 
            array (
                'id' => 1794,
                'prefecture_id' => 45,
                'zipcode' => '8840000',
                'name' => '児湯郡高鍋町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            294 => 
            array (
                'id' => 1795,
                'prefecture_id' => 45,
                'zipcode' => '8891400',
                'name' => '児湯郡新富町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            295 => 
            array (
                'id' => 1796,
                'prefecture_id' => 45,
                'zipcode' => '8811400',
                'name' => '児湯郡西米良村',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            296 => 
            array (
                'id' => 1797,
                'prefecture_id' => 45,
                'zipcode' => '8840100',
                'name' => '児湯郡木城町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            297 => 
            array (
                'id' => 1798,
                'prefecture_id' => 45,
                'zipcode' => '8891300',
                'name' => '児湯郡川南町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            298 => 
            array (
                'id' => 1799,
                'prefecture_id' => 45,
                'zipcode' => '8891200',
                'name' => '児湯郡都農町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            299 => 
            array (
                'id' => 1800,
                'prefecture_id' => 45,
                'zipcode' => '8890600',
                'name' => '東臼杵郡門川町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            300 => 
            array (
                'id' => 1801,
                'prefecture_id' => 45,
                'zipcode' => '8831300',
                'name' => '東臼杵郡諸塚村',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            301 => 
            array (
                'id' => 1802,
                'prefecture_id' => 45,
                'zipcode' => '8831600',
                'name' => '東臼杵郡椎葉村',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            302 => 
            array (
                'id' => 1803,
                'prefecture_id' => 45,
                'zipcode' => '8831100',
                'name' => '東臼杵郡美郷町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            303 => 
            array (
                'id' => 1804,
                'prefecture_id' => 45,
                'zipcode' => '8821100',
                'name' => '西臼杵郡高千穂町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            304 => 
            array (
                'id' => 1805,
                'prefecture_id' => 45,
                'zipcode' => '8820400',
                'name' => '西臼杵郡日之影町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            305 => 
            array (
                'id' => 1806,
                'prefecture_id' => 45,
                'zipcode' => '8821200',
                'name' => '西臼杵郡五ヶ瀬町',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            306 => 
            array (
                'id' => 1807,
                'prefecture_id' => 46,
                'zipcode' => '8900000',
                'name' => '鹿児島市',
                'created_at' => '2024-12-21 16:17:42',
                'updated_at' => '2024-12-21 16:17:42',
            ),
            307 => 
            array (
                'id' => 1808,
                'prefecture_id' => 46,
                'zipcode' => '8930000',
                'name' => '鹿屋市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            308 => 
            array (
                'id' => 1809,
                'prefecture_id' => 46,
                'zipcode' => '8980000',
                'name' => '枕崎市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            309 => 
            array (
                'id' => 1810,
                'prefecture_id' => 46,
                'zipcode' => '8991600',
                'name' => '阿久根市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            310 => 
            array (
                'id' => 1811,
                'prefecture_id' => 46,
                'zipcode' => '8990200',
                'name' => '出水市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            311 => 
            array (
                'id' => 1812,
                'prefecture_id' => 46,
                'zipcode' => '8910400',
                'name' => '指宿市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            312 => 
            array (
                'id' => 1813,
                'prefecture_id' => 46,
                'zipcode' => '8913100',
                'name' => '西之表市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            313 => 
            array (
                'id' => 1814,
                'prefecture_id' => 46,
                'zipcode' => '8912100',
                'name' => '垂水市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            314 => 
            array (
                'id' => 1815,
                'prefecture_id' => 46,
                'zipcode' => '8950000',
                'name' => '薩摩川内市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            315 => 
            array (
                'id' => 1816,
                'prefecture_id' => 46,
                'zipcode' => '8992500',
                'name' => '日置市',
                'created_at' => '2024-12-21 16:17:43',
                'updated_at' => '2024-12-21 16:17:43',
            ),
            316 => 
            array (
                'id' => 1817,
                'prefecture_id' => 46,
                'zipcode' => '8998600',
                'name' => '曽於市',
                'created_at' => '2024-12-21 16:17:44',
                'updated_at' => '2024-12-21 16:17:44',
            ),
            317 => 
            array (
                'id' => 1818,
                'prefecture_id' => 46,
                'zipcode' => '8994300',
                'name' => '霧島市',
                'created_at' => '2024-12-21 16:17:44',
                'updated_at' => '2024-12-21 16:17:44',
            ),
            318 => 
            array (
                'id' => 1819,
                'prefecture_id' => 46,
                'zipcode' => '8960000',
                'name' => 'いちき串木野市',
                'created_at' => '2024-12-21 16:17:44',
                'updated_at' => '2024-12-21 16:17:44',
            ),
            319 => 
            array (
                'id' => 1820,
                'prefecture_id' => 46,
                'zipcode' => '8970000',
                'name' => '南さつま市',
                'created_at' => '2024-12-21 16:17:44',
                'updated_at' => '2024-12-21 16:17:44',
            ),
            320 => 
            array (
                'id' => 1821,
                'prefecture_id' => 46,
                'zipcode' => '8997100',
                'name' => '志布志市',
                'created_at' => '2024-12-21 16:17:44',
                'updated_at' => '2024-12-21 16:17:44',
            ),
            321 => 
            array (
                'id' => 1822,
                'prefecture_id' => 46,
                'zipcode' => '8940000',
                'name' => '奄美市',
                'created_at' => '2024-12-21 16:17:44',
                'updated_at' => '2024-12-21 16:17:44',
            ),
            322 => 
            array (
                'id' => 1823,
                'prefecture_id' => 46,
                'zipcode' => '8970200',
                'name' => '南九州市',
                'created_at' => '2024-12-21 16:17:44',
                'updated_at' => '2024-12-21 16:17:44',
            ),
            323 => 
            array (
                'id' => 1824,
                'prefecture_id' => 46,
                'zipcode' => '8952500',
                'name' => '伊佐市',
                'created_at' => '2024-12-21 16:17:44',
                'updated_at' => '2024-12-21 16:17:44',
            ),
            324 => 
            array (
                'id' => 1825,
                'prefecture_id' => 46,
                'zipcode' => '8995400',
                'name' => '姶良市',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            325 => 
            array (
                'id' => 1826,
                'prefecture_id' => 46,
                'zipcode' => '8900000',
                'name' => '鹿児島郡三島村',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            326 => 
            array (
                'id' => 1827,
                'prefecture_id' => 46,
                'zipcode' => '8915200',
                'name' => '鹿児島郡十島村',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            327 => 
            array (
                'id' => 1828,
                'prefecture_id' => 46,
                'zipcode' => '8951800',
                'name' => '薩摩郡さつま町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            328 => 
            array (
                'id' => 1829,
                'prefecture_id' => 46,
                'zipcode' => '8991400',
                'name' => '出水郡長島町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            329 => 
            array (
                'id' => 1830,
                'prefecture_id' => 46,
                'zipcode' => '8996200',
                'name' => '姶良郡湧水町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            330 => 
            array (
                'id' => 1831,
                'prefecture_id' => 46,
                'zipcode' => '8997300',
                'name' => '曽於郡大崎町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            331 => 
            array (
                'id' => 1832,
                'prefecture_id' => 46,
                'zipcode' => '8931600',
                'name' => '肝属郡東串良町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            332 => 
            array (
                'id' => 1833,
                'prefecture_id' => 46,
                'zipcode' => '8932300',
                'name' => '肝属郡錦江町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            333 => 
            array (
                'id' => 1834,
                'prefecture_id' => 46,
                'zipcode' => '8932500',
                'name' => '肝属郡南大隅町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            334 => 
            array (
                'id' => 1835,
                'prefecture_id' => 46,
                'zipcode' => '8931200',
                'name' => '肝属郡肝付町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            335 => 
            array (
                'id' => 1836,
                'prefecture_id' => 46,
                'zipcode' => '8913600',
                'name' => '熊毛郡中種子町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            336 => 
            array (
                'id' => 1837,
                'prefecture_id' => 46,
                'zipcode' => '8913700',
                'name' => '熊毛郡南種子町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            337 => 
            array (
                'id' => 1838,
                'prefecture_id' => 46,
                'zipcode' => '8914200',
                'name' => '熊毛郡屋久島町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            338 => 
            array (
                'id' => 1839,
                'prefecture_id' => 46,
                'zipcode' => '8943100',
                'name' => '大島郡大和村',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            339 => 
            array (
                'id' => 1840,
                'prefecture_id' => 46,
                'zipcode' => '8943300',
                'name' => '大島郡宇検村',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            340 => 
            array (
                'id' => 1841,
                'prefecture_id' => 46,
                'zipcode' => '8941500',
                'name' => '大島郡瀬戸内町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            341 => 
            array (
                'id' => 1842,
                'prefecture_id' => 46,
                'zipcode' => '8940100',
                'name' => '大島郡龍郷町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            342 => 
            array (
                'id' => 1843,
                'prefecture_id' => 46,
                'zipcode' => '8916200',
                'name' => '大島郡喜界町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            343 => 
            array (
                'id' => 1844,
                'prefecture_id' => 46,
                'zipcode' => '8917100',
                'name' => '大島郡徳之島町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            344 => 
            array (
                'id' => 1845,
                'prefecture_id' => 46,
                'zipcode' => '8917600',
                'name' => '大島郡天城町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            345 => 
            array (
                'id' => 1846,
                'prefecture_id' => 46,
                'zipcode' => '8918300',
                'name' => '大島郡伊仙町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            346 => 
            array (
                'id' => 1847,
                'prefecture_id' => 46,
                'zipcode' => '8919100',
                'name' => '大島郡和泊町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            347 => 
            array (
                'id' => 1848,
                'prefecture_id' => 46,
                'zipcode' => '8919200',
                'name' => '大島郡知名町',
                'created_at' => '2024-12-21 16:17:45',
                'updated_at' => '2024-12-21 16:17:45',
            ),
            348 => 
            array (
                'id' => 1849,
                'prefecture_id' => 46,
                'zipcode' => '8919300',
                'name' => '大島郡与論町',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            349 => 
            array (
                'id' => 1850,
                'prefecture_id' => 47,
                'zipcode' => '9000000',
                'name' => '那覇市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            350 => 
            array (
                'id' => 1851,
                'prefecture_id' => 47,
                'zipcode' => '9012200',
                'name' => '宜野湾市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            351 => 
            array (
                'id' => 1852,
                'prefecture_id' => 47,
                'zipcode' => '9070000',
                'name' => '石垣市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            352 => 
            array (
                'id' => 1853,
                'prefecture_id' => 47,
                'zipcode' => '9012100',
                'name' => '浦添市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            353 => 
            array (
                'id' => 1854,
                'prefecture_id' => 47,
                'zipcode' => '9050000',
                'name' => '名護市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            354 => 
            array (
                'id' => 1855,
                'prefecture_id' => 47,
                'zipcode' => '9010300',
                'name' => '糸満市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            355 => 
            array (
                'id' => 1856,
                'prefecture_id' => 47,
                'zipcode' => '9040000',
                'name' => '沖縄市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            356 => 
            array (
                'id' => 1857,
                'prefecture_id' => 47,
                'zipcode' => '9010200',
                'name' => '豊見城市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            357 => 
            array (
                'id' => 1858,
                'prefecture_id' => 47,
                'zipcode' => '9042200',
                'name' => 'うるま市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            358 => 
            array (
                'id' => 1859,
                'prefecture_id' => 47,
                'zipcode' => '9060000',
                'name' => '宮古島市',
                'created_at' => '2024-12-21 16:17:46',
                'updated_at' => '2024-12-21 16:17:46',
            ),
            359 => 
            array (
                'id' => 1860,
                'prefecture_id' => 47,
                'zipcode' => '9011400',
                'name' => '南城市',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            360 => 
            array (
                'id' => 1861,
                'prefecture_id' => 47,
                'zipcode' => '9051400',
                'name' => '国頭郡国頭村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            361 => 
            array (
                'id' => 1862,
                'prefecture_id' => 47,
                'zipcode' => '9051300',
                'name' => '国頭郡大宜味村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            362 => 
            array (
                'id' => 1863,
                'prefecture_id' => 47,
                'zipcode' => '9051200',
                'name' => '国頭郡東村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            363 => 
            array (
                'id' => 1864,
                'prefecture_id' => 47,
                'zipcode' => '9050400',
                'name' => '国頭郡今帰仁村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            364 => 
            array (
                'id' => 1865,
                'prefecture_id' => 47,
                'zipcode' => '9050200',
                'name' => '国頭郡本部町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            365 => 
            array (
                'id' => 1866,
                'prefecture_id' => 47,
                'zipcode' => '9040400',
                'name' => '国頭郡恩納村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            366 => 
            array (
                'id' => 1867,
                'prefecture_id' => 47,
                'zipcode' => '9041300',
                'name' => '国頭郡宜野座村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            367 => 
            array (
                'id' => 1868,
                'prefecture_id' => 47,
                'zipcode' => '9041200',
                'name' => '国頭郡金武町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            368 => 
            array (
                'id' => 1869,
                'prefecture_id' => 47,
                'zipcode' => '9050500',
                'name' => '国頭郡伊江村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            369 => 
            array (
                'id' => 1870,
                'prefecture_id' => 47,
                'zipcode' => '9040300',
                'name' => '中頭郡読谷村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            370 => 
            array (
                'id' => 1871,
                'prefecture_id' => 47,
                'zipcode' => '9040200',
                'name' => '中頭郡嘉手納町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            371 => 
            array (
                'id' => 1872,
                'prefecture_id' => 47,
                'zipcode' => '9040100',
                'name' => '中頭郡北谷町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            372 => 
            array (
                'id' => 1873,
                'prefecture_id' => 47,
                'zipcode' => '9012300',
                'name' => '中頭郡北中城村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            373 => 
            array (
                'id' => 1874,
                'prefecture_id' => 47,
                'zipcode' => '9012400',
                'name' => '中頭郡中城村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            374 => 
            array (
                'id' => 1875,
                'prefecture_id' => 47,
                'zipcode' => '9030100',
                'name' => '中頭郡西原町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            375 => 
            array (
                'id' => 1876,
                'prefecture_id' => 47,
                'zipcode' => '9011300',
                'name' => '島尻郡与那原町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            376 => 
            array (
                'id' => 1877,
                'prefecture_id' => 47,
                'zipcode' => '9011100',
                'name' => '島尻郡南風原町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            377 => 
            array (
                'id' => 1878,
                'prefecture_id' => 47,
                'zipcode' => '9013500',
                'name' => '島尻郡渡嘉敷村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            378 => 
            array (
                'id' => 1879,
                'prefecture_id' => 47,
                'zipcode' => '9013400',
                'name' => '島尻郡座間味村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            379 => 
            array (
                'id' => 1880,
                'prefecture_id' => 47,
                'zipcode' => '9013700',
                'name' => '島尻郡粟国村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            380 => 
            array (
                'id' => 1881,
                'prefecture_id' => 47,
                'zipcode' => '9013601',
                'name' => '島尻郡渡名喜村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            381 => 
            array (
                'id' => 1882,
                'prefecture_id' => 47,
                'zipcode' => '9013800',
                'name' => '島尻郡南大東村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            382 => 
            array (
                'id' => 1883,
                'prefecture_id' => 47,
                'zipcode' => '9013900',
                'name' => '島尻郡北大東村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            383 => 
            array (
                'id' => 1884,
                'prefecture_id' => 47,
                'zipcode' => '9050700',
                'name' => '島尻郡伊平屋村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            384 => 
            array (
                'id' => 1885,
                'prefecture_id' => 47,
                'zipcode' => '9050600',
                'name' => '島尻郡伊是名村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            385 => 
            array (
                'id' => 1886,
                'prefecture_id' => 47,
                'zipcode' => '9013100',
                'name' => '島尻郡久米島町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            386 => 
            array (
                'id' => 1887,
                'prefecture_id' => 47,
                'zipcode' => '9010400',
                'name' => '島尻郡八重瀬町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            387 => 
            array (
                'id' => 1888,
                'prefecture_id' => 47,
                'zipcode' => '9060600',
                'name' => '宮古郡多良間村',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            388 => 
            array (
                'id' => 1889,
                'prefecture_id' => 47,
                'zipcode' => '9070000',
                'name' => '八重山郡竹富町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
            389 => 
            array (
                'id' => 1890,
                'prefecture_id' => 47,
                'zipcode' => '9071800',
                'name' => '八重山郡与那国町',
                'created_at' => '2024-12-21 16:17:47',
                'updated_at' => '2024-12-21 16:17:47',
            ),
        ));
        
        
    }
}