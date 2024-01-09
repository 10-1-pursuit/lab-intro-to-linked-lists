const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// const newNode = new Node(3);
// const newNode2 = new Node(6);
// const newNode3 = new Node(9);
// console.log(newNode)

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Takes in data as a parameter (not a node)
  insert(data) {
    // Initilize a variable to the head of the linkedlist
    let currentNode = this.head;
    // Create a new instance of the Node class with the data from the param
    const newNode = new Node(data)
    // Check if there is no head, meaning if the list is empty or head is null,
    if (!currentNode) {
      // If the list is empty the head property is set to the param we are passing in
      this.head = newNode;
      // Otherwise if there a node after the head, or next is not null create a while loop
    } else {
      // As long as or while the next node after the head exists or while next is not null keep checking if the next node has a next node after that one.
      while (currentNode.next) {
        // while there is a next set the currentNode which is the head, to the next node
        currentNode = currentNode.next;
      }
      // The while loop breaks when currentNode.next is false / when next is null, meaning you are at the end of the list.
      // Once at the end just assign the next property to the param you are passing in
      currentNode.next = newNode;
    } 
  }

  size() {
    // Initialize a variable to keep count, set it to 0
    let count = 0;
    // Initialize a  currentNode to hold the node we are looking at, as the head
    let currentNode = this.head;
    // While currentNode is truthy incriment the count by 1 and reassign currentNode to be the next node
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    // return the count variable
    return count;
  }

  clear() {
    // If we assign the head to null then the list becomes empty
    this.head = null;
  }

  getFirst() {
    // The head is always the first in the list so we can just return the head
    return this.head;
  }

  getLast() {
    // Initialize a currentNode variable to keep track of the current head node value
    let currentNode = this.head;
    //While there is a node after the head(or while next is not null), reassign the currentNode(which is the current head) to currentNode.next
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const newList = new LinkedList();

// newList.insert(newNode);
// newList.insert(newNode2);
// newList.insert(newNode3);


for (let i = 0; i < words.length; i++) {
  newList.insert(words[i])
}

console.log(newList);
// console.log(newList.size());
// newList.clear();

// console.log(newList.getFirst());
// console.log(newList.getLast());

module.exports = {
  Node,
  LinkedList,
};
