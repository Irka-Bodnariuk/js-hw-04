function countProps(object) {
  // Change code below this line
  let propCount = 0;
  const keys = Object.keys(object);
  propCount = keys.length;

  return propCount;
  // Change code above this line
}

console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
