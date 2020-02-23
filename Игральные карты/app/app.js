let card = ['2', '3', '4', '5','6', '7', '8', '9','10', 'V', 'D', 'K', 'T'];
let mast = ["♠", "♦", "♣", "♥"];
let card2 = card[Math.floor(Math.random() * 13)];
let mast2 = mast[Math.floor(Math.random() * 4)];
let cards = card2 + mast2;
console.log(cards);