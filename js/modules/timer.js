function timer() {
    const deadline = '2020-12-31';
    function getTimeRemaining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date());
        let days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor(t/(1000*60*60)%24),
        minutes = Math.floor((t/1000/60)%60),
        seconds = Math.floor((t/1000)%60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function getZero(num){
        if (num>=0 && num<10){
            return `0${num}`;
        } else {
            return `${num}`;
        }
    }
    
    
    function setClock(selector, endTime){
        const timer = document.querySelector(selector),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateCloack, 1000);
        updateCloack();
        function updateCloack(){
            const t = getTimeRemaining(endTime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML =getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0){
                clearInterval(setInterval);
            }
        }
    }
    setClock('.timer', deadline);
}

export default timer;