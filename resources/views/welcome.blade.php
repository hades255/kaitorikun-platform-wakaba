<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <?= header('Cache-Control: max-age=86400') ?>
    <meta charset="utf-8">
    <link rel="icon" href="/assets/sp_logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="base_url" content="{{ url('') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- <meta http-equiv="Cache-control" content="public"> --}}
    <link href={{ mix('css/app.css') }} rel="stylesheet">
    <title>業務システム買取くん</title>
</head>

<body id="body" class="sidebar-mini" style="overflow: hidden;">
    <div id="root" class="sidebar-mini wrapper"></div>
</body>
<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>

</html>
