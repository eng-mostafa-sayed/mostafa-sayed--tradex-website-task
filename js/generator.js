let imgs = [
    `https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/testi-avtar-3.jpg`,
    `https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/testi-avtar-2.jpg`,
    `https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/testi-avtar-1.jpg`,
    `https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/testi-avtar-4.jpg`,
    `https://digitaltemplatemarket.com/wp/tradex-premium/wp-content/uploads/sites/6/2018/11/testi-avtar-5.jpg`,
];
let names = [
    `eline lockod`,
    `johy michel`,
    `jon doe`,
    `erich trait`,
    `gargi jane`,
];
let jobs = ["designer", "marketing manager", "manager", "designer", "tester"];
let description = [
    `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,ligula. Cum eget dolor Aenean rhoncus ut, fringilla vel, aliquet nec, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede mollis pretium `,
];

function getRandom() {
    min = 0;
    max = 4;
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

let rightCard = document.querySelector(".TestimonialLeft");
let lefttCard = document.querySelector(".TestimonialRight");
let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");

function rightClicked() {
    let L_t_img = document.getElementById("LeftTestimonialImg").src;
    let L_t_job = document.querySelector(".LeftTestimonialJob");
    let L_t_des = document.querySelector(".LeftTestimonialDescription");
    let L_t_name = document.querySelector(".LeftTestimonialName");

    let R_t_img = document.getElementById("RightTestimonialImg").src;
    let R_t_job = document.querySelector(".RightTestimonialJob");
    let R_t_des = document.querySelector(".RightTestimonialDescription");
    let R_t_name = document.querySelector(".RightTestimonialName");

    const job = L_t_job.textContent;
    const des = L_t_des.textContent;
    const name = L_t_name.textContent;
    // console.log(R_t_img, R_t_job.textContent, R_t_des.textContent);
    //transfer left to right
    // R_t_img = L_t_img;
    //      R_t_job.textContent = "node";
    //        R_t_name.textContent = "dev";
    //      R_t_des.textContent = "how";
    document.querySelector(".RightTestimonialJob").textContent = "not working";
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("done");
});

function randomize() {
    let cardHolder = document.querySelector("#cardHolder");

    let myDiv = document.createElement("div");
    myDiv.setAttribute(
        "class",
        "card mb-3 col-12 col-md-6 col-sm-12 mx-2 Testimonial TestimonialLeft2"
    );
    myDiv.setAttribute("style", "width: 48%;");

    let my2Div = document.createElement("div");
    my2Div.setAttribute("class", "row g-0");

    let my3Div = document.createElement("div");
    my3Div.setAttribute("class", "col-md-3 my-5 ms-3 rounded");

    let myImg = document.createElement("img");
    myImg.setAttribute("src", imgs[getRandom()]);
    myImg.setAttribute("class", " img-fluid rounded-start ");

    let my4Div = document.createElement("div");
    my4Div.setAttribute("class", "col-md-8");

    let my5Div = document.createElement("div");
    my5Div.setAttribute("class", "card-body");

    let myh4 = document.createElement("h4");
    myh4.setAttribute("class", "card-title LeftTestimonialName2");
    myh4.textContent = names[getRandom()];

    let myh6 = document.createElement("h6");
    myh6.setAttribute("class", "card-title text-primary LeftTestimonialJob2");
    myh6.textContent = jobs[getRandom()];

    let myp = document.createElement("h6");
    myp.setAttribute("class", "card-text LeftTestimonialDescription2");
    myp.textContent = description[0];

    my5Div.appendChild(myh4);
    my5Div.appendChild(myh6);
    my5Div.appendChild(myp);

    my4Div.appendChild(my5Div);

    my3Div.appendChild(myImg);

    my2Div.appendChild(my3Div);
    my2Div.appendChild(my4Div);

    myDiv.appendChild(my2Div);
    //didnt work//
    //document.removeChild(lefttCard);
    cardHolder.appendChild(myDiv);
}

leftArrow.addEventListener("click", randomize);
rightArrow.addEventListener("click", rightClicked);