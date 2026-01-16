// Функція повертає масив користувачів старших за заданий вік. У порядку зростання.  З перевіркою наявності потрібних ключів.

const users = [
  { name: "John", age: 25, isMale: true },
  { name: "Jane", age: 30, isMale: false },
  { name: "Mike", age: 20, isMale: true },
  { name: "Emily", age: 27, isMale: false },
  { name: "Tom", age: 35, isMale: true },
];

// function olderThan(number) {
//   const newAgeList = users
//     .filter((user) => {
//       return user.hasOwnProperty("age") && user.age > number;
//     })
//     .sort((a, b) => a.age - b.age);
//   return newAgeList;
// }

// or

function olderThan(number) {
  return users
    .filter((u) => u.hasOwnProperty("age") && u.age > number)
    .sort((a, b) => a.age - b.age);
}

console.log(olderThan(20));
