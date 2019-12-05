
function openNav() {
  document.getElementById("smallMenu").style.display = "block";
}

function closeNav() {
  document.getElementById("smallMenu").style.display = "none";
}

$(document).ready(function () {
    $('.nav-link').on("click", function () {
        $(this).parent().siblings().find("a").removeClass('active');
        $(this).addClass('active');
				$(".header-arrow").removeClass("remove");
    });
});


$(document).ready(function() {
$('html, body, *').mousewheel(function(e, delta) {
this.scrollLeft -= (delta * 50);
e.preventDefault();
});
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "48px";
    document.getElementById("spantitle").style.marginTop = "-21px";
    document.getElementById("logo").style.position = "absolute";

  } else {
    document.getElementById("navbar").style.height = "179px";
    document.getElementById("spantitle").style.marginTop = "0px";
    document.getElementById("logo").style.fontSize = "absolute";
  }
}

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
