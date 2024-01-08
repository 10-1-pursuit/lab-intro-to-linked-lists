const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    let newNode = new Node(data);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = newNode;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  //the test is expecting the last item not 1st
  getLast() {
    return this.head;
  }

  //tests expect the opposite last item
  getFirst() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  delete(dataProp) {
    let currentNode = this.head;
    //if data matches to the params
    if (currentNode.data === dataProp) {
      //move head to the next
      this.head = currentNode.next;
    } else if (currentNode.next.data === dataProp) {
      currentNode.next = currentNode.next.next;
    }
    while (currentNode) {
      if (currentNode.next?.data === dataProp) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }
  }

  isEmpty() {
    return !this.head;
  }

  search(dataProp) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === dataProp) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
      currentNode = currentNode.next;
    }
  }

  toArray() {
    const resultArray = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      resultArray.push(currentNode.data);
      currentNode = currentNode.next;
    }
    //the tests ask for a reversed arr
    return resultArray.reverse();
  }

  containsDuplicates() {
    const seenValues = new Set();
    let current = this.head;

    while (current !== null) {
      if (seenValues.has(current.data)) {
        return true;
      }

      seenValues.add(current.data);
      current = current.next;
    }

    return false;
  }

  getKth(k) {
    let currentNode = this.head;

    if (k > this.size() || this.head === null) {
      return null;
    }

    let counter = 1;

    while (currentNode !== null && counter < k) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode ? currentNode.data : null;
  }

  getKthToLast(k) {
    if (k < 1 || this.head === null) {
      return null; // Invalid input or empty list
    }

    let slow = this.head;
    let fast = this.head;

    // Move the fast pointer k positions ahead
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null; // k is greater than the length of the list
      }
      fast = fast.next;
    }

    // Move both pointers until the fast pointer reaches the end
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow ? slow.data : null; // Return data if found, otherwise null
  }
}

const linkedList = new LinkedList();
const node1 = new Node(1000);
linkedList.insert(node1);

module.exports = {
  Node,
  LinkedList,
};
