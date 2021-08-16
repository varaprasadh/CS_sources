
class Heap<T>{

    items: T[];
    size: number;
    sortCallback: undefined | ((a: T, b: T) => number);

    constructor(sortCallback?: (a: T, b: T) => number) {
        this.items = [];
        this.size = 0;
        this.sortCallback = sortCallback;
    }

    add(Node: T): void {
        try {
            this.items.push(Node);
            this.size++;
            this.items.sort();
            if (typeof this.sortCallback === 'function') {
                this.items.sort(this.sortCallback);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    peek(): T | Error {
        if (this.isEmpty()) {
            throw new Error("heap is empty");
        }

        return this.items[0];
    }

    poll(): any {
        if (this.isEmpty()) {
            throw new Error("heap is empty");
        }
        if (this.size > 0) this.size--;
        return this.items.shift();
    }

    isEmpty(): Boolean {
        return this.size > 0;
    }

}

const heap = new Heap<number>();

heap.add(1);
heap.add(5);
heap.add(2);
heap.add(6);
heap.add(0);


// console.log(heap.peek());


