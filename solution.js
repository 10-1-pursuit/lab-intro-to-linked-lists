const { nums, words } = require("./data/data.js");

/*- Create a Node class with properties ✅
  - data
  - next
- Create a linked list with properties ✅
  - head
- Linked List Methods
  - `insert`✅
  - `size`✅
  - `delete` by key✅
  - `getFirst` element ✅
  - `getLast` element✅
  - `search` an element by key and return data ✅
  - `getKth` retrieve kth element ✅
  - `getKthToLast` retrieve kth from last element ✅
  - `isEmpty` check if list is empty ✅
  - `clear` the linked list ✅
  - `toArray`convert data from linked list to an array ✅
  - `containsDuplicates` check for duplicates - return true if contains duplicates, false if not
  */

//- Create a Node class with properties - data- next
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
//- Create a linked list with properties - head
class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }
  //- Linked List Methods
  //- `insert`

  // insert(data) {
  //   const newNode = new Node(data);
  //   if (!this.head) {
  //     this.head = newNode;
  //   } else if (this.head.next) {
  //     let current = this.head;

  //     while (current.next) {
  //       current = current.next;
  //     }
  //     current.next = newNode;
  //   } else {
  //     this.head.next = newNode;
  //   }
  // }
  insert(data){
    let current = this.head
    const newNode = new Node(data);
    newNode.next = current
    this.head = newNode
  }
  insert2(data){
    const newNode = new Node(data)
    if(!this.head){
      this.head = newNode
      //when list is empty the head and tail are both the same node
      this.tail = newNode
    } else {
      let current = this.head;
      while (current.next){
        current = current.next;
      }
       current.next = newNode;
       newNode.prev = current
       this.tail = newNode
    }
  }

  //- `size`
  size() {
    let count = 0;
    let curentNode = this.head;
    while (curentNode) {
      count++;
      curentNode = curentNode.next;
    }
    return count;
  }
  //- delete
  delete(target) {
    let current = this.head; //locate the begining of the list

    if (current.data === target) {
      //if the begining of the list is the target
      this.head = current.next; //the head becomes the next target; deleting the target
    } else if (current.next.data === target) {
      //if the next is the target
      current.next = current.next.next; // the next becomes the one AFTER the target. deleting the target
    } else {
      while (current) {
        if (current.next?.data === target) {
          //optional chaining
          current.next = current.next.next;
        }
        current = current.next;
      }
    }
  }
  // `getFirst` element
  getFirst() {
    return this.head;
  }
  //- `getLast` element
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
  //- `search` an element by key and return data
  search(target) {
   
    let current = this.head;
    while(current){
  
      if (current.data === target) {
        return current;
      }
        current = current.next;
      }
      return null;
  }
  //
  getKth(k){
    if( k > this.size()) return null;
    let count = 1;
    let current = this.head
    while(count !== k){
      count++;
      current = current.next
    }
    return current;
  }
 //`isEmpty` check if list is empty
  isEmpty(){
    return this.head === null
  }
  //  - `clear` the linked list
  clear(){
    this.head = null
  }
  //- `toArray`convert data from linked list to an array
  toArray(){
    let current = this.head;
    if(!current) return []
    const arr = []
    while(current){
      arr.push(current.data);
      current = current.next
    }
    return arr
  }
  //- - `getKthToLast` retrieve kth from last element
  getKthToLast(k){
    if( k > this.size() ) return null;
    let kLength = Math.floor(this.size() - k);
    return this.getKth(kLength)
  }
  //containsDuplicates` check for duplicates - return true if contains duplicates, false if not
  containsDuplicates(){
    const arr = this.toArray()
    const set = new Set(arr)
    return set.size !== arr.length
  }

}

const list = new LinkedList();
list.insert2(4);
list.insert2(7);
list.insert2(3);
list.insert2(3);

console.log(list)


module.exports = {
  Node,
  LinkedList,
};
