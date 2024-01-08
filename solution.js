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
    let newNode = new Node(data)
    if (!this.head){
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
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

  delete(data){
    let node = this.head
    let counter = 0
    while (node.data !== data && node.next){
      counter++
      node = node.next
    }
    let toDelete = node
    node = this.head
    for (let i=1; 1 < counter; i++){
      node = node.next
    }
    node.next = toDelete.next
  }

  getFirst(){
    return this.head
  }
  
  getLast(){
    let node = this.head
    while (node.next){
      node = node.next
    } return node
    
  }

  search(key){
    let currentNode = this.head
    while(currentNode){
      if (currentNode.data === key){
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    }
    return null
  }

  getKth(k){
    if (k > this.size()) return null;

    let counter = 1 
    let currentNode = this.head

    while(k !== counter){
      counter++;
      currentNode = currentNode.next
    }
    return currentNode
  }
 
  getKthToLast(k){
    /* NOTE: I have the answer to this one but I did use ChatGPT and 
    various web-sources for this, but I cannot confidently answer
    this on my own just yet. I looked for a breakdown of how it works and 
    in theory?? I get it??? 
    */

      //Converts the linked list to an array using the toArray method
      let array = this.toArray();
    
      // Checks if the array length is less than num
      if (array.length < k) return null;
    
      // Calculates the index of the kth-to-last element
      let index = array.length - k;
    
      // Retrieves the kth-to-last element using the getKth method
      let foundElement = this.getKth(index);
    
      // Returns the kth-to-last element
      return foundElement;
  }

  isEmpty(){
    return !this.head
  } 

  clear(){
    this.head = null
  }

  toArray(){
    let array = [];
    let currentNode = this.head
     while(currentNode){
     array.push(currentNode.data)
     currentNode = currentNode.next
    }
    return array;
  }
  containsDuplicates(){
       /* NOTE: I have the answer to this one but I did use ChatGPT and 
    various web-sources for this, but I cannot confidently answer
    this on my own just yet. I looked for a breakdown of how it works and 
    in theory?? I get it??? 
    */

      let currentNode = this.head;
    
      // Iterate through each element in the linked list
      while (currentNode !== null) {
        let comparisonNode = currentNode.next;
    
        // Compare the current element with all elements that come after it
        while (comparisonNode !== null) {
          // Check for duplicates
          if (currentNode.data === comparisonNode.data) {
            return true; // Found a duplicate
          }
    
          // Move to the next element for comparison
          comparisonNode = comparisonNode.next;
        }
    
        // Move to the next element in the outer loop
        currentNode = currentNode.next;
      }
    
      // No duplicates found in the entire linked list
      return false;
    }
    
  } 

module.exports = {
  Node,
  LinkedList,
};
