const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((acc, playar) => {
  return acc + playar.playtime / playar.gamesPlayed;
}, 0);
console.log(totalAveragePlaytimePerGame);

// console.log(1270 / 4 + 469 / 2 + 690 / 3 + 241 / 1);
