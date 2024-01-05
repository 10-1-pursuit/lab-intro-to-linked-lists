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
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

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

  getLast() {
    return this.head;
  }

  getFirst() {
    let currentNode = this.head;
    if (!currentNode.next) {
      return currentNode;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }
  getKth(k) {
    if (k > this.size()) return null;
    let counter = 1;
    let currentNode = this.head;

    while (k !== counter) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search(word) {
    let currentNode = this.head;

    while (currentNode) {
      if (word === currentNode.data) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  isEmpty() {
    return !this.head;
  }

  toArray() {
    let value = [];
    let currentNode = this.head;

    while (currentNode) {
      value.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return value;
  }
}

let list = new LinkedList();
let list2 = new LinkedList();

// for(let i = words.length-1; i > 0; i--){
//   list.insert(words[i])
// }

// for(let i = nums.length-1; i >= 0; i--){
//   list2.insert(nums[i])
// }

for (let word of words) {
  list.insert(word);
}

for (let num of nums) {
  list2.insert(num);
}

// console.log(list)
console.log(list2.getKth(4));

module.exports = {
  Node,
  LinkedList,
};
