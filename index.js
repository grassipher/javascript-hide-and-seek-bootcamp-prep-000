function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}
function increaseRankBy(n){
  var array = document.getElementById('nested').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i <array.length; i++){
    array[i].innerHTML = array[i].innerHTML +n;
  }
}
function deepestChild(){
  return document.getElementById('grand-node');
}