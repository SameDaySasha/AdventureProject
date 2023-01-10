const { Food } = require('./food');
const { Item } = require('./item');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
     let item = this.currentRoom.getItemByName(itemName)
     this.items.push(item)
     let itemIndex = this.currentRoom.items.indexOf(item) 
     this.currentRoom.items.splice(itemIndex, 1)
    }

    dropItem(itemName) {
        let item = this.getItemByName(itemName)
        
        this.currentRoom.items.push(item)
        
        let itemIndex = this.items.indexOf(item)
        this.items.splice(itemIndex, 1)


        
        // Your code here
    }

    eatItem(itemName) {
        let item = this.getItemByName(itemName)
        if(item instanceof Food){
            let itemIndex = this.items.indexOf(item)
            this.items.splice(itemIndex, 1)
        }
    }

    getItemByName(name) {
        for (let i = 0; i < this.items.length; i++){
            let ele = this.items[i]

            if(ele.name === name){
                
                return ele
            }
        }

    }
}

module.exports = {
  Player,
};