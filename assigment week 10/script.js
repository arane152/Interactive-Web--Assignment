const navi = document.querySelector('.navi')
const login = document.querySelector('.login a')
const rNaviDivs = document.querySelectorAll('.rNavi_con')
const rNavis = document.querySelectorAll('.rNavi_con a')
const rNaviTexts = document.querySelectorAll('.rNavi_con_text')

const home = document.querySelector('.homepage')
const list = document.querySelector('.listSection')
const contentWs = document.querySelectorAll('.contentW')
const contentBs = document.querySelectorAll('.contentB')



let windowMid = window.innerHeight / 2;

const bodyTag = document.querySelector('body')

const ToHome = home.getBoundingClientRect().top;
const ToList = list.getBoundingClientRect().top;
const ToConetentW1 = contentWs[0].getBoundingClientRect().top;
const ToConetentB1 = contentBs[0].getBoundingClientRect().top;
const ToConetentW2 = contentWs[1].getBoundingClientRect().top;
const ToConetentB2 = contentBs[1].getBoundingClientRect().top;

const scrollPositions = {
    0: ToHome,
    1: ToList,
    2: ToConetentW1,
    3: ToConetentB1,
    4: ToConetentW2,
    5: ToConetentB2
};

function updateStyle(naviColor, loginColor, rNaviColor) {
    navi.style.color = naviColor;
    login.style.color = loginColor;
    rNavis.forEach(rNavi => {
        rNavi.style.color = rNaviColor;
    });
}

document.addEventListener("scroll", function() {
    let homeTop = home.getBoundingClientRect().top;
    let homeMid = homeTop + home.getBoundingClientRect().height / 2;

    let listTop = list.getBoundingClientRect().top;
    let listMid = listTop + list.getBoundingClientRect().height / 2;

    let contentW1 = contentWs[0].getBoundingClientRect().top;
    let contentW1Mid = contentW1 + contentWs[0].getBoundingClientRect().height / 2;
    let contentW2 = contentWs[1].getBoundingClientRect().top;
    let contentW2Mid = contentW2 + contentWs[1].getBoundingClientRect().height / 2;
    
    let contentB1 = contentBs[0].getBoundingClientRect().top;
    let contentB1Mid = contentB1 + contentBs[0].getBoundingClientRect().height / 2;
    let contentB2 = contentBs[1].getBoundingClientRect().top;
    let contentB2Mid = contentB2 + contentBs[1].getBoundingClientRect().height / 2;

    let naviColor = '#202020';
    let loginColor = '#d0d0d0';
    let rNaviColor = '#e0e0e0';

    console.log(windowMid - homeMid)

    if (Math.abs(windowMid - homeMid) < 100) { //home
        rNaviTexts[0].style.color = '#fafafa'
        rNaviTexts[0].style.fontWeight = '700'
        rNaviTexts[1].style.color = '#e0e0e0'
        rNaviTexts[1].style.fontWeight = '400'
        rNaviTexts[0].style.fontSize = '1.25vw'
        rNaviTexts[1].style.fontSize = '1vw'
    } 
    
    else if (Math.abs(windowMid - listMid) < 100) { //list
        naviColor = '#e5e5e5';
        loginColor = '#d0d0d0';
        rNaviColor = '#e0e0e0';
        rNaviTexts[0].style.color = '#e0e0e0'
        rNaviTexts[0].style.fontWeight = '400'
        rNaviTexts[1].style.color = '#fafafa'
        rNaviTexts[1].style.fontWeight = '700'
        rNaviTexts[2].style.color = '#e0e0e0'
        rNaviTexts[2].style.fontWeight = '400'
        rNaviTexts[0].style.fontSize = '1vw'
        rNaviTexts[1].style.fontSize = '1.25vw'
        rNaviTexts[2].style.fontSize = '1vw'
    } 

    else if (Math.abs(windowMid - contentW1Mid) < 100) { //W1
        naviColor = '#202020';
        loginColor = '#404040';
        rNaviColor = '#404040';
        rNaviTexts[1].style.color = '#404040'
        rNaviTexts[1].style.fontWeight = '400'
        rNaviTexts[2].style.color = '#202020'
        rNaviTexts[2].style.fontWeight = '700'
        rNaviTexts[3].style.color = '#404040'
        rNaviTexts[3].style.fontWeight = '400'
        rNaviTexts[1].style.fontSize = '1vw'
        rNaviTexts[2].style.fontSize = '1.25vw'
        rNaviTexts[3].style.fontSize = '1vw'
    } 

    else if (Math.abs(windowMid - contentB1Mid) < 100) { //B1
        naviColor = '#e5e5e5';
        loginColor = '#d0d0d0';
        rNaviColor = '#e0e0e0';
        rNaviTexts[2].style.color = '#e0e0e0'
        rNaviTexts[2].style.fontWeight = '400'
        rNaviTexts[3].style.color = '#fafafa'
        rNaviTexts[3].style.fontWeight = '700'
        rNaviTexts[4].style.color = '#e0e0e0'
        rNaviTexts[4].style.fontWeight = '400'
        rNaviTexts[2].style.fontSize = '1vw'
        rNaviTexts[3].style.fontSize = '1.25vw'
        rNaviTexts[4].style.fontSize = '1vw'
    } 

    else if (Math.abs(windowMid - contentW2Mid) < 100) {  //W2
        naviColor = '#202020';
        loginColor = '#404040';
        rNaviColor = '#404040';
        rNaviTexts[3].style.color = '#404040'
        rNaviTexts[3].style.fontWeight = '400'
        rNaviTexts[4].style.color = '#202020'
        rNaviTexts[4].style.fontWeight = '700'
        rNaviTexts[5].style.color = '#404040'
        rNaviTexts[5].style.fontWeight = '400'
        rNaviTexts[3].style.fontSize = '1vw'
        rNaviTexts[4].style.fontSize = '1.25vw'
        rNaviTexts[5].style.fontSize = '1vw'
    } 
    
    else if (Math.abs(windowMid - contentB2Mid) < 100) { //B2
        naviColor = '#e5e5e5';
        loginColor = '#d0d0d0';
        rNaviColor = '#e0e0e0';
        rNaviTexts[4].style.color = '#e0e0e0'
        rNaviTexts[4].style.fontWeight = '400'
        rNaviTexts[5].style.color = '#fafafa'
        rNaviTexts[5].style.fontWeight = '700'
        rNaviTexts[4].style.fontSize = '1vw'
        rNaviTexts[5].style.fontSize = '1.25vw'
    }

    updateStyle(naviColor, loginColor, rNaviColor);
});

rNaviDivs.forEach((div, index) => {
    div.addEventListener("click", function() {
        window.scrollTo(0, scrollPositions[index]);
        currentSection = index;
    });
});

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

let currentSection = 0; 
const totalSections = Object.keys(scrollPositions).length; 
let scrolling = false; 

function moveToSection(section) {
  if (section >= 0 && section < totalSections && !scrolling) {
    scrolling = true; 
    window.scrollTo({
      top: scrollPositions[section],
      behavior: 'smooth'
    });
    setTimeout(() => {
      scrolling = false;
    }, 1000);
    currentSection = section; 
  }
}

document.addEventListener('wheel', function(e) {
  if (e.deltaY < 0) {
    moveToSection(currentSection - 1);
  } else {
    moveToSection(currentSection + 1);
  }
});

const links = [
    { class: '.Link1', url: 'https://blog.naver.com/siheungblog/223410101648' },
    { class: '.Link2', url: 'https://sstfestival.modoo.at/?link=dpssdvbu' },
    { class: '.Link3', url: 'https://blog.naver.com/siheungblog/223431657657' },
    { class: '.Link4', url: 'https://blog.naver.com/siheungblog/223445210738' }
];

links.forEach(link => {
    const element = document.querySelector(link.class); 
    if (element) { 
        element.addEventListener("click", function() {
            window.open(link.url, '_blank');
        });
    }
});
