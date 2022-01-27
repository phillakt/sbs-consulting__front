// const WOW = require("../../node_modules/wowjs/dist/wow.min");

global.jQuery = require("jquery");
const $ = jQuery;

$(document).ready(function () {
  if (window.innerWidth <= 768) {
    $(".accordion-wrap").on("click", function () {
      if (!$(this).hasClass("accordion-active")) {
        $(this).addClass("accordion-active");
      } else {
        $(this).removeClass("accordion-active");
      }
    });
  }
});
