// // $('.btn').click(function () {    // BUTTON FUN
// //     let colors = ['blue', 'teal', 'turquoise', 'navy', 'darkred'];
// //     let newColor = colors[Math.floor(Math.random() * colors.length)];
// //         if ($(this).css('color', 'black')) {
// //             $(this).css('color', 'white')
// //         };
// //         this.style.backgroundColor = newColor;
// // });
// // function btnRoll(min, max) {       ////////// WRONG CODE ---------------------->
// //     this.value = Math.random() * (max - min) + min;
// //     ('#die').append(div);
// // }

// //// ----------------------------------------------------------------------------------
// // class Die {
// //     constructor() {
// //         // this.value = value;

// //         $('#').click(function () {    //GENERATE DIE
// //             let div = '<div id="die" class="col-3"></div>';

// //             div.id = 'die';
// //             console.log('clicked');
// //             roll();
// //         })

// //     }
// //     roll(min, max) {
// //         this.min = 1;
// //         this.max = 6;
// //         this.value = Math.floor(Math.random() * (max - min) + min);
// //         console.log(this.value);
// //         // $('#dieDiv').append(div);
// //     }
// // }

// // --------------------------------------------------------------------------


// // function roll() {
// //     let min = 1;
// //     let max = 6;
// //     const value = Math.floor(Math.random() * (max - min) + min);
// //     die.innerText = value;

// //     console.log(value);
// // }

// let dieCont = document.getElementById('dieContainer'); // GRAB DICE CONTAINER FROM HTML
// let  = document.getElementById('');         // GRAB NEW DIE BUTTON FROM HTML
// let btnRoll = document.getElementById('btnRoll');         // GRAB ROLL BUTTON FROM HTML

// .addEventListener('click', function () {    /// BUTTON TO CREATE DICE
//     let die = document.createElement('div');
//     dieCont.appendChild(die);
//     die.className = 'die';
//     console.log('die created');
//     let value = Math.floor(Math.random() * (max - min) + min);
//     let dieText = document.createTextNode(value);
//     die.append(dieText);
// });

// function roll() {        // FUNCTION TO ROLL DICE/CHANGE VALUES                
//     let value = Math.floor(Math.random() * (6 - 1) + 1);
//     this.value = value;
//     let dieText = document.createTextNode(value);
//     dieCont.remove(dieText);
//     die.append(value);                // ISSUE: APPEND ONLY HAPPENS ONCE, THEN 'DIE.APPEND IS NOT A FUNCTION AT ROLL'
//     console.log('rolled' + value);      
// }

// // function roll() {       // FUNCTION TO ROLL DICE/CHANGE VALUES 
// //     this.min = min;
// //     this.max = max;
// //     let value = Math.floor(Math.random() * (max - min) + min);
// //     let dieText = document.createTextNode(value);
// //     die.remove(dieText);
// //     die.append(value);                // ISSUE: APPEND ONLY HAPPENS ONCE, THEN 'DIE.APPEND IS NOT A FUNCTION AT ROLL'
// //     console.log('rolled' + value); 
// // }

// btnRoll.addEventListener('click', function() {
//     roll();
// });

//-----------------------------------------------------------

const dieCont = document.getElementById('dieContainer'); // GRAB DICE CONTAINER FROM HTML
const btnNew = document.getElementById('btnNew');         // GRAB NEW DIE BUTTON FROM HTML
const btnRoll = document.getElementById('btnRoll');         // GRAB ROLL BUTTON FROM HTML

class Die {
    constructor(value) {
        this.value = value;
        this.die = document.createElement('div');
        this.die.className = 'die';
        this.roll();
        this.die.textContent = this.value;
        dieCont.appendChild(this.die);
        this.die.addEventListener('dblclick', () => {
            this.die.remove();
        })
    }
    roll() {      // ONLY ASSIGNS THIS.VALUE THE FIRST/INITIAL TIME
        this.value = Math.floor(Math.random() * 6 + 1);
        this.die.textContent = this.value;
    }
    // remove() {
    // }
}

let diceCorral = [];

btnNew.addEventListener('click', () => {                // NEW DICE BUTTON CLICK LISTENER
    let newDie = new Die();
    diceCorral.push(newDie);
    console.log(diceCorral);

})

btnRoll.addEventListener('click', () => {
    console.log(`you need to add code here`);
    

})



