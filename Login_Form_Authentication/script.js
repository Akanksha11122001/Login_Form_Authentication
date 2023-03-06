function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");
    

    if(password.value.length >= 8){
        alert("Login Succesfully");
        window.location.replace("index1.html");
        return false;
    }
    else{
        alert("PLEASE ENTER A VALID EMAIL ID AND PASSWORD");
    }
}

function lpage(){
    window.location.replace("index1.html")
}