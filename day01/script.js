var hoursHand = document.querySelector('.hours-hand');
var minutesHand = document.querySelector('.minutes-hand');
var secondsHand = document.querySelector('.seconds-hand');

function getDegres(division, n) {
    return 'rotate(' + ((n / division) * 360 + 90) + 'deg)';
}

function getTime() {
    var date = new Date();
    secondsHand.style.transform = getDegres(60, date.getSeconds());
    minutesHand.style.transform = getDegres(60, date.getMinutes());
    hoursHand.style.transform = getDegres(12, date.getHours());
}

setInterval(getTime, 1000);
