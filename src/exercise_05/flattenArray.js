export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array == null) {
    throw new Error('Flatten undefined or null array')
  }

  let result = [];
  array.forEach(i => {
    if (Array.isArray(i)) {
      i.forEach(t => {
        result.push(t)
      });
    } else {
      result.push(i)
    }
  });

  // function flatten(item) {
  //   if (Array.isArray(item)) {
  //     for (let i = 0; i < item.length; i++) {
  //       flatten(item[i])
  //     }
  //   } else {
  //     result.push(item)
  //   }
  // }

  return result
}
