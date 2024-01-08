const { nums, words } = require("./data/data.js");
 
class Node {
  constructor(data){
    this.data = data;
    this.data= null;
 }
}
class LinkedList {
  constructor(){
    this.head= null;
  }
  insert(data){
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else{
      newNode.next = this.head;
      this.head = newNode;
    }
  }
}
console.log(insert)

module.exports = {
  Node,
  LinkedList,
};
