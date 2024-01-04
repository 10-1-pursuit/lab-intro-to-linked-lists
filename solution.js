const { nums, words } = require("./data/data.js");

/*- Create a Node class with properties
  - data
  - next
- Create a linked list with properties
  - head
- Linked List Methods
  - `insert`
  - `size`
  - `delete` by key
  - `getFirst` element
  - `getLast` element
  - `search` an element by key and return data
  - `getKth` retrieve kth element
  - `getKthToLast` retrieve kth from last element
  - `isEmpty` check if list is empty
  - `clear` the linked list
  - `toArray`convert data from linked list to an array
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
  }
  //- Linked List Methods
  //- `insert`
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;

    } else if (this.head.next) {
      let current = this.head

      while (current.next) {
        current = current.next;    
      }
      current.next = newNode

    } else {
      this.head.next = newNode;
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
  delete(target){
    let current = this.head; //locate the begining of the list

    if(current.data === target){  //if the begining of the list is the target
      this.head = current.next  //the head becomes the next target; deleting the target
     
    } else if (current.next.data === target){  //if the next is the target
      current.next = current.next.next   // the next becomes the one AFTER the target. deleting the target

    } else{
      while(current){
        if(current.next?.data === target){ //optional chaining 
          current.next = current.next.next
        }
        current = current.next
      }

    }
  
  }


}


const list = new LinkedList()
list.insert(4)
list.insert(7)
list.insert(3)

console.log(list.delete(3))
console.log(list)




module.exports = {
  Node,
  LinkedList,
};
