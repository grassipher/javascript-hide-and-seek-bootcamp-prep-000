function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}
function increaseRankBy(n){
  return document.getElementById('nested').querySelectorAll('.ranked-list');
  var array = document.getElementById('nested').querySelectorAll('.ranked-list');
  for (var i = 0; i <array.length; i++){
    array[i].innerHTML = parseInt(array[i].innerHTML)+parseInt(n);
  }
}
function deepestChild(){
  return document.getElementById('grand-node');
}