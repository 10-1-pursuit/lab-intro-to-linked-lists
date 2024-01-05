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
  insert(data) {
    // If data is an array:
    //   For each element in data:
    //     Create a new Node with the element
    //     If head is null:
    //       Set head to the new Node
    //     Else:
    //       Traverse to the end of the list and append the new Node
    // Else:
    //   Create a new Node with the data
    //   If head is null:
    //     Set head to the new Node
    //   Else:
    //     Set the next of the new Node to the current head
    //     Set head to the new Node
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }
  delete(key) {
    let prev = this.head;
    let current = this.head?.next;

    if (prev.data === key) {
      this.head = current;
    } else if (current.data === key) {
      prev.next = current.next;
    }

    while (current) {
      prev = current;
      current = current.next;

      if (current?.data === key) {
        prev.next = current.next;
        return;
      }
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let current = this.head;
    if (!current.next) {
      return current;
    } else {
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  }
  search(element) {
    let current = this.head;
    while (current) {
      // while a head exists && if my search param === head.data
      if (element === current.data) {
        return current; //aka the head
      } else {
        // otherwise head = head.next; continue looping & reassigning until condition met
        current = current.next;
      }
    }
    // return null
  }
  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
     return arr;
  }
  
  getKth(k) {
    if (k > this.size()) return null;
    let counter = 1;
    let current = this.head;
    while (k !== counter) {
      counter++;
      current = current.next;
    }
    return current;
  }
  getKthToLast(k) {
    // minus k to equal whatever it asked

    let array = this.toArray();
    if (array.length < k) return null;

    let index = array.length - (k);

    let found = this.getKth(index);

    return found;
  }
  isEmpty(){
    return !this.head
  }
  clear(){
    this.head = null
  }
  containsDuplicates(){
    let arr = this.toArray()
    const newArr = new Set(arr)
    return newArr.size !== this.size()
  }
}

const demo = new Node(3);
const demo2 = new Node(2);
const demo3 = new Node(5);

const linkedList = new LinkedList(demo);

linkedList.insert(demo2);
linkedList.insert(demo3);
console.log(linkedList.getKthToLast(2));
linkedList.delete(demo2);
// console.log(linkedList);


module.exports = {
  Node,
  LinkedList,
};

/*
- Create a Node class with properties
  - data
  - next
- Create a linked list with properties
  - head
- Linked List Methods
  - `insert`
  - `size`
  - `delete` by key
  - `getFirst` element
  - `getLast` element
  - `search` an element by key and return data
  - `getKth` retrieve kth element
  - `getKthToLast` retrieve kth from last element
  - `isEmpty` check if list is empty
  - `clear` the linked list
  - `toArray`convert data from linked list to an array
  - `containsDuplicates` check for duplicates - return true if contains duplicates, false if not
*/

/*

reverse(){
// 1. Initilize new reversedArr var and assign it the output of the toArray() call on this
linked list, and also call the reverse method on the newly created array(this can be done in one or two steps)
// 2. Initialize a new empty array (reversedNodes) to hold our nodes as we create them (this
will help us keep the nodes so we can update their "next" props)
// 3. Iterate through the reversedArr
// 3a. Create a new instance of the Node class for each value.
/ 3b. Push that new node to the reversedNodes array
/ 3c. If i - 1 >= 0, assign the next node of the element in that index of reversedNodes
to be the newly created node ( reversedNodes [i - 1].next = node )
11 4. Reassign this. head to be the first element in the reversedNodes array

*/
