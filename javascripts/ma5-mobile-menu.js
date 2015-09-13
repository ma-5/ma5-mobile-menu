/*!
*   MA5 jquery mobile menu
*   v 1.1
*   Copyright (c) 2015 Tomasz Kalinowski
*   http://mobile-menu.ma5.pl
*   GitHub: https://github.com/ma-5/ma5-mobile-menu
*/
function ma5mobileMenu(atributes) {
    if(atributes.swipe == true) {
        $('html').addClass('ma5-menu-swipe');
        $('body').wrapInner('<div class="ma5-page" />');
        $('body').append('<div class="ma5-mobile-menu-container"><div class="ma5-close-bar"></div></div>');
        $('.ma5-menu-header .ma5-toggle-menu').clone().appendTo('.ma5-close-bar');
        $('.ma5-menu-heading').clone().appendTo('.ma5-close-bar');
    } else {
        $('body').append('<div class="ma5-mobile-menu-container"/>');
    }
    $('.ma5-menu-mobile').find('ul').clone().addClass('ma5-menu-panel').appendTo('.ma5-mobile-menu-container').find('ul').remove();
    $('.ma5-toggle-menu').on('click touch', function () { $('html').toggleClass('ma5-menu-active')});
    $('.ma5-btn-enter').on('click touch', function () {
        $('.ma5-menu-panel').removeClass('ma5-active-ul');
        $('.ma5-menu-panel li').removeClass('ma5-active-li');
        var itemPath = $(this).parent().attr('class').replace("li", "ul");
        var itemParent = $(this).parent().attr('class').replace("li", "ul").split('-');
        var spliced = itemParent.splice(-1, 1);
        var itemParent = itemParent.join("-");
        $('.ma5-menu-panel').removeClass('ma5-active-leave ma5-parent-leave ma5-active-enter ma5-parent-enter');
        $('.ma5-menu-panel.' + itemParent).addClass('ma5-parent-enter');
        $('.ma5-menu-panel.' + itemPath).addClass('ma5-active-enter ma5-active-ul');
    });
    $('.ma5-leave-bar').on('click touch', function () {
        $('.ma5-menu-panel').removeClass('ma5-active-ul');
        var itemParent = $(this).parent().attr('class').replace("li", "ul").split('-');
        var splicedParent = itemParent.splice(-1, 1);
        var splicedParent = itemParent.splice(-1, 1);
        var itemParent = itemParent.join("-");
        var itemPath = $(this).parent().attr('class').replace("li", "ul").split('-');
        var spliced = itemPath.splice(-1, 1);
        var itemPath = itemPath.join("-");
        $('.ma5-menu-panel').removeClass('ma5-active-leave ma5-parent-leave ma5-active-enter ma5-parent-enter');
        $('.ma5-menu-panel.' + itemParent).addClass('ma5-parent-leave ma5-active-ul');
        $('.ma5-menu-panel.' + itemPath).addClass('ma5-active-leave');
    });
}
