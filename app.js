// const MAX = 800;

// let container = document.getElementById('square-container');
// class Square {
//     constructor(x, y) {
//         this.div = document.createElement('div');
//         this.div.classList.add('square');
//         this.div.style.left = `${x}px`;
//         this.div.style.top = `${y}px`;
//         this.div.addEventListener('click', () => {
//             this.updateColor();
//             this.updateLocation();
//         });
//         this.updateColor();
//         container.appendChild(this.div);
//     }

//     updateLocation() {
//         let xVal = randomVal(0, MAX);
//         let yVal = randomVal(0, MAX);
//         this.div.style.left = `${xVal}px`;
//         this.div.style.top = `${yVal}px`;
//     }

//     updateColor() {
//         let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
//         this.div.style.backgroundColor = randomColor;
//     }
// }

// let sqButton = document.getElementById('sq-button');
// sqButton.addEventListener('click', insertSquare);

// function insertSquare() {
//     let xVal = randomVal(0, MAX);
//     let yVal = randomVal(0, MAX);
//     let sq = new Square(xVal, yVal);
// }

// function randomVal(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }





//////////////

$('#btnDie').click(function () {
    let div = '<div id="die" class="col-3"></div>';
    div.id = 'die';
    $('#dieDiv').append(div);
})

$('.btn').click(function (e) {
            let colors = ['orange', 'teal', 'turquoise', 'light green', 'yellow'];
            let newColor = colors[Math.floor(Math.random() * colors.length)];
            e.target.style.background = newColor;
        
});

        

function roll(min, max) {
    this.value = Math.random() * (max - min) + min;
}


class Die {
        constructor (value){
            this.value = value;
            this.div.id = 'die';

    }
    roll() {
        this.value = Math.random() * (6 - 1) + 1;
        console.log(this.value);
    }
}


// let newDie = new Die()