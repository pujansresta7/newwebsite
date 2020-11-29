var text = document.getElementById("h1");
var i = 0;
var t = text.innerText;
var y = "";
var des = setInterval(function(){
y += t[i];
text.innerHTML = y + '|';
//text.innerText = y;
i += 1;
if (i == 22){
clearInterval(des);
text.innerText = y;
}
}, 200)        

