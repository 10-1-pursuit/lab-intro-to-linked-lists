const { nums, words } = require("./data/data.js");
 
class Node{
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    this.prev = null;
  }
}

class LinkedList{
  constructor(head = null){
    this.head = null;
    this.tail = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (!this.head ){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  size(){
    let count = 0;
    let node = this.head;

    while (node){
      count++;
      node = node.next
    }
    return count;
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

  getFirst(){
    return this.head
  }

  getLast(){
    let currentNode = this.head
    while (currentNode.next){
      currentNode = currentNode.next
    }
    return currentNode
  }
  search(data){
    let currentNode = this.head;
    while(currentNode){
      if ( currentNode.data === data){
        return currentNode
      } else {
        currentNode = currentNode.next;
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
isEmpty(){
  return !this.head
}
clear(){
  this.head = null
}
toArray(){
  let dataArr = []
  let currentNode = this.head
  while (currentNode){
    dataArr.push(currentNode.data)
    currentNode = currentNode.next
  }
  return dataArr
}
containsDuplicates(){
  let currentNode = this.head

  while(currentNode){
    let remainingNode = currentNode.next

    while(remainingNode){
      if(currentNode.data === remainingNode.data){
        return true
      }
      remainingNode = remainingNode.next
    }
    currentNode = currentNode.next
  }
  return false
}
}


const linkedList = new LinkedList();

// Insert nodes
linkedList.insert(3);
linkedList.insert(7);
linkedList.insert(11);

console.log(linkedList.size()); // Prints out 3
console.log(linkedList.getFirst()); // Prints out 11
console.log(linkedList.getLast()); // Prints out 3

linkedList.delete(7);
console.log(linkedList.size()); // Prints out 2

console.log(linkedList.search(3)); // Prints out 3
console.log(linkedList.getKth(1)); // Prints out 3
console.log(linkedList.getKthToLast(1)); // Prints out 11

console.log(linkedList.isEmpty()); // Prints out false
linkedList.clear();
console.log(linkedList.isEmpty()); // Prints out true

// Insert nodes with duplicates
linkedList.insert(3);
linkedList.insert(7);
linkedList.insert(11);
console.log(linkedList.containsDuplicates()); // Prints out false

linkedList.insert(7);
console.log(linkedList.containsDuplicates()); // Prints out true


module.exports = {
  Node,
  LinkedList
};
