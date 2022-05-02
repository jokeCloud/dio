var count = 0;

var el = document.getElementById('currentNumber')

const increment = () => {
  count++;
  el.innerHTML = count;
}

const decrement = () => {
  count--;
  el.innerHTML = count;
}




var c = 0;
var btnMore = document.getElementById('adds')
var btnLess = document.getElementById('subs')
var element = document.getElementById('cN2')
btnMore.addEventListener('click', increment())
btnLess.addEventListener('click', decrement())



const incr = () => {
  c++;
  if (c >= 10) {
    document.getElementById("adds").disabled = true
  } if (c >= 0) {
    element.innerHTML = c;
    element.style.color = 'rgb(236, 236, 236)';
  } else {
    element.innerHTML = c;
  }    
}

const decr = () => {
    c--;
    if (c <= (-10)) {
      document.getElementById("subs").disabled = true
    } if (c < 0) {
      element.innerHTML = c;
      element.style.color = '#c20';
    } else {
        element.innerHTML = c;
  }
}






