const modalBtn = document.querySelector('.hero__button');
const modal = document.querySelector('.modal');
const body = document.body;
let currentModal = modal.closest('.modal')
// let currentModal = currentTarget.closest('.modal')
function closeModal() {
    modal.classList.remove('.modal--active')
}
modalBtn.addEventListener('click', () => {
    modal.classList.add('modal--active')
    body.classList.add('no-scroll')
})

currentModal.addEventListener('click', (e) => {
    if (e.path[0] ===  document.querySelector('.modal.modal--active')) {
        modal.classList.remove('modal--active')
        body.classList.remove('no-scroll')
      }
})
