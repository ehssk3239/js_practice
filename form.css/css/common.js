function login(){
    var id = document.querySelector("#id");
    var pw = document.querySelector("#pw");

    if(id.value == "cloud_msa" && pw.value == "cloud_msa"){
        location.href='todo.html';
    }else{
        alert("로그인 할 수 없습니다.")

    }
}


function pwLogin(){
    var pw = document.getElementById("pw").value
    var r_pw = document.getElementById("r_pw").value

    if(pw === r_pw){
        alert("로그인합니다.")
        location.href='todo.html';
    }else{
        alert("비밀번호가 맞지 않습니다.")
    }
}
document.getElementById("login").onclick = pwLogin;

function text_check(){

    var data = document.getElementById("title").value;
    var data2 = document.getElementById("contents").value;
    var data3 = document.getElementById("birthdaytime").value;
    
    alert("제목 : "  + data + " 내용 : " + data2 + " 날짜 : " + data3);
}

