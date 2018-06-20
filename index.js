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
  var start = document.querySelectorAll("div#grand-node");
  for (var i=0; i<start.length;i++) {
    var node = start.children[i];
  }
}