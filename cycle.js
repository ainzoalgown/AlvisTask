
const array1 = [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];

for (let i = 0; i < array1.length; i++) {
    if (typeof array1[i] === "object") {
        console.log(array1[i])
    }
}
let people = [
    {name: 'Bradly', age: 74},
    {name: 'Juliya', age: 20},
    {name: 'Walter', age: 35},
    {name: 'Kristen', age: 12},
    {name: 'Sam', age: 2}
];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
};
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        console.log(people[i].name)
    };
};
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 65) {
        console.log(people[i].name)
    };
};
const addPeople = (name, age) => {
    return people.push({'name': name, 'age': age})
};
addPeople('aslan', 23);
console.log(people)
const getPositiveArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
};
let num1 = [10, -12, 231, 1, -32, -0.001, 75];
let num2 = [311, 122, -3, 132, 3.1, -2];
let num3 = [-2, -31, -65, -1, 7, -78, -5];

getPositiveArr(num1)