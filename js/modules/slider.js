function slider(){
    const sliders = document.querySelectorAll('.imgsl');
    const slideHead = document.querySelector('.slide-header p');
    const prev = document.querySelector('.sideLeft');
    const next = document.querySelector('.sideRight');
    const circle = document.querySelectorAll('.fa-circle');
    let slideIndex = 1;
    let offset = 0;
    const slideWrapper = document.querySelector('.wrapper'),
    slidesField = document.querySelector('.photo-slider'),
    width = window.getComputedStyle(slidesField).width;
    
    
    if (sliders.length<10){
        slideHead.innerHTML =`<span class="activeN">0${slideIndex}</span>/0${sliders.length}`;
    } else {
        slideHead.innerHTML = `<span class="activeN">${slideIndex}</span>/${sliders.length}`;
    }
    
    
    slidesField.style.width = 100 * sliders.length + '%';
    
    function circleNav(i=0){
        circle[i].style.color = 'rgb(88, 86, 86)';
    }
    function remcircl(){
        circle.forEach(c => {
            c.style.color = 'rgb(206, 203, 203)';
        })
    }
    remcircl();
    circleNav();
    
    circle.forEach((c,i) => {
        c.addEventListener('click', () => {
            offset = +width.replace(/\D/g,'')*i;
            slideIndex = i+1;
            slidesField.style.transform = `translateX(-${offset}px)`;
            if (sliders.length<10){
                slideHead.innerHTML =`<span class="activeN">0${i+1}</span>/0${sliders.length}`;
            } else {
                slideHead.innerHTML = `<span class="activeN">${i+1}</span>/${sliders.length}`;
            }
            remcircl();
            circleNav(i);
        });
    });
    
    sliders.forEach(slide =>{
        slide.style.width = width;
    });
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slideWrapper.style.overflow = 'hidden';
    
    
    
    prev.addEventListener('click', ()=>{
        if (offset == 0){
            offset = +width.replace(/\D/g,'')*(sliders.length-1);
            
            
        } else {
            offset -= +width.replace(/\D/g,'');       
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    
        if (slideIndex === 1) {
    slideIndex = sliders.length;
    remcircl();
    circleNav(slideIndex-1);
    
        } else {
            slideIndex -=1;
            remcircl();
            circleNav(slideIndex-1);
        }
    
    
    if (sliders.length<10){
        slideHead.innerHTML =`<span class="activeN">0${slideIndex}</span>/0${sliders.length}`;
    } else {
        slideHead.innerHTML = `<span class="activeN">${slideIndex}</span>/${sliders.length}`;
    }
    });
    
    
    next.addEventListener('click', ()=>{
        if (offset == +width.replace(/\D/g,'')*(sliders.length-1)){
            offset = 0;
          
        } else {
            offset += +width.replace(/\D/g,'');
          
        }
        
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex === sliders.length){
            slideIndex = 1;
            remcircl();
            circleNav(slideIndex-1);
         
            
        } else {
            slideIndex +=1;
            remcircl();
            circleNav(slideIndex-1);
         
        }
        if (sliders.length<10){
            slideHead.innerHTML =`<span class="activeN">0${slideIndex}</span>/0${sliders.length}`;
        } else {
            slideHead.innerHTML = `<span class="activeN">${slideIndex}</span>/${sliders.length}`;
        }
    
    });
}
export default slider;