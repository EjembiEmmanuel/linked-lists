import { LinkedList, Node } from "./linked-lists.js";

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
console.log("At index", list.at(5));
console.log(list.toString());
list.pop();
console.log("Tail", list.tail());
console.log(list.contains("zero"));
console.log(list.find("minus one"));
console.log(list.toString());

var newItem1 = new Node("new item 1");
list.insertAt(newItem1, 0);

console.log(list.toString());

var newItem2 = new Node("new item 2");
list.insertAt(newItem2, 4);

console.log(list.toString());

list.removeAt(2);
console.log(list.toString());
