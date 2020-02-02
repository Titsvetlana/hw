//futon countWords(txt){return txt.match(/[А-Яа-яЁ]{3,}/).length;}
function WordCount(str) { 
  return str.split(/[А-Яа-яЁё]{2,}/gi).length;
}
console.table(WordCount ('Каждый охотник желает знать'));
console.table(WordCount ('Каждый охотник желает знать её имя'));
console.table(WordCount ('А где тут это?'));
console.table(WordCount ('О э я, э!'));
//console.table([WordCount ('Каждый охотник желает знать', 'Каждый охотник желает знать её имя', 'А где тут это?')]);