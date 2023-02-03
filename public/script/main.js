// // ES6 import
// import simpleParallax from 'simple-parallax-js';
 
// // CommonJS
// const simpleParallax = require('simple-parallax-js');




// Header

// var image = document.getElementsById('thumbnail');
// new simpleParallax(image);




document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  // Preloader
  const preloader = document.querySelector('#preloader');
if (preloader) {
  console.log("Preloader element found");
  window.addEventListener('load', () => {
    console.log("Window load event fired");
    setTimeout(() => {
      preloader.remove();
    }, 1000);

  });
} else {
  console.log("Preloader element not found");
}



// Entire body


// document.getElementById("show-overlay-button").addEventListener("click", function(){
//   document.getElementById("overlay").style.display = "block";
// });


// function hideOverlay() {
//   document.getElementById("overlay").style.display = "none";
// }




  //   // Back to top button
  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 300) {
  //         $('.back-to-top').fadeIn('slow');
  //     } else {
  //         $('.back-to-top').fadeOut('slow');
  //     }
  // });
  // $('.back-to-top').click(function () {
  //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  //     return false;
  // });



// SECTION 3

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};





// SECTION 4

function classToggle() {
    var el = document.querySelector('.icon-cards__content');
    el.classList.toggle('step-animation');
  }


  // document.querySelector('toggle-animation').addEventListener('click', classToggle);



// SECTION 6

/*

  ( function($) {
  
    $(document).ready(function() {
      
      var s           = $('.slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_date  = s.find('.slide-date'),
          slide_title = s.find('.slide-title'),
          slide_text  = s.find('.slide-text'),
          slide_more  = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  
  
        //CONTENT ANIMATIONS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      });
            
    });
  })(jQuery);
  
  $('.overlay').addClass('overlay-blue');

  */




  // SECTION 7

  // document.getElementById("scrollButtonToSection9").addEventListener("click", function() {
  //   document.getElementById("toSection9").scrollIntoView({
  //     behavior: "smooth"
  //   });
  // });



  // SECTION 8

  document.getElementById("scrollToWhatWeDo").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("WhatWeDo").scrollIntoView({ behavior: "smooth" });
  });
  

  document.getElementById("scrollToSection7").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("section7").scrollIntoView({ behavior: "smooth" });
  });
  

  document.getElementById("scrollToSection9").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("section9").scrollIntoView({ behavior: "smooth" });
  });
  

  document.getElementById("scrollToHausLothringenHead").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("HausLothringenHead").scrollIntoView({ behavior: "smooth" });
  });
  



  // SECTION 8

  // portfolio interactif avec une galerie de photos. Il utilise des boutons pour filtrer les photos en fonction de leur catégorie (nature, voitures, personnes). La fonction JavaScript filterSelection() est utilisée pour montrer uniquement les images associées à la catégorie sélectionnée. Les fonctions AddClass() et RemoveClass() ajoutent ou suppriment des classes aux éléments HTML pour les afficher ou les masquer en fonction de la catégorie choisie. Les images sont disposées dans des colonnes divisées en grille et ont une classe désignant leur catégorie.



  // filterSelection("all")
  // function filterSelection(c) {
  //   var x, i;
  //   x = document.getElementsByClassName("column");
  //   if (c == "all") c = "";
  //   for (i = 0; i < x.length; i++) {
  //     RemoveClass(x[i], "show");
  //     if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  //   }
  // }
  
  // function AddClass(element, name) {
  //   var i, arr1, arr2;
  //   arr1 = element.className.split(" ");
  //   arr2 = name.split(" ");
  //   for (i = 0; i < arr2.length; i++) {
  //     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  //   }
  // }
  
  // function RemoveClass(element, name) {
  //   var i, arr1, arr2;
  //   arr1 = element.className.split(" ");
  //   arr2 = name.split(" ");
  //   for (i = 0; i < arr2.length; i++) {
  //     while (arr1.indexOf(arr2[i]) > -1) {
  //       arr1.splice(arr1.indexOf(arr2[i]), 1);     
  //     }
  //   }
  //   element.className = arr1.join(" ");
  // }
  
  
  // // Add active class to the current button (highlight it)
  // var btnContainer = document.getElementById("myBtnContainer");
  // var btns = btnContainer.getElementsByClassName("btnFilter");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function(){
  //     var current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }


  // SECTION 9


  const ctx = document.getElementById('myChart');

  var xValues = [
    "United Kingdom",
    "United States",
    "France",
    "Spain",
    "Sweden",
    "Switzerland",
    "Portugal",
    "Estonia",
    "The Netherlands",
    "Canada",
    "Colombia",
    "Finland",
    "Israël",
    "Italy",
    "Lithuania",
    "Luxembourg",
    "Metaverse",
    "Norway"
  ];
  var yValues = [
    92,
    17,
    6,
    4,
    4,
    4,
    3,
    3,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ];
  var barColors = [
    "#BECAAF",
    "#A6D6DD",
    "#E8E2D0",
    "#A5B0B7",
    "#9DD638",
    "#E3DB93",

  ];
  
  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        // text: "World Wide Wine Production 2018"
      }
    }
  });





  // SECTION 10

  const ctx1 = document.getElementById('myChart1');

  var xValues = [
    "United Kingdom",
    "United States",
    "France",
    "Spain",
    "Sweden",
    "Switzerland",
    "Portugal",
    "Estonia",
    "The Netherlands",
    "Canada",
    "Colombia",
    "Finland",
    "Israël",
    "Italy",
    "Lithuania",
    "Luxembourg",
    "Metaverse",
    "Norway"
  ];
  var yValues = [
    92,
    17,
    6,
    4,
    4,
    4,
    3,
    3,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ];
  var barColors = [
    "#BECAAF",
    "#A6D6DD",
    "#E8E2D0",
    "#A5B0B7",
    "#9DD638",
    "#E3DB93",

  ];
  
  new Chart("myChart1", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        // text: "World Wide Wine Production 2018"
      }
    }
  });













// // Animation on scroll function and init

// function aos_init() {
//   AOS.init({
//     duration: 1000,
//     easing: 'ease-in-out',
//     once: true,
//     mirror: false
//   });
// }
// window.addEventListener('load', () => {
//   aos_init();
// });

// });


});



// // // // https://www.anychart.com/blog/2021/07/06/donut-charts-javascript/
// // // https://playground.anychart.com/vDHOcQQZ/2

