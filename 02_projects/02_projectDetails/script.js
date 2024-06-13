const project = sessionStorage.getItem("project")

const projectData = {
    "Stellar":{
        role: "Sole UI/UX Designer & Front-End Developer"
        ,overview: "Stellar is a website for a conceptual start-up company of stickers and scrapbooking stationery items for all ages. The aspiration is to combat the normalized and unethicality of stolen art by supporting original artists' works while offering affordable and high-quality products all in a user-centered and accessible design."
        ,problem: "AI art has increased in popularity and practice in recent years, trending on multiple media platforms with its seemingly limitless capabilities and essentially creating a pathway in validating a new genre of \"artists\". The overly simple act of typing a prompt, submitting it to an AI generator, and producing it for the right audience has single-handedly jeopardized the livelihoods of some artists. Especially where businesses value quantity over quality or profit over people, AI art replaces original designs with cheap mimicries. Thus directly affecting the sticker and stationery industry where it's most dependent and vulnerable."
        ,solution: "Stellar not only provides but encourages more employment in an area of scarcity. You will find that Stellar prides itself on its unyielding commitment to original hand-illustrated designs with a promise of no AI-generated products. It aims to build a welcoming and open community of dedicated sticker lovers and scrapbook enthusiasts."
        ,design: "I knew I wanted the website to incorporate a mature and comforting atmosphere that would be easy and simple to navigate through yet interesting enough to make the user want to stay longer. For this, I came up with an initial pastel, cool-toned color palette. Using this pallet, I then scoured common-use photography, ultimately selecting a calming photograph of a pleasant blue sky with clouds decorating the borders, creating an illusive frame. Moving forward, I altered my color pallet to match this photograph, making sure to include contrasting hues that complement each other. <br/><br/>Swiftly with my progression, I started thinking ahead to the development stage and planned to implement scaleable vector graphics (SVG) as opposed to rasterized images. Thus, I gathered some free-to-use SVG icons and logos and finalized my decision with the horizontally aligned three-rounded stars, which were based on the brand name, Stellar. The site map acts as a guide to how each page connects and my low-fidelity wireframe shows how each page would be formatted with a general idea of what information will be supplied to the user. Intentionally, I left hard sharp edges and thick contrasting borders to allude to a mature and reliable feel. "
        ,develop: "Utilizing GitHub's feature to deploy static pages, I developed a 3-page interface with a navigation bar fixed to the top for accessibility. The homepage includes 3 sections: the brand's introduction, the map-branch locations section, and a review/customer feedback section. The shop page will consist of multiple user-customized suggestion products in descending precedence: new, popular, recommendations, favorites, and revisit (etc). The last page is the about us page where there sits a placeholder video intended for a brief introduction to what Stellar's mission is and an in-depth analysis of where we get our products from and what type of community we are building with our company. Right beside the video is a transcript where we provided the user with an alternative. The below page would present ways to contact, join, or simply stay up to date with the company's progress.<br/><br/><h1>Future Plans</h1>For more accessibility and customization, I intend to include a filter search feature, which will sort through genres, prices, colors, styles, and artists. For those who are just beginning their sticker collection or scrapbooking journey, I plan to implement a quick survey to figure out what kind of products other users are interested in. <br/><br/>Note: This project is still a work in progress, thus some features may not yet be implemented or functional. "
        ,images: {
            figma: "../../00_assets/projects/design/figma/stellar.png" 
            ,website: "../../00_assets/projects/design/website/stellar.png"
        }
        ,links: {
            figma: "https://www.figma.com/design/LA4v57EIlJcTeaXRIAcz1E/Judy-Zhang---MEDP285-Wireframe?node-id=794-2&t=u6XgZf3yo5auWqMN-0"
            ,website: "https://judyzhang05.github.io/JudyZhang_MEDP285/Final/index.html"
        }
    }
    ,"Portfolio Website":{
        role: "Sole UI/UX Designer & Front-End Developer"
        ,overview: "My portfolio website is dedicated to sharing my aspirations of becoming a UI/UX Designer while presenting related projects that I've worked on either alone or collaboratively. Additionally, this website seconds as my art portfolio where I share my digitally illustrated artworks and my analysis as the artist."
        ,problem: "As great as regular schmelguar media platforms are in sharing people's creativity and ideas, I always felt as if they were missing some key elements in the interactivity department. Sure, you could like, comment, and share, but you cannot delve into the actual piece unless you are actively searching for it. Additionally, there is no personality found in the way each work is being presented. Confined to a singular page, with a limit of some hundred words. It was simply too generic."
        ,solution: "Taking a page from Napoleon Bonaparte, \"If you want something done right, do it yourself\". Thus, I threw myself into the world of UI/UX design and Front-End development. I quickly came to respect the interfaces of all websites I've interacted with, whereas before I never even took notice. Slowly but surely and brick by hand-drawn brick, I designed and developed the very webpage you are reading this paragraph from.  "
        ,design: "Initially, this website was built solely for showcasing my digital art pieces, but as I grew more into web design and development, it has expanded to what it is today. To get started on how I would like to present myself to the online audience, I quickly surveyed the people around me, both friends and family, on how they perceived me and how I came across to them. As you can imagine, this was simply a road down memory lane and my family even conjured up some photos to convey their versions of me to me. It was eye-opening, to say the least. However, this worked wonders because I had already planned on implementing a photo of myself, but had not yet chosen the right one. Until my lovely sister supplied me with the perfect photo that encompassed me and my love of nature.<br/><br/>Moving forward, I began fleshing out my wireframe and sitemap in ways to compose each page and have them efficiently connect. Using my graphic design skills, I thoughtfully blocked out places where there would be text versus images while mapping the hierarchy of layout and typography. This being in low-fidelity, I left the general backgrounds and color pallet relatively bland, to remain flexible to any future changes or ideas that might come to me. Additionally, I wanted there to be a nice consistency throughout the website, thus, I themed my entire portfolio based on the selected photograph, with some creative liberty of course. Later in the design process, I wanted to spice things up a bit. So, utilizing Adobe Illustrator, I designed and created a digital illustration with some background images, to nicely frame the content on my pages, all without hindering the audience from reading the text or becoming too overwhelmed with everything on screen. "
        ,develop: "For my website porfolio, I opted to use GitHub in-built deploy page feature. You can check the repository out <a href=\"https://github.com/JudyZhang05/JudyZhang05.github.io\" target=\"_blank\" id=\"elink\">here</a>. After thoroughly cleaning up my previous design, I took inspiration from other UI/UX Designer's websites, learning from my past designs, I constructed a more elaborate and direct website. I separated my portfolio into 4 pages. The About Me page, which serves as a contact and homepage is the first page everyone is greeted by. The projects page is where all my works are displayed with a small summary of what they each entail. Then finally, a project details page that goes into in-depth details on the whys and hows of every project I have available. Additionally, if the project is published or still executable, I will supply their respective links for you to explore. Turning my digitally illustrated artwork into Scalable Vector Graphics (SVG) with Adobe Illustrator's built-in export as a feature, I applied them directly to my local repository and modified the file a bit to incorporate a subtle motion, one that brings the illustration alive but, does not distract the user away from the content on screen. The rest of the process is relatively straightforward, replicating and adjusting my Figma wireframe onto the website and flushing it out fully till I get my envisioned design."
        ,images: {
            figma: "" 
            ,website: "../../00_assets/projects/design/website/webport.png"
        }
        ,links: {
            figma: "https://www.figma.com/design/sCQhQaf3LQ5B2hulXQC0Nb/Judy-Zhang's-Website-Portfolio-Design?node-id=0-1&t=heaeBMODdpaW467t-0" 
            ,website: "https://judyzhang05.github.io"
        }
    }
    ,"MEDP285 Website":{
        role: "Sole UI Designer & Front-End Developer"
        ,overview: "The purpose of this website was built for Hunter College's MEDP 285 - Web Production I course. Each assignment has its page meant for building and exploring elements that go into the making of a website. This course was relatively beginner's level, allowing me to touch up on the basics again with more details and description."
        ,problem: "none"
        ,solution: "none"
        ,design: "This design was made with duotones throughout the webpage to challenge me with limitations and bring out my creativity. I knew the content within these pages would be unserious and comedic, thus I attempted to make the composition more complex and abstract to contradict that, making a more alluring piece. Then to make the page come together, I settled on a mature pastel purple hue that conveyed not only the lightheartedness but also resembled an actual website you could view in a professional setting. Each component is thoughtfully placed to appeal to the audience artistically. The Figma wireframe illustrates the planned initial design of the webpage and the sitemap (URL located at the top of the Figma) visualizes how each page leads and interacts with another allowing users to navigate to and from these pages. "
        ,develop: "For this project, I was given the task of utilizing a mix of grid templates and Flexbox to develop and format the page. So with the GitHub deployment page feature, I developed an introduction page where the assignment details would be displayed to the user followed by the actual completed assignment. The navbar fixed to the top acts to shift through every assignment without having to click back and forth everywhere. <br/><br/>*Note: Only the CSS page has this design fully developed, as this was for show purposes only and not a long-term website."
        ,images: {
            figma: "../../00_assets/projects/design/figma/webprod.png" 
            ,website: ""
        }
        ,links: {
            figma: "https://www.figma.com/design/LA4v57EIlJcTeaXRIAcz1E/Judy-Zhang---MEDP285-Wireframe?node-id=1669-162202&t=w3atCSs0xSEv3rgd-0" 
            ,website: ""
        }
    }
    ,"Stephen King Villain API":{
        role: "Sole UI Designer, Front-End & Back-End Developer"
        ,overview: "The Stephen King Villain API is a node.js executable webpage. Complete with both Front-End and Back-End development, you can run it on your local machine to see what kind of Stephen King Villain you are. "
        ,problem: "Are you a horror addict? Ever watched \"IT\" or \"The Boogeyman\"? Well, you probably heard of Stephen King then. Reading his horror novels and watching their adapted horror movies are great and all, but like a true horror addict, if you were in these horrific narratives and story retellings, you'd want to know which character you were, but more intriguing, which villain you are.  "
        ,solution: "Well, look no further! Utilizing an open-source Application Programming Interface (API) on Stephen King's Villains and some magic in the Back-End, you can pinpoint exactly which villain you would be portrayed as in the Stephen King universe. The results may surprise, horrify, or intrigue you. Just a click of a button or 2 and this webpage will satisfy your curiosity in the best way possible!"
        ,design: "The design for this is relatively short, sweet, and simple. The background is pure black to set the atmosphere, the font color is red because of blood, and the font style is this childlike marker handwriting but in all caps to convey some sense of false urgency. To interact with the webpage and get the results, all the users would need to input is their first and last names and their year of birth. After submitting their input, it should bring the user to a different page that displays the resulting Villain name, and other available details regarding that Villain from the API."
        ,develop: "The development is where all the magic happens. The Stephen King Villain website utilizes node.js, express, body-parser (as the middleware), Axios, and embedded javascript to function. Through its client-server architectural programming allows the user to receive a computed response from the fetched RESTful Stephen King API found <a href=\"https://stephen-king-api.onrender.com\" target=\"_blank\" id=\"elink\">here</a>. The express server then uses event handlers to retrieve data from the API and computes and filters them through a specific set of conditional statements to display a particular villain to the user. To display the computed data, this webpage utilizes embedded javascript to translate the information onto the webpage, showing a different result if the output comes out empty. To run this for yourself, follow the instructions in the GitHub Repository README (found below)!"
        ,images: {
            figma: "" 
            ,website: ""
        }
        ,links: {
            figma: "" 
            ,website: "https://github.com/JudyZhang05/JudyZhang_CSCI39548/tree/main/final"
        }
    }
    ,"An Unlucky Day":{
        role: "Sole UI Designer & Front-End Developer"
        ,overview: ""
        ,problem: ""
        ,solution: ""
        ,design: ""
        ,develop: ""
        ,images: {
            figma: "" 
            ,website: ""
        }
        ,links: {
            figma: "" 
            ,website: ""
        }
    }
    ,"Feel ReLeaf":{
        role: "Sole UI Designer & Front-End Developer"
        ,overview: ""
        ,problem: ""
        ,solution: ""
        ,design: ""
        ,develop: ""
        ,images: {
            figma: "" 
            ,website: ""
        }
        ,links: {
            figma: "" 
            ,website: ""
        }
    }
    ,"Klicky":{
        role: "UI Designer & Co Front-End Developer"
        ,overview: ""
        ,problem: ""
        ,solution: ""
        ,design: ""
        ,develop: ""
        ,images: {
            figma: "" 
            ,website: ""
        }
        ,links: {
            figma: "" 
            ,website: ""
        }
    }
}

const sections = ["role","overview","problem","solution","design","develop","figma","website"]
const allCases = ["Stellar","Portfolio Website","MEDP285 Website","Stephen King Villain API","An Unlucky Day","Feel ReLeaf","Klicky"]

function setData(){
    // BackgroundImage
    if(allCases.indexOf(project) %2 == 0){
        $(".topContainer").css("backgroundImage", "url(../../00_assets/svgs/detsign1.svg)");
    }else{
        $(".topContainer").css("backgroundImage", "url(../../00_assets/svgs/detsign2.svg)");
    }


    //Title
    $("#projectTitle").text(`Judy's Project - ${project}`);
    $("#projectHead").text(project);

    // Contents
    const projectCase = projectData[project];
    for(let info of sections){
        if(info == "figma" || info == "website"){
            $(`#${info}`).attr("src",projectCase.images[info]);
            $(`#visit${info}`).attr("href",projectCase.links[info]);
        }else{
            $(`#${info}`).html(projectCase[info]);
        }
        //Conditional Stories
        if(info == "problem" && $(`#${info}`).html() == "none"){
            $(".projectPurpose").css("display", "none"); 
        }
    }

    //Next
    let nextCase, prevCase;
    if(allCases.indexOf(project)+1 >= allCases.length){
        nextCase = allCases[0]
    }
    else{
        nextCase =  allCases[allCases.indexOf(project)+1];
    }
    if(allCases.indexOf(project) == 0){
        prevCase = allCases[allCases.length-1]
    }else{
        prevCase =  allCases[allCases.indexOf(project)-1];
    }
    $("#nextCase").html(`See Next &#8640; <span>${nextCase}</span>`)
    $("#prevCase").html(`See Previous &#8636; <span>${prevCase}</span>`)
    $("#nextCase").click(() => {
        sessionStorage.clear()
        sessionStorage.setItem("project", nextCase)
        window.location.href = "./index.html";
    });
    $("#prevCase").click(() => {
        sessionStorage.clear()
        sessionStorage.setItem("project", prevCase)
        window.location.href = "./index.html";
    });
}

setData();