let numOfSquare = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorNameDisplay = document.querySelector('#colorName');
let displayMessage = document.querySelector('#message');
let resetButton = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let modeButtons = document.querySelectorAll(".mode");

// shorter method // 
init();

function init() {
    setUpmodeButtons();
    setUpSquares();
    reset();
}

function setUpmodeButtons() {
    // mode button method
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquare = 3 : numOfSquare = 6;
            reset();
        })
    }
}  

function setUpSquares() {
    // looping through the squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        // click event to check the correct picked color
        squares[i].addEventListener('click', function() {
            let clickedColor = this.style.backgroundColor;
            // if clicked correct change all squares to the same
            if (clickedColor === pickedColor) {
                changeAllColors(clickedColor);
                displayMessage.textContent = `Correct!!!`;
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = `Try Again?`;
            } else {
                // if wrong color change to black
                this.style.backgroundColor = 'black';
                displayMessage.textContent = `Try Again?`
            }
        })
    }
}

// reset function
function reset() {
    colors = generateColors(numOfSquare);
    pickedColor = pickColor();
    colorNameDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
        
    }
    resetButton.textContent = `New Colors`;
    h1.style.backgroundColor = `dodgerblue`;
    displayMessage.textContent = '';
}

// color name
colorNameDisplay.textContent = pickedColor;
// change all color function
function changeAllColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
// random picked color function
function pickColor() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

// generating a lot random colors
function generateColors(num) {
    // make an empty array
    let arr = [];
    // looping through the array
    for (let i = 0; i < num; i++) {
        // pushing the new colors into the new array
        arr.push(randomColors());
    }
    // return the bulk array
    return arr;
    
}

// random colors
function randomColors() {
    // red in betn 0 to 255
    let r = Math.floor(Math.random() * 256);
    // green in betn 0 to 255
    let g = Math.floor(Math.random() * 256);
    // blue in betn 0 to 255
    let b = Math.floor(Math.random() * 255);
    let rgbColor = "rgb("+ r + ", " + g + ", " + b +")";
    return rgbColor;
}

// reset event
resetButton.addEventListener('click', function() {
    reset();
})
