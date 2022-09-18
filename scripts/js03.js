
function show() {
  let txt1 = form1.txt1.value ;
  let msg = document.getElementById("msg");
  
  msg.style.fontSize = "20px";
  msg.style.color = "green";
  msg.innerHTML = "<strong>" + txt1 + "</strong>" + "님 안녕하세요!"
}

 