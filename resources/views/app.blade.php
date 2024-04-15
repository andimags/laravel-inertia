{{-- https://medium.com/@demian.kostelny/laravel-inertia-js-react-simple-crud-example-2e0d167365d --}}

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        @viteReactRefresh 
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        <!-- In this article, we are going to use JSX syntax for React components -->
        @inertiaHead
    </head>
    <body class="bg-gray-900">
        @inertia
    </body>
</html>