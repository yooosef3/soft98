//slider1

const slides=document.getElementById('slides-add');
const next=document.getElementById('next');
const previous=document.getElementById('previous');

const timeout=2000;
const speed=10;

let allSlides;
let lastSlide;
let nextTimeout;
let animating=false;

nextTimeout=setTimeout(nextSlide,timeout);

function nextSlide(){
    allSlides=document.querySelectorAll('.slide');
    lastSlide=allSlides[allSlides.length-1];
    requestAnimationFrame(moveRight);
    animating=true;
}

function moveRight(){
    const left=parseInt(lastSlide.style.left);
    lastSlide.style.left=(left+speed)+'px';
    if(left<300){
        requestAnimationFrame(moveRight);
    }else{
        slides.insertBefore(lastSlide,slides.firstElementChild);
        lastSlide.style.left='0';
        nextTimeout=setTimeout(nextSlide,timeout);
        animating=false;
    }
}

next.addEventListener('click',function(){
    if(!animating){
        clearTimeout(nextTimeout);
        nextSlide();
    }
});

previous.addEventListener('click',function(){
    if(!animating){
        clearTimeout(nextTimeout);
        previousSlide();
    }
});

function previousSlide(){
    slides.firstElementChild.style.left='300px';
    slides.appendChild(slides.firstElementChild);
    allSlides=document.querySelectorAll('.slide');
    lastSlide=allSlides[allSlides.length-1];
    requestAnimationFrame(moveLeft);
    animating=true;
}

function moveLeft(){
    const left=parseInt(lastSlide.style.left);
    lastSlide.style.left=(left-speed)+'px';
    if(left>speed){
        requestAnimationFrame(moveLeft);
    }else{
        nextTimeout=setTimeout(nextSlide,timeout);
        animating=false;
    }   
}

//scroll logo
$(window).on('scroll load' , function(){
    if ($(window).scrollTop()>90) {
        $('#home').css('visibility','hidden'),
        $('#menu-img').css('visibility','visible').css('position','absolute').css('right','41px').css('z-index','1');
    } else {
        $('#home').css('visibility','visible'),
        $('#menu-img').css('visibility','hidden');
    }
})

// tab
const softwareTab=document.getElementById('softwaredown');
const androidTab=document.getElementById('android');
const webTab=document.getElementById('web');
const softwareContent=document.getElementById('softwares');
const androidContent=document.querySelector('#softwares-news-content #android');
const webContent=document.getElementById('web-news');


softwareTab.addEventListener('click',function(){
    androidTab.classList.remove('active');
    webTab.classList.remove('active');
    softwareTab.classList.add('active');
    softwareContent.style.display='block';
    androidContent.style.display='none';
    webContent.style.display='none';
});

androidTab.addEventListener('click',function(){
    androidTab.classList.add('active');
    softwareTab.classList.remove('active');
    webTab.classList.remove('active');
    softwareContent.style.display='none';
    webContent.style.display='none';
    androidContent.style.display='block';
});

webTab.addEventListener('click',function(){
    webTab.classList.add('active');
    softwareTab.classList.remove('active');
    androidTab.classList.remove('active');
    webContent.style.display='block';
    softwareContent.style.display='none';
    androidContent.style.display='none';
});

//hamburger
const barsDiv=document.querySelector('.bars-div');
const mobileMenu=document.getElementById('menu-sidebar');
const main=document.querySelector('main');
const hamburger=document.querySelector('.bars-div i');

barsDiv.addEventListener('click',function(){
    if (mobileMenu.style.right==='0px') {
        mobileMenu.style.right='-445px';
        main.style.filter='blur(0px)';
        hamburger.classList.remove("fa-times");
        hamburger.classList.add("fa-bars");
    } else {
        mobileMenu.style.right='0px';
        main.style.filter='blur(5px)';
        hamburger.classList.add("fa-times");
        hamburger.classList.remove("fa-bars");
    }
})

main.addEventListener('click',function(){
    main.style.filter='blur(0px)';
    mobileMenu.style.right='-445px';
    hamburger.classList.remove("fa-times");
    hamburger.classList.add("fa-bars");
})
   
//continue list
let continueList=document.getElementById('continue-list');
let allSoftwares=document.getElementById('all-softwares');
let continueIcon=document.querySelector('#continue-list i')

continueList.addEventListener('click',function(){
allSoftwares.classList.toggle('active');
continueIcon.classList.toggle('rotate-icon');
});

//dropdown amel

var downIcon=document.getElementById('sidebar-down');
var amelDown=document.querySelector('#sidebar-amel #amel-down');

    amelDown.addEventListener('click',function(){
        this.classList.toggle('active-dropdown');
        var sideAmel=this.nextElementSibling;
        if (sideAmel.style.display==='block') {
            sideAmel.style.display='none';
            downIcon.style.transform='rotate(360deg)';
        } else {
            sideAmel.style.display='block';
            downIcon.style.transform='rotate(180deg)';
        }
    });

//dropdown software

var softwareIcon=document.querySelector('#software-down #sidebar-down');
var softwareDown=document.querySelector('#sidebar-software #software-down');

softwareDown.addEventListener('click',function(){
        this.classList.toggle('active-dropdown');
        var sideSoftware=this.nextElementSibling;
        if (sideSoftware.style.display==='block') {
            sideSoftware.style.display='none';
            softwareIcon.style.transform='rotate(360deg)';
        } else {
            sideSoftware.style.display='block';
            softwareIcon.style.transform='rotate(180deg)';
        }
    });

//dropdown mobile

var mobileIcon=document.querySelector('#mobile-down #sidebar-down');
var mobileDown=document.querySelector('#sidebar-mobile #mobile-down');

mobileDown.addEventListener('click',function(){
        this.classList.toggle('active-dropdown');
        var sideMobile=this.nextElementSibling;
        if (sideMobile.style.display==='block') {
            sideMobile.style.display='none';
            mobileIcon.style.transform='rotate(360deg)';
        } else {
            sideMobile.style.display='block';
            mobileIcon.style.transform='rotate(180deg)';
        }
    });

//dropdown graphic

var graphicIcon=document.querySelector('#graphic-down #sidebar-down');
var graphicDown=document.querySelector('#sidebar-graphic #graphic-down');

graphicDown.addEventListener('click',function(){
        this.classList.toggle('active-dropdown');
        var sideGraphic=this.nextElementSibling;
        if (sideGraphic.style.display==='block') {
            sideGraphic.style.display='none';
            graphicIcon.style.transform='rotate(360deg)';
        } else {
            sideGraphic.style.display='block';
            graphicIcon.style.transform='rotate(180deg)';
        }
    });

//dropdown learn

var learnIcon=document.querySelector('#learn-down #sidebar-down');
var learnDown=document.querySelector('#sidebar-learn #learn-down');

learnDown.addEventListener('click',function(){
        this.classList.toggle('active-dropdown');
        var sideLearn=this.nextElementSibling;
        if (sideLearn.style.display==='block') {
            sideLearn.style.display='none';
            learnIcon.style.transform='rotate(360deg)';
        } else {
            sideLearn.style.display='block';
            learnIcon.style.transform='rotate(180deg)';
        }
    });

//dropdown games

var gamesIcon=document.querySelector('#games-down #sidebar-down');
var gamesDown=document.querySelector('#sidebar-games #games-down');

gamesDown.addEventListener('click',function(){
        this.classList.toggle('active-dropdown');
        var sideGames=this.nextElementSibling;
        if (sideGames.style.display==='block') {
            sideGames.style.display='none';
            gamesIcon.style.transform='rotate(360deg)';
        } else {
            sideGames.style.display='block';
            gamesIcon.style.transform='rotate(180deg)';
        }
    });
