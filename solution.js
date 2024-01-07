const { nums, words } = require("./data/data.js");

"The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",

  class Node {
    constructor(num, word) {
      this.num = num;
      this.word = word;
      this.next = null;
    }
  }
//Creating new nodes
const node1 = new Node(1);
const node2 = new Node(2);
const nodeWord1 = new Node("The");
const node3 = new Node(3);
const nodeWord2 = new Node("quick");
const node4 = new Node(4);
const nodeWord3 = new Node("brown");
const node5 = new Node(5);
const nodeWord4 = new Node("fox");
const node6 = new Node(6);
const nodeWord5 = new Node("jumps");
const node7 = new Node(7);
const nodeWord6 = new Node("overs");
const node8 = new Node(8);
const nodeWord7 = new Node("the");
const node9 = new Node(9);
const nodeWord8 = new Node("lazy");
const node0 = new Node(0);
const nodeWord9 = new Node("dog");

console.log(node1)

// //Linking the nodes the annoying way
// node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node5
// node5.next = node6
// node6.next = node7
// node7.next = node8
// node8.next = node9
// node9.next = node0


// console.log(nums)
// console.log(words)

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  insert(node) {
    let currentNode = this.head;
    if (!currentNode) {
      currentNode = node
    } else if (currentNode.next) {
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    } else {
      currentNode.next = node
    }
  }
  size(node) {
    let count = 0
    let node = this.head
    while (node) {
      count++
      currentNode = currentNode.next
    }
    return count
  }
  clear() {
    this.head = null
  }
  delete(dataProp) {
    let currentNode = this.head
    if (currentNode.data === dataProp) {
      this.head = currentNode.next

    } else if (currentNode.next.data === dataProp) {
      currentNode.next = currentNode.next.next
    }
    while (currentNode) {
      if (currentNode.next?.data === dataProp) {

        currentNode.next = currentNode.next.next
      }
      currentNode = currentNode.next
    }
  }

  getFirst() {
    return this.head
  }
  getLast() {
    let currentNode = this.head
    while (currentNode?.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }

}



//New list

const newList = new LinkedList()
newList.insert(node1)
newList.insert(node2)
newList.insert(nodeWord1)
newList.insert(node3)
newList.insert(nodeWord2)
newList.insert(node4)
newList.insert(nodeWord3)
newList.insert(node5)
newList.insert(nodeWord4)
newList.insert(node6)
newList.insert(nodeWord5)
newList.insert(nodeWord6)
newList.insert(node7)
newList.insert(nodeWord7)
newList.insert(nodeWord8)
newList.insert(node8)
newList.insert(nodeWord9)
newList.insert(node9)
newList.insert(node0)

console.log(newList)

module.exports = {
  Node,
  LinkedList,
};
