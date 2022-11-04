let balance = 100;
let transactionAmount = 100;
let receivedСode = "A001DFX0";
let enteredСode = "A001DFX0";
let postomatCellContent = '4 - ваша посылка';
let postomat = [null, null, null, postomatCellContent, null];

if (balance >= transactionAmount) {
  if (receivedСode == enteredСode) {
    balance -= transactionAmount;
    console.log(
      `Вы получили посылку из ячейки ${postomat.indexOf(postomatCellContent) + 1} и ваш счет составляет: ${balance}р.`
    );
  } else {
    console.log("Введён неверный код");
  }
} else {
  console.log(`Недостаточно средств, ваш счет составляет: ${balance}р.`);
}
