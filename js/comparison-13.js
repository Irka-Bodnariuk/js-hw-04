function changeEven(numbers, value) {
  // Change code below this line
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }

  const newNumbers = [];
  numbers.forEach(element => {
    if (element % 2 === 0) {
      newNumbers.push(element + value);
    } else {
      newNumbers.push(element);
    }
  });
  return newNumbers;
  // Change code above this line
}
console.log(changeEven([1, 2, 3, 4, 5], 10));
