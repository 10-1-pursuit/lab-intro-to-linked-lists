const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    }
}

class LinkedList {
 constructor(head = null) {
   this.head = head
      // this.size = 0
}
/// insert at the begininning
  insert(node){
    //// initialze newNode as the instance
   let newNode = new Node(node)
   // if there is not a head, newNode will be the  head
    if(!this.head){
      this.head = newNode;
    } else {
       // if there is a head, newNode.next will 
       // = the property head.
       // the newNode will be the head and next
       // will be  
       newNode.next = this.head
       // the head will = the newNode
      this.head = newNode
  }
}

size(){
  let count = 0;
  // Initialize the count as 0
  let currentNode = this.head;
  // Initialize the currentNode 
  while(currentNode){
    // currentNode is truthy,  i++ and currentNode is the next node
    count++
    currentNode = currentNode.next
  }
    // number of nodes in the list
    return count;
 }

delete(node){
  // initialize currentNode
  let currentNode = this.head
// if currentNode === node reassing this.head to the next node
if(currentNode.data === node){
  this.head = currentNode.next
} else if(currentNode.next.data === node){
   currentNode.next = currentNode.next.next
}
// iterate through the nodes in the LinkedList
 while(currentNode){
  // if the node's data is equal to the node
  if(currentNode.next?.data === node){
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
  while(currentNode.next){
    currentNode = currentNode.next
  }
   return currentNode
 }

 search(node){
   let currentNode = this.head
   while(currentNode){
    if(currentNode.data === node){
        return currentNode
    } else {
      currentNode = currentNode.next
    }
   }
   return null
 }

getKth(k){
  if(k > this.size()) return null
  let counter = 1
  let currentNode = this.head
  while(k !== counter){
    counter++
    currentNode = currentNode.next
  }
  return currentNode
}

getKthToLast(){
 
      }

isEmpty(){
  return !this.head
  // this.size = 0
}

clear(){
  this.head = null
}

toArray(){
  let arr = [];
  let currentNode = this.head
   while(currentNode){
   arr.push(currentNode.data)
   currentNode = currentNode.next
  }
  return arr;
}

containsDuplicates(){


}

}


















module.exports = {
  Node,
  LinkedList,
};
