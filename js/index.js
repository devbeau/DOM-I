const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
console.log("logo", logo)
let a = document.querySelectorAll("a");
console.log("a", a)
let [h1Text, buttonText, imgSrcUrl] = Object.values(siteContent["cta"]);
console.log("[h1Text, buttonText, imgSrcUrl]", [h1Text, buttonText, imgSrcUrl])
let h1 = document.querySelector(".cta-text > h1");
console.log("h1", h1)
let button = document.querySelector(".cta-text > button");
console.log("button", button)
let img = document.getElementById("cta-img");
console.log("img", img)
let [featuresTextH4, featuresTextContent, aboutTextH4, aboutTextContent, ...restOfObj] = Object.values(siteContent["main-content"])
console.log("[featuresTextH4, featuresTextContent, aboutTextH4, aboutTextContent, ...restOfObj]", [featuresTextH4, featuresTextContent, aboutTextH4, aboutTextContent, ...restOfObj])
let featuresH4 = document.querySelector(".top-content > .text-content > h4");
console.log("featuresH4", featuresH4)
let featuresText = document.querySelector(".top-content > .text-content > p");
console.log("featuresText", featuresText)
let aboutH4 = document.querySelector(".top-content").lastElementChild.firstElementChild;
console.log("aboutH4", aboutH4)
let aboutText = document.querySelector(".top-content").lastElementChild.lastElementChild;
console.log("aboutText", aboutText)
let [midImg, servTextH4, servTextCont, prodTextH4, prodTextCont, visTextH4, visTextCont] = restOfObj;
console.log("[midImg, servTextH4, servTextCont, prodTextH4, prodTextCont, visTextH4, visTextCont]", [midImg, servTextH4, servTextCont, prodTextH4, prodTextCont, visTextH4, visTextCont])
let middleImg = document.getElementById("middle-img");
console.log("middleImg", middleImg)
let serv = document.querySelectorAll(".bottom-content > .text-content")[0];
console.log("serv", serv)
let prod = serv.nextElementSibling;
console.log("prod", prod)
let vis = prod.nextElementSibling;
console.log("vis", vis)
let [contH4Cont, addrCont, phoneCont, emailCont] = Object.values(siteContent["contact"]);
console.log("[contH4Cont, addrCont, phoneCont, emailCont]", [contH4Cont, addrCont, phoneCont, emailCont])
let [,contH4,,addr,,phone,,email,] = document.querySelector(".contact")["childNodes"];
console.log("[,contH4,,addr,,phone,,email,]", [,contH4,,addr,,phone,,email,])
let footerCont = siteContent["footer"]["copyright"];
console.log("footerCont", footerCont)
let nav = document.querySelector("nav");
console.log("nav", nav)
let addrContBr = addrCont.split(" ");
console.log("addrContBr", addrContBr)


logo.setAttribute('src', siteContent["nav"]["img-src"]);
a.forEach((el, ind) => el.textContent = siteContent["nav"][`nav-item-${ind}`])
h1.textContent = h1Text;
button.textContent = buttonText;
img.setAttribute('src', imgSrcUrl);
featuresH4.textContent = featuresTextH4;
featuresText.textContent = featuresTextContent;
aboutH4.textContent = aboutTextH4;
aboutText.textContent = aboutTextContent;
middleImg.setAttribute('src', midImg);
serv.firstElementChild.textContent = servTextH4;
serv.lastElementChild.textContent = servTextCont;
prod.firstElementChild.textContent = prodTextH4;
prod.lastElementChild.textContent = prodTextCont;
vis.firstElementChild.textContent = visTextH4;
vis.lastElementChild.textContent = visTextCont;
contH4.textContent = contH4Cont;
addr.textContent = addrCont;
phone.textContent = phoneCont;
email.textContent = emailCont;
document.querySelector("footer > p").textContent = footerCont;

a.forEach((el) => el.style.color = 'green');
nav.appendChild(document.createElement("a")).setAttribute('class', "created");
document.querySelector(".created").textContent = "Created";
let newA = document.createElement("a");
console.log("newA", newA)
newA.setAttribute('class', "prepended");
newA.textContent = "prepended";
nav.prepend(newA);
h1.innerHTML = h1Text.split(" ").join("<br> ");
addrContBr[3] += "<br>";
addr.innerHTML = addrContBr.join(" ");