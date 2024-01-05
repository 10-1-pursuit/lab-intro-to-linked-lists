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
  
}

const list = new LinkedList()
list.insert(node1)
module.exports = {
  Node,
  LinkedList,
};
