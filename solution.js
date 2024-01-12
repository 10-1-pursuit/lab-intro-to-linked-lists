const { inspect } = require("util");

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
    const newNode = new Node(data);
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
    // If it's the head node return the data else null
    return this.head ? this.head : null;
  }

  getLast() {
    // Initialize a currentNode variable to keep track of the current head node value
    let currentNode = this.head;
    //While there is a node after the head(or while next is not null), reassign the currentNode(which is the current head) to currentNode.next
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    // The loop breaks when the is no next node or when next = null
    // meaning we are at the end of the list so we return the currentNode
    return currentNode;
  }

  // returns true or false if there are any duplicates
  containsDuplicates() {
    // Initialize a variable, currentNode to track the current node head
    let currentNode = this.head;
    // while there is a node or while there is a node in the list keep going through the list
    // console.log(currentNode.data)
    // console.log(currentNode.next)
    while (currentNode) {
      // Initialize a nextNode variable to compare the currentNode's data
      let nextNode = currentNode.next;
      // while there is a node next to the node we are currently looking at keep comparing
      while (nextNode) {
        // If the currentNode.data equals the currentNode.next.data return true
        if (currentNode.data === nextNode.data) {
          return true;
        }
        nextNode = nextNode.next;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  getKth(k) {
    // using the .size() method above we can say...
    // if the param(k) is greater than the size() of the list
    if (k > this.size()) {
      //return null
      return null;
    }
    // Initialize a counter variable to keep count of each node as we go through the list
    // We start at one because
    let counter = 1;
    // initialize currentNode to be this.head to track the current node
    let currentNode = this.head;
    // While the k does not equal the counter start a while loop
    while (k !== counter) {
      // and increase the counter by one
      counter++;
      // and reassign the currentNode, which is the head starting at 1, to the next node
      currentNode = currentNode.next;
      // the loop ends when the num being passed through the param(k), is equal to the counter
    }
    // When the loop ends k = counter which means the node at that position was found
    // return currentNode
    return currentNode;
  }

  isEmpty() {
    // If there is no head node return true
    return !this.head ? true : false;
  }

  toArray() {
    // Initialize an empty array to store the data from the linked list
    let array = [];
    // Initialize currentNode to this.head to track the current node
    let currentNode = this.head;
    // Loop through the list and get each node's data and while doing that push it into an array
    // while there is a node
    while (currentNode) {
      // while there is a next node, push the current node's data to the array
      array.push(currentNode.data);
      // and them move onto the next node by reassigning currentNode to currentNode.next
      currentNode = currentNode.next;
      console.log(array);
    }
    //return array
    return array;
  }

  // getKthToLast(){}

  // delete(){}

  // search(){}
}

const newList = new LinkedList();

// newList.insert(newNode);
// newList.insert(newNode2);
// newList.insert(newNode3);

for (let i = 0; i < words.length; i++) {
  newList.insert(words[i]);
}

// console.log(newList);
// console.log(inspect(newList, true, 15))
// console.log(newList.size());
// newList.clear();

// console.log(newList.getFirst());
// console.log(newList.getLast());
// console.log(newList.containsDuplicates());

// console.log(newList.getKth(5));

console.log(newList.toArray());
// console.log(newList);

module.exports = {
  Node,
  LinkedList,
};
