class Queue {
  #array;

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new Error(`${array}is not an array`);
    }
    this.#array = array;
  }

  enqueue(v) {
    return this.#array.push(v);
  }

  dequeue() {
    return this.#array.shift();
  }

  entries() {
    return [...this.#array];
  }
}
