# MA5 mobile menu
Simple and ultralight jQuery menu with panels for mobile phones.
>v.1.0 Initial

>v.1.1 Add animation options

>v2.1.0 Changes for some CMS compatibility, transfer order css class attributes to data-ma5-order

>v2.1.1 Clear js, add bower.json

>v2.1.2 Modify toogle on action, add example


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
<link href="./css/ma5-mobile-menu.css" media="screen, projection" rel="stylesheet" type="text/css">
<script src="./js/jquery.min.js"></script>
<script src="./js/ma5-mobile-menu.js"></script>
```

### 2. Call the script & option

swipe: false -> panels animation (default)
swipe:true -> panels with page swipe animation

```javascript
$(document).ready(function(){
    ma5mobileMenu({
        swipe: false
    });
});
```



### 2. Set up HTML
Example 1

```html
<!-- html body -->
<body>
    ...
    <!-- ma5-menu-mobile -->
    <nav class="ma5-menu-mobile">
        <div class="ma5-menu-header"> 
            <a class="btn btn-primary ma5-toggle-menu">Menu<span class="glyphicon glyphicon-menu-hamburger"></span></a>
        </div>
        <!-- lvl 1 -->
        <ul data-ma5-order="ma5-ul"> 
            <li data-ma5-order="ma5-li-1"><a href="#node1">Node 1</a></li> 
            <li data-ma5-order="ma5-li-2"><a href="#node2">Node 2</a></li> 
            <li data-ma5-order="ma5-li-3"> 
                <!-- When list item has submenu the link should have .ma5-has-submenu class -->
                <a class="ma5-path-to-active ma5-has-submenu" href="#node3">Node 3</a>
                
                <!-- .ma5-btn-enter for go to inside  -->
                <span class="ma5-btn-enter"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></span>
                
                <!-- lvl 2 -->
                <ul data-ma5-order="ma5-ul-3"> 
                    <li data-ma5-order="ma5-li-3-1">
                        <!-- .ma5-leave-bar for go to back action  -->
                        <div class="ma5-leave-bar"><span class="ma5-btn-leave"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></span>Back to Node 3</div>
                        <a href="#node3-1">Node 3-1</a>
                    </li> 
                    <li data-ma5-order="ma5-li-3-2"><a href="#node3-2">Node 3-2</a></li> 
                    <li data-ma5-order="ma5-li-3-3">
                        <a class="ma5-path-to-active ma5-has-submenu" href="#node3-3">Node 3-3</a>
                        
                        <span class="ma5-btn-enter"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></span>

                        <!-- lvl 3 -->
                        <!-- .ma5-active-ul => active panel (only one for menu) -->
                        <ul class="ma5-active-ul" data-ma5-order="ma5-ul-3-3"> 
                            <li data-ma5-order="ma5-li-3-3-1">
                                <div class="ma5-leave-bar"><span class="ma5-btn-leave"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></span>Back to Node 3-3</div>
                                <a href="#node3-3-1">Node 3-3-1</a>
                            </li> 
                            <li data-ma5-order="ma5-li-3-3-2"><a href="#node3-3-2">Node 3-3-2</a></li>
                            
                            <!-- .ma5-active-li => active node in active panel (only one for menu) -->
                            <!-- .ma5-path-to-active for color active link  -->
                            <li class="ma5-active-li" data-ma5-order="ma5-li-3-3-3"><a class="ma5-path-to-active" href="#node3-3-3">Node 3-3-3</a></li>
                        </ul>

                    </li> 
                    <li data-ma5-order="ma5-li-3-4"><a href="#node3-4">Node 3-4</a></li> 
                    <li data-ma5-order="ma5-li-3-5"><a href="#node3-5">Node 3-5</a></li>
                </ul> 

            </li> 
            <li data-ma5-order="ma5-li-4"><a href="#node4">Node 4</a></li> 
            <li data-ma5-order="ma5-li-5"><a href="#node5">Node 5</a></li> 
            <li data-ma5-order="ma5-li-6"><a href="#node6">Node 6</a></li> 
            <li data-ma5-order="ma5-li-7"><a href="#node7">Node 7</a></li> 
            <li data-ma5-order="ma5-li-8"><a href="#node8">Node 8</a></li>
        </ul>
    </nav>
    ...
</body>   
```


### 3. Schemats
Building structure menu by 'data-ma5-order' attributes.
```
ma5-ul (root)
    ma5-li-1 (number from counter)
        ma5-ul-1 (the number always the same like parent li)
            ma5-li-1-1 (the numbers always the same like parent ul and add counter)
            ma5-li-1-2 (the numbers always the same like parent ul and add counter)
                ma5-ul-1-2 (the numbers always the same like parent li)
                    ma5-li-1-2-1 (the numbers always the same like parent ul and add counter)
                    ma5-li-1-2-2 (the numbers always the same like parent ul and add counter)
                        ma5-ul-1-2-2 (the numbers always the same like parent li)
                            ma5-li-1-2-2-1 (the numbers always the same like parent ul and add counter)
                            ma5-li-1-2-2-2 (the numbers always the same like parent ul and add counter)
                    ma5-li-1-2-3 (the numbers always the same like parent ul and add counter)
    ma5-li-2 (number from counter)
        ma5-ul-2
            ma5-li-2-1
            ma5-li-2-2
            ma5-li-2-3
                ma5-ul-2-3
                    ma5-li-2-3-1
                    ma5-li-2-3-2
                        ma5-ul-2-3-2
                            ma5-li-2-3-2-1
                            ma5-li-2-3-2-2
                    ma5-li-2-3-3
                    ma5-li-2-3-4
            ma5-li-2-4
            ma5-li-2-5
    ma5-li-3 (number from counter)
    ma5-li-4 (number from counter)
    ma5-li-5 (number from counter)
        ma5-ul-5
            ma5-li-3-1
            ma5-li-3-2
            ma5-li-3-3
```

Go to active panel and node at start by css class:
```
ma5-ul (root)
    ma5-li-1 
        ma5-ul-1 
            ma5-li-1-1
            ma5-li-1-2
                ma5-ul-1-2
                    ma5-li-1-2-1
                    ma5-li-1-2-2
                        ma5-ul-1-2-2.ma5-active-ul => active panel (only one for menu)
                            ma5-li-1-2-2-1
                            ma5-li-1-2-2-2.ma5-active-li => active node in active panel (only one for menu)
                    ma5-li-1-2-3
    ma5-li-2
        ma5-ul-2
            ma5-li-2-1
            ma5-li-2-2
            ma5-li-2-3
    ma5-li-3 
```

Class for &lt;a&gt; ".ma5-path-to-active" add color to path to active link.

The panel is open when main &lt;html&gt; element contains css class ".ma5-menu-active". So for touch swipe you can add touch swipe detect function and use some code like this (it's not recomended beacause Windows Phones also uses the swipe action):

```javascript
if ( YourTouchSwipeDetectFunction == 'left' ) { $('html').removeClass('ma5-menu-active')};
if ( YourTouchSwipeDetectFunction == 'right' ) { $('html').addClass('ma5-menu-active')};
```

