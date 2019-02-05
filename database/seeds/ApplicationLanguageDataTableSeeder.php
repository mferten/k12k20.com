<?php

use Illuminate\Database\Seeder;
use App\ApplicationLanguageData;
use App\ApplicationLanguage;

class ApplicationLanguageDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # These will be only valid after the Application Text is defined and created
        # These are the final text for any defined Language: For now USA English and Turkey Turkish and Slovakia Slovak
        /*
            A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
            Vowels: a, e, ı, i, o, ö, u, ü
            Consonants: b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z

        */
        // javascript stringVariable.split("?"); ?=whatever is the character value
        // php $newArrayVariable = explode("?", $stringWithArrayValues); ?=whatever is the character value
        $dataTR = [];

        $dataSK = [];

        # Initiate a new timestamp
        $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

        // Insert Turkey-Turkish Data
        foreach($dataTR as $key => $data)
        {
            ApplicationLanguageData::insert([
                 'created_at' => $timestamp,
                 'updated_at' => $timestamp,
                 'application_language_id' => "2",
                 'application_language_id_count' => $key,
                 'this_language_feature_value' => $data,
                 'based_on_application_language_id' => "999",
            ]);
        }

        // Insert Slovakia-Slovak Data
        foreach($dataSK as $key => $data)
        {
            ApplicationLanguageData::insert([
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
                'application_language_id' => "3",
                'application_language_id_count' => $key,
                'this_language_feature_value' => $data,
                'based_on_application_language_id' => "999",
            ]);
        }

    }
}
