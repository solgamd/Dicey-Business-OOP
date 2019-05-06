
class Die {
    constructor() {
        this.value;
        this.die = document.createElement('div');
        this.die.className = 'die';
        this.roll();
        dieCont.appendChild(this.die);


    }
    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
        let dieText = document.createTextNode(this.value);
        this.die.append(dieText);
    }
}


