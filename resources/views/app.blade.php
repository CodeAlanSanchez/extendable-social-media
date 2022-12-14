<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Inter:wght@400;500;600;700&display=swap">

    @routes
    @viteReactRefresh
    @vite('resources/ts/app.tsx')
    @inertiaHead
</head>

<body class="font-sans subpixel-antialiased bg-slate-100 box-border">
    @inertia
</body>

</html>
