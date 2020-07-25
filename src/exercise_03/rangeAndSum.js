export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const isRevert  = (end - start) < 0
  const result = []
  let steps = Math.abs(start - end)
  let current = start
  for (let i = 0; i < steps; i++) {
    result.push(current)
    current = isRevert ? current - 1 : current + 1
  }

  return result
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let sum = 0
  numbers.forEach((n) => {
    sum += n
  });
  return sum
}
