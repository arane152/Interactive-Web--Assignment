const currentPercent = document.querySelector('.currentPercent');
const contents = document.querySelectorAll('.content');
const bodyTag = document.querySelector('body');

const c1ContentH1 = document.querySelector('#c1 #c1Content h1')
const c1ContentH3 = document.querySelector('#c1 #c1Content h3')
const c1ContentP = document.querySelector('#c1 #c1Content p')
const c1Button = document.querySelector('#c1Button')

const c2ContentP = document.querySelector('#c2 p')
const c2ContentH1 = document.querySelector('#c2 h1')

const c3ContentH1 = document.querySelector('#c3Content h1')
const c3ContentH3s = document.querySelectorAll('#c3Content h3')
const c3ContentP = document.querySelector('#c3Content p')

const c4ContentH1 = document.querySelector('#c4Content h1')
const c4ContentH3 = document.querySelector('#c4Content h3')
const c4ContentP = document.querySelector('#c4Content p')
const c4ContentH2 = document.querySelector('#c4Content h2')

const c5ContentH1 = document.querySelector('#c5Content h1')
const c5ContentH3s = document.querySelectorAll('#c5Content h3')

const scrollPositions = [];

c1Button.addEventListener("mouseover", function() {
    console.log('wow')
})

document.addEventListener("DOMContentLoaded", function () {
  contents.forEach((content, index) => {
    scrollPositions[index] = content.getBoundingClientRect().top + window.scrollY;
  });
});

document.addEventListener("scroll", function () {
  const bodyHeight = bodyTag.getBoundingClientRect().height;
  const scrollableHeight = bodyHeight - window.innerHeight;

  const pixels = window.scrollY - 50;
  const percentage = pixels / scrollableHeight;

  currentPercent.style.width = `${percentage * 100}vw`;

  contents.forEach((content, index) => {
    if (pixels >= scrollPositions[0] && pixels < (scrollPositions[1] || Number.POSITIVE_INFINITY)) {
        setTimeout(() => {
            c2ContentP.style.opacity = '100%'
        setTimeout(() => {
            c2ContentH1.style.opacity = '100%'
        }, 1000)
        }, 500)
    }
    else if (pixels >= scrollPositions[1] && pixels < (scrollPositions[2] || Number.POSITIVE_INFINITY)) {
        setTimeout(() => {
            c3ContentH1.style.transform = 'translateX(0vw)'
            c3ContentH1.style.opacity = '100%'
            setTimeout(() => {
                c3ContentP.style.transform = 'translateX(0vw)'
                c3ContentP.style.opacity = '100%'
                    setTimeout(() => {
                    c3ContentH3s[0].style.transform = 'translateX(0vw)'
                    c3ContentH3s[0].style.opacity = '100%'
                    setTimeout(() => {
                        c3ContentH3s[1].style.transform = 'translateX(0vw)'
                        c3ContentH3s[1].style.opacity = '100%'
                        }, 250)
                    }, 500)
            }, 750)
        }, 500)
    }
    else if (pixels >= scrollPositions[2] && pixels < (scrollPositions[3] || Number.POSITIVE_INFINITY)) {
        setTimeout(() => {
            c4ContentH1.style.transform = 'translateX(0vw)'
            c4ContentH1.style.opacity = '100%'
            setTimeout(() => {
                c4ContentH2.style.transform = 'translateX(0vw)'
                c4ContentH2.style.opacity = '100%'
                    setTimeout(() => {
                    c4ContentP.style.transform = 'translateX(0vw)'
                    c4ContentP.style.opacity = '100%'
                    setTimeout(() => {
                        c4ContentH3.style.transform = 'translateX(0vw)'
                        c4ContentH3.style.opacity = '100%'
                    }, 500)
                    }, 500)
            }, 750)
        }, 500)
    }
    else if (pixels >= scrollPositions[3]) {
        console.log('마지막 페이지')
        setTimeout(() => {
            c5ContentH1.style.transform = 'translateY(0vw)';
            c5ContentH1.style.opacity = '100%';
            setTimeout(() => {
                c5ContentH3s[0].style.transform = 'translateY(0vw)';
                c5ContentH3s[0].style.opacity = '100%';
                setTimeout(() => {
                    c5ContentH3s[1].style.transform = 'translateY(0vw)';
                    c5ContentH3s[1].style.opacity = '100%';
                    setTimeout(() => {
                        c5ContentH3s[2].style.transform = 'translateY(0vw)';
                        c5ContentH3s[2].style.opacity = '100%';
                        setTimeout(() => {
                            c5ContentH3s[3].style.transform = 'translateY(0vw)';
                            c5ContentH3s[3].style.opacity = '100%';
                            setTimeout(() => {
                                c5ContentH3s[4].style.transform = 'translateY(0vw)';
                                c5ContentH3s[4].style.opacity = '100%';
                                setTimeout(() => {
                                    c5ContentH3s[5].style.transform = 'translateY(0vw)';
                                    c5ContentH3s[5].style.opacity = '100%';
                                    setTimeout(() => {
                                        c5ContentH3s[6].style.transform = 'translateY(0vw)';
                                        c5ContentH3s[6].style.opacity = '100%';
                                    }, 250)
                                }, 250)
                            }, 250)
                        }, 250)
                    }, 250)
                }, 250)
            }, 750);
        }, 750);
    }
  })
});

window.addEventListener("wheel", function (e) {
  e.preventDefault();
}, { passive: false });

let currentSection = 0;
const totalSections = contents.length;
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

document.addEventListener('wheel', function (e) {
  if (e.deltaY < 0) {
    moveToSection(currentSection - 1);
  } else {
    moveToSection(currentSection + 1);
  }
});

window.addEventListener("load", function(){
    c1ContentH1.style.transform = 'translateY(0vw)'
    c1ContentH1.style.opacity = '100%'
    this.setTimeout(() => {
        c1ContentH3.style.transform = 'translateY(0vw)'
        c1ContentH3.style.opacity = '100%'
        this.setTimeout(() => {
            c1ContentP.style.transform = 'translateY(0vw)'
            c1ContentP.style.opacity = '100%'
        }, 500)
    }, 500)
    
    

    setTimeout(function() {
        c1Button.style.opacity = '100%';
    }, 1500);
})

