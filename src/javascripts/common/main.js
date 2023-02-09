import $ from 'jquery';

$('.modal').on('shown.bs.modal', function (e) {
  $('.slider').slick({
    dots: false,
    infinite: false,
    variableWidth: true
  });
});