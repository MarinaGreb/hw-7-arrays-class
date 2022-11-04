const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

//Найти лучший результат, найти игрока в этим результатом
let maxResult = 0;
let bestPlayer;
for (let player of players) {
  maxResult = Math.max(maxResult, player.scorePoints);
  if (maxResult == player.scorePoints) bestPlayer = player.name;
}
console.log(maxResult);
console.log(bestPlayer);

//Применение оператора spread позволяющий развернуть данные из результирующего массива всех очков игроков в метод объекта Math.
let arrScorePonts = [];
let maxResult2;
for (let player of players) {
  arrScorePonts.push(player.scorePoints);
}
maxResult2 = Math.max(...arrScorePonts);
console.log(maxResult2);