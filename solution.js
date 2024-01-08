const { nums, words } = require("./data/data.js");


class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  delete(key) {
    if (!this.head) {
      return;
    }

    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== key) {
      prev = current;
      current = current.next;
    }

    if (!current) {
      return; // Key not found
    }

    prev.next = current.next;
  }

}

module.exports = {
  Node,
  LinkedList,
};

