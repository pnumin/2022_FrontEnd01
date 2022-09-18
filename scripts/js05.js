let startFlag = false ;
let rnum ;

function init() {
  startFlag = false ;
  rnum = undefined ;
  myform.txt1.value = "" ;
  document.getElementById("msg").innerHTML = "";
}

function startShow() {
  if (startFlag) {
    document.getElementById("msg").innerHTML = "값이 생성되었습니다. 숫자를 입력하세요.";
    myform.txt1.focus();
    return ;
  }

  init();
  startFlag = true ;
  rnum = Math.floor(Math.random() * 50) + 1 ;
  document.getElementById("msg").innerHTML = "" ;
  console.log(rnum, startFlag);
}

function checkShow() { 
  let msg = document.getElementById("msg");
  if (!startFlag) {
    msg.innerHTML = "시작버튼을 누르세요." ; 
    return ;
  }
  if ( myform.txt1.value == "") {
    alert("값을 입력하세요");
    return ;
  }

  if (rnum == myform.txt1.value) {
    msg.innerHTML = "정답"; 
    startFlag = false ;
  }
  else if (rnum < myform.txt1.value) {
    msg.innerHTML = "down";
  }
  else {
    msg.innerHTML = "up";
  }
  
}