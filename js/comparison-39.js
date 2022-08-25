const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    // Change code below this line
    // this.potions.indexOf(potionName)
    this.potions.splice(this.potions.indexOf(potionName), 1);
    // Change code above this line
  },
};
atTheOldToad.removePotion('Dragon breath');
console.log(atTheOldToad.potions);
atTheOldToad.removePotion('Speed potion');
console.log(atTheOldToad.potions);
