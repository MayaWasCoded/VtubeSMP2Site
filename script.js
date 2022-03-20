function redirect(){
    window.location.replace("apply.html");
}
function send(){

    let file_system = new ActiveXObject("Scripting.FileSystemObject");
    let enter = "<br>"
    let name = document.getElementById("name").value;
    let nick = document.getElementById("nick").value;
    let age = document.getElementById("age").value;
    let rules_accept = document.getElementById("accept").checked;
    let file_system_open = file_system.OpenTextFile(C:\\Users\\User\\strona\\vtube smp\\"Test.txt", 8, True);

    
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