function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}
function increaseRankBy(n){
  var array = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i <array.length; i++){
    array[i].innerHTML = (parseInt(array[i].innerHTML) + n).toString();
  }
}
function deepestChild(){
  return document.getElementById('grand-node');
}