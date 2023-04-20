function User1(){
    console.log("here");
    var un = document.querySelector('#uname').value;
    var pass = document.querySelector('#password').value;

    var username = "JoshinAji";
    var password = "123456";

    document.getElementById("age").value=8;
    document.getElementById("email").value="ja@gmail.com";
    document,getElementById("DOB").value = 04/04/2001;
    if((un == username) && (pass == password)){
        alert("Sign In Successful");
    }
    else{
        alert("Error: Please Try again");
        return false;

    }
}   

function User2(){
    console.log("here");
    var un = document.querySelector('#uname').value;
    var pass = document.querySelector('#password').value;

    var username = "Colon";
    var password = "654321";

    document.getElementById("age").value=6;
    document.getElementById("email").value="cs@gmail.com";
    document,getElementById("DOB").value = 04/04/2017;
    if((un == username) && (pass == password)){
        alert("Sign In Successful");

    }
    else{
        alert("Error: Please Try again");
        return false;

    }
}   

