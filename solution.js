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

  delete(dataProp) {
    let currentNode = this.head;
    if (currentNode.data == dataProp) {
      this.head = currentNode.next;
    } else if (currentNode.next.data === dataProp) {
      // console.log("Current Node: ", currentNode);
      // console.log("currentNode.next: ", currentNode.next);
      // console.log("currentNode.next.next: ", currentNode.next.next);
      currentNode.next = currentNode.next.next;
      // console.log ("New list:", this);
    }
    currentNode = currentNode.next;
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

  search(dataProp) {
    let currentNode = this.head;
    while (currentNode) {
      if(currentNode.data === dataProp) {
        return currentNode
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  getKth(k) {
    if(k > this.size()) return null;
    let counter = 1;
    let currentNode = this.head;
    while(k !== counter) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  isEmpty() {
    return !this.head;
  }

  clear(){
    this.head = null;
  }  
}

const list = new LinkedList()
list.insert(node1)
list.insert(node2)
list.insert(node3)
list.clear()
console.log(list.isEmpty())
// list.delete(13)
// console.log(list.search(node1))
// console.log(list.getKth(1))
// console.log(list.size())
// console.log(list.getFirst())
// console.log(list.getLast())
console.log(list)



module.exports = {
  Node,
  LinkedList,
};
