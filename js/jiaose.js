
var sp = document.getElementsByClassName("sp");
var box2 = document.getElementById('box2').getElementsByTagName('li');


box2.onmouseover = function chufan() {
   


    for (var  i = 0; i <= box2.length; i++) {
       
         if (i == 0) {
        box2[i].style.display= 'block';
        box2[i+1].style.display= 'none';
    }
    if(i == 1) {
        box2[i].style.display= 'block';
        box2[i-1].style.display= 'none';
    }
    }
}




