function tabs() {
    class RectTabs{
        constructor(src, descr){
            this.src = src;
            this.descr = descr;
       
        }
         render() {
             const mainElement = document.querySelector('.menu-wrapper');
             const parentElement = document.querySelector('.menu-1');
             const descrElemet = document.createElement('div');
             descrElemet.classList.add('menu-description');
             parentElement.insertAdjacentHTML('afterbegin', `<div class="img"> <img src="${this.src}" class="photo-menu" alt=""> </div>`);
             descrElemet.innerHTML =`<p class="descr-menu">${this.descr}</p>`;
             mainElement.append(descrElemet);
        
        }
    }
    
    const div1 = new RectTabs("images/balance.png", 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!'),
    div2 = new RectTabs("images/post3.jpg", 'Наличие в рационе ягод значимо влияет на состав микрофлоры кишечника, которая, как сейчас становится понятно, во многом определяет самочувствие организма как такового. А икра -  ценнейшим пищевым продуктом. В ее состав входят витамины A, D и Е, фолиевая кислота, кальций, фосфор и йод, которые очень полезны.'),
    div3 = new RectTabs("images/premium.jpg", 'Постная пища способствует очищению организма от шлаков, а соответственно оздоровлению и укреплению иммунитета. Во время поста не стоит увлекаться несезонными фруктами и овощами, которые богаты нитратами и пестицидами. Лучше предпочтение отдать сезонным овощам и фруктам.'),
    div4 = new RectTabs("images/fitness.jpg",  'Сбалансированное питание не требует колоссальных усилий, и не содержит в себе массу ограничений, в отличии от множества диет. Самое главное в рациональном питании — график и включение в меню только питательных продуктов.');
    
    
    
    
    div1.render();
    div2.render();
    div3.render();
    div4.render();
    
    const aTag = document.querySelectorAll('.menu-name-item');
    const img = document.querySelectorAll('.img');
    const descr = document.querySelectorAll('.menu-description');
    
    
    function HiddenMenu(){
        img.forEach(image => image.classList.add('hide'));
        aTag.forEach(tag => tag.classList.remove('activeTab'));
        descr.forEach(d => d.classList.add('hide'));
    
    }
    
    
    function VisibleMenu(i = 0){
        img[i].classList.remove('hide');
        img[i].classList.add('fade');
        descr[i].firstElementChild.classList.add('fade');
        aTag[i].classList.add('activeTab');
        descr[i].classList.remove('hide');
        
    
    }
    
    HiddenMenu();
    VisibleMenu();
    
    aTag.forEach((tag, i) => {
        tag.addEventListener('click', function newItem(e){
             e.preventDefault();
         const target = e.target;
        
           if (target){
               HiddenMenu();
            VisibleMenu(i);
           }
            
        });
    });
}

export default tabs;