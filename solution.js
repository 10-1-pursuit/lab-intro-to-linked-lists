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

  insert(info) {
    const newNode = new Node(info);
    if (!this.head) {
      this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode
      // let currentNode = this.head;

      // while (currentNode.next) {
      //   currentNode = currentNode.next;
      // }
      // currentNode.next = newNode;
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

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    if (!currentNode.next) {
      return currentNode;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  getKth(k) {
    if (k > this.size()) return null;

    let counter = 1;
    let currentNode = this.head;

    while (k !== counter) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search(info) {
    let currentNode = this.head;

    while (currentNode) {
      if (info === currentNode.data) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  isEmpty() {
    return !this.head;
  }

  toArray() {
    let value = [];
    let currentNode = this.head;
    while (currentNode) {
      value.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return value;
  }

  delete(info) {
    let currentNode = this.head;

    if (currentNode.data === info) {
      this.head = currentNode.next;
    } else if (currentNode.next.data === info) {
      currentNode.next = currentNode.next.next;
    }
    while (currentNode) {
      if (currentNode.next?.data === info) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }
  }

  containsDuplicates() {
    let arr = this.toArray();
    let obj = {};
    for (let a of arr) {
      if (a in obj) {
        obj[a] += 1;
        return true
      } else {
        obj[a] = 1;
      }
    }
return false
  }

getKthToLast(num){
  let arr = this.toArray();
  if(arr.length < num) return null

  let ind = arr.length-num
  let found = this.getKth(ind);
    return found
  }


  
}

let list = new LinkedList();
let list2 = new LinkedList();

// for(let i = words.length-1; i > 0; i--){
//   list.insert(words[i])
// }

// for(let i = nums.length-1; i >= 0; i--){
//   list2.insert(nums[i])
// }

for (let word of words) {
  list.insert(word);
}

for (let num of nums) {
  list2.insert(num);
}

console.log(list.toArray())
// console.log(list2.containsDuplicates());

module.exports = {
  Node,
  LinkedList,
};
