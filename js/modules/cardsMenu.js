function cards(){
    class RectCards{
        constructor(src, alt, head, desc, price, parent){
            this.src = src;
            this.head = head;
            this.desc = desc;
            this.price = price;
            this.parent = parent;
            this.alt = alt;
        }
         render() {
             const parentMain = document.querySelector('.menu-cards');
             let parent = document.createElement('div');
             parent.className = `${this.parent}`;
             parent.innerHTML = `<img class="photo-card" src="${this.src}" alt="${this.alt}">
             <div class="card-describe">
                 <h2>Меню ${this.head} </h2>
             <p>${this.desc}</p>
             </div>
             <div class="price-section">
                 <p class="price">Цена</p>
             <p class="pricereal">${this.price}$/день </p>
             </div>`;
             parentMain.append(parent);
        
        }
    }
    
    const getCard = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };
    
    getCard('https://github.com/Ellisa99/Full_site/blob/master/db.json')
    .then(data => {
        data.forEach(obj => new RectCards(obj.img, obj.altimg, obj.title, obj.descr, obj.price, 'card').render());
    });
    
    // const card1 = new RectCards("images/fitness.jpg", 'Фитнес', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 10, '.card'),
    // card2 = new RectCards("images/balance.png", 'Премиум', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 20, '.card2'),
    // card3 = new RectCards("images/post3.jpg", 'Постное', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки.', 15, '.card3');
    
    // card1.render();
    // card2.render();
    // card3.render();
    
}
export default cards;
