class Node {
  constructor(data) {
    this.data = data; //some sorta of data
    this.next = null; //where its going to
    this.prev = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }
  //Methods created for ease of use
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else if (this.head.next) {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      //IF there is not NEXT after the next??? The else is taking into consideration that there is a head, (the if statement is false) and there isn’t a head.next (the else if conditional is false), meaning head.next must be “null”, so we make the head.next value the node we wish to insert 👍🏼
      this.head.next = newNode;
    }
  }
  insert(node) {
    let current = this.head;
    if (!current) {
      current = node;
    } else if (current.next) {
      while (current.next) {
        current = current.next;
      }
    }
    return (current.next = node);
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

  insert3(data){
    let current = this.head
    const newNode = new Node(data);
    newNode.next = current
    this.head = newNode
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
  clear() {
    this.head = null;
  }
  search(dataTarget) {
    let curentNode = this.head;
    while (curentNode) {
      if (curentNode.data === dataTarget) {
        return curentNode;
      } else {
        curentNode = curentNode.next;
      }
    }
    return null;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!node) return null;
    while (node.next) {
      ///OPTIONAL CHANING
      node = node.next;
    }
    return node;
  }
  isEmpty() {
    return this.head === null;
  }
  getKth(k) {
    if (k > this.size()) return null;
    let count = 1;
    let current = this.head;

    while (count !== k) {
      count++;
      current = current.next;
    }
    return current;
  }
  delete(dataTarget) {
    let current = this.head;

    if (current.data === dataTarget) {
      this.head == current.next;
    } else if (current.next.data === dataTarget) {
      let postTarget = current.next.next;
      current.next = postTarget;
    }

    while (current) {
      if (current.next?.data === dataTarget) {
        current.next = current.next.next;
      }
      current = current.next;
      break
    }
  }
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


  delete2(target){
   let prevNode = this.head
   let currentNode = this.head?.next

    if(prevNode.data === target){
      this.head = currentNode
    } else if(currentNode.data === target){
      prevNode.next = currentNode.next
    } else {
      while(currentNode){
        prevNode = currentNode
        currentNode = currentNode.next

        if(currentNode?.data === target){
          prevNode.next = currentNode.next
        }
      }
    }

  }

  toArr() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  toFront(node) {
    let current = this.head;
    node.next = current;
    this.head = node;
  }
}


const newList = new LinkedList();
const list = new LinkedList();
list.insert2(1);
list.insert2(2);
list.insert2(3);
console.log(list);
