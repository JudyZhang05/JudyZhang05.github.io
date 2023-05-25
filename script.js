window.onscroll=function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('info').style.top ='0';}
  else {
    document.getElementById('info').style.top ='-50px';
  }
}

