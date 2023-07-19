const sender = document.getElementById("enteremail")
const emailmessage = document.getElementById("message")
const send = document.getElementById("sendbutton")

function copytext(){
    var messagecopy = document.getElementById("message")
    messagecopy.select()
    messagecopy.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(messagecopy.value)

    var state = document.getElementById("sendbutton")
    state.innerHTML = "Sent"
}

function outFunc(){
    var state = document.getElementById("sendbutton")
    state.innerHTML = "Send"
    
}

// function sendMail() {
//     var link = "mailto:"
//             //  + "&subject=" + encodeURIComponent("This is my TEST subject")
//             //  + "&body=" + encodeURIComponent(emailmessage.value)
//     ;
    
//     window.location.href = link;
// }


function clearaftersent(){
    emailmessage.value = ""
}

// send.addEventListener("click", sendMail)
send.addEventListener("click", copytext)
send.addEventListener("click", clearaftersent)