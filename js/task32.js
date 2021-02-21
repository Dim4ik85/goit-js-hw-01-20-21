/*
Метод slice()
Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

const productName = 'Ремонтный дроид';
console.log(productName.slice(0, 4)); // 'Ремо'
console.log(productName.slice(3, 9)); // 'онтный'
console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
console.log(productName.slice(10, productName.length)); // 'дроид'
Задание
Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

string - оригинальная строка
length - количество символов с начала строки для подстроки
Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

Тесты
Объявлена функция getSubstring(string, length).
Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
Вызов функции getSubstring('Привет мир', 0) возвращает ''.

*/

function getSubstring(string, length) {
    const substring = 'Привет мир'.slice(string, length); // Дополни эту строку
    //const substring = string.slice(0, length);//2-й вариант
 console.log(substring);
   // return substring;
  }
  getSubstring('Привет мир', 3);// возвращает 'При'.
 getSubstring('Привет мир', 6);// возвращает 'Привет'.
 getSubstring('Привет мир', 8);// возвращает 'Привет м'.
 getSubstring('Привет мир', 10);// возвращает 'Привет мир'.
 getSubstring('Привет мир', 0);// возвращает ''.
