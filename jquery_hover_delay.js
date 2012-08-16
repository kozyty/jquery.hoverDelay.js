// jQuery hover method with delay
(function($){

  // original jQuery hover method
  var orignHover = $.fn.hover;

  // new hoverDelay method
  var delayHover = function(hoverIn, hoverOut, inDelay, outDelay){
    return $(this).each(function(){

      var timeout;

      // bind to original hover, but use delay
      orignHover.call($(this), function(e){
        if (timeout) {
          timeout = clearTimeout(timeout);
        } else {
          var context = this;
          timeout = setTimeout(function(){
            timeout = undefined;
            hoverIn.call(context, e);
          }, inDelay);
        }
      }, function(e){
        if (timeout) {
          timeout = clearTimeout(timeout);
        } else {
          var context = this;
          timeout = setTimeout(function(){
            timeout = undefined;
            hoverOut.call(context, e);
          }, outDelay);
        }
      });

    });
  };

  // call hoverDelay
  $.fn.hoverDelay = function(hoverIn, hoverOut, inDelay, outDelay){
    delayHover.call(this, hoverIn, hoverOut, inDelay, outDelay);
  };

})(jQuery);
