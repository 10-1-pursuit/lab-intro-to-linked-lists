const { nums, words } = require("./data/data.js");
class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

const node1 = new Node()

class LinkedList {
  constructor(head = null){
    this.head = head
  }

  insert(word) {
    let newWord = new Node(word);
    if (!this.head) {
      this.head = newWord;
    } else {
      newWord.next = this.head;
      this.head = newWord;
    }
  }

  size() {
    let count = 0;
    let currentNum = this.head;
    while (currentNum) {
      count++;
      currentNum = currentNum.next;
    }
    return count;
  }

  delete(data) {
    let newWord = this.head;
    let counter = 0;
    while (newWord.data !== data && newWord.next) {
      counter++;
      newWord = newWord.next;
    }
    let foundWord = newWord;
    newWord = this.head;
    for (let i = 1; i < counter; i++) {
      newWord = newWord.next;
    }
    newWord.next = foundWord.next;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  search(key) {
    let currentNum = this.head;
    while (currentNum !== null && currentNum.data !== key) {
      currentNum = currentNum.next;
    }
    return currentNum;
  }

  getLast() {
    let currentNum = this.head;
    if (!this.head) return null;
    while (currentNum.next) {
    currentNum = currentNum.next;
    }
    return currentNum;
  }

  isEmpty(){
    return !this.head
  }

  getKth(k){
    if(k > this.size())return null

    let counter = 1

    let currentNum = this.head

    while(k !== counter) {
      counter++

      currentNum = currentNum.next
    }
    return currentNum
  }

  toArray() {
    const result = [];//empty array, where the data from each node will be stored.
    let current = this.head;
  
    while (current) {
      result.push(current.data);//It pushes the data of the current node (current.data) into the dataArray.
      current = current.next;
    }
  
    return result;
  }

  containsDuplicates() {
    const seenValues = new Set(); //store the values encountered while traversing the linked list.
    let current = this.head;
  
    while (current !== null) {
      if (seenValues.has(current.data)) {
        //It checks if the seenValues set already contains the data of the current node.
        return true; // Found a duplicate
      }
      seenValues.add(current.data);
      //if the data of the current node is not in the seenValues set, it adds that data to the set to mark it as seen.
      current = current.next;
    }
  
    return false; // No duplicates found
  }


  getKthToLast(k) {
    if (k > this.size()) return null;

    let firstNum = this.head;
    let secondNum = this.head;//These variables  will traverse the list with a specific offset (k steps).

    for (let i = 0; i < k; i++) {
      firstNum = firstNum.next;
    }

    while (firstNum && firstNum.next) {
      firstNum = firstNum.next;
      secondNum = secondNum.next;
    }

    return secondNum;
  }

}

const list = new LinkedList()
list.insert(node1)
module.exports = {
  Node,
  LinkedList,
};
