import $ from "jquery";

$(function () {
    const openService = $('.open-service'),
        openNav = $('.open-nav'),
        nav = $('.header__c-list '),
        descService = $('.header__c-service-desk'),
        mobileService = $('.header__c-service-mobile'),
        header = $('.header')

    openService.on('click', (e) => {
        if (!e.currentTarget.classList.contains('_opened')) {
            if (window.innerWidth > 768) {
                descService.fadeIn().addClass('_opened')
                e.currentTarget.classList.add('_opened')
                header.addClass('_opened')
            } else {

                mobileService.fadeIn().addClass('_opened')
            }
        } else {
            descService.fadeOut().removeClass('_opened')
            e.currentTarget.classList.remove('_opened')
            header.removeClass('_opened')
            mobileService.fadeOut().removeClass('_opened')
        }

    })
    openNav.on('click', (e) => {
        if (!e.currentTarget.classList.contains('_opened')) {
            if (window.innerWidth < 768) {
                nav.fadeIn().addClass('_opened')
                e.currentTarget.classList.toggle('_opened')

            } else {
                mobileService.fadeOut().removeClass('_opened')
            }
        } else {
            nav.fadeOut().removeClass('_opened')
            e.currentTarget.classList.remove('_opened')
            mobileService.fadeOut().removeClass('_opened')
        }
    })

});