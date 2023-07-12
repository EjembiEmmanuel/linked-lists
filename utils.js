function getSize(list, counter) {
  if (list.nextNode === null) {
    return counter;
  }

  counter += 1;

  return getSize(list.nextNode, counter);
}

function getLastNode(list) {
  if (list.nextNode === null) {
    return list;
  }

  return getLastNode(list.nextNode);
}

function getNode(list, counter, index) {
  if (counter === index) {
    return list;
  }

  counter += 1;

  return getNode(list.nextNode, counter, index);
}

function removeNode(list) {
  if (list.nextNode.nextNode === null) {
    list.nextNode = null;
    return;
  }

  return removeNode(list.nextNode);
}

function getValue(list, value) {
  if (list.value === value) {
    return true;
  }

  if (list.nextNode === null) {
    return false;
  }

  return getValue(list.nextNode, value);
}

function findValue(list, counter, value) {
  if (list.value === value) {
    return counter;
  }

  if (list.nextNode === null) {
    return null;
  }

  counter += 1;

  return findValue(list.nextNode, counter, value);
}

function buildString(list, string) {
  string = string.concat(`( ${list.value} ) -> `);

  if (list.nextNode === null) {
    return string.concat("null");
  }

  return buildString(list.nextNode, string);
}

export {
  getSize,
  getLastNode,
  getNode,
  removeNode,
  getValue,
  findValue,
  buildString,
};
