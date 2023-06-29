
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.fullList = null;
        this.listSize = 0;
    }
    // adds new node to the end of the list
    append(value) {
        this.fullList = new Node(value, this.fullList);
        this.listSize++;
    }
    // adds new node to the start of the list
    prepend(value) {
        // if the list is empty add it as the first node
        if (!this.fullList) {
            this.fullList = new Node(value, null);
        } else {
            // if the list is not empty - loop till the last node
            let current = this.fullList;
            while(current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = new Node(value, null);
        }
        this.listSize++;
    }
    // return the size of the list
    size() {
        return this.listSize;
    }
    // returns the first node of the list
    head() {
        return this.fullList.value;
    }
    // returns the last node of the list
    tail() {
        let current = this.fullList;
        while(current.nextNode) {
            current = current.nextNode;
        }
        return current.value;
    }
    // shows the node at the given index
    at(index) {
        let current = this.fullList;
        let count = this.listSize;
        if (index > count - 1) {
            return;
        }
        while(index !== count - 1) {
            current = current.nextNode;
            count--;
        }
        return current.value;
    }
    // removes the last node of the list
    pop() {
        this.fullList = new Node (this.fullList.nextNode.value, this.fullList.nextNode.nextNode);
        this.listSize--;
    }
    // return true if the value is in the list otherwise - returns false
    contains(value) {
        let current = this.fullList;
        let count = this.listSize;
        while(count) {
            if (current.value === value) {
                return true;
            } else {
                current = current.nextNode;
                count--;
            }
        }
        if (count === 0) {
            return false;
        }
    }
    // returns the index of the value in the list or null if it's not found
    find(value) {
        let current = this.fullList;
        let count = this.listSize;
        while(count) {
            if (current.value === value) {
                return count - 1;
            } else {
                current = current.nextNode;
                count--;
            }
        }
        if (count === 0) {
            return null;
        }
    }
    // inserts new node at the given index
    insertAt(value, index) {
        let current = this.fullList;
        let count = this.listSize;
        if (index > count - 1) {
            return;
        }
        while(index !== count - 1) {
            current = current.nextNode;
            count--;
        }
        let oldNode = current.nextNode;
        let newNode = new Node(value, oldNode);
        current.nextNode = newNode;
        this.listSize++;
    }
    // removes node at the given index
    removeAt(index) {
        let current = this.fullList;
        let count = this.listSize;
        if (index === count - 1) {
            return this.pop();
        }
        if (index > count - 1) {
            return;
        }
        while(index !== count - 2) {
            current = current.nextNode;
            count--;
        }
        let oldNode = current.nextNode;
        if (index === 0) {
            current.nextNode = null;
        } else {
            current.nextNode = new Node(oldNode.nextNode.value, oldNode.nextNode.nextNode);
        }
        this.listSize--;
        return oldNode;
    }
    // prints out the linked list
    toString() {
        let current = this.fullList;
        let count = this.listSize;
        let string = "";
        while(count) {
            // console.log(current.value);
            string += `(${current.value}) -> `;
            current = current.nextNode;
            count--;
        }
        string += "null";
        return console.log(string);
    }
}

const newList = new LinkedList();
newList.append(100);
newList.append(200);
newList.append(300);
newList.prepend(400);
newList.insertAt(500, 3);
console.log(newList.removeAt(4));
newList.toString();