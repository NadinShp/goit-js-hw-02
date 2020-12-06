//разбиваем message на слова;
//Подсчитываем колличество слов;
//умножаем колличество слов на цену.
const calculateEngravingPrice = function (message, pricePerWord) {
  const arrayFromMessage = message.split(' ');
  const totalPrice = arrayFromMessage.length * pricePerWord;
  return totalPrice;
}

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120