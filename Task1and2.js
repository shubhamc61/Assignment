class Stack {
    constructor() {
        this.items = [];
    }
    
    // method to add elements to the stack
    push(element) {
        return this.items[this.items.length] = element;
    }
    
    // method to remove element from the stack
    pop() {
        if(this.items.length > 0) {
            return this.items.splice(-1,1);
        }
    }
    
    // method to view the last element of the stack
    peek() {
        return this.items[this.items.length - 1];
    }
    
 
    
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(8);
stack.push(10);
console.log(stack.items);

stack.pop();
console.log(stack.items);

console.log(stack.peek());



