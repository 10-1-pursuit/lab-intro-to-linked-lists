const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.tail = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  insert(data) {
    let currentNode = this.head;
    const newNode = new Node(data)

    if (currentNode !== null) {
      newNode.next = currentNode
      this.head = newNode
    } else {
      this.head = newNode;
    }
  }
  size() {
    let count = 0
    let currentNode = this.head
    while (currentNode) {
      count++
      currentNode = currentNode.next
    }
    return count
  }

  isEmpty() {
    return this.head === null
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
  search(dataProp) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === dataProp) {
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    }
    return null
  }
  getKth(k) {
    if (k > this.size()) return null
    let counter = 1

    let currentNode = this.head
    while (k !== counter) {
      counter++
      currentNode = currentNode?.next
    }
    return currentNode
  }
  getKthToLast(k) {
    if (k > this.size()) return null
    return this.getKth(this.size() - k)
  }
  toArray() {
    let arryOfData = []
    let currentNode = this.head

    while (currentNode) {
      arryOfData.push(currentNode.data)
      currentNode = currentNode.next
    }
    return arryOfData
  }
  containsDuplicates(dataProp) {
    let currentNode = this.head

    while (currentNode) {
      let prevNode = currentNode.next

      while (prevNode) {
        if (currentNode.data === prevNode.data || currentNode.data === dataProp) {
          return true
        }
        prevNode = prevNode.next
      }
      currentNode = currentNode.next
    }
    return false
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
console.log("This is Kth", newList.getKth(2))

module.exports = {
  Node,
  LinkedList,
};
