class Queue {
  #storage;
  #front;
  #rear;

  constructor() {
    this.#storage = {};
    this.#front = 0;
    this.#rear = 0;
  }

  size() {
    if (this.#storage[this.#rear] === undefined) {
      return 0;
    }
    return this.#rear - this.#front + 1;
  }
}
