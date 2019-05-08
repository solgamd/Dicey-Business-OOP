const dieCont = document.getElementById('dieContainer');    // GRAB ELEMENTS FROM HTML
const btnNew = document.getElementById('btnNew');         
const btnRoll = document.getElementById('btnRoll');        
const btnSum = document.getElementById('btnSum'); 

class Die {
    constructor(value) {
        this.value = value;
        this.die = document.createElement('div');
        this.die.className = 'die';
        this.roll();
        dieCont.appendChild(this.die);
        this.die.addEventListener('dblclick', () => {       // REMOVE DIE DBLCLICK LISTENER
            this.die.remove();
            let i = diceCorral.indexOf(this);
            diceCorral.splice(i, 1);                        // "Above & Beyond" #3
            console.log(diceCorral);     
        })
        this.die.addEventListener('click', () => {
            this.roll();                                    // "Above & Beyond" #2
        })
    }
    roll() {     
        this.value = Math.floor(Math.random() * 6 + 1);
        this.die.textContent = this.value;
    }
}

const diceCorral = [];

btnNew.addEventListener('click', () => {                // NEW DICE BUTTON CLICK LISTENER
    let newDie = new Die();
    diceCorral.push(newDie);
})

btnRoll.addEventListener('click', () => {               // ROLL DICE BUTTON CLICK LISTENER
    for (let die of diceCorral) {
        die.roll();
    }
})

btnSum.addEventListener('click', () => {                // "Above & Beyond" #1
    let sum = 0;
    for (let die of diceCorral) {
        sum += die.value;
    }
    alert('The sum of all dice is ' + sum + '.');
})




