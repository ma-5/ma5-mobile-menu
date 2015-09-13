# MA5 mobile menu
Simple and ultralight jQuery menu with panels for mobile phones.
>v.1.0 Initial

###Features:
* Small
* Light
* Panels navigation
* jQuery
* Html5
* CSS3

### Example
* [See example](http://mobile-menu.ma5.pl)

### 1.Getting Started
```html
<!-- html head -->
<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, user-scalable=no">
<link href="./stylesheets/ma5-mobile-menu.css" media="screen, projection" rel="stylesheet" type="text/css">
<script src="./javascripts/jquery-2.1.1.min.js"></script>
<script src="./javascripts/ma5-mobile-menu.js"></script>
```

### 2. Call the script & option

swipe: false -> panels animation (default)
swipe:true -> panels with page swipe animation

```javascript
$(document).ready(function(){
ma5mobileMenu({
    swipe: false
});
```



### 2. Set up HTML
Example 1

```html
<!-- html body -->
<body>
    <header class="ma5-menu-header">
        <h1 class="ma5-menu-heading">MA5 mobile menu</h1>
        <span class="ma5-toggle-menu">
            <span class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </span>
            Toggle menu
        </span>
    </header>
    <!-- ma5-menu-mobile -->
    <nav class="ma5-menu-mobile">
        <ul class="ma5-ul">
            <li class="ma5-li-1"><a href="#node1">Node 1</a></li>
            <li class="ma5-li-2">
                <!-- When list item has submenu the link should have .ma5-has-children class -->
                <a class="ma5-has-children" href="#node2">Node 2</a><span class="ma5-btn-enter"></span>
                <ul class="ma5-ul-2">
                    <li class="ma5-li-2-1">
                        <!-- .ma5-leave-bar for go to back action  -->
                        <div class="ma5-leave-bar"><span class="ma5-btn-leave"></span>Node 2</div>
                        <a href="#node2-1">Node 2-1</a>
                    </li>
                    <li class="ma5-li-2-2"><a href="#node2-2">Node 2-2</a></li>
                    <li class="ma5-li-2-3">
                        <a class="ma5-has-children" href="#node2-3">Node 2-2</a><span class="ma5-btn-enter"></span>
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
    <!-- page content -->
    <h2>Simple and ultralight jQuery mobile menu with panels.</h2>
    <p>Some content</p>
</body>
```
Example 2: Active panel and path to active. Panel for Node 2-2 is visible at start. CSS use class path-to-active to color links
```html
<!-- html body -->
<body>
    <header class="ma5-menu-header">
        <h1 class="ma5-menu-heading">MA5 mobile menu</h1>
        <span class="ma5-toggle-menu">
            <span class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </span>
            Toggle menu
        </span>
    </header>
    <!-- ma5-menu-mobile -->
    <nav class="ma5-menu-mobile">
        <ul class="ma5-ul">
            <li class="ma5-li-1"><a href="#node1">Node 1</a></li>
            <li class="ma5-li-2">
                <!-- Use .ma5-path-to-active to mark path links  -->
                <a class="ma5-path-to-active ma5-has-children" href="#node2">Node 2</a><span class="ma5-btn-enter"></span>
                <!-- active panel -->
                <ul class="ma5-ul-2 ma5-active-ul">
                    <li class="ma5-li-2-1">
                        <div class="ma5-leave-bar"><span class="ma5-btn-leave"></span>Node 2</div>
                        <a href="#node2-1">Node 2-1</a>
                    </li>
                    <li class="ma5-li-2-2"><a href="#node2-2">Node 2-2</a></li>
                    <!-- active node -->
                    <li class="ma5-li-2-3 ma5-active-li">
                        <a class="ma5-path-to-active ma5-has-children" href="#node2-3">Node 2-2</a><span class="ma5-btn-enter"></span>
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
    <!-- page content -->
    <h2>Simple and ultralight jQuery mobile menu with panels.</h2>
    <p>Some content</p>
</body>
```

### 3. Schemats
Building structure menu by  css classes.
```
.ma5-ul (root)
    .ma5-li-1 (number from counter)
        .ma5-ul-1 (the number always the same like parent li)
            .ma5-li-1-1 (the numbers always the same like parent ul and add counter)
            .ma5-li-1-2 (the numbers always the same like parent ul and add counter)
                .ma5-ul-1-2 (the numbers always the same like parent li)
                    .ma5-li-1-2-1 (the numbers always the same like parent ul and add counter)
                    .ma5-li-1-2-2 (the numbers always the same like parent ul and add counter)
                        .ma5-ul-1-2-2 (the numbers always the same like parent li)
                            .ma5-li-1-2-2-1 (the numbers always the same like parent ul and add counter)
                            .ma5-li-1-2-2-2 (the numbers always the same like parent ul and add counter)
                    .ma5-li-1-2-3 (the numbers always the same like parent ul and add counter)
    .ma5-li-2 (number from counter)
        .ma5-ul-2
            .ma5-li-2-1
            .ma5-li-2-2
            .ma5-li-2-3
                .ma5-ul-2-3
                    .ma5-li-2-3-1
                    .ma5-li-2-3-2
                        .ma5-ul-2-3-2
                            .ma5-li-2-3-2-1
                            .ma5-li-2-3-2-2
                    .ma5-li-2-3-3
                    .ma5-li-2-3-4
            .ma5-li-2-4
            .ma5-li-2-5
    .ma5-li-3 (number from counter)
    .ma5-li-4 (number from counter)
    .ma5-li-5 (number from counter)
        .ma5-ul-5
            .ma5-li-3-1
            .ma5-li-3-2
            .ma5-li-3-3
```

Go to active panel and node at start:
```
.ma5-ul (root)
    .ma5-li-1 
        .ma5-ul-1 
            .ma5-li-1-1
            .ma5-li-1-2
                .ma5-ul-1-2
                    .ma5-li-1-2-1
                    .ma5-li-1-2-2
                        .ma5-ul-1-2-2.ma5-active-ul => active panel (only one for menu)
                            .ma5-li-1-2-2-1
                            .ma5-li-1-2-2-2.ma5-active-li => active node in active panel (only one for menu)
                    .ma5-li-1-2-3
    .ma5-li-2
        .ma5-ul-2
            .ma5-li-2-1
            .ma5-li-2-2
            .ma5-li-2-3
    .ma5-li-3 
```

Class for &lt;a&gt; ".ma5-path-to-active" add color to path to active link.

The panel is open when main &lt;html&gt; element contains css class ".ma5-menu-active". So for touch swipe you can add touch swipe detect function and use some code like this (it's not recomended beacause Windows Phones also uses the swipe action):

```javascript
if ( YourTouchSwipeDetectFunction == 'left' ) { $('html').removeClass('ma5-menu-active')};
if ( YourTouchSwipeDetectFunction == 'right' ) { $('html').addClass('ma5-menu-active')};
```

