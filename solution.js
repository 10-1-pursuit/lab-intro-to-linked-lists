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

  insert(info) {
    let newNode = new Node(info);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  isEmpty() {
    return this.head === null;
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === key) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
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

  delete(key) {
    let currentNode = this.head;
    if (currentNode.data === key) {
      this.head = currentNode.next;
    } else if (currentNode.next.data === key) {
      currentNode.next = currentNode.next.next;
    }
    while (currentNode) {
      if (currentNode.next?.data === key) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  duplicates() {
    let array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    let dup = array.filter((item, index) => array.indexOf(item) !== index);

    if (dup) return true;
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
