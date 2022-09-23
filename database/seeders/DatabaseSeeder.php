<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            "name" => "admin",
            "email" => "admin@admin.com",
            "password" => "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            "remember_token" => Str::random(10),
        ]);

        $user->profile()->create([
            'profile_picture_url' => 'images/default_profile_picture.png',
            'banner_picture_url' => 'images/default_banner_picture.png',
            'username' => 'admin',
            'biography' => 'admin',
            'website' => 'https://www.alansanchez.dev'
        ]);

        \App\Models\Post::factory(10)->create();
    }
}
