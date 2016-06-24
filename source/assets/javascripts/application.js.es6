import $ from 'jQuery';
import './vendor/player.js.es6';

require('jquery-ui');
require('jquery-ui-touch-punch');
require('modernizr');
require('sticky');

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
