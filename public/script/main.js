// Entire body


// document.getElementById("show-overlay-button").addEventListener("click", function(){
//   document.getElementById("overlay").style.display = "block";
// });


// function hideOverlay() {
//   document.getElementById("overlay").style.display = "none";
// }



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

/*
  filterSelection("all") // Execute the function and show all columns
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

*/


  // SECTION 9

  // document.getElementById("scrollButtonToSection7").addEventListener("click", function() {
  //   document.getElementById("toSection7").scrollIntoView({
  //     behavior: "smooth"
  //   });
  // });




/*

  // TEST

  // set the data
var data = [
  {x: "White", value: 223553265},
  {x: "Black or African American", value: 38929319},
  {x: "American Indian and Alaska Native", value: 2932248},
  {x: "Asian", value: 14674252},
  {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
  {x: "Some Other Race", value: 19107368},
  {x: "Two or More Races", value: 9009073}
];


anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "White", value: 223553265, exploded: true},
      {x: "Black or African American", value: 38929319},
      {x: "American Indian and Alaska Native", value: 2932248},
      {x: "Asian", value: 14674252},
      {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
      {x: "Some Other Race", value: 19107368},
      {x: "Two or More Races", value: 9009073}
  ];

  
  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Population by Race for the United States: 2010 Census");

  // add the data
  chart.data(data);
  
  // sort elements
  chart.sort("desc");  
  
  // set legend position
  chart.legend().position("right");
  // set items layout
  chart.legend().itemsLayout("vertical");  

  // display the chart in the container
  chart.containerS9('containerS9');
  chart.draw();

});

*/





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







































  // const ctx = document.getElementById('myChart');

  // new Chart(ctx, {
  //   type: 'doughnut',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       label: 'Allocation by country',
  //       data: [49, 25, 10, 5, 3, 1, 1, 1, 1],
  //       backgroundColor: [
  //         'rgb(255, 99, 132)',
  //         'rgb(54, 162, 235)',
  //         'rgb(255, 205, 86)'],
  //       borderWidth: 1,
  //       hoverOffset: 4
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });



  // const ctx = document.getElementById('myChart');

  // const config = {
  //   type: 'doughnut',
  //   data: data,
  // };

  // const data = {
  //   labels: [
  //     'Red',
  //     'Blue',
  //     'Yellow'
  //   ],
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [300, 50, 100],
  //     backgroundColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(54, 162, 235)',
  //       'rgb(255, 205, 86)'
  //     ],
  //     hoverOffset: 4
  //   }]
  // };









// // // // https://www.anychart.com/blog/2021/07/06/donut-charts-javascript/
// // // https://playground.anychart.com/vDHOcQQZ/2




// anychart.onDocumentReady(function () {
  
//   // add data
//   var data = anychart.data.set([
//     ['Spotify', 34],
//     ['Apple Music', 21],
//     ['Amazon Music', 15],
//     ['Tencent apps', 11],
//     ['YouTube Music', 6],
//     ['Others', 13]
//   ]);
  
//   // create a pie chart with the data
//   var chart = anychart.pie(data);
  
//   // set the chart radius making a donut chart
//   chart.innerRadius('55%')
  
//   // create a color palette
//   var palette = anychart.palettes.distinctColors();
  
//   // set the colors according to the brands
//   palette.items([
//     { color: '#1dd05d' },
//     { color: '#000000' },
//     { color: '#00a3da' },
//     { color: '#156ef2' },
//     { color: '#f60000' },
//     { color: '#96a6a6' }
//   ]);

//   // apply the donut chart color palette
//   chart.palette(palette);
  
//   // set the position of labels
//   chart.labels().format('{%x} - {%y}%').fontSize(16);
  
//   // disable the legend
//   chart.legend(false);
  
//   // format the donut chart tooltip
//   chart.tooltip().format('Market share: {%PercentValue}%');

//   // create a standalone label
//   var label = anychart.standalones.label();

//   // configure the label settings
//   label
//     .useHtml(true)
//     .text(
//       '<span style = "color: #313136; font-size:20px;">Global Market Share of <br/> Music Streaming Apps</span>' +
//       '<br/><br/></br><span style="color:#444857; font-size: 14px;"><i>Spotify and Apple Music have more <br/>than 50% of the total market share</i></span>'
//     )
//     .position('center')
//     .anchor('center')
//     .hAlign('center')
//     .vAlign('middle');

//   // set the label as the center content
//   chart.center().content(label);
  
//   // set container id for the chart
//   chart.container('container');
  
//   // initiate chart drawing
//   chart.draw();
  
// });
