import modal, {closeModal, openModal} from './modalWindow';

function post(modalTimerId) {

    const message = {
        loading: 'Загрузка',
        success: `Спасибо! Мы с вами свяжемся!`,
        failure: 'Ошибка'
    };
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        postData(form);
    });
    
    
    const postData2 = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data,
        });
        return await res.json();
    };
    
    function postData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();
           
            const formData = new FormData(form);
        
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
    
    postData2('http://localhost:3000/requests', json)
    .then(data => {
        console.log(data.name);
                showThanksModal(`Спасибо, ${data.name}! Мы с вами свяжемся!`);
                
    }).catch(() => {
        showThanksModal(message.failure);
    }).finally(() => {
        form.reset();
    });
        });
    
    
    }
    
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal-window'),
        modalh = document.querySelector('.modal');
        modalh.classList.add('hide');
        
        openModal('.modal-window', modalTimerId);
    
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal');
        thanksModal.innerHTML = `
            <h3>${message}</h3>
            <p class="close" data-close> &times;</p> 
        `;
        prevModalDialog.append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            modalh.classList.remove('hide');

            closeModal('.modal-window');
        }, 4000);
    }
}
export default post;