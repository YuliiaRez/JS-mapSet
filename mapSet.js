'use strict';
/**Map
Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.*/
const arr1 = [1, 2, 'chto-to', 4,];
const arr2 = [9, 8, 7, 6];
const arr3 = [...arr1, ...arr2]
const arr4 = arr3.entries();
const map1 = new Map(arr4);
console.log(map1);

/*Получите список ключей и значений отдельно.*/
const listKeys = map1.keys();
const listValues = map1.values();
console.log('listKeys', listKeys);
console.log('listValues', listValues);
//Получите текущее количество элементов.
const mapSize = map1.size;
console.log('mapSize', mapSize);
//Добавьте и удалите элемент
map1.set(11, 88888);
console.log('map1.set(11, 88888);', map1);
map1.delete(2);
console.log('map1.delete(2);', map1);
//Произведите поиск по ключу*/
const mapHas11 = map1.has(11);
console.log('mapHas11', mapHas11);

//Set

//Создайте коллекцию Set с начальными значениями 1,2,3.
const set1 = new Set([1, 2, 3]);
console.log(set1);
//С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4..
console.log('set1.has(3)', set1.has(3));
console.log('set1.has(4)', set1.has(4));

//Добавите еще несколько элементов.
set1.add(5);
set1.add(6);
console.log('add 5,6', set1);

//С помощью цикла for-of переберите ее значения и выведите в консоль.
for (let item of set1) {
    console.log(item);
}
//Найдите сумму этих значений.
function sum(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
};
console.log('sum(set1)', sum(set1));
//Удалите элемент 2.
set1.delete(2);
console.log(set1);

//Очистите всю коллекцию.
console.log('set1.clear()', set1.clear());

