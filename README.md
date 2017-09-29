# MA5 mobile menu
Simple and ultralight jQuery menu with panels for mobile phones.
>v.1.0 Initial

>v.1.1 Add animation options

>v2.1.0 Changes for some CMS compatibility, transfer order css class attributes to data-ma5-order

>v2.1.1 Clear js, add bower.json

>v2.1.2 Modify toogle on action, add example

>v3.0.0 Rewrite code for BEM standard, panel position options left and right, menu footer and more changes

>v3.0.1 Example, smal changes CSS

>v3.0.2 Add category, option `closeOnBodyClick` and close by `ESC` key. From now is possible enter to next panel menu by `category` or `enter button`

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
<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- jQuery -->
        <script src="./js/jquery.js"></script>

        <!-- ma5menu -->
        <link href="./css/ma5menu.min.css" rel="stylesheet" type="text/css">
        <script src="./js/ma5menu.min.js"></script>

        <!-- Call the script -->
        <script>
            $(document).ready(function () {
                ma5menu({
                    position: 'left',
                    closeOnBodyClick: true
                });
            });
        </script>
    </head>
    <body>
        <nav class="ma5menu" itemscope itemtype="http://schema.org/SiteNavigationElement">
            <div class="ma5menu__header">
                <a class="ma5menu__home" href="index.html" tabindex="-1">
                    <svg class="ma5menu__logo" aria-hidden="true" width="24" height="24"><use xlink:href="images/svg/material.svg#terrain"></use></svg>
                </a>
                <a class="ma5menu__toggle" tabindex="-1">
                    <svg class="ma5menu__close" aria-hidden="true" width="24" height="24"><use xlink:href="images/svg/material.svg#clear"></use></svg>
                </a>
            </div>
            <!-- 'ma5menu__panel--active' - unordered-list which has active list-item and is closest to him in menu tree (only one for menu) -->
            <!-- At Home page active link set as first in menu tree -->
            <ul class="lvl-0 ma5menu__panel--active" data-ma5order="ma5-ul">
                <!-- 'ma5menu__li--current' - current list-item wchich is closest to active link in menu tree (only one for menu) -->
                <li class="ma5menu__li--current" data-ma5order="ma5-li-1">
                    <!-- Use class 'ma5menu__path' when you need colored link or category, for example to active link or path links -->
                    <span class="ma5menu__btn--enter ma5menu__category  ma5menu__path">About us</span>
                    <ul class="lvl-1" data-ma5order="ma5-ul-1">
                        <li data-ma5order="ma5-li-1-1">
                            <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>About Us</div>
                            <span class="ma5menu__btn--enter ma5menu__category ">Years</span>
                            <ul class="lvl-2" data-ma5order="ma5-ul-1-1">
                                <li data-ma5order="ma5-li-1-1-1">
                                    <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Years</div>
                                    <a href="index-page.html">Year 1990</a>
                                </li>
                                <li data-ma5order="ma5-li-1-1-2"><a href="index-page.html">Year 2000</a></li>
                                <li data-ma5order="ma5-li-1-1-3"><a href="index-page.html">Year 2005</a></li>
                            </ul>
                        </li>
                        <li data-ma5order="ma5-li-1-2">
                            <span class="ma5menu__btn--enter ma5menu__category">Places</span>
                            <ul class="lvl-2" data-ma5order="ma5-ul-1-2">
                                <li data-ma5order="ma5-li-1-2-1">
                                    <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Places</div>
                                    <a href="index-page.html">Paris</a>
                                </li>
                                <li data-ma5order="ma5-li-1-2-2"><a href="index-page.html">Barcelona</a></li>
                                <li data-ma5order="ma5-li-1-2-3"><a href="index-page.html">Pekin</a></li>
                            </ul>
                        </li>
                        <li data-ma5order="ma5-li-1-3"><a href="index-page.html">Branches</a></li>
                        <li data-ma5order="ma5-li-1-4"><a href="index-page.html">Programs</a></li>
                    </ul>
                </li>
                <li data-ma5order="ma5-li-2">
                    <span class="ma5menu__btn--enter ma5menu__category">Offer</span>
                    <ul class="lvl-1" data-ma5order="ma5-ul-2">
                        <li data-ma5order="ma5-li-2-1">
                            <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Offers</div>
                            <span class="ma5menu__btn--enter ma5menu__category">Categories</span>
                            <ul class="lvl-2" data-ma5order="ma5-ul-2-1">
                                <li data-ma5order="ma5-li-2-1-1">
                                    <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Categories</div>
                                    <a href="index-page.html">Electronic</a>
                                </li>
                                <li data-ma5order="ma5-li-2-1-2"><a href="index-page.html">Houses</a></li>
                                <li data-ma5order="ma5-li-2-1-3"><a href="index-page.html">Art</a></li>
                            </ul>
                        </li>
                        <li data-ma5order="ma5-li-2-2"><a href="index-page.html">Technologies</a></li>
                    </ul>
                </li>
                <li data-ma5order="ma5-li-3"><a href="index-page.html">Gallery</a></li>
                <li data-ma5order="ma5-li-4">
                    <span class="ma5menu__btn--enter"></span>
                    <a href="index-page.html">Animals (link & button)</a>
                    <ul class="lvl-1" data-ma5order="ma5-ul-4">
                        <li data-ma5order="ma5-li-4-1">
                            <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Animals</div>
                            <a href="index-page.html">Fishes</a>
                        </li>
                        <li data-ma5order="ma5-li-4-2"><a href="index-page.html">Cats</a></li>
                        <li data-ma5order="ma5-li-4-3">
                            <span class="ma5menu__btn--enter ma5menu__category">Birds</span>
                            <ul class="lvl-2" data-ma5order="ma5-ul-4-3">
                                <li data-ma5order="ma5-li-4-3-1">
                                    <div class="ma5menu__leave"><span class="ma5menu__btn--leave"></span>Birds</div>
                                    <a href="index-page.html">Parrot</a>
                                </li>
                                <li data-ma5order="ma5-li-4-3-2"><a href="index-page.html">Duck</a></li>
                                <li data-ma5order="ma5-li-4-3-3"><a href="index-page.html">Owl</a></li>
                            </ul>
                        </li>
                        <li data-ma5order="ma5-li-4-4"><a href="index-page.html">Horses</a></li>
                        <li data-ma5order="ma5-li-4-5"><a href="index-page.html">Snakes</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="ma5menu__tools">
            footer <a href="index-page.html">content</a> here
        </div>
    </body>
</html>
```


