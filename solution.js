const { nums, words } = require("./data/data.js");



class Node{
  constructor(data){
    this.data=data
    this.next=null
  }
  
}

class LinkedList{
  constructor(head=null,length=0){
    this.head=head
    this.length=length
  }
  
insert(node) {
  let current=this.head
  const  newNode=new Node(node)
    if (!current) {
      this.head = newNode;
    } else {
     newNode.next=this.head;

      this.head = newNode;
    }
    this.length += 1;
  }
  

  size(){
    let currentNode=this.head
    let count=0
    while(currentNode){
      count+=1
      currentNode=currentNode.next
    }
    return count
    
  }
  clear(){
    
    this.head=null
  }
  delete(dataProp){
    var currentNode=this.head
    if(currentNode.data===dataProp){
        currentNode.next=this.head
    }else if(currentNode.next.data===dataProp){
     currentNode.next=currentNode.next.next

    }
    while(currentNode){
        if(currentNode.next?.data===dataProp){
            currentNode.next=currentNode.next.next
        }
        currentNode=currentNode.next
    }


 }
 getFirst() {
    return this.head;
  }
  getLast(){
    var currentNode=this.head
    while(currentNode?.next){
      
           currentNode=currentNode.next
       }
       return currentNode
    }
  search(dataProp){
    let current=this.head
    while(current){
      if(current.data===dataProp){
        return current
      }else{
        current=current.next
      }
    }
    
    return null
  }
  getKth(k){
    if(k>this.size())return null
    let count=1
    var currentNode=this.head
    while(k!== count){
        count++
        currentNode=currentNode.next
    }
    return currentNode




 }
 getKthToLast(k){
  return this.getKth((this.size()-k))
 }
 isEmpty(){
  return !this.head
}
toArray(){
  let arr = []
  var current = this.head;
      
  while(current){
    arr.push(current.data);
    current = current.next;
  }
      
  return arr;
};
 

containsDuplicates(dataProp) {
  let currentNode = this.head

  while (currentNode) {
    let prevNode = currentNode.next

    while (prevNode) {
      if (currentNode.data === prevNode.data ||currentNode.data&&prevNode.data===dataProp) {
        return true
      }
      prevNode = prevNode.next
    }
    currentNode = currentNode.next
  }
  return false
}
}
let tempNumList = new LinkedList();
    for (let num of nums) {
      tempNumList.insert(num);
    }
    console.log(tempNumList)
    
const myList= new LinkedList()
const node1=new Node(100)
const node2=new Node(200)
const node3=new Node(300)
const node4=new Node(300)

// console.log(node1)
myList.insert(node3)
myList.insert(node2)
myList.insert(node1)
myList.insert(node4)
// myList.insert(node3)
console.log(myList)

module.exports = {
  Node,
  LinkedList,
};
