(function($) {
  $.fn.subNavigation = function() {
    var links = this;
    var targets = links.map(function(index, link) {
      return $($(link).attr('href'))[0];
    });

    var updateNavigation = function(href) {
      if(href === "") {
        var filter = "#" + targets[0].id;
      } else {
        var filter = href;
      }
      links.removeClass('selected');
      targets.removeClass('selected');

      var selected = links.filter("[href='" + filter + "']");
      var selectedTarget = targets.filter(filter);

      selected.addClass('selected');
      selectedTarget.addClass('selected');
    };

    links.live('click', function() {
      updateNavigation($(this).attr('href'));
    });
    updateNavigation(window.location.hash);
  };
})(jQuery);