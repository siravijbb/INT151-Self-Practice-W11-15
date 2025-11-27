const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
setTimeout(function(){
    const second = now.getSeconds();

    console.log(now);
    console.log(year, month, day, hour, minute, second);
}, 1000); // still act as get at that time


const specificDate = new Date('2025-12-25T10:30:00');
console.log(specificDate.toISOString());

const date = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

console.log(new Intl.DateTimeFormat('en-US', options).format(date));
console.log(new Intl.DateTimeFormat('de-DE', options).format(date));
console.log(new Intl.DateTimeFormat('ja-JP', options).format(date));