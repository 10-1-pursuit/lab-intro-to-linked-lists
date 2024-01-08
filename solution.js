const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head
  }
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  size(){
    let count = 0
    let node = this.head
    while(node){
      count ++
      node = node.next
    }
    return count
  }
  delete(dataParam){
    let node = this.head
    if(node.data === dataParam){
      this.head = node.next
    } else if(node.next.data === dataParam){
      node.next = node.next.next
    }
    while(node){
      if(node.next?.data === dataParam){
        node.next = node.next.next
      }
      node = node.next
    }

  }
  getFirst(){
    return this.head
  }
  getLast(){
    let node = this.head
    while(node.next){
      node = node.next
    }
    return node
  }
  search(dataParam){
    let node = this.head
    while(node){
      if(node.data === dataParam){
        return node
      } else node = node.next
    }
    return null
  }
  getKth(k){
    let count = 0
    let countNode = this.head
    while(countNode){
      count ++
      countNode = countNode.next
    }
    if(k > count)return null
    let counter = 1
    let node = this.head
    while(k !== counter){
      counter ++
      node = node.next
    }
    return node
  }
  getKthToLast(k){
    let count = 0
    let countNode = this.head
    while(countNode){
      count ++
      countNode = countNode.next
    }
    if(k > count) return null
    let node = this.head
    const kthToLast = count - k
    for (let i = 0; i < kthToLast; i++){
      node = node.next
    }
    return node

  }
  isEmpty(){
    return !this.head
  }
  clear(){
    this.head = null
  }
  toArray(){
    let arr = []
    let node = this.head
    while(node){
      arr.push(node.data)
      node = node.next
    }
    return arr
  }
  containsDuplicates(){
    let arr = []
    let node = this.head
    while(node){
      arr.push(node.data)
      node = node.next
    }
    for(let i = 0; i < arr.length -1; i++){
      for(let j = i+1; j < arr.length; j++){
        if(arr[i] === arr[j]){
          return true
        }
      }
    }
    return false
  }



}

module.exports = {
  Node,
  LinkedList,
};
