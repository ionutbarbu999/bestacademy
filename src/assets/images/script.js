$(document).ready(function(){
  $(".recommandations-box").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});

$(document).ready(function(){
  $(".workshops-slideshow").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function(){
  $(".testimonial-container-slideshow").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
  });
});

//right bottom button to take you back up on the top of the page
$(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
          $('.take-me-up').fadeIn();
      } else {
          $('.take-me-up').fadeOut();
      }
  });

  // scroll body to 0px on click
  $('.take-me-up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 600);
      return false;
  });
});

function collapseContentWorkshops(){
  var collapsibleWorkshopsButton = document.getElementById("collapsible-workshops-options");
  var collapsibleWorkshopsContent = document.getElementById("workshops-options");

  var collapsibleSummerCoursesButton = document.getElementById("collapsible-summer-courses");
  var collapsibleSummerCoursesContent = document.getElementById("summer-courses");
  
  if(collapsibleWorkshopsContent.style.display === 'none'){
    collapsibleSummerCoursesContent.style.display = 'none';
    collapsibleWorkshopsContent.style.display = 'block';
    } else {
    collapsibleSummerCoursesContent.style.display = 'none';
    collapsibleWorkshopsContent.style.display = 'block';
    }
}

function collapseContentSummerCourses(){
  var collapsibleWorkshopsButton = document.getElementById("collapsible-workshops-options");
  var collapsibleWorkshopsContent = document.getElementById("workshops-options");

  var collapsibleSummerCoursesButton = document.getElementById("collapsible-summer-courses");
  var collapsibleSummerCoursesContent = document.getElementById("summer-courses");

  if(collapsibleSummerCoursesContent.style.display === 'none'){
    collapsibleWorkshopsContent.style.display = 'none';
    collapsibleSummerCoursesContent.style.display = 'block';
   } else {
     
    collapsibleWorkshopsContent.style.display = 'none';
    collapsibleSummerCoursesContent.style.display = 'block';
   }

}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Course', 'Hours per Day'],
  ['Engleza', 20],
  ['Dezvoltare Personala', 10]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    backgroundColor: 'transparent',
    is3D: true,
    color: 'white'
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}