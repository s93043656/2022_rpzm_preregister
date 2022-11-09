// 首圖輪播分頁
var swiper = new Swiper('.swiper2', {
  slidesPerView: 3,
  // direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 0,
  autoplay: 2500,
  breakpoints: { 
    1200: {  //当屏幕宽度大于等于768 
      // width: undefined,
      slidesPerView: 3,
      spaceBetween: 20
      },
      375: {  //当屏幕宽度大于等于320
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {  //当屏幕宽度大于等于320
        slidesPerView: 1,
      },
    },
});

$(function(){
  var _showTab = 0;
  $('.OS_tabbox').each(function(){
      var $tab = $(this);
      var $defaultLi = $('ul.tab-title li', $tab).eq(_showTab).addClass('active');
      $($defaultLi.find('a').attr('href')).siblings().hide();

      $('ul.tab-title li', $tab).click(function() {
          var $this = $(this),
              _clickTab = $this.find('a').attr('href');
          $this.addClass('active').siblings('.active').removeClass('active');
          $(_clickTab).stop(false, true).fadeIn().siblings().hide();
          return false;
      })
  });
});

var swiper = new Swiper(".OS_swiper", {
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".OS_swiper-pagination",
      clickable: true,
  },
});


$(function(){
var len = 16;
$("innerinfo02 ul li a div").each(function(i){
    if($(this).text().length>len){
        $(this).attr("title",$(this).text());
        var text=$(this).text().substring(0,len-1)+"...";
        $(this).text(text);
    }
});
});
$(function(){
var _showTab = 0;
$('.OS_tabbox').each(function(){
  var $tab = $(this);

  var $defaultLi = $('ul.maintab-box li', $tab).eq(_showTab).addClass('active');
  $($defaultLi.find('a').attr('href')).siblings().hide();

  $('ul.maintab-box li', $tab).click(function() {

    var $this = $(this),
      _clickTab = $this.find('a').attr('href');

    $this.addClass('active').siblings('.active').removeClass('active');
    $(_clickTab).stop(false, true).fadeIn().siblings().hide();

    return false;
  }).find('a').focus(function(){
    this.blur();
  });
});
});


$('.main-list').each(function () {
var $table = $(this);
var itemsPerPage = 10;
var currentPage = 0;
var pages = Math.ceil($table.find("tr:not(:has(th))").length / itemsPerPage);
$table.bind('repaginate', function () {
  if (pages > 1) {
  var pager;
  if ($table.next().hasClass("pager"))
    pager = $table.next().empty();  else
  pager = $('<div class="pager" style="direction:ltr; " align="center"></div>');

  $('<span class="pg-goto"></span>').text(' « ').bind('click', function () {
    currentPage = 0;
    $table.trigger('repaginate');
  }).appendTo(pager);

  $('<span class="pg-goto"> ◄ 上一頁 </span>').bind('click', function () {
    if (currentPage > 0)
      currentPage--;
    $table.trigger('repaginate');
  }).appendTo(pager);

  var startPager = currentPage > 2 ? currentPage - 2 : 0;
  var endPager = startPager > 0 ? currentPage + 3 : 5;
  if (endPager > pages) {
    endPager = pages;
    startPager = pages - 5;    if (startPager < 0)
      startPager = 0;
  }

  for (var page = startPager; page < endPager; page++) {
    $('<span id="pg' + page + '" class="' + (page == currentPage ? 'pg-selected' : 'pg-normal') + '"></span>').text(page + 1).bind('click', {
        newPage: page
      }, function (event) {
        currentPage = event.data['newPage'];
        $table.trigger('repaginate');
    }).appendTo(pager);
  }

  $('<span class="pg-goto"> 下一頁 ► </span>').bind('click', function () {
    if (currentPage < pages - 1)
    currentPage++;
    $table.trigger('repaginate');
  }).appendTo(pager);
  $('<span class="pg-goto"> » </span>').bind('click', function () {
    currentPage = pages - 1;
    $table.trigger('repaginate');
  }).appendTo(pager);

  if (!$table.next().hasClass("pager"))
    pager.insertAfter($table);
    //pager.insertBefore($table);
    
}// end $table.bind('repaginate', function () { ...

$table.find(
'tbody tr:not(:has(th))').hide().slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).show();
});

$table.trigger('repaginate');
});