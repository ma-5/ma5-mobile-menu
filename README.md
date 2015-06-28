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



### 2. Set up HTML
Body content shoud be placed in .ma5-page element

```html
<!-- html body -->
<body>
    <!-- wrap body content -->
    <div class="ma5-page">
        <!-- body content -->
    </div>
</body>
```


### 3. HTML for menu

```html
<!-- menu html can be placed ewerywhere you want -->
<nav class="ma5-menu-mobile">
    <ul class="ma5-ul">
        <li class="ma5-li-1"><a href="#node1">Node 1</a></li>
        <li class="ma5-li-2">
            <a class="ma5-path-to-active" href="#node2">Node 2</a><span class="ma5-btn-enter">&gt;</span>
            <ul class="ma5-ul-2">
                <li class="ma5-li-2-1">
                    <div class="ma5-leave-bar"><span class="ma5-btn-leave">&lt;</span>Node 2</div>
                    <a href="#node2-1">Node 2-1</a>
                </li>
                <li class="ma5-li-2-2"><a href="#node2-2">Node 2-2</a></li>
                <li class="ma5-li-2-3">
                    <a class="ma5-path-to-active" href="#node2-3">Node 2-2</a><span class="ma5-btn-enter">&gt;</span>
                    <!-- active panel -->
                    <ul class="ma5-ul-2-3 ma5-active-ul">
                        <li class="ma5-li-2-3-1">
                            <div class="ma5-leave-bar"><span class="ma5-btn-leave">&lt;</span>Node 2-2</div>
                            <a href="#node2-3-1">Node 2-3-1</a>
                        </li>
                        <!-- active node -->
                        <li class="ma5-li-2-3-2 ma5-active-li"><a class="ma5-path-to-active" href="#node2-3-2">Node 2-3-2</a></li>
                        <li class="ma5-li-2-3-3"><a href="#node2-3-3">Node 2-3-3</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="ma5-li-3"><a href="#node3">Node 3</a></li>
        <li class="ma5-li-4"><a href="#node4">Node 4</a></li>
        <li class="ma5-li-5">
            <a href="#node5">Node 5</a><span class="ma5-btn-enter">&gt;</span>
            <ul class="ma5-ul-5">
                <li class="ma5-li-5-1">
                    <div class="ma5-leave-bar"><span class="ma5-btn-leave">&lt;</span>Node 5</div>
                    <a href="#node5-1">Node 5-1</a>
                </li>
                <li class="ma5-li-5-2"><a href="#node5-2">Node 5-2</a></li>
                <li class="ma5-li-5-3">
                    <a href="#node5-3">Node 5-3</a><span class="ma5-btn-enter">&gt;</span>
                    <ul class="ma5-ul-5-3">
                        <li class="ma5-li-5-3-1">
                            <div class="ma5-leave-bar"><span class="ma5-btn-leave">&lt;</span>Node 5-3</div>
                            <a href="#node5-3-1">Node 5-3-1</a>
                        </li>
                        <li class="ma5-li-5-3-2"><a href="#node5-3-2">Node 5-3-2</a></li>
                        <li class="ma5-li-5-3-3"><a href="#node5-3-3">Node 5-3-3</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="ma5-li-6"><a href="#node6">Node 6</a></li>
    </ul>
</nav>
```

### 4. Schemats
Classes are building structure menu.
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

Active panel and node:
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

The panel is open when main &lt;html&gt; element contains css class ".ma5-menu-active". So for touch swipe you can add swipe detect function and use some code like this:

```javascript
if ( YourSwipeDetectFunction == 'left' ) { $('html').removeClass('ma5-menu-active')};
if ( YourSwipeDetectFunction == 'right' ) { $('html').addClass('ma5-menu-active')};
```
