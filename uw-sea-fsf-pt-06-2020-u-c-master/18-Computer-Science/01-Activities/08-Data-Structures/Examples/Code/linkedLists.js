class Node {

  constructor(data, next) {
    this._data = data;
    this._next = next;
  }

  toString() {
    // Template strings allow multi-line strings.
    return `Data: ${this._data}
  Next: ${this._next}`;
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  get next() {
    return this._next;
  }

  set next(next) {
    this._next = next;
  }

}

class LinkedList {

  constructor(dataArray) {
    this._first = new Node();

    let counter = 0;

    if (dataArray) {
      let actual = this._first;
      for (let data of dataArray) {
        let newNode = new Node(data);
        actual.next = newNode;
        actual = newNode;
        counter++;
      }
    }

    this._length = counter;
  }

  get first() {
    return this._first;
  }

  get length() {
    return this._length;
  }
}

// Using the Linked List class...
// ================================


let list = new LinkedList([1, 2, 3, 4]);
// Note the recursive calls to toString().
console.log(list.first.toString());
