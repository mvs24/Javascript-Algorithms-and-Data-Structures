class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let p = this.head;
    let x = this.tail.val;
    if (!this.head) {
      return undefined;
    }
    while (p.next !== this.tail) {
      p = p.next;
    }
    p.next = null;
    this.tail = p;
    this.length--;
    return x;
  }
  
  
  shift() {
    if (!this.head) {
      return undefined;
    }
    let x = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return x;
  }

  unshift(val) {
    let p = new Node(val);
    if (!this.head) {
      this.head = this.tail = p;
    }
    p.next = this.head;
    this.head = p;
    this.length++;
    return this;
  }

  getNode(index) {
    let p = this.head;
    if (index < 0 || index >= this.length) {
      return null;
    }

    for (let i = 0; i < index; i++) {
      p = p.next;
    }
    return p;
  }


  traverse() {
    let p = this.head;
    while (p) {
      console.log(p.val);
      p = p.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push(12);
list.push(22);
list.push(34);
list.push(4);
list.pop();
list.traverse();
