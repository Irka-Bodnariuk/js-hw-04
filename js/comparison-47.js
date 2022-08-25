const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
    this.potions.splice(this.potions.indexOf(oldName), 1, newName);
    // this.potions.indexOf(oldName)
    // Change code above this line
  },
};
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
console.log(atTheOldToad.potions);
atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
console.log(atTheOldToad.potions);
