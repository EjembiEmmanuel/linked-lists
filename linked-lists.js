class LinkedList {
  constructor() {
    this.list = null;
  }

  getSize(list, counter) {
    if (list.nextNode === null) {
      return counter;
    }

    counter += 1;

    return this.getSize(list.nextNode, counter);
  }

  size() {
    if (this.list === null) {
      return 0;
    }

    return this.getSize(this.list, 1);
  }

  head() {
    return this.list;
  }

  tail() {
    return this.getLastNode(this.list);
  }

  getLastNode(list) {
    if (list.nextNode === null) {
      return list;
    }

    return this.getLastNode(list.nextNode);
  }

  getNode(list, counter, index) {
    if (counter === index) {
      return list;
    }

    counter += 1;

    return this.getNode(list.nextNode, counter, index);
  }

  at(index) {
    return this.getNode(this.list, 0, index);
  }

  prepend(value) {
    if (this.list) {
      value.nextNode = this.list;
      this.list = value;
    } else {
      this.list = value;
    }
  }

  append(value) {
    if (this.list) {
      this.getLastNode(this.list).nextNode = value;
    } else {
      this.list = value;
    }
  }

  removeNode(list) {
    if (list.nextNode.nextNode === null) {
      list.nextNode = null;
      return;
    }

    return this.removeNode(list.nextNode);
  }

  pop() {
    if (this.size() < 2) {
      this.list = null;
      return;
    }

    this.removeNode(this.list);
  }

  getValue(list, value) {
    if (list.value === value) {
      return true;
    }

    if (list.nextNode === null) {
      return false;
    }

    return this.getValue(list.nextNode, value);
  }

  contains(value) {
    return this.getValue(this.list, value);
  }

  findValue(list, counter, value) {
    if (list.value === value) {
      return counter;
    }

    if (list.nextNode === null) {
      return null;
    }

    counter += 1;

    return this.findValue(list.nextNode, counter, value);
  }

  find(value) {
    return this.findValue(this.list, 0, value);
  }

  buildString(list, string) {
    string = string.concat(`( ${list.value} ) -> `);

    if (list.nextNode === null) {
      return string.concat("null");
    }

    return this.buildString(list.nextNode, string);
  }

  toString() {
    return this.buildString(this.list, "");
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

var list = new LinkedList();
var one = new Node(1);
list.append(one);

var two = new Node("two");
list.append(two);

var three = new Node(3);
list.append(three);

var zero = new Node("zero");
list.prepend(zero);

var minusOne = new Node("minus one");
list.prepend(minusOne);

var minusTwo = new Node(-2);
list.prepend(minusTwo);

console.log("Head", list.head());
console.log("Tail", list.tail());
console.log("At index", list.at(2));
console.log("Tail", list.tail());
console.log(list.contains(3));
console.log(list.find(3));
console.log(list.toString());
