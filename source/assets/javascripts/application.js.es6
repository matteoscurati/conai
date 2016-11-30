import $ from 'jQuery';
import classie from 'desandro-classie';
import smoothScroll from 'smooth-scroll';
import './vendor/player.js.es6';
import matchHeight from 'jquery-match-height';

require('jquery-ui');
require('jquery-ui-touch-punch');
require('modernizr');
require('wow');

$(document).ready(() => {
  new WOW().init();
  const wow = new WOW({});
});

$(document).ready(() => {
  smoothScroll.init({
    offset: 100
  });
});

$(document).ready(() => {
  (function($){
    $(function(){
      $.initHeaderFooterSole24({
        footer: {
          selector: "#footer-common",
        },
        env: 'prod',
        minimal: true
      });
    });
  })(jQuery);
});

let clics = 0;

$(document).ready(function() {
  $('.answer').hide();
  $('#closeall').hide();
  $('h3.todo__title--expandable').click(function() {
    let answer = $(this).closest(".faq").find(".answer");
    answer.toggle(function() {
      answer;
    });
    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
    } else {
      $(this).addClass('close');
    };
  });
});

$(document).ready(function() {
  const menu = $(".hero__actions__items");
  const hamburger = $(".hero__actions__hamburger");

  $(".hero__actions__hamburger").click((e) => {
    e.preventDefault();
    console.log("Ciao");
    if(menu.hasClass("is-open")) {
      menu.removeClass("is-open");
      hamburger.removeClass("expanded");
    } else {
      menu.addClass("is-open");
      hamburger.addClass("expanded");
    }
  });
});

function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 300,
      header = document.querySelector(".hero__actions");
    if (distanceY > shrinkOn) {
      classie.add(header,"smaller");
    } else {
      if (classie.has(header,"smaller")) {
        classie.remove(header,"smaller");
      }
    }
  });
}
window.onload = init();

$(document).ready(() => {
  if ($('.audio').length > 0) {
    $('.audio__title').matchHeight();
  }
});
