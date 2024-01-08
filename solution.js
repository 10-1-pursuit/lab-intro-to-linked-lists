const { nums, words } = require("./data/data.js");



class Node{
  constructor(data){
    this.data=data
    this.next=null
  }
  
}

class LinkedList{
  constructor(head=null,tail=null,length=0){
    this.head=head
    this.tail=tail
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
  if(k>this.size()) return null
  return this.getKth((this.size()-k))
 }
//  isEmpty(){
//   return !this.head
// }
 

  
  
  
 
  
}


    
const myList= new LinkedList()
const node1=new Node(100)
const node2=new Node(200)
const node3=new Node(300)
// console.log(node1)
myList.insert(node3)
myList.insert(node2)
myList.insert(node1)
// myList.insert(node3)
console.log(myList.getKth(1))

module.exports = {
  Node,
  LinkedList,
};
