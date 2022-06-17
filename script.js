// getting random number and button from the DOM
const num = document.getElementById("number");
const playBtn = document.getElementById("playBtn");

// onclick button function
const onPlay = () => {
    let count = 0;
    let randomNum = 0;
    playBtn.style.backgroundColor = '#75cde7';

    /*  using setInterval() to randomly generate 60 numbers from 1 to 100000
        with a delay of 50ms. The 60th number will be chosen for drawing.  */

    let runGenerator = setInterval(() => {
        count++;

        // if the 60th number is generated, clear the interval and display a message
        if (count === 60) {
            clearInterval(runGenerator);
            playBtn.style.backgroundColor = 'aliceblue';
            // lottery lost if the drawing number is greater than 1000
            if (randomNum > 1000) {
                window.alert("Too bad! you've lost!");
            }
            // lottery won if the drawing number is less than 1000
            else {
                window.alert("Congratulations! you've won!");
            }
        }
        // else generate the random number until count reaches 60
        else {
            randomNum = genRandomNum();
            num.innerHTML = randomNum;
        }
    }, 50);
}

const genRandomNum = () => Math.floor(Math.random() * 100000) + 1;
