const hoursHand = document.querySelector('.hours-hand');
const minutesHand = document.querySelector('.minutes-hand');
const secondsHand = document.querySelector('.seconds-hand');

const getDegres = (division, n) => {
    return 'rotate(' + ((n / division) * 360 + 90) + 'deg)';
}

const getTime = () => {
    var date = new Date();
    secondsHand.style.transform = getDegres(60, date.getSeconds());
    minutesHand.style.transform = getDegres(60, date.getMinutes());
    hoursHand.style.transform = getDegres(12, date.getHours());
}

setInterval(getTime, 1000);
