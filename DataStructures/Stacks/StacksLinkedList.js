class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    push(val) {
      let node = new Node(val);
      if (!this.first) {
        this.first = this.last = node;
      } else {
        let temp = this.first;
        this.first = node;
        this.first.next = temp;
      }
      this.size++;
      return this.size;
    }
    pop() {
      if (this.size === 0) {
        return null;
      }
      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
    traverse() {
      while (this.size > 0) {
        console.log(this.pop());
      }
    }
  }
  
  let stack = new Stack();
  stack.push(1);
  stack.push(11);
  stack.push(111);
  stack.pop();
  stack.pop();
  stack.traverse();
  