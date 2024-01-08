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


  insert(node) {
    let currentNode = this.head;
    if (!currentNode) {
      this.head = node;
    } else if (currentNode.next) {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      currentNode.next = node;
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

  delete(dataProp) {
    let prevNode = this.head;
    let currentNode = this.head?.next;

    if (prevNode.data === dataProp) {
      this.head = currentNode;
    } else if (currentNode.data === dataProp) {
      prevNode.next = currentNode.next;
    } else {
      while (currentNode) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  getFitst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode?.next) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  search(dataProp) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === dataProp) {
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

  getKthToLast(k) {
    if (k >= this.size()) return null;
    
    let counter = this.head;
    let currentNode = this.head;

    for (let i = 0; i < k; i++) {
      if (counter === null) {
        return null;
      }
      counter = counter.next;
    }

    while (counter !== null) {
      currentNode = currentNode.next;
      counter = counter.next;
    }
   
    return currentNode.data;
}

  isEmpty(){
    return this.head === null;
}

clear(){
  this.head = null
}

toArray() {
  // Initialize an empty array
  const arr = [];
  
  // Iterate through all the nodes, and push the data from each node to the array
  let current = this.head;

  while (current !== null) {
    arr.push(current.data);
    current = current.next;  // Move to the next node
  }

  // Return the array after iterating through all nodes
  return arr;
}
containsDuplicates() {
  if (this.head === null) {
    return false;
  }
  // Create a set to store unique values
  const newSet = new Set();

  let current = this.head;
  while (current !== null) {
    // Check if the current node's data is already in the set
    if (newSet.has(current.data)) {
      return true; // Found a duplicate
    } else {
      // Add the current node's data to the set
      newSet.add(current.data);
    }
    current = current.next;
  }
  return false;
}


}

module.exports = {
  Node,
  LinkedList,
};
