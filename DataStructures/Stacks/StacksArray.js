class Stack {
  constructor() {
    this.stackArray = [];
    this.length = 0;
  }

  push(item) {
    this.stackArray.push(item);
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    let x = this.stackArray[this.stackArray.length - 1];
    this.stackArray.pop();
    this.length--;
    return x;
  }

  traverse() {
    for (let i = 0; i < this.stackArray.length; i++) {
      console.log(this.stackArray[i]);
    }
  }
}

let stack = new Stack();
stack.push(12);
stack.push(123);
stack.push(22);
console.log(stack.pop());
stack.traverse();
