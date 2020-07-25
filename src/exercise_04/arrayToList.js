export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }

  if (array == null) {
    throw new Error('Creating list from undefined array')
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array')
  }

  let prevNode = null;
  let firstNode = null
  for (let i = 0; i < array.length; i++) {
    let node = new Node(array[i])
    if (prevNode != null) {
      prevNode.next = node;
    } else {
      firstNode = node
    }
    prevNode = node;
  }

  return firstNode
}
