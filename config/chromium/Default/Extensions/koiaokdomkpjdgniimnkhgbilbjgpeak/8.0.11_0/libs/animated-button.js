$(function() {
  var taint, d, x, y;
  $(document).on("click", ".material-button", function(e){
    if ($(this).find(".taint").length == 0) {
      $(this).prepend("<span class='taint'></span>")
    }
    taint = $(this).find(".taint");
    taint.removeClass("drop");
    if(!taint.height() && !taint.width()) {
      d = Math.max($(this).outerWidth(), $(this).outerHeight());
      taint.css({height: d, width: d});
    }
    x = e.pageX - $(this).offset().left - taint.width()/2;
    y = e.pageY - $(this).offset().top - taint.height()/2;
    taint.css({top: y+'px', left: x+'px'}).addClass("drop");

    const timer = setTimeout(() => {
      clearTimeout(timer);
      e.target.dispatchEvent(new Event('animationEnded'));
    }, 650);
  });
});
