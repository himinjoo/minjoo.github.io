// $(document).ready(function() {
//
// 	var getMax = function() {
// 		return $(document).height() - $(window).height();
// 	}
//
// 	var getValue = function() {
// 		return $(window).scrollTop();
// 	}
//
// 	if ('max' in document.createElement('progress')) {
// 		var progressBar = $('progress');
//
// 		progressBar.attr({
// 			max: getMax()
// 		});
//
// 		$(document).on('scroll', function() {
// 			progressBar.attr({
// 				value: getValue()
// 			});
// 		});
//
// 		$(window).resize(function() {
//
// 			progressBar.attr({
// 				max: getMax(),
// 				value: getValue()
// 			});
// 		});
//
// 	} else {
//
// 		var progressBar = $('.progress-bar'),
// 			max = getMax(),
// 			value, width;
//
// 		var getWidth = function() {
//
// 			value = getValue();
// 			width = (value / max) * 100;
// 			width = width + '%';
// 			return width;
// 		}
//
// 		var setWidth = function() {
// 			progressBar.css({
// 				width: getWidth()
// 			});
// 		}
//
// 		$(document).on('scroll', setWidth);
// 		$(window).on('resize', function() {
//
// 			max = getMax();
// 			setWidth();
// 		});
// 	}
// });


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
