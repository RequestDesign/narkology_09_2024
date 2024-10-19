import $ from "jquery";

$(function () {
    const openService = $('.open-service'),
        openNav = $('.open-nav'),
        nav = $('.header__c-list '),
        descService = $('.header__c-service-desk'),
        mobileService = $('.header__c-service-mobile'),
        header = $('.header'),
        html = $('html'),
        mobileCategory = $('.header__c-service-desk-left-list-e'),
        categoryList = $('.header__c-service-desk-right-data')

    openService.on('click', (e) => {
        if (!e.currentTarget.classList.contains('_opened')) {
            html.addClass('lock')
            if (window.innerWidth > 768) {
                descService.fadeIn().addClass('_opened')
                e.currentTarget.classList.add('_opened')
                header.addClass('_opened')
            } else {

                mobileService.fadeIn().addClass('_opened')
            }
        } else {
            html.removeClass('lock')
            descService.fadeOut().removeClass('_opened')
            e.currentTarget.classList.remove('_opened')
            header.removeClass('_opened')
            mobileService.fadeOut().removeClass('_opened')
        }

    })
    openNav.on('click', (e) => {
        if (!e.currentTarget.classList.contains('_opened')) {
            html.addClass('lock')
            if (window.innerWidth < 768) {
                nav.fadeIn().addClass('_opened')
                e.currentTarget.classList.toggle('_opened')

            } else {
                mobileService.fadeOut().removeClass('_opened')
            }
        } else {
            html.removeClass('lock')
            nav.fadeOut().removeClass('_opened')
            e.currentTarget.classList.remove('_opened')
            mobileService.fadeOut().removeClass('_opened')
        }
    })
    mobileCategory.on('click', (e) => {
        const { slideto } = e.currentTarget.dataset;
        categoryList.css({ 'transform': `translate(-${slideto}00%)` })
    })


});