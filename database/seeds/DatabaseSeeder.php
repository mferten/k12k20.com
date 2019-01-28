<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LanguagesTableSeeder::class);
        $this->call(CountriesTableSeeder::class);
        $this->call(ApplicationLanguagesTableSeeder::class);
        $this->call(ApplicationI18ntagsTableSeeder::class);
        $this->call(ApplicationLanguageTextsTableSeeder::class);
        $this->call(FeaturesTableSeeder::class);
    }
}
