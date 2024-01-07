const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
    this.tail = null
  }
  insert(data) {
    const newNode = new Node(data)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    // newNode.next = this.head
    // this.head = newNode
  }
  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }
  delete(key) {
    let current = this.head
    // let prev = null

    while (current) {
      if (current.data === key) {
        if (current.prev) {
          current.prev.next = current.next
        } else {
          this.head = current.next
        } 
        if(current.next){
          current.next.prev = current.prev
        } else {
          this.tail = current.prev
        }
        return
      }
      current = current.next
    }
  }
  getFirst() {
    return this.head
  }
  getLast() {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  search(key) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.data === key) {
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    }
    return null
  }
  getKth(k) {
    if (k > this.size()) return null
    let count = 1
    let currentNode = this.head
    while (k !== count) {
      count++
      currentNode = currentNode.next
    }
    return currentNode
  }
  getKthToLast(k) {
    if (k > this.size()) return null;

    let fastPointer = this.head;
    let kthPointer = this.head;

    for (let i = 0; i < k; i++) {
      fastPointer = fastPointer.next;
    }

    while (fastPointer && fastPointer.next) {
      fastPointer = fastPointer.next;
      kthPointer = kthPointer.next;
    }

    return kthPointer;
  }
  isEmpty() {
    return !this.head
  }
  clear() {
    this.head = null
  }
  toArray() {
    let dataArr = []
    let currentNode = this.head
    while (currentNode) {
      dataArr.push(currentNode.data)
      currentNode = currentNode.next
    }
    return dataArr
  }
  containsDuplicates() {
    let currentNode = this.head

    while (currentNode) {
      let remainingNode = currentNode.next

      while (remainingNode) {
        if (currentNode.data === remainingNode.data) {
          return true
        }
        remainingNode = remainingNode.next
      }
      currentNode = currentNode.next
    }
    return false
  }
}

module.exports = {
  Node,
  LinkedList,
};
