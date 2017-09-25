# MA5 mobile menu
Simple and ultralight jQuery menu with panels for mobile phones.
>v.1.0 Initial

>v.1.1 Add animation options

>v2.1.0 Changes for some CMS compatibility, transfer order css class attributes to data-ma5-order

>v2.1.1 Clear js, add bower.json

>v2.1.2 Modify toogle on action, add example

>v3.0.0 Rewrite code for BEM standard, panel position options left and right, menu footer and more changes

>v3.0.1 Example, CSS changes

###Features:
* Small
* Light
* Panels navigation
* jQuery
* Html5
* CSS3 
* BEM

### Example
* [See example](http://mobile-menu.ma5.pl)

### Getting Started
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="./css/ma5-menu.min.css" rel="stylesheet" type="text/css">
    <script src="./js/jquery.js"></script>
    <script src="./js/ma5-menu.min.js"></script>
    <script>
        $(document).ready(function () {
            ma5menu({
                position: 'left'
            });
        });
    </script>
</head>
<body>
    <button class="ma5menu__toggle" type="button">Menu</button>

    <nav class="ma5menu">
        <div class="ma5menu__header">
            <a class="ma5menu__home" href="#">
                <svg class="ma5menu__logo" aria-hidden="true" width="24" height="24"><use xlink:href="images/svg/material.svg#terrain"></use></svg>
            </a>
            <a class="ma5menu__toggle">
                <svg class="ma5menu__close" aria-hidden="true" width="24" height="24"><use xlink:href="images/svg/material.svg#clear"></use></svg>
            </a>
        </div>
        <!-- ma5menu__panel--active (unordered-list which has active list-item and is closest to him, only one for menu) -->
        <ul class="lvl-0 ma5menu__panel--active" data-ma5order="ma5-ul">
            <!-- ma5menu__li--current (current list-item, only one for menu) -->
            <li class="ma5menu__li--current" data-ma5order="ma5-li-1">
                <span class="ma5menu__btn--enter"></span>
                <!-- ma5menu__path for color link -->
                <a class="ma5menu__path" href="#">About us</a>
                <ul class="lvl-1" data-ma5order="ma5-ul-1">
                    <li data-ma5order="ma5-li-1-1">
                        <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>About Us</div>
                        <span class="ma5menu__btn--enter"></span>
                        <a href="#">Years</a>
                        <ul class="lvl-2" data-ma5order="ma5-ul-1-1">
                            <li data-ma5order="ma5-li-1-1-1">
                                <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Years</div>
                                <a href="#">Year 1990</a>
                            </li>
                            <li data-ma5order="ma5-li-1-1-2"><a href="#">Year 2000</a></li>
                            <li data-ma5order="ma5-li-1-1-3"><a href="#">Year 2005</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li data-ma5order="ma5-li-2"><a href="#">Offer</a></li>
            <li data-ma5order="ma5-li-3"><a href="#">Gallery</a></li>
        </ul>
    </nav>
    <div class="ma5menu__tools">
        footer <a href="#">content</a> here
    </div>
    ...
</body>   
```

### Options
```js
{
    position: 'right'   // menu sticked to right
    position: 'left'    // menu sticked to left
}
```

