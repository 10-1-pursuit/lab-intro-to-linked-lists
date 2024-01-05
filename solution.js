const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
  
}

const firstNode = new Node(3)
const secondNode = new Node(6)
const thirdNode = new Node(9)

// console.log(firstNode)

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
  
}

const list = new LinkedList()

console.log(list)

module.exports = {
  Node,
  LinkedList,
};
