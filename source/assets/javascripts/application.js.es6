import $ from 'jQuery';
import './vendor/jQuery-One-Page-Nav.js';
import './vendor/player.js.es6';

require('jquery-ui');
require('jquery-ui-touch-punch');
require('modernizr');
require('wow');

$(document).ready(() => {
  $('#nav').onePageNav({
  });
});

$(document).ready(() => {
  $('#nav--mobile').onePageNav({
  });
});

$(document).ready(() => {
  new WOW().init();
  const wow = new WOW({});
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
