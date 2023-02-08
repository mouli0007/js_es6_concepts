//  For Of Loop ! and For-in-Loop

// Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over. The for...in statement iterates over the enumerable string properties of an object, while the for...of statement iterates over values that the iterable object defines to be iterated over.

// For Of Loop !
//  it fill fetch the values

let num = [1, 2, 3, 4, 5];

for (let i of num) {
  if (i !== undefined) {
    console.log(i);
  }
}

// For in loop
//  it fill fetch the key  and with that you can get the values

for (let i in num) {
  if (i !== undefined) {
    console.log(num[i]);
  }
}

// Object Example !

const obj = {
  name: 'Mouli VJ',
  age: 25,
  job: 'Front-endd-developer !',
};

for (let o in obj) {
  console.log(obj[o]);
}

// We cant use for of in object !
