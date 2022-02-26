class Stack {
    constructor() {
        this.items = [];
        this.maxelements = 10;
    }
    
    // method to add elements to the stack
    push(element) {
        if (this.items.length >= this.maxelements)
        {
            console.log("stack cannot exceed max length")
        }
        else {

        this.items[this.items.length] = element;
    }
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
stack.push(8);
stack.push(10);
console.log(stack.items);
stack.push(4);
stack.push(8);
stack.push(10);
stack.push(8);
stack.push(10);

stack.pop();

console.log(stack.items);
stack.push(8);
stack.push(10);

console.log(stack.peek());



