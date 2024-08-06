/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
function calculateTotalSpentByCategory(transactions) {
  if (!transactions.length) {
    return [];
  }
  let uniqueCategory = [];
  let count = 0;
  let start = false;

  for (let i = 0; i < transactions.length; i++) {
    for (let j = 0; j < uniqueCategory.length; j++) {
      if (transactions[i]["category"] === uniqueCategory[j]) {
        start = true;
      }
    }
    count++;
    if (count === 1 && start === false) {
      uniqueCategory.push(transactions[i]["category"]);
    }
    start = false;
    count = 0;
  }

  const resultArray = [];
  uniqueCategory.forEach(c => {
    let temp = { category: c, totalSpent: 0 };
    transactions.forEach(t => {
      if (c === t.category) {
        temp.totalSpent += t.price;
      }
    });
    resultArray.push(temp);
  });
  return resultArray;
}

module.exports = calculateTotalSpentByCategory;
