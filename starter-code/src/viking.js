// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){ 
        this.health -= damage;
    }
};

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength, "Viking")
        this.name = name;
    }
    attack() {
        return Viking.strength();
    };
    receiveDamage(damage) {
        this.health -= damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat"
    }   
}
    battleCry() {
    return "Odin Owns You All!";
    }
}


// // Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength);
    }
    attack() {
        return Saxon.strength();
    }
    receiveDamage(damage) {
        this.health -= damage;
    if (this.health < 0) {
        return "A Saxon has received " + damage + " points of damage";
    } else {
        return "A Saxon has died in combat";
    }
    }
}

// // War
class War {
    constructor()  {
        var vikingArmy = [];
        var saxonArmy = [];
    }

    addViking(Viking) {
        vikingArmy += this.Viking;
    }
    addSaxon(Saxon) {
        saxonArmy += this.Saxon;
    }
    vikingAttack() {
        receiveDamage = Viking.strength;

    }
    saxonAttack() {

    }
    showStatus() {

    }
}
