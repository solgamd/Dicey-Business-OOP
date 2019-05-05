// $('.btn').click(function () {    // BUTTON FUN
//     let colors = ['blue', 'teal', 'turquoise', 'navy', 'darkred'];
//     let newColor = colors[Math.floor(Math.random() * colors.length)];
//         if ($(this).css('color', 'black')) {
//             $(this).css('color', 'white')
//         };
//         this.style.backgroundColor = newColor;
// });
// function btnRoll(min, max) {       ////////// WRONG CODE ---------------------->
//     this.value = Math.random() * (max - min) + min;
//     ('#die').append(div);
// }

//// ----------------------------------------------------------------------------------
// class Die {
//     constructor() {
//         // this.value = value;

//         $('#btnDie').click(function () {    //GENERATE DIE
//             let div = '<div id="die" class="col-3"></div>';

//             div.id = 'die';
//             console.log('clicked');
//             roll();
//         })

//     }
//     roll(min, max) {
//         this.min = 1;
//         this.max = 6;
//         this.value = Math.floor(Math.random() * (max - min) + min);
//         console.log(this.value);
//         // $('#dieDiv').append(div);
//     }
// }

// --------------------------------------------------------------------------


// function roll() {
//     let min = 1;
//     let max = 6;
//     const value = Math.floor(Math.random() * (max - min) + min);
//     die.innerText = value;

//     console.log(value);
// }
let btnDie = document.getElementById('btnDie');

btnDie.addEventListener('click', function () {
    let die = document.createElement('div');
    let dieCont = document.getElementById('dieContainer');
    dieCont.appendChild(die);
    die.id = 'die';
    console.log('die created');
    // this.value = value;
});
class Die {
    constructor() {


    }
    // roll() {
    //     let min = 1;
    //     let max = 6;
    //     let value = Math.floor(Math.random() * (max - min) + min);
    //     die.innerText = value;
    //     console.log('rolled');
    // }
}

// let btnRoll = document.getElementById('btnRoll');
// btnRoll.addEventListener('click', function () {
//     let allBtns = document.getElementsByClassName('.btn');
//     allBtns.innerText.roll();
// })
