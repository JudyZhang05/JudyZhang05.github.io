window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

// Artwork Details
const allDetails = [
  details1 = {
    title: "Reacher",
    software: "Adobe Photoshop",
    date: "June 2021",
    description: ""
  },
  details2 = {
    title: "Friends",
    software: "Adobe Photoshop",
    date: "September 2021",
    description: ""
  },
  details3 = {
    title: "High End",
    software: "Adobe Photoshop",
    date: "August 2021",
    description: ""
  },
  details4 = {
    title: "New Year Motivation",
    software: "Adobe Illustrator",
    date: "December 2021",
    description: "I was commissioned by a relative to design a chinese new year poster. This poster would be posted on doors outside the building to set a happy mood for those upon entering or passing by. With this in mind, I made sure to design this poster to be as eye-catching as possible. I wanted the poster to resemble as much as possible the loud and bright celebrations of Chinese New Year. For this, I designed a large chinese firecracker. The light and dramatic perspective implemented in the design is made to draw the audience into the piece and immerse them excitement for the new year. The firecracker and golden ingot are developed with depth for a smooth appearance. The text’s drop shadow is to as much as possible match to the drawing style, as to not make the composition too awkward. The two toned background enhances and directs the attention towards the text and explosion occurring on the ride side."
  },
  details5 = {
    title: "The Perfect Daisy",
    software: "Adobe Illustrator",
    date: "July 2022",
    description: "These illustrations were designed for Marc Jacobs Back to School Contest submission. The client offered students to design both or one of the products between “Daisy” and “Perfect”. The purpose of having students create the design was to fulfill their vision of having the new generation incorporate younger audiences’ style and definition of “what makes you you” within their product. Initially I went with just one product having to focus more on accentuating the abstract meaning of “perfect”. The way I interpreted this topic was to redefine the word to match a more modern preference-abstract. Later I decided to challenge myself to compose both the offered products to one coherent design. For the daisy perfume, I was more direct. While maintaining the first perfume’s style, I implemented the product’s ingredients while giving it a more spring, honey, flowery feel within. Additionally, knowing that the would be chosen design would be advertised and used within a mall and social media, I took the liberty to study their seasonal color palette for their media posts and decided to implement it to maintain the same consistency."
  },
  details6 = {
    title: "DragonFruit",
    software: "Adobe Illustrator",
    date: "February 2022",
    description: "This design was created for the informative purpose of advertising a healthy fruit while highlighting it’s positive benefits for people. By promoting and informing more people of these healthier choices, I decided to design this poster with more vibrantly alluring elements. The pastel palette brings the audience’s to a more positive mood. The addition of the sakura like leaves near the foreground brings depth to the poster and leads the audience to the singular dragon fruit near the center. The green accent on the dragonfruit brings the whole piece together while adding a pop of a complementary color. The simple yet complex design with the addition of careful placement of hierarchy of text creates for a captivating piece."
  },
  details7 = {
    title: "Granted",
    software: "Figma",
    date: "March 2023",
    description: ""
  },  
  details8 = {
    title: "Jolly",
    software: "Figma",
    date: "June 2022",
    description: ""
  },
  details9 = {
    title: "TBD",
    software: "",
    date: "",
    description: ""
  },
]

var enLargement = document.getElementById("enLarge")
var closing = document.getElementById("closeThis")
var images = document.getElementsByClassName("piece")
var showThis = document.getElementById("thisOne")
var whatThis = document.getElementById("details")
var thisCalled = document.getElementById("thisCalled")

// Media Responsive
const webSize = window.matchMedia("(max-width: 1330px)")

// conditional locks
var titleAppeared = false

function titleAppearance(){
  if (titleAppeared === true){
    thisCalled.style.animation = "none"
    thisCalled.style.opacity = "100%"
  }
  else{
    thisCalled.style.animation = "seeMore 1s forwards"
    thisCalled.style.opacity = "0%"
  }
}

function closeEnlargement(){
  enLargement.style.display = "none"
  document.body.style.overflowY = "auto"
  titleAppeared = false
  titleAppearance()
}

function openEnlargement(){
  enLargement.style.display = "block"
}


function alignDetails(number, webSize){
  titleAppearance()
  if (webSize.matches){
    whatThis.innerHTML = `<h2>Title: ${allDetails[number].title}</h2> <br /><h3>Details</h3>`
  }
  else{
    whatThis.innerHTML = `<h2>Details</h2><br />`
  }
  thisCalled.innerHTML = `Title: ${allDetails[number].title}`
  whatThis.innerHTML += `<span style="font-weight: bold;">Software Used:</span> ${allDetails[number].software} <br /> <span style="font-weight: bold;">Date Published:</span> ${allDetails[number].date} <h4>Description:</h4> ${allDetails[number].description}`
  titleAppeared = true
}

closing.addEventListener("click", closeEnlargement)

var identity = 0
for (let tag of images){
  tag.value = identity
  identity++
}

for (let piece of images){
  piece.children[0].addEventListener("click", function(){
    document.body.style.overflowY = "hidden"
    openEnlargement()
    showThis.src = this.src
    alignDetails(piece.value, webSize)

    webSize.addEventListener("change", () => {
      alignDetails(piece.value, webSize)
    })
    
  })
}