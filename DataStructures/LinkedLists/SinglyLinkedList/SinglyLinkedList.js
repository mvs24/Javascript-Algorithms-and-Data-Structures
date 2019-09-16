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

  set(index, value) {
    if (this.getNode(index) === null) {
      return false;
    }
    this.getNode(index).val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return this.push(value);
    }
    if (index === 0) {
      return this.unshift(value);
    }
    let newNode = new Node(value);
    let p = this.head;
    for (let i = 0; i < index - 1; i++) {
      p = p.next;
    }
    newNode.next = p.next;
    p.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      this.shift();
    }
    let p = this.head;
    for (let i = 0; i < index - 1; i++) {
      p = p.next;
    }
    let x = p.next.val;
    p.next = p.next.next;
    this.length--;
    return x;
  }

  reverse() {
    let first = this.head;
    let last = this.tail;
    let p = this.head;
    let q = null;
    let r = q;
    while (p) {
      r = q;
      q = p;
      p = p.next;
      q.next = r;
    }
    this.head = last;
    this.tail = first;
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
list.shift();
list.unshift(12);
// list.traverse();
// console.log(list.getNode(1));
list.set(1, "Hello");
// list.traverse();
// console.log(list.set(5, 2));
list.insert(1, "hi");
// list.traverse();
// console.log(list);
list.remove(2);

// list.reverse();
list.traverse();
console.log(list);

