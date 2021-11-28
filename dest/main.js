
console.clear();
////////////////////////////////navbarnavbaa////////////////
const btnMenu = document.querySelector('.header-hamburger'),
    navbar = document.querySelector('.navbar');
btnMenu.addEventListener('click', function(){
    this.classList.toggle('active')
    navbar.classList.toggle('active')
})
// resize navbar
function hideNav(){
    btnMenu.classList.remove('active')
    navbar.classList.remove('active')
}

window.addEventListener('resize',function(){
    let wWindow = window.innerWidth
    if (wWindow > 992){
        hideNav()
    }
})
//========================================================

const Menu = document.querySelector('.hamburger'),
      overlay= document.querySelector('.overlay'),
      nav = document.querySelector('.nav'),
      left = document.querySelector('.slider-left');

Menu.addEventListener('click', function(){
    this.classList.toggle('active')
    nav.classList.toggle('active')
    overlay.classList.toggle('active')
    left.classList.toggle('active')
});

left.addEventListener('click', function(){
    Menu.classList.toggle('active')
    nav.classList.toggle('active')
    overlay.classList.toggle('active')
    this.classList.toggle('active')
});


// resize navbar
function hideNav(){
    Menu.classList.remove('active')
    nav.classList.remove('active')
    overlay.classList.remove('active')
    left.classList.remove('active')
}
overlay.addEventListener('click', function(){
  Menu.classList.remove('active')
  nav.classList.remove('active')
  overlay.classList.remove('active')
  left.classList.remove('active')
})

//======================header scrollY=============================

const header = document.querySelector('.header'),
      slider = document.querySelector('.slider');

let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;

window.addEventListener('scroll', function changeBgHeader() {
    let scrollY = window.pageYOffset;
    console.log(scrollY);

    if (scrollY > heightSlider - heightHeader){
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});
//==========================================
// const headerMenu = document.querySelector('.header-menu'),
//       detailHeader = document.querySelector('.detail-header');

// let heightHeaderMenu = headerMenu.clientHeight;
// let heightDetailHeader = detailHeader.clientHeight;

// window.addEventListener('scroll', function changeBgHeader() {
//     let scrollY = window.pageYOffset;
//     console.log(scrollY);

//     if (scrollY  > heightDetailHeader - heightHeaderMenu ){
//         headerMenu.classList.add('active');
//     } else {
//         headerMenu.classList.remove('active');
//     }
// });

// =======================backtotop=============================
 let backtotop= document.querySelector('.contact__backtop');

 backtotop.addEventListener('click', function(){
     window.scrollTo({
         top: 0,
         behavior:'smooth'
     })
 })

document.addEventListener('scroll',function(){
    changeBgHeader();
    // showBackToTop();
})
//===========slider===========================
var options = {
    accessibility: true,
    // prevNextButtons: true,
    setGallerySize: false,
    selectedAttraction: 0.5,
    friction: 4

  };
  
  var carousel = document.querySelector('[data-carousel]');
  var slides = document.getElementsByClassName('slider-item');
  var flkty = new Flickity(carousel, options);
  
  flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = (slide.target + flkty.x) * -1/3;
      image.style.backgroundPosition = x + 'px';
    });
  });


    //===================lang========================
// let lang = document.querySelector('.header-lang');
// let langCurrent = document.querySelector('.header-lang .header-current span');
// let langOpt = document.querySelector('.header-lang .header-sublang');
// let langItem= document.querySelectorAll('.header-lang .header-sublang a');

// lang.addEventListener('click', function (e){
//     e.stopPropagation();
//     lang.classList.toggle('active');
// });

// langItem.forEach(function(item){
//     item.addEventListener('click', function(e){
//         e.preventDefault();
//         let langText = this.textContent;
//         let langCurrentSpan = langCurrent.textContent;
//         langCurrent.innerHTML = langText;
//         this.innerHTML = langCurrentSpan;
//     })
// })

// document.addEventListener('click', function(){
//     lang.classList.remove('active');
// })
//===============pop up video====================================
// let buttonVideo = document.querySelectorAll('.play-btn');
// let popupVideo = document.querySelector('.popup-video');
// let close = document.querySelector('.close');
// let iframe = document.querySelector('.popup-video iframe');
// buttonVideo.forEach(function(button){
//     button.addEventListener('click', function(){
//         let video_id = button.getAttribute('data-video-id');
//         iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video_id)
//         popupVideo.style.display = 'flex';
//     });
// });
// close.addEventListener(('click'), function(){
//     iframe.setAttribute('src','');
//     popupVideo.style.display= 'none';
// })
// document.querySelector('.popup-video').addEventListener(('click'), function(e){
//     iframe.setAttribute('src','');
//     popupVideo.style.display= 'none';
// })
// ===============================header drag====================================
// const menus = document.querySelectorAll("header .menu a");
//   let sessions = [];
//   function removeActiveMenu() {
//     menus.forEach(function (item) {
//       item.classList.remove("active");
//     });
//   }

//   menus.forEach(function (item) {
//     let classSession = item.getAttribute("href").replace("#", "");
//     let session = document.querySelector("." + classSession);
//     sessions.push(session);
//     item.addEventListener("click", function (e) {
//       e.preventDefault();
//       removeActiveMenu();
//       item.classList.add("active");
//       window.scrollTo({
//         top: session.offsetTop - header.offsetHeight + 1,
//         behavior: "smooth",
//       });
//     });
//   });

//   window.addEventListener("scroll", function () {
//     const scrollHeight = window.pageYOffset;
//     sessions.forEach(function (item, index) {
//       if (
//         scrollHeight > item.offsetTop - header.offsetHeight &&
//         scrollHeight < item.offsetTop + item.offsetHeight
//       ) {
//         removeActiveMenu();
//         menus[index].classList.add("active");
//       } else {
//         menus[index].classList.remove("active");
//       }
//     });
//   });
  //========================progressbar=====================
  // const progressBar = document.querySelector(".progressbar");
  // window.addEventListener("scroll", function () {
  //   let scrollY = window.pageYOffset;
  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   console.log((scrollY / height) * 100);
  //   progressBar.style.width = (scrollY / height) * 100 + "%";
  // });

  //==============slider====================================

  const sliderItem = document.querySelectorAll(".slider-item");
//   const number = document.querySelector(".slider-left .slider-paging");
//   const dots = document.querySelectorAll(".slider-dots .dot");
  let currentSlider = 0;

  sliderItem.forEach(function (item, index) {
    if (item.classList.contains("active")) {
      currentSlider = index;
    }
  });
  function showNumber(index) {
    number.innerHTML = (index + 1).toString().padStart(2, "0");
  }
  showNumber(currentSlider);
  dots[currentSlider].classList.add("active");

  function goTo(index) {
    sliderItem[currentSlider].classList.remove("active");
    sliderItem[index].classList.add("active");
    dots[currentSlider].classList.remove("active");
    dots[index].classList.add("active");
    currentSlider = index;
    showNumber(index);
  }

  document
    .querySelector(".control-btn.--next")
    .addEventListener("click", function () {
      if (currentSlider < sliderItem.length - 1) {
        goTo(currentSlider + 1);
      } else {
        goTo(0);
      }
    });

  document
    .querySelector(".control-btn.--previous")
    .addEventListener("click", function () {
      if (currentSlider > 0) {
        goTo(currentSlider - 1);
      } else {
        goTo(sliderItem.length - 1);
      }
    });

  dots.forEach(function (item, index) {
    item.addEventListener("click", function () {
      goTo(index);
    });
  });
  // //================news===========================
  // const newBtn = document.querySelectorAll(".news-btn .btn");
  // const newList = document.querySelectorAll(".news-list");

  // newBtn.forEach(function (item, index) {
  //   item.addEventListener("click", function () {
  //     let Id = index + 1;
  //     newBtn.forEach(function (item) {
  //       item.classList.remove("active");
  //     });
  //     newList.forEach(function (item) {
  //       item.classList.remove("active");
  //     });
  //     this.classList.add("active");
  //     document.querySelector(".new-list" + Id).classList.add("active");
  //   });
  // });
  //==============================FAQ==========================
  // const accBtn = document.querySelectorAll(".accordion");

  // accBtn.forEach(function (item) {
  //   item.addEventListener("click", function () {
  //     item.classList.toggle("active");
  //     let panel = this.nextElementSibling;
  //     if (panel.style.maxHeight) {
  //       panel.style.maxHeight = null;
  //     } else {
  //       panel.style.maxHeight = panel.scrollHeight + "px";
  //     }
  //   });
  // });
  



