function checkkeySearch(even){
    var key =even.which|| even.keycode;
    if (key==32){
        dosearch()
    }
}
function dosearch(){
    var frm =document.forms["frm-search"];
    if (frm.words.value.lengh>0)
    frm.submit()
}
function showSearch(){
    var url = new URL(window.location);
    var ws = url.searchParams.get("words");
    document.getElementById("SearchDetail").innerHTML="<h1>Từ khóa tìm kiếm</h1> <b>"+ws+"</b>";
}
function loginValidate(frm){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if emailReg.test(frm.email.value==false)){
        alert("Xin vui long nhap dung email");
        frm.email.focus();
        return false;
    }
    if (frm.psw.value.length<8){
        alert(" Xin vui long nhap pass>=8");
        frm.psw.focus();
        return false;
    }
}