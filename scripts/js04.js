function calShow() {
  //공백체크 
  if (myform.txt1.value == "") {
    alert("첫번째 숫자를 입력하세요.");
    myform.txt1.focus();
    return ;
  }
  if (myform.txt2.value == "") {
    alert("두번째 숫자를 입력하세요.");
    myform.txt2.focus();
    return ;
  }
  if (myform.r_op.value == "") {
    alert("연산자를 선택하세요."); 
    return ;
  }
  
  //변수 선언 
  let num1 = parseInt(myform.txt1.value) ;
  let num2 = parseInt(myform.txt2.value) ; 
  let ans = 0;
  let str = "" ;
  
  //결과 계산 
  if (myform.r_op.value == "+") ans = num1 + num2 ;
  else if (myform.r_op.value == "-") ans = num1 - num2 ;
  else if (myform.r_op.value == "x") ans = num1 * num2 ;
  else if (myform.r_op.value == "/") ans = num1 / num2 ;
   
  //수식 포함여부
  if (myform.ck_eval.checked == true)
    str = num1 + myform.r_op.value + num2 + " = " + ans ;
  else 
    str = ans ;
  
  document.getElementById("msg").innerHTML = str;
}

function clearShow() {
  myform.reset();
  document.getElementById("msg").innerHTML = "";
}