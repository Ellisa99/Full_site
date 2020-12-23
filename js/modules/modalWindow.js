function openModal(modalSelector, modalTimerId) {
    const modal= document.querySelector(modalSelector);
    modal.classList.remove('Novisable');
    modal.classList.add('visable');
    document.body.style.overflow = 'hidden';

    if (modalTimerId){
        clearInterval(modalTimerId);
    }
    
}
function closeModal(modalSelector) {
    const modal= document.querySelector(modalSelector);
    modal.classList.add('Novisable');
    modal.classList.remove('visable');
    document.body.style.overflow = '';
}



function modal( triggerSelector, modalSelector, modalTimerId){
    const modalTrigger = document.querySelectorAll(triggerSelector);
const modal= document.querySelector(modalSelector);

modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
});


modal.addEventListener('click', (e) => {
    if (e.target.className === "modal-window visable" || e.target.getAttribute('data-close') == "") {
        closeModal(modalSelector);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape") { 
        closeModal(modalSelector);
    }
});



function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal(modalSelector, modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
    }
}
window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export {openModal, closeModal};