'use strict';
var yo = chrome.i18n.getMessage("appPayload")

function updateContent() {
    $('.userContent').html(yo);
    $('.UFICommentBody span').html(yo);

}


(function($,sm){

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize
    jQuery.fn[sm] = function(fn){  return fn ? this.bind('DOMSubtreeModified', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartmodified');

$(window).smartmodified(updateContent);