function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var item = document.querySelectorAll(".ranked-list");
  for (var i=0; i<item.length; i++) {
    item[i].innerHTML = parseInt(item[i].innerHTML) + n;
  }
}

function deepestChild() {
  var parent = document.querySelector("#grand-node");
  var child = parent.children;
  var nextChild;
  for (var i in child) {
    nextChild = child[0];
  }
  return nextChild;
}