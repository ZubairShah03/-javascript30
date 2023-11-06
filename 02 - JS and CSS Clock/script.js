const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const Clock = () => {
    const now = new Date();
    // Seconds Hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds)

    // Minutes Hand
    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360);
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;

    // Hours Hand
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(Clock, 1000);