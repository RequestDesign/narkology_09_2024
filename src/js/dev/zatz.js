import $ from "jquery";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { rem } from "../utils/constants";




$(function () {
    /* drop-down */
    const ddBtn = $('.drop-down-target'),
        ddParent = '.drop-down-container',
        ddOpened = '_opened'


    ddBtn.on('click', (e) => {
        e.preventDefault()
        e.currentTarget.classList.toggle(ddOpened)
        e.currentTarget.closest(ddParent)
            .classList.toggle(ddOpened)
    })
    /* drop-down */
    swipersInit()


});

function swipersInit() {
    /*  */
    new Swiper('.main-heading__c-right-slider-wrp',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(2),
            pagination: {
                el: '.main-heading-pagination',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.main-heading-button-prev',
                nextEl: '.main-heading-button-next'
            },

        }
    )
    /*  */
    new Swiper('.all-types__c-items',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),

            breakpoints: {
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,

                }
            },
            pagination: {
                el: '.swiper-all-types-pagin',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.swiper-all-types-prev',
                nextEl: '.swiper-all-types-next'
            },

        }
    )
    /*  */
    new Swiper('.four-stage__c-items',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            spaceBetween: rem(3),

            breakpoints: {
                768: {
                    slidesPerView: 4,
                }
            },
            pagination: {
                el: '.swiper-four-stage-pagin',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.swiper-four-stage-prev',
                nextEl: '.swiper-four-stage-next'
            },

        }
    )
    /*  */
    new Swiper('.placement__c-items',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(2),
            pagination: {
                el: '.swiper-placement-pagin',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.swiper-placement-prev',
                nextEl: '.swiper-placement-next'
            },

        }
    )
    /*  */
    new Swiper('.specialists__slider',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(3),

            breakpoints: {
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,

                }
            },
            pagination: {
                el: '.specialists-pagin',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.specialists-prev',
                nextEl: '.specialists-next'
            },

        }
    )
    /*  */
    new Swiper('.clinic-photos__slider',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            initialSlide: 1,
            spaceBetween: rem(3.5),
            slideActiveClass: 'clinic-photos__slider-list-e_active',
            slideToClickedSlide: true,
            autoHeight: false,
            centeredSlides: true,

            breakpoints: {
                768: {
                    slidesPerView: 3,
                }
            },
            pagination: {
                el: '.clinic-photos-pagin',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.clinic-photos-prev',
                nextEl: '.clinic-photos-next'
            },

        }
    )
    /*  */
    new Swiper('.feedback__slider',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            initialSlide: 1,
            spaceBetween: rem(2),
            autoHeight: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            },
            pagination: {
                el: '.feedback-pagin',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.feedback-prev',
                nextEl: '.feedback-next'
            },

        }
    )
    /*  */
    new Swiper('.license__slider',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            initialSlide: 1,
            spaceBetween: rem(2),
            autoHeight: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                }
            },
            pagination: {
                el: '.license-pagin',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.license-prev',
                nextEl: '.license-next'
            },

        }
    )
}



