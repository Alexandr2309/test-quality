
window.addEventListener('DOMContentLoaded', (e) => {
  
  const burgerIcon = document.querySelector('.menu__icon');
  const headerContent = document.querySelector('.header__content');
  
  burgerIcon.addEventListener('click',() => {
    burgerIcon.classList.toggle('active');
    headerContent.classList.toggle('active');
  });
  
  const btnPopup = document.querySelectorAll('.btn-popup');
  const modal = document.querySelector('.modal')
  
  Array.from(btnPopup).forEach(btn =>
    btn.addEventListener('click', () => {
    modal.classList.add('active');
  }))
  
  const modalCloser = document.querySelector('.modal__close');
  modalCloser.addEventListener('click', () => modal.classList.remove('active'))
})


