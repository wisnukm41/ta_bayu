@extends('peternak.layouts.app', ['activeMenu' => 'sapi'])

@section('hstyles')

@endsection

@section('content')
<div class="pcoded-content">
    <!-- PAGE HEADER -->
    <div class="page-header">
        <div class="page-block">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <div class="page-header-title">
                        <h5 class="m-b-10">Data Sapi</h5>
                        <p class="m-b-0">Data Sapi dan prediksi kesehatan sapi</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#"><i class="fas fa-home"></i></a>
                        </li>
                        <li class="breadcrumb-item"><a href="#">Sapi</a></li>
                        <li class="breadcrumb-item"><a href="#">Prediksi</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- PAGE INNER CONTENT -->
    <div class="pcoded-inner-content">
        <div class="main-body">
            <div class="page-wrapper">
                <div class="page-body">
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="card">
                        <div class="card-header">
                          <h5>Data Kesehatan dan Prediksi Sapi #{{$sapi->id}}</h5>
                          <div class="card-header-right">
                              <ul class="list-unstyled card-option">
                                  <li><i class="fa fa fa-wrench open-card-option"></i>
                                  </li>
                                  <li><i class="fa fa-window-maximize full-card"></i></li>
                                  <li><i class="fa fa-minus minimize-card"></i></li>
                                  <li><i class="fa fa-refresh reload-card"></i></li>
                                  <li><i class="fa fa-trash close-card"></i></li>
                              </ul>
                          </div>
                      </div>
                      <div class="card-block">
                          <div class="row mb-3">
                            <div class="col-xl-12">
                                <a href="{{ route('sapi.index') }}" class="btn btn-sm btn-warning">kembali</a>
                            </div>
                            <div class="row mt-2">
                              <div class="col-xl-12">
                                <div class="dt_responsive table-responsive">
                                  <table class="table">
                                    <tr>
                                      <td>ID Sapi</td>
                                      <td>Sapi {{$sapi->id}}</td>
                                    </tr>
                                    <tr>
                                      <td>Tanggal Lahir</td>
                                      <td>{{$sapi->tanggal_lahir}}</td>
                                    </tr>
                                    <tr>
                                      <td>Jenis Kelamin</td>
                                      <td>{{$sapi->jenis_kelamin}}</td>
                                    </tr>
                                    <tr>
                                      <td>Berat Badan Terakhir</td>
                                      <td>{{$aktivitas->berat_badan}} kg</td>
                                    </tr>
                                    <tr>
                                      <td>Hasil Prediksi</td>
                                      <td>
                                        @if($prediksi == 0)
                                        <span class="badge badge-success">Sehat</span>
                                        @elseif($prediksi == 1)
                                        <span class="badge badge-warning">Kurang Sehat</span>
                                        @elseif($prediksi == 2)
                                        <span class="badge badge-danger">Sakit</span>
                                        @elseif($prediksi == 3)
                                        <span class="badge badge-dark">Berbahaya</span>
                                        @endif
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>

                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('fscripts')

@endsection
