/*
*   MA5 jquery mobile menu
*   v3.0.0
*   GitHub: https://github.com/ma-5/ma5-mobile-menu
*/
function ma5menu(atributes) {
    if(atributes.swipe === true) {
        $('html').addClass('ma5menu--swipe');
        //$('body').wrapInner('<div class="ma5menu__page" />');
    }
    var position = 'left';
    if(atributes.position == 'right') {
        position = atributes.position;
    }
    $('html').addClass('ma5menu--' + position);
    $('body').append('<div class="ma5menu__container"><div class="ma5menu__head"></div><div class="ma5menu__alert"><div class="ma5menu__alert-content"><span class="ma5menu__icon-up" aria-hidden="true"></span><span class="ma5menu__icon-up" aria-hidden="true"></span><span class="ma5menu__icon-up" aria-hidden="true"></span></div></div></div>');
    $('.ma5menu__header').clone().appendTo('.ma5menu__head');
    $('.ma5menu').find('ul').clone().addClass('ma5menu__panel').appendTo('.ma5menu__container').find('ul').remove();
    $('.ma5menu__panel').each(function() {
        $(this).wrap('<div></div>');
        $(this).parent().addClass($(this).attr('class')).attr('data-ma5order', $(this).attr('data-ma5order') );
        $(this).removeAttr('class').removeAttr('data-ma5order');
    });
    $('.ma5menu__panel').append('<div class="ma5menu__footer"></div>');
    $('.ma5menu__tools').appendTo('.ma5menu__footer').addClass('js-append');
    $('.ma5menu__toggle').on('click touch', function () {
        $('html').addClass('ma5menu--ready').toggleClass('ma5menu--active').addClass('ma5menu--overflow');
        $('.ma5menu__panel').removeClass('ma5menu__panel--active-leave ma5menu__panel--parent-leave ma5menu__panel--active-enter ma5menu__panel--parent-enter');
        setTimeout(function() { ma5menuCheckScroll() }, 500);
    });
    $('.ma5menu__btn--enter').on('click touch', function () {
        $('.ma5menu__panel').removeClass('ma5menu__panel--active');
        $('.ma5menu__panel li').removeClass('ma5menu__li--current');
        var itemPath = $(this).parent().attr('data-ma5order').replace("li", "ul");
        var itemParent = $(this).parent().attr('data-ma5order').replace("li", "ul").split('-');
        var spliced = itemParent.splice(-1, 1);
        itemParent = itemParent.join("-");
        $('.ma5menu__panel').removeClass('ma5menu__panel--active-leave ma5menu__panel--parent-leave ma5menu__panel--active-enter ma5menu__panel--parent-enter');
        $('[data-ma5order="' + itemParent + '"]').addClass('ma5menu__panel--parent-enter');
        $('[data-ma5order="' + itemPath + '"]').addClass('ma5menu__panel--active-enter ma5menu__panel--active');
        setTimeout(function() { ma5menuCheckScroll() }, 500);
    });
    $('.ma5menu__leave').on('click touch', function () {
        $('.ma5menu__panel').removeClass('ma5menu__panel--active');
        var itemParent = $(this).parent().attr('data-ma5order').replace("li", "ul").split('-');
        var splicedParent = itemParent.splice(-1, 1);
        splicedParent = itemParent.splice(-1, 1);
        itemParent = itemParent.join("-");
        var itemPath = $(this).parent().attr('data-ma5order').replace("li", "ul").split('-');
        var spliced = itemPath.splice(-1, 1);
        itemPath = itemPath.join("-");
        $('.ma5menu__panel').removeClass('ma5menu__panel--active-leave ma5menu__panel--parent-leave ma5menu__panel--active-enter ma5menu__panel--parent-enter');
        $('[data-ma5order="' + itemParent + '"]').addClass('ma5menu__panel--parent-leave ma5menu__panel--active');
        $('[data-ma5order="' + itemPath + '"]').addClass('ma5menu__panel--active-leave');
        setTimeout(function() { ma5menuCheckScroll() }, 500);
    });
    var didResize = false;
    $(window).on('resize', function () {
        didResize = true;
    });
    setInterval(function () {
        if (didResize) {
            didResize = false;
            ma5menuCheckScroll();
        }
    }, 300);
}
// scroll menu content alert
function ma5menuCheckScroll() {
    $('html').removeClass('ma5menu--overflow');
    $('.ma5menu__container').removeClass('ma5menu__container--scroll');
    if($('.ma5menu__panel.ma5menu__panel--active').detectElementScrollbar()) {
        $('.ma5menu__container').addClass('ma5menu__container--scroll');
        $('.ma5menu__panel.ma5menu__panel--active').bind('scroll', function() {
            if(( $(this).scrollTop() + $(this).innerHeight() + 1 ) >=$(this)[0].scrollHeight) {
                $('.ma5menu__container').removeClass('ma5menu__container--scroll');
            } else {
                $('.ma5menu__container').addClass('ma5menu__container--scroll');
            }
        });
    } else {
        $('.ma5menu__panel.ma5menu__panel--active').unbind( "scroll" );
    }
}
// detect IE
var htmlRootForDetectBrowser = document.getElementsByTagName( 'html' )[0];
function isIE() {
    return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null)));
}
if (isIE()) {
    htmlRootForDetectBrowser.className += " ie";
} else {
    htmlRootForDetectBrowser.className += " noie";
}
// detect scrollbar
function detectElementScrollbar() {
    if ($('body').outerHeight() > $(window).height()) {
        $('html').addClass('has-body-scrollbar');
    } else {
        $('html').addClass('hasnt-body-scrollbar');
    }
    $('[data-detect-scrollbar]').each(function() {
        if($(this).get(0).scrollHeight > $(this).get(0).clientHeight) {
            $(this).addClass('has-scrollbar').removeClass('hasnt-scrollbar');
        } else {
            $(this).addClass('hasnt-scrollbar').removeClass('has-scrollbar');
        }
    });
}
$.fn.detectElementScrollbar = function () {
    if($(this).get(0).scrollHeight > $(this).get(0).clientHeight) {
        $(this).addClass('has-scrollbar').removeClass('hasnt-scrollbar');
        return true;
    } else {
        $(this).addClass('hasnt-scrollbar').removeClass('has-scrollbar');
        return false;
    }
};
$(document).ready(function () {
    detectElementScrollbar();
    $('html').on('click touch', function (e) {
        if (!$('.ma5menu__container').is(e.target) && $('.ma5menu__container').has(e.target).length === 0 && !$('.ma5menu__toggle').is(e.target) && $('.ma5menu__toggle').has(e.target).length === 0) {
            $('html').removeClass('ma5menu--active');
        }
    });
});

$(window).on('resize', function () {
    detectElementScrollbar();
});
$(window).on('load', function () {
    detectElementScrollbar();
});





