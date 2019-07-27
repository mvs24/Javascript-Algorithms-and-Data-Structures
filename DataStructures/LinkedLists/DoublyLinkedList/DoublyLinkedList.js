class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    }
    this.head = shiftedNode.next;
    this.head.previous = null;
    shiftedNode.next = null;
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let p = this.head;
    for (let i = 0; i < index; i++) {
      p = p.next;
    }
    return p;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift();
    }
    if (index === this.length) {
      return this.push();
    }
    let p = this.head;
    for (let i = 0; i < index; i++) {
      p = p.next;
    }
    let newNode = new Node(val);
    p.previous.next = newNode;
    newNode.previous = p.previous;
    p.previous = newNode;
    newNode.next = p;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let p = this.get(index);
    p.previous.next = p.next;
    p.next.previous = p.previous;
    p.previous = null;
    p.next = null;
    this.length--;
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

let list = new DoublyLinkedList();
list.push(3);
list.push(23);
list.pop();
list.push("hi");
list.push("hello");
list.insert(2, 8);
list.push(12);
// console.log(list.get(3));
list.remove(2);
list.traverse();
