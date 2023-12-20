###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

#### Answer: B

In the code provided, there is a typo where the variable "greetign" is declared instead of "greeting." As a result, the variable "greeting" remains undefined.

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

#### Answer: A

In JavaScript, when you use the + operator to add values, if one or both of the operands are strings, JavaScript will perform string concatenation instead of numerical addition. In this case, 1 is a number, and "2" is a string.

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

#### Answer: A

info.favoriteFood is initially assigned the value "🍕" which is the first element of the food array. Then info.favoriteFood is reassigned to "🍝". Reassigning info.favoriteFood does not modify the food array.

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

#### Answer: B

In the function sayHi, the name parameter is not given a default value, so when you call sayHi() without passing an argument, name is undefined. Therefore, the returned string will be "Hi there, undefined."

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

#### Answer: B

Since there are two truthy values in the array (1 and 2), the count variable is incremented twice, resulting in a final value of 2.
