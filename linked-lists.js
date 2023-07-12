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
    try {
      if (this.list === null) {
        return null;
      }

      return buildString(this.list, "");
    } catch (error) {
      console.log(error);
    }
  }

  insertAt(value, index) {
    var node;
    var size = this.size();

    try {
      if (this.list === null) {
        throw new Error("Can't insert element in an empty list");
      }

      if (index < 0 || index >= size) {
        throw new Error("List out of range");
      }

      if (index === 0) {
        value.nextNode = this.list;
        this.list = value;
        return;
      }

      index -= 1;
      node = getNode(this.list, 0, index);
      value.nextNode = node.nextNode;
      node.nextNode = value;
    } catch (error) {
      console.error(error);
    }
  }

  removeAt(index) {
    var node;
    var size = this.size();

    try {
      if (size - 1 < index || index < 0) {
        throw new Error("List out of range");
      }

      if (index === 0) {
        node = getNode(this.list, 0, index);
        this.list = node.nextNode;
        return;
      }

      index -= 1;

      node = getNode(this.list, 0, index);

      node.nextNode = node.nextNode.nextNode;
    } catch (error) {
      console.error(error);
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList, Node };
