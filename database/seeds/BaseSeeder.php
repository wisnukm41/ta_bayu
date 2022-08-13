<?php

use Illuminate\Database\Seeder;
use App\Models\Sapi;
use App\Models\Aktivitas;
use App\Models\Peternakan;

class BaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Sapi::create([
            'id_tempat' => 1,
            'tanggal_lahir' => '2022-08-12',
            'jenis_sapi' => 'Brangus',
            'tipe_sapi' => 'Potong',
            'jenis_kelamin' => 'laki-laki'
        ]);

        Aktivitas::create([
            'id_sapi' => 1,
            'latitude' => '-6.91486',
            'longitude' => '107.608238',
            'berat_badan' => '500',
            'suhu' => '38.00',
            'detak_jantung' => '60.00',
            'waktu' => '2022-08-01 12:47:15'
        ]);

        Peternakan::create([
            'nama_peternakan' => 'Semoga Sapi Sehat Semua',
            'username' => 'indra123',
            'password' => 'indra123',
            'jenis_peternakan' => 'perorang',
            'nama_lengkap' => 'Indra Budiawan',
            'no_telepon' => '084123123123',
            'email' => 'indrabudiawan69@gmail.com',
            'alamat_lengkap' => 'Jl. Khusus Peternak RT 06 RW 09 no 69',
            'latitude' => '-6.91482',
            'longitude' => '107.608231',
            'area' => '2000',
            'avatar' => 'image.jpg'
        ]);
    }
}
