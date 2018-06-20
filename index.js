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
  var parent = document.querySelector("#grand-node").querySelectorAll("div");
  var child = parent[0];
  for (var i=0; i<child.length;i++) {
    child = child[i];
  }
}