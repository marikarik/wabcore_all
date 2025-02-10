import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use(Pagination)

if (window.innerWidth < 768) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
// Управление сайдбаром
const btnBurger = document.querySelector('.header__burger')
const btnClose = document.querySelector('.header-menu__btn-close')
const sidebar = document.querySelector('.menu-wrap')

btnBurger.addEventListener('click', function () {
  sidebar.classList.add('modal--active')
})
btnClose.addEventListener('click', function () {
  sidebar.classList.remove('modal--active')
})

// Открытие модальных окон
const btnCall = document.querySelectorAll('.btn__open-mod-call')
const btnFeedback = document.querySelectorAll('.btn__open-mod-feedback')
const modFeedback = document.querySelector('.modal-feedback')
const modCall = document.querySelector('.modal-call')
const btnCloseMod = document.querySelectorAll('.modal__btn-close')

for (let i = 0; i < btnCall.length; i++) {
  let btn = btnCall[i]
  btn.addEventListener('click', function () {
    modCall.classList.add('modal--active')
  })
}
for (let i = 0; i < btnFeedback.length; i++) {
  let btnF = btnFeedback[i]
  btnF.addEventListener('click', function () {
    modFeedback.classList.add('modal--active')
  })
}

// Закрытие модальных окон
for (let i = 0; i < btnCloseMod.length; i++) {
  let btn = btnCloseMod[i]
  btn.addEventListener('click', function () {
    const modal = btn.closest('.modal')
    if (modal) {
      modal.classList.remove('modal--active')
    }
  })
}

// Управление размерами контейнеров с содержимым
const btnList = document.querySelectorAll('.btn-more')

for (let i = 0; i < btnList.length; i++) {
  let btn = btnList[i]
  const btnText = btn.querySelector('.btn-text')
  const section = btn.closest('.content-wrap').querySelector('.all-content')
  const rotateIcon = btn.querySelector('.btn-icon')
  const btnTextOriginal = btnText.textContent
  btn.addEventListener('click', function () {
    if (btnText.textContent === btnTextOriginal) {
      btnText.textContent = 'Скрыть'
    } else {
      btnText.textContent = btnTextOriginal
    }
    section.classList.toggle('section__content--all')
    rotateIcon.classList.toggle('btn-icon--rotate')
  })
}
