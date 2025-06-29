export const sumMultiNumber = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

export const subtractOfMultiNumber = (...numbers) => {
  return numbers.reduce((a, b) => a - b);
};