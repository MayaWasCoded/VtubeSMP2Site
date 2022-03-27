function redirect(){
    window.location.replace("apply.html");
}
function send(){

    let name = document.getElementById("name").value;
    let nick = document.getElementById("nick").value;
    let age = document.getElementById("age").value;
    let rules_accept = document.getElementById("accept").checked;

    alert("congrats you are now with us!!");
    
    /*
    Email.send({
        SecureToken : "C154-CBG1-CCCC-1223",
        To : 'mayawastaken123@gmail.com',
        From : "mayawastaken@gmail.com",
        Subject : "This is the subject",
        Body : "Informations: " + name + " " + nick + " " + age + " " + rules_accept
    }).then(
      message => alert(message)
    );
    */
}