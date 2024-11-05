//getting all these hands for adding functionalities
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

//creating fn for updateclock
function updateClock(){
    //creating today variable and adding today's date
    const today = new Date();
    //adding hours
    const hours = today.getHours();
    //adding minutes
    const minutes = today.getMinutes();
    //adding sec
    const seconds = today.getSeconds();

    //cal rotation angle for each hands
    const hourAngle = (hours % 12) * 30 + (minutes / 2);
    const minuteAngle = minutes * 6; 
    const secondAngle = seconds * 6; 

    //applying dynamic rotations for each hands
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = ` rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}
//clock will be updated for every 1sec
setInterval(updateClock,1000)
updateClock();