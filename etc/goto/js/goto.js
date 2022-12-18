$(function () {

  $(".category_block dd:even").css({
    'padding': '0 10px 0 8px',
    'width': '120px',
    'float': 'right',
    'background': 'url(/common/img/img_category_arrow.png) no-repeat left center'
  });

  $(".category_block a").attr("target", "results");
  $("#mu_pickup a").attr("target", "results");

  $('.xlist a').click(function () {
    $("#mu_landing_content").hide('fast');
    $("#mu_results").css('display', 'block');
    $("#mu_search").css('height', '60px');
    $(':input', '.gsc-input').val('');
    $("#results_iframe").height($('#mu_content').height() - $('#mu_search').height() - $('#mu_pickup').height() - 50);
    console.log('aa')
  });

  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

});

$(window).load(function () {
  columnHeight = $('#mu_contentwrap').height();
  $('#mu_content').css({
    'min-height': columnHeight - 10 + 'px'
  });
  $('#mu_menu').css({
    'min-height': columnHeight - 10 + 'px'
  });
});
function setGoogleSearch() {
  $(':input', '.gsc-search-button').click(function () {
    $("#mu_landing_content").hide('fast');
    $("#mu_search").css('height', 'auto');
    $("#mu_results").css('display', 'none');
    console.log('clicked');
  });

  $(':input', '.gsc-input').keyup(function (e) {
    if (e.keyCode == 13) {
      $("#mu_landing_content").hide('fast');
      $("#mu_search").css('height', 'auto');
      $("#mu_results").css('display', 'none');
      console.log('enter');
    }
  });
};
