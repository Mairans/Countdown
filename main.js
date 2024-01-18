const countdown = document.getElementById('countdown');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const CurrentYear = new Date().getFullYear()

const birthdayDate = new Date(`18 January ${CurrentYear} 22:00:00 `);

function updateCountdown () {
    const currentDate = new Date()
    const diff = birthdayDate - currentDate;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerText = d;
    hours.innerText = h;
    minute.innerText = m;
    second.innerText = s;

}

setInterval(updateCountdown, 1000);


