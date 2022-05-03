// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10
let i = 1;
let result = 1;
while (i < 11) {
  result = result * 2;
  i++;
}
console.log(result);

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
//Вариант номер 1
const power = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * 2;
  }
  return result;
};

console.log(power(10));

//Вариант номер 2
const power2 = function (num) {
  return 2 ** num;
};

console.log(power2(10));

//Вариант номер 3
const power3 = function (num) {
  return Math.pow(2, num);
};

console.log(power3(10));

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ":)";
let result2 = "";
for (let i = 1; i <= 4; i++) {
  result2 += word;
  console.log(result2);
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows)

//Вариант номер 1
function printSmile(stroka, numberOfRows) {
  let result = "";
  for (let i = 1; i <= numberOfRows; i++) {
    result += stroka;
    console.log(result);
  }
}
printSmile(":(", 5);

//Вариант номер 2
function printSmile2(stroka, numberOfRows) {
  for (let i = 1; i <= numberOfRows; i++) {
    console.log(stroka.repeat(i));
  }
}
printSmile2("=)", 6);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и (число) согласных букв

//Вариант 1
const getWordStructure = function (word) {
  let n = 0;
  let k = 0;
  let gl = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
  let sogl = ["b","B", "c","C","d","D","f","F","g","G","h","H","j","J","k","K","l","L","m","M","n","N",
    "p","P","q","Q","r","R","s","S","t","T","v","V","w","W","x","X","y","Y","z","Z"];

  for (i = 0; i < word.length; i++) {
    for (j = 0; j < gl.length; j++) {
      if (word[i] === gl[j]) {
        n++;
        break;
      }
    }
    for (q = 0; q < sogl.length; q++) {
      if (word[i] === sogl[q]) {
        k++;
        break;
      }
    }
  }
  console.log(
    "Слово " + word + " состоит из " + n + " гласных и " + k + " согласных"
  );
};
getWordStructure("Tetiana ataraxiaz");

//Вариант 2
function getWordStructure2(word) {
  const vowels = "aeiouy".split("");
  const consonants = "bcdfghjklmnpqrstvwxz".split("");
  let numberOfVowels = 0;
  let numberofConsonants = 0;
  for (char of word.toLowerCase()) {
    if (vowels.includes(char)) numberOfVowels++;
    if (consonants.includes(char)) numberofConsonants++;
  }
  console.log(
    `Слово ${word} состоит из ${numberOfVowels} гласных и ${numberofConsonants} согласных букв`
  );
}

getWordStructure2("case");
getWordStructure2("Case");
getWordStructure2("Check-list");

//Вариант 3
function getWordStructure3(word) {
  let vowels = word.match(/[aeiou]/gi);
  let consonants = word.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  console.log(
    "Word '" +
      word +
      "' consists of " +
      vowels.length +
      " vowel and " +
      consonants.length +
      " consonant letters"
  );
}

getWordStructure3("case");
getWordStructure3("Case");
getWordStructure3("Check-list");
getWordStructure3("X Æ A-12");

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

//Вариант 1
function isPalindrom(word) {
  let newStroka = "";
  for (i = word.length - 1; i >= 0; i--) {
    newStroka = newStroka + word[i];
  }
  if (word.toLowerCase() == newStroka.toLowerCase()) {
    console.log(word, "- палиндром");
  } else {
    console.log(word, "- не палиндром");
  }
}

isPalindrom("Ab1ba");
isPalindrom("Ab12ba");

//Вариант 2
function isPalindrom2(str) {
  str = str.toLowerCase();

  // find the length of a string
  const len = str.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (str[i] !== str[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
console.log(isPalindrom2("alllla"));

//Вариант 3
function isPalindrom3(word) {
  return word.toLowerCase() == word.toLowerCase().split("").reverse().join("");
}

console.log(
  `${isPalindrom3("Abba") ? "It is a palindrome" : "It is not a palindrome"}`
);

console.log("Tetiana and ataraxiaz".split("a"));
console.log([1, 2, 3, 4, 5].join("//"));