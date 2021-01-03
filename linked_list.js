class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Linked_list {
    constructor() {
        this.head = null;
        this.tail = null;
        this.counter = 0;
    }

    insertAtFront(value) {
        const node = new Node(value);
        node.next = this.head;
        if (this.head === null) {
            this.tail = node; // we are making 1st element as tail
        }
        this.head = node;
        this.counter++;
        return this;
    }

    printFirstElement() {
        console.log('First element=>', this.head.value);
    }

    insertAtBack(value) {
        if (this.head === null) {
            return this.insertAtFront(value);
        }
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.counter++;
        return this;
    }

    printLastElement() {
        console.log('last Element => ', this.tail.value);
    }

    isEmpty() {
        console.log(this.head === null);
    }

    printLinkedList() {
        let temp = this.head;
        while (temp != null) {
            console.log(`${temp.value} `)
            temp = temp.next;
        }
    }

    deleteAtFront() {
        this.head = this.head.next;
        this.counter--;
    }

    deleteAtBack() {
        let temp = this.head;
        while (temp.next !== this.tail) {
            temp = temp.next;
        }
        this.tail = temp;
        temp.next = null;
        this.counter--;
    }

    printLinkedListLength() {
        console.log('linked list length = ', this.counter);
    }

    insertAtPosition(position, value) {
        // Considering linked list start at 1th position
        if (position < 1 || position > this.counter + 1) {
            console.log('invalid position.'); // throw error;
            return;
        }
        if (this.head === null || position === 1) {
            return this.insertAtFront(value)
        }
        let temp = this.head;
        while (position--) {
            if (position === 1) {
                const node = new Node(value);
                node.next = temp.next;
                temp.next = node;
                this.counter++;
            } else {
                temp = temp.next;
            }
        }
    }

    deleteAtPosition(position) {
        if (position < 1 || position > this.counter) {
            console.log('invalid position.'); // throw error;
            return;
        }
        if (position === 1) {
            return this.deleteAtFront();
        }
        let temp = this.head;
        while (position--) {
            if (position === 1) {
                console.log('deleted element => ', temp.next.value);
                temp.next = temp.next.next;
                this.counter--;
            } else {
                temp = temp.next;
            }
        }
    }

    reverseLinkedList() {
        let previous = null;
        let current = Object.assign({}, this.head);
        this.tail = current;
        while (current !== null) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    findCycle() {
        
    }

    // reverse(pointer) {
    //     if (pointer.next !== null) {
    //         this.head = pointer;
    //     }
    //     this.reverse(pointer.next);
    //     const temp = pointer.next;
    //     temp.next = pointer;
    //     pointer.next = null;
    // }
}

(() => {
    const linkedList = new Linked_list();
    linkedList.insertAtFront(2);
    linkedList.insertAtFront(1);
    linkedList.insertAtBack(3);
    linkedList.insertAtBack(4);
    linkedList.printLinkedListLength();
    linkedList.printLinkedList();
    console.log('REVERSE linked list.')
    linkedList.reverseLinkedList();
    linkedList.printLinkedList();
    console.log('before delete');
    linkedList.deleteAtFront();
    linkedList.deleteAtBack();
    console.log('after delete');
    linkedList.printLinkedList();
    linkedList.printFirstElement();
    linkedList.printLastElement();
    linkedList.printLinkedListLength();
    console.log('insert at position 3 value 5');
    linkedList.insertAtPosition(3, 5);
    linkedList.printLinkedList();
    console.log('delete at position 2');
    linkedList.deleteAtPosition(2);
    linkedList.printLinkedList();
})()
