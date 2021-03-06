/*
Индексация элементов строки
Строка — это индексированный набор из нуля или более символов, заключенных в одинарные, двойные или косые кавычки.

Индексация элементов строки начинается с нуля. Например, в строке 'JavaScript' буква 'J' стоит на позиции с индексом 0, а 't' идёт под индексом 9. При этом длина строки 'JavaScript' равна 10, то есть индекс последнего элемента всегда на единицу меньше чем её длина.

Для доступа к значению элемента строки используется синтаксис квадратных скобок строка[индекс].

const productName = 'Ремонтный дроид';
console.log(prodctuName[0]); // 'P'
console.log(productName[5]); // 'т'
console.log(productName[14]); // 'д'
console.log(productName[productName.length - 1]); // 'д'
Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана — она такая навсегда. Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

courseTopicLength - длина строки.
firstElement - первый символ строки.
lastElement - последний символ строки.
Тесты
Объявлена переменная courseTopic.
Значение переменной courseTopic это строка 'JavaSript для начинающих'.
Объявлена переменная courseTopicLength.
Значение переменной courseTopicLength это число 24.
Объявлена переменная firstElement.
Значение переменной firstElement это строка 'J'.
Объявлена переменная lastElement.
Значение переменной lastElement это строка 'х'.

*/
const courseTopic = 'JavaSript для начинающих';
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
console.log(courseTopicLength.length);

const firstElement = courseTopic[0];
console.log(firstElement[0]);
const lastElement = courseTopic[courseTopic.length-1];
console.log(lastElement[lastElement.length-1]);



// Пиши код выше этой строки