//FUNCTIONS FOR DROPDOWN
$(document).ready(function () {
  $(".btn-select").each(function (e) {
    var value = $(this).find("ul li.selected").html();
    if (value != undefined) {
      $(this).find(".btn-select-input").val(value);
      $(this).find(".btn-select-value").html(value);
    }
  });
});

$(document).on('click', '.btn-select', function (e) {
  e.preventDefault();
  var ul = $(this).find("ul");
  if ($(this).hasClass("active")) {
    if (ul.find("li").is(e.target)) {
      var target = $(e.target);
      target.addClass("selected").siblings().removeClass("selected");
      var value = target.html();
      $(this).find(".btn-select-input").val(value);
      $(this).find(".btn-select-value").html(value);
    }
    ul.hide();
    $(this).removeClass("active");
  }
  else {
    $('.btn-select').not(this).each(function () {
      $(this).removeClass("active").find("ul").hide();
    });
    ul.slideDown(300);
    $(this).addClass("active");
  }
});

$(document).on('click', function (e) {
  var target = $(e.target).closest(".btn-select");
  if (!target.length) {
    $(".btn-select").removeClass("active").find("ul").hide();
  }
});





//HOVER FUNCTIONS
$(document).ready(function() {


  $('#news').hover(function(){

    $('#news h2').css('color','#7bc8ef');
    $('#news h2 span').css('color','#7bc8ef');

  },function(){

    $('#news h2').css('color','black');
    $('#news h2 span').css('color','#33479c');
    

  });


  $('.news1').hover(function(){

    $('.news1').css('background','white');  

    $('.news1 .arrow-box').css('color','#33479c');  

  },function(){

    $('.news1').css('background','none');  

    $('.news1 .arrow-box').css('color','#7bc8ef');   
  });


  $('.news2').hover(function(){

    $('.news2').css('background','white');   

    $('.news2 .arrow-box').css('color','#33479c');  
  },function(){

    $('.news2').css('background','none');   

    $('.news2 .arrow-box').css('color','#7bc8ef');   
  });






  $('#bild').hover(function(){

    $('#bild').attr('src','images/logo_bild_hover.png');
  },function(){
   $('#bild').attr('src','images/logo_bild.png');

 });


  $('#about').hover(function(){

    $('#about').css('background','white');
    $('#about h2').css('color','#7bc8ef');
    $('#about h2 span').css('color','#7bc8ef');
    $('.banner-text1').css('color','#33479c');
    $('#city').attr('src','images/city.png');
    $('#zoom').css('bottom','60px');

  }, function () {

    $('#about').css('background','none');
    $('#about h2').css('color','black');
    $('#about h2 span').css('color','#33479c');
    $('.banner-text1').css('color','#b6babb');
    $('#city').attr('src','images/city2.png');
    $('#zoom').css('bottom','40px');

  });


  $('#contact').hover(function(){

    $('#contact').css('background','white');
    $('#contact h2').css('color','#7bc8ef');
    $('#contact h2 span').css('color','#7bc8ef');
    $('.banner-text2').css('color','#33479c');
    $('#city2').attr('src','images/city3.png');
    $('#mail').css('bottom','70px');

  }, function () {

    $('#contact').css('background','none');
    $('#contact h2').css('color','black');
    $('#contact h2 span').css('color','#33479c');
    $('.banner-text2').css('color','#b6babb');
    $('#city2').attr('src','images/city4.png');
    $('#mail').css('bottom','50px');

  });


  $("#owl-example").owlCarousel({

    items:1,
    navigation:true,
    navigationText: [
    "<span class='glyphicon glyphicon-chevron-left'></span>",
    "<span class='glyphicon glyphicon-chevron-right'></span>"
    ],
  });




});