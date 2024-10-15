import $ from "jquery";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { rem } from "../utils/constants";
import Form from "../utils/forms";
import Inputmask from "inputmask";
import { Fancybox } from "@fancyapps/ui";



$(function () {
    dropDowns()
    swipersInit()
    healStageSwiper()
    bloodStageSwiper()
    feedBackOpenReview()
    modalsOpenHandler()
    priceServiceSwiper()
    initFancybox()

    const forms = document.querySelectorAll('.form')
    if (forms) {
        forms.forEach((e) => {
            new Form(e, formSubmit)
            new Inputmask('+7 (999) 999-99-99')
                .mask($(e).find('.form-input-txt-el[name="phone"]'));

        })
    }


});

function dropDowns() {
    const ddBtn = $('.drop-down-target')
    if (!ddBtn) return

    const ddParent = '.drop-down-container',
        ddOpened = '_opened'


    ddBtn && ddBtn.on('click', (e) => {
        e.preventDefault()
        e.currentTarget.classList.toggle(ddOpened)
        e.currentTarget.closest(ddParent)
            .classList.toggle(ddOpened)
    })

}


function swipersInit() {
    /*  */
    document.querySelector('.main-heading__c-right-slider-wrp') && new Swiper('.main-heading__c-right-slider-wrp',
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
    document.querySelector('.all-types__c-items') && new Swiper('.all-types__c-items',
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
    document.querySelector('.four-stage__c-items') && new Swiper('.four-stage__c-items',
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
    document.querySelector('.placement__c-items') && new Swiper('.placement__c-items',
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
    document.querySelector('.specialists__slider') && new Swiper('.specialists__slider',
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
    document.querySelector('.clinic-photos__slider') && new Swiper('.clinic-photos__slider',
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
    document.querySelector('.feedback__slider') && new Swiper('.feedback__slider',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            spaceBetween: rem(2),
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
    document.querySelector('.license__slider') && new Swiper('.license__slider',
        {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
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
    /*  */
    document.querySelector('.program-target__slider') && new Swiper('.program-target__slider',
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
                el: '.program-targe__nav-pagin',
                type: "fraction",
                currentClass: 'slider-actions-pagin-cur',
                totalClass: 'slider-actions-pagin-all'
            },
            navigation: {
                prevEl: '.program-targe__nav-prev',
                nextEl: '.program-targe__nav-next'
            },

        }
    )
}


function healStageSwiper() {
    if (!document.querySelector('.heal-stage')) return

    const swiper = new Swiper('.heal-stage__c-slider',
        {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: rem(2),
        }
    )
    const btns = document.querySelectorAll('.heal-stage__c-top-btn')
    const indicationLine = document.querySelector('.heal-stage__c-top-indication-line')
    btns.forEach((el) =>
        el.addEventListener('click', (e) => {
            const { slideto } = e.currentTarget.dataset
            swiper.slideTo(slideto)


        })
    )
    swiper.on('activeIndexChange', (e) => {
        indication(e.realIndex)
    })

    function indication(index) {
        btns.forEach((el) => {
            el.classList.remove('heal-stage__c-top-btn_active')
        })
        btns[index].classList.add('heal-stage__c-top-btn_active')
        if (index == 0) {
            indicationLine.style.marginLeft = '0'
        } else if (index == 1) {
            indicationLine.style.marginLeft = '33%'
        } else {
            indicationLine.style.marginLeft = '67%'


        }
    }
}


function bloodStageSwiper() {
    if (!document.querySelector('.blood-stage')) return

    const swiper = new Swiper('.blood-stage__c-slider',
        {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: rem(2),
        }
    )

    const btns = document.querySelectorAll('.blood-stage__c-nav-btn')
    const indicationLine = document.querySelector('.blood-stage__c-nav-indication-line')
    btns.forEach((el) =>
        el.addEventListener('click', (e) => {
            const { slideto } = e.currentTarget.dataset
            swiper.slideTo(slideto)


        })
    )
    swiper.on('activeIndexChange', (e) => {
        indication(e.realIndex)
    })

    function indication(index) {
        btns.forEach((el) => {
            el.classList.remove('blood-stage__c-nav-btn')
        })
        btns[index].classList.add('blood-stage__c-nav-btn')
        if (index == 0) {
            indicationLine.style.marginLeft = '0'
        } else {
            indicationLine.style.marginLeft = 'calc(50% + 3rem)'
        }
    }
}


function priceServiceSwiper() {
    const target = document.querySelector('.prices-service__c-right')
    if (!target) return

    const swiper = new Swiper(target,
        {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: rem(2),
        }
    )


    const navContainer = document.querySelector('.prices-service__c-left')
    const btns = navContainer.querySelectorAll('.prices-service__c-left-items-list-e')
    const mobileDD = navContainer.querySelector('.prices-service__c-left-btn')
    const mobileDDText = mobileDD.querySelector('span')

    btns.forEach((el) =>
        el.addEventListener('click', (e) => {
            const { slideto } = e.currentTarget.dataset
            swiper.slideTo(slideto)
            indication(slideto)

        })
    )

    swiper.on('activeIndexChange', (e) => {
        indication(e.realIndex)
        mobileDD.classList.remove('_opened')
        navContainer.classList.remove('_opened')
        mobileDDText.textContent = btns[e.realIndex].textContent
    })

    function indication(index) {
        index = Number(index)
        btns.forEach((el) => {
            el.classList.remove('_opened')
        })
        btns[index].classList.add('_opened')

    }
}


function feedBackOpenReview() {
    if (!document.querySelector('.feedback__slider-list-e-body-c-txt')) return

    const container = $('.feedback-container'),
        textSelector = '.feedback__slider-list-e-body-c-txt',
        text = $(textSelector).toArray(),
        textContainerSelector = '.feedback__slider-list-e-body-c',
        shortenedTextSelecor = 'feedback__slider-list-e-body-c-txt_closed'

    const maxHeight = 150
    text.forEach((e) => {
        if (e.offsetHeight > maxHeight) {
            e = $(e)
            e.addClass(shortenedTextSelecor)
            e.closest(textContainerSelector)
                .append('<button class="feedback__slider-list-e-body-c-more txt18 "> еще</button>')
        }

    })

    container.on('click', (ev) => {
        if (!ev.target.classList.contains('feedback__slider-list-e-body-c-more')) return

        if (!ev.target.closest(textContainerSelector).classList.contains('_opened')) {
            const parent = ev.target.closest(textContainerSelector)
            parent.classList.add('_opened')
            parent.querySelector(textSelector)
                .classList.remove(shortenedTextSelecor)
            ev.target.textContent = 'скрыть'


        } else {
            const parent = ev.target.closest(textContainerSelector)
            parent.classList.remove('_opened')
            parent.querySelector(textSelector)
                .classList.add(shortenedTextSelecor)
            ev.target.textContent = 'еще'
        }



    })



}


function modalsOpenHandler() {

    const modalOpeners = $('.modal-opener')
    const modalClosers = $('.modal-closer')

    if (!modalOpeners || !modalClosers) return

    modalOpeners.on('click', (ev) => {
        const { modal } = ev.currentTarget.dataset

        $(`.modal-${modal}`)
            .fadeIn()
            .addClass('_opened')

    })


    modalClosers.on('click', (ev) => {
        const { classList } = ev.target
        if (!classList.contains('modal-closer')) return

        if (classList.contains('modal')) {
            $(ev.target).fadeOut().removeClass('_opened')

        } else {
            $(ev.target.closest('.modal')).fadeOut().removeClass('_opened')

        }
    })




    /* const openBtns = $('.open-modal-call'),
        modalSendCall = document.querySelector('.modal_send-call'),
        allModals = $('.modal')
    if (!openBtns || modalSendCall) return

    openBtns.on('click', (ev) => {
        if (!modalSendCall.classList.contains('_opened')) {
            modalSendCall.classList.add('_opened')
        }
    })

    allModalsCloser.on('click', (ev) => {
        console.log(ev);
    })
 */
}

function formSubmit(inputsData) {
    console.log(inputsData);
    $('.modal-send-call').fadeOut().removeClass('_opened')
    $('.modal-success').fadeIn().addClass('_opened')
}

function initFancybox() {
    const anytarget = document.querySelector('[data-fancybox]')
    if (!anytarget) return

    Fancybox.bind('[data-fancybox]', {
        Thumbs: false,
        Toolbar: {
            display: {
                left: [],
                middle: ["infobar"],
                right: ["close"],
            },
        },
    })
}


