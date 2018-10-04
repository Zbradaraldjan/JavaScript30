
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = (((seconds / 60) * 360) + 90)%360;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = (((minutes / 60) * 360) + 90)%360;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = (((hours / 24) * 360) + 90)%360;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

}

setInterval(setDate, 1000);