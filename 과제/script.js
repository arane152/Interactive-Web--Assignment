document.addEventListener('DOMContentLoaded', function(){
    const stream = document.querySelector('.main_center')
    let contents = document.querySelectorAll('.content')
    
    const back = document.querySelector('.back')
    const forward = document.querySelector('.forward')

    let animatingDetect = false;

    let mouseClickEventDetect = false;

    let currentPage = 2;

    let dark = document.querySelector('.dark')
    const darkClose = document.querySelector('.dark_close')

    let lastClickedContent = null;

    const aside = document.querySelector("aside")
    const menu = document.querySelector("div.menu_div")
    const menuClose = document.querySelector("div.close")

    contents.forEach(content => {
        content.addEventListener("mouseover", mouseOverEvent);
        content.addEventListener("mouseout", mouseOutEvent);
        content.addEventListener("click", mouseClickEvent);
        darkClose.addEventListener("click", mouseClickEventClose);
    });

    menu.addEventListener("click", function(){
        menu.style.opacity = '0';
        menu.style.marginLeft = '10vw';
        menu.style.transform = 'rotate(180deg)'

        dark.style.display = 'flex';
        dark.style.zIndex = '5';
        setTimeout(function() {
            dark.style.opacity = '1';
        }, 10);

        darkClose.style.display = 'none';
        aside.classList.toggle("open");
    });

    menuClose.addEventListener("click", function(){
        menu.style.opacity = '1';
        menu.style.marginLeft = '0vw';
        menu.style.transform = 'rotate(0deg)'

        dark.style.display = 'none';
        dark.style.zIndex = '3';
            setTimeout(function() {
                dark.style.opacity = '0';
            }, 10);

        darkClose.style.display = 'flex';
        aside.classList.toggle("open");
    })

    back.addEventListener('click', function(){
        if (animatingDetect) return;
        animatingDetect = true;

        currentPage = currentPage - 1;
        if (currentPage < 0) {
            currentPage = 3;
        }
        console.log(currentPage)

        contents.forEach((content, index) => {
            content.addEventListener('animationend', () => {
                content.classList.remove(`mv${index}to${(index + 1) % 4}`);
                animatingDetect = false;
            })
        })

        contents[0].classList.add('mv0to1')
        contents[1].classList.add('mv1to2')
        contents[2].classList.add('mv2to3')
        contents[3].classList.add('mv3to0')

        stream.insertBefore(contents[contents.length - 1], contents[0]);
        contents = document.querySelectorAll('.content');
    })

    forward.addEventListener('click', function(){
        if (animatingDetect) return;
        animatingDetect = true;

        currentPage = currentPage + 1;
        if (currentPage > 3) {
            currentPage = 0;
        }
        console.log(currentPage)

        contents.forEach((content, index) => {
            content.addEventListener('animationend', () => {
                let nextIndex = (index - 1 + contents.length) % contents.length;
                content.classList.remove(`mv${index}to${nextIndex}`);
                animatingDetect = false;
            })
        })

        contents[0].classList.add('mv0to3')
        contents[1].classList.add('mv1to0')
        contents[2].classList.add('mv2to1')
        contents[3].classList.add('mv3to2')

        stream.appendChild(contents[0]);
        contents = document.querySelectorAll('.content');
    })

    
    function mouseOverEvent() {
        if (mouseClickEventDetect) return;
        
        let img = this.querySelector(`.img${currentPage}`);
        let imgBack = this.querySelector(`.img${currentPage}_back`)
        if (img) img.style.transform = 'scale(0.9) translateX(-5%) translateY(6%)';
        if (img) img.style.boxShadow = '8px 8px 8px 0 #1b1b1b56';
        if (imgBack) imgBack.style.transform = 'scale(0.9) translateX(6%) translateY(-6%)';
    }

    function mouseOutEvent() {
        if (mouseClickEventDetect) return;

        let img = this.querySelector(`.img${currentPage}`);
        let imgBack = this.querySelector(`.img${currentPage}_back`)
        if (img) img.style.transform = 'scale(1)';
        if (img) img.style.boxShadow = '0px 0px 0px 0';
        if (imgBack) imgBack.style.transform = 'scale(1)';
    }

    function mouseClickEvent() {
        let img = this.querySelector(`.img${currentPage}`);
        let imgBack = this.querySelector(`.img${currentPage}_back`)
        if (!img && !imgBack) return;
        if (img) img.style.transform = 'scale(1) translateX(-60%) translateY(0%)';
        if (imgBack) imgBack.style.transform = 'scale(1) translateX(60%) translateY(0%)';
        dark.style.display = 'flex';
        setTimeout(function() {
            dark.style.opacity = '1';
        }, 10);
        
        lastClickedContent = this;
        mouseClickEventDetect = true;
    }

    function mouseClickEventClose() {
        mouseClickEventDetect = false;
        
        if (lastClickedContent) {
            let img = lastClickedContent.querySelector(`.img${currentPage}`);
            let imgBack = lastClickedContent.querySelector(`.img${currentPage}_back`)
            if (img) img.style.transform = 'scale(1) translateX(0%) translateY(0%)';
            if (imgBack) imgBack.style.transform = 'scale(1) translateX(0%) translateY(0%)';

            dark.style.display = 'none';
            setTimeout(function() {
                dark.style.opacity = '0';
            }, 10);
        }
    }
})
