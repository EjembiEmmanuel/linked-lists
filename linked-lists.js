import {
  getSize,
  getLastNode,
  getNode,
  removeNode,
  getValue,
  findValue,
  buildString,
} from "./utils.js";

class LinkedList {
  constructor() {
    this.list = null;
  }

  append(value) {
    if (this.list) {
      getLastNode(this.list).nextNode = value;
    } else {
      this.list = value;
    }
  }

  prepend(value) {
    if (this.list) {
      value.nextNode = this.list;
      this.list = value;
    } else {
      this.list = value;
    }
  }

  size() {
    if (this.list === null) {
      return 0;
    }

    return getSize(this.list, 1);
  }

  head() {
    return this.list;
  }

  tail() {
    return getLastNode(this.list);
  }

  at(index) {
    return getNode(this.list, 0, index);
  }

  pop() {
    if (this.size() < 2) {
      this.list = null;
      return;
    }

    removeNode(this.list);
  }

  contains(value) {
    return getValue(this.list, value);
  }

  find(value) {
    return findValue(this.list, 0, value);
  }

  toString() {
    return buildString(this.list, "");
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList, Node };
