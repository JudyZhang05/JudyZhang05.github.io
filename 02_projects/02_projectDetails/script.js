const project = sessionStorage.getItem("project")

const projectData = {
    "Stellar":{
        role: "Sole UI/UX Designer & Front-End Developer"
        ,overview: "Stellar is a website for a conceptual start-up company of stickers and scrapbooking stationery items for all ages. The aspiration is to combat the normalized and unethicality of stolen art by supporting original artists' works while offering affordable and high-quality products all in a user-centered and accessible design."
        ,problem: "AI art has increased in popularity and practice in recent years, trending on multiple media platforms with its seemingly limitless capabilities and essentially creating a pathway in validating a new genre of \"artists\". The overly simple act of typing a prompt, submitting it to an AI generator, and producing it for the right audience has single-handedly jeopardized the livelihoods of some artists. Especially where businesses value quantity over quality or profit over people, AI art replaces original designs with cheap mimicries. Thus directly affecting the sticker and stationery industry where it's most dependent and vulnerable."
        ,solution: "Stellar not only provides but encourages more employment in an area of scarcity. You will find that Stellar prides itself on its unyielding commitment to original hand-illustrated designs with a promise of no AI-generated products. It aims to build a welcoming and open community of dedicated sticker lovers and scrapbook enthusiasts."
        ,design: "I knew I wanted the website to incorporate a mature and comforting atmosphere that would be easy and simple to navigate through yet interesting enough to make the user want to stay longer. For this, I came up with an initial pastel, cool-toned color palette. Using my color pallet to thoroughly search through common-use photography, then selected a calming photograph of the sky with clouds decorating the borders, creating an illusive frame. Moving forward, I altered my color pallet to match this photograph, making sure to include contrasting hues that complement each other. <br/><br/> Swiftly with my progression, I started thinking ahead to the development stage and planned to implement scaleable vector graphics (SVG) as opposed to rasterized images. Thus, I gathered some free-to-use SVG icons and logos and ultimately finalized my decision with the horizontally aligned three-rounded stars, which were based on the brand name, Stellar. My low-fidelity wireframe shows how each page would be formatted with a general idea of what information will be supplied to the user. Intentionally, I left hard sharp edges and thick contrasting borders to allude to a mature and reliable feel. "
        ,develop: "Utilizing GitHub's feature to deploy static pages, I developed a 3-page interface with a navigation bar fixed to the top for accessibility. The homepage includes 3 sections: the brand's introduction, the map-branch locations section, and a review/customer feedback section. The shop page will consist of multiple user-customized suggestion products in descending precedence: new, popular-you might like, and revisit (etc). The last page is the about us page where sits a placeholder video intended for a brief introduction on what Stellar's mission is and an in-depth analysis of where we get our products from and what type of community we are building with our company. Right beside the video is a transcript where we provided the user with an alternative. Below would present ways to contact, join, or simply stay up to date with the company's progress. <br/><br/><h1>Future Plans</h1>For more accessibility and customization, I intend to include a filter search feature, which will sort through genres, prices, colors, styles, and artists. For those who are just beginning their sticker collection or scrapbooking journey, I plan to implement a quick survey to figure out what kind of products I think the user might be interested in. <br/><br/>Note: This project is still a work in progress, thus some features may not yet be functional. "
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
    ,"MEDP285 Website":{
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
    ,"Stephen King Villain API":{
        role: "Sole UI Designer, Front-End & Back-End Developer"
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
    }

    //Next
    let nextCase = ""
    if(allCases.indexOf(project)+1 >= allCases.length){
        nextCase = allCases[0]
    }else{
        nextCase =  allCases[allCases.indexOf(project)+1];
    }
    $("#nextCase").html(`See Next &#8640; <span>${nextCase}</span>`)
    $("#nextCase").click(() => {
        sessionStorage.clear()
        sessionStorage.setItem("project", nextCase)
        window.location.href = "./index.html";
    })
}

setData();