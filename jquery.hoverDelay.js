// jQuery hover method with delay
(function($){

  // original jQuery hover method
  var oHover = $.fn.hover;

  // new hoverDelay method
  var dHover = function(mEnter, mLeave, fDelay, eDelay){
    return $(this).each(function(){

      var t;

      // bind to original hover, but use delay
      oHover.call($(this), function(e){
        if (t) {
          t = clearTimeout(t);
        } else {
          var c = this;
          t = setTimeout(function(){
            t = undefined;
            mEnter.call(c, e);
          }, fDelay);
        }
      }, function(e){
        if (t) {
          t = clearTimeout(t);
        } else {
          var c = this;
          t = setTimeout(function(){
            t = undefined;
            mLeave.call(c, e);
          }, eDelay);
        }
      });

    });
  };

  // call hoverDelay
  $.fn.hoverDelay = function(mEnter, mLeave, fDelay, eDelay){
    dHover.call(this, mEnter, mLeave, fDelay, eDelay);
  };

})(jQuery);
