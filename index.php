<!DOCTYPE html>
<html lang='pl'>
    <head>
        <title>MA5 mobile menu - Example 1 - Default animation</title>
        <meta name="description" content="Simple and ultralight jQuery mobile menu with panels">
        <meta name="keywords" content="ma5-mobile-menu, mobile menu query, ultralight mobile menu, simple mobile menu">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, user-scalable=no">
        <script src="./javascripts/jquery-2.1.1.min.js"></script>
        <script src="./javascripts/ma5-mobile-menu.js"></script>
        <link href="./stylesheets/reset.css" rel="stylesheet" type="text/css">
        <link href="./stylesheets/ma5-mobile-menu.css" rel="stylesheet" type="text/css">
        <link href="./stylesheets/site.css" rel="stylesheet" type="text/css">
        <script>
            $(document).ready(function(){
                ma5mobileMenu({
                    swipe: false
                });
            });
        </script>
    </head>
    <body>
        <article>
            <header class="site-header ma5-menu-header">
                <h1 class="ma5-menu-heading">MA5 mobile menu</h1>
                <p class="hidden-xs">Simple and ultralight jQuery mobile menu with panels.</p>
                <span class="ma5-toggle-menu">
                    <span class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    Toggle menu
                </span>
            </header>
            <nav class="ma5-menu-mobile">
                <ul class="ma5-ul">
                    <li class="ma5-li-1"><a href="#node1">Node 1</a></li>
                    <li class="ma5-li-2">
                        <!-- When list item has submenu the link should have .ma5-has-submenu class -->
                        <a class="ma5-has-submenu" href="#node2">Node 2</a><span class="ma5-btn-enter"></span>
                        <!-- active panel -->
                        <ul class="ma5-ul-2">
                            <li class="ma5-li-2-1">
                                <div class="ma5-leave-bar"><span class="ma5-btn-leave"></span>Node 2</div>
                                <a href="#node2-1">Node 2-1</a>
                            </li>
                            <li class="ma5-li-2-2"><a href="#node2-2">Node 2-2</a></li>
                            <li class="ma5-li-2-3">
                                <a class="ma5-has-submenu" href="#node2-3">Node 2-2</a><span class="ma5-btn-enter"></span>
                                <ul class="ma5-ul-2-3">
                                    <li class="ma5-li-2-3-1">
                                        <div class="ma5-leave-bar"><span class="ma5-btn-leave"></span>Node 2-2</div>
                                        <a href="#node2-3-1">Node 2-3-1</a>
                                    </li>
                                    <li class="ma5-li-2-3-2"><a href="#node2-3-2">Node 2-3-2</a></li>
                                    <li class="ma5-li-2-3-3"><a href="#node2-3-3">Node 2-3-3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="ma5-li-3"><a href="#node3">Node 3</a></li>
                    <li class="ma5-li-4"><a href="#node4">Node 4</a></li>
                </ul>
            </nav>
            <section class="content">
                <h2>Example 1 - Default animation</h2>
                <p>Scale browser window to activate mobile menu.</p>
                <p><a href="index.php">Example 1 - default animation</a></p>
                <p><a href="example2.php">Example 2 - Swipe panel animation</a></p>
                <p>Documentation and sources: <a href="https://github.com/ma-5/ma5-mobile-menu" target="_blank">GitHub</a></p>
            </section>
        </article>
    </body>
</html>
