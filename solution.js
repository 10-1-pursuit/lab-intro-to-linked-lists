const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
const node1 = new Node(8);
const node2 = new Node(11);
const node3 = new Node(13);
// console.log(node1)

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    let newNode = new Node(data);
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
    while(currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
}

const list = new LinkedList()
list.insert(node1)
list.insert(node2)
list.insert(node3)
console.log(list.size())
console.log(list)



module.exports = {
  Node,
  LinkedList,
};
