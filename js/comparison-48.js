const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        return this.potions.splice(i, 1);
      }
    }

    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        return (this.potions[i].name = newName);
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// console.log(atTheOldToad.getPotions());

// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');
// atTheOldToad.removePotion('Speed123');

// console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone svdfvkin', 'Invulnerability potion');

console.log(
  atTheOldToad.updatePotionName('Stone svdfvkin', 'Invulnerability potion')
);
console.log(atTheOldToad.getPotions());
