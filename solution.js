const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const newNode = new Node(3);
const newNode2 = new Node(6);
const newNode3 = new Node(9);

// console.log(firstNode)

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Takes in a node as a parameter
  // Adds the node from the param to the end of the list
  insert(node) {
    // Initilize a variable to the head of the linkedlist
    let currentNode = this.head;
    // Check if there is no head, meaning if the list is empty or head is null,
    if (!currentNode) {
      // If the list is empty the head property is set to the param we are passing in
      this.head = node;
      // Otherwise if there a node after the head, or next is not null create a while loop
    } else if (currentNode.next) {
      // As long as or while the next node after the head exists or while next is not null keep checking if the next node has a next node after that one.
      while (currentNode.next) {
        // while there is a next set the currentNode which is the head, to the next node
        currentNode = currentNode.next;
      }
      // The while loop breaks when currentNode.next is false / when next is null, meaning you are at the end of the list.
      // Once at the end just assign the next property to the param you are passing in
      currentNode.next = node;
    } else {
      // Otherwise if there is a head but no next is null, assign the next to the param you are passing
      currentNode.next = node;
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
}

const newList = new LinkedList();

newList.insert(newNode);
newList.insert(newNode2);
newList.insert(newNode3);

// console.log(newList);
// console.log(newList.size());
// newList.clear();

console.log(newList);

module.exports = {
  Node,
  LinkedList,
};
