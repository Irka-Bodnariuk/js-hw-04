// Change code below this line
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
};
// Change code above this line
console.log(calculateTotalPrice([12, 85, 37, 4]));
