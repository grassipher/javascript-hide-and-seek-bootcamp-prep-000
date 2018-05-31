function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}
function increaseRankBy(n){
  var array[];
  array.push(document.getElementById('nested').querySelectorAll('.ranked-list').innerHTML);
  for (var i = 0; i <array.length; i++){
    array[i] = array[i]+2;
  }
}
function deepestChild(){
  return document.getElementById('grand-node');
}