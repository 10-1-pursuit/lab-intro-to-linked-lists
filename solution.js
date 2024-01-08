const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
const node = new Node(8);
console.log(node)

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

}

const list = new LinkedList()
console.log(list);

module.exports = {
  Node,
  LinkedList,
};
