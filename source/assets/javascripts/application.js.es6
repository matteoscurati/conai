import $ from 'jQuery';
import './vendor/jQuery-One-Page-Nav.js';
import './vendor/player.js.es6';

require('jquery-ui');
require('jquery-ui-touch-punch');
require('modernizr');
require('sticky');
require('wow');

$(document).ready(() => {
  const actions = $('.hero__actions--desk');
  actions.sticky({
    topSpacing: 50,
    zIndex: 100
  });
});

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
