const sender = document.getElementById("enteremail")
const emailmessage = document.getElementById("message")
const sendButton = document.getElementById("sendbutton")
const goButton = document.getElementById("gobutton")

function copytext(){
    var messagecopy = document.getElementById("message")
    messagecopy.select()
    messagecopy.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(`To: judyz1594@gmail.com\n${messagecopy.value}`)
}

function aftersent(){
    emailmessage.style.textAlign = "center"
    emailmessage.value = "Message Copied!"
    setTimeout(() =>{
        emailmessage.style.textAlign = "left"
        emailmessage.value = ""
    }, 1500)
    // alert("Apologies! The sending email function is still under construction")
}

function buttonSwitch(gone, come){
    if (come.style.display === "none"){
        come.style.display = "block"
        gone.style.display = "none"
    } else{
        gone.style.display = "block"
        come.style.display = "none"
    }
}

function sent(){
// sendButton.addEventListener("click", () =>{
    copytext()
    aftersent()
    buttonSwitch(goButton, sendButton)
// })
}

function went(){
// goButton.addEventListener("click", () =>{
    buttonSwitch(sendButton, goButton)
// })
}

// "slide show >:V"

var left = document.getElementById("reachOptLeft")
var center = document.getElementById("reachOptCenter")
var right = document.getElementById("reachOptRight")


// LIST ORDER::     [0] github      [1] email     [1] linkedIn
//INNER ORDER::     [0] Wrapper     [1] Sub       [1] Display Section
const contact = {"github": ["choiceGithub","gitSub","githubSection"], "email": ["choiceEmail","emailSub","emailSection"], "linkedin": ["choiceLinkedIn","linkSub","linkedInSection"]}

function getElement(id){
    access = []
    for (let tag = 0; tag < 3; tag++){
        access.push(document.getElementById(id[tag]))
    }
    return access
}

const github = getElement(contact["github"])
const email = getElement(contact["email"])
const linkedin = getElement(contact["linkedin"])

var identify = 0
for (let tag in contact){
    getElement(contact[tag])[1].value = identify
    identify++
    // console.log(`${contact[tag][1]} ${getElement(contact[tag])[1].value}`)
}

function swapContent(section, place){
    const div = section
    const papers = place
    const clone = div.cloneNode(true)

    while(papers.firstChild) papers.firstChild.remove()

    papers.appendChild(clone)
}

function others(tagValue){
    if (tagValue.value === 0){
        // left.innerHTML = linkedin[1].innerHTML
        // right.innerHTML = email[1].innerHTML
        swapContent(linkedin[0], left)
        swapContent(github[0], center)
        swapContent(email[0], right)
    } else if (tagValue === 1){
        // left.innerHTML = github[1].innerHTML
        // right.innerHTML = linkedin[1].innerHTML
        swapContent(github[0], left)
        swapContent(email[0], center)
        swapContent(linkedin[0], right)
    } else{
        // left.innerHTML = email[1].innerHTML
        // right.innerHTML = github[1].innerHTML
        swapContent(email[0], left)
        swapContent(linkedin[0], center)
        swapContent(github[0], right)
    }
    if (email[1].value === 1){
        console.log("woah")
    }
}

function choice(tagValue){
    for (let subs in contact){
        var section = getElement(contact[subs]) 
        if (section[1].value === tagValue.value){
            section[1].style.display = "none"
            section[2].style.display = "block"
            // swapContent(section[0], center)
        } else{
            section[1].style.display = "block"
            section[2].style.display = "none"
            // others(tagValue)
        }
        others(tagValue)
    }
}

for (let each in contact){
    getElement(contact[each])[1].addEventListener("click", () => {
        choice(getElement(contact[each])[1])
    })
}

console.log(email[1].value)
choice(email[1])
