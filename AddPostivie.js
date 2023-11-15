function sumOfPositiveNumbers(numbers) {
  // Filter out positive numbers
  const positiveNumbers = numbers.filter(num => num > 0);

  // Calculate the sum of positive numbers
  const sum = positiveNumbers.reduce((acc, num) => acc + num, 0);

  return sum;
}

// Example usage:
const numbersArray = [1, -2, 3, 4, -5, 6];
const result = sumOfPositiveNumbers(numbersArray);
console.log(result); // Output: 14