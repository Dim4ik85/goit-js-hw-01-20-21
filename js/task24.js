/*
Задача: расчёт скидки
Задание
Функция getDiscount(totalSpent) определяет значение скидки в 
зависимости от общей суммы потраченных денег (параметр totalSpent)
 в магазине за всё время (партнёрская программа). Скидка 
 записывается в переменную discount и возвращается из функции как
  результат её работы.

Используя ветвления и логические операторы, дополни код функции.

Если потрачено от 50000 или больше кредитов - скидка 10% (золотой партнёр)
Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

Тесты
Объявлена функция getDiscount(totalSpent).
Вызов getDiscount(137000) возвращает 0.1.
Вызов getDiscount(46900) возвращает 0.05.
Вызов getDiscount(8250) возвращает 0.02.
Вызов getDiscount(1300) возвращает 0.
Вызов getDiscount(5000) возвращает 0.02.
Вызов getDiscount(20000) возвращает 0.05.
Вызов getDiscount(50000) возвращает 0.1.

*/
function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Пиши код ниже этой строки
  if (totalSpent >= 50000){
    //console.log(`Золотой партнер, скидка 10%`);
    discount =  GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    //console.log('Серебрянный партнер, скидка 5%');
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
      //console.log('Бронзовый партнер, скидка 2%');
      discount = BRONZE_DISCOUNT;
  } else 
    //console.log('Базовый партнёр, скидка 0%');
    discount = BASE_DISCOUNT;
    // Пиши код выше этой строки
    //return discount;
  }
  getDiscount(137000);// возвращает 0.1.
 getDiscount(46900);// возвращает 0.05.
 getDiscount(8250);// возвращает 0.02.
 getDiscount(1300);// возвращает 0.
 getDiscount(5000);// возвращает 0.02.
 getDiscount(20000);// возвращает 0.05.
 getDiscount(50000);// возвращает 0.1.