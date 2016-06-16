(function() {
  $(function() {
    return $("#gotoTop").click(function() {
      return $("html,body").stop().animate({
        scrollTop: 0
      }, 600, "swing");
    });
  });

}).call(this);
