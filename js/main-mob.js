$('[data-toggle-menu]').on("click", function(){
	$(".menu-icon").toggleClass("is-open");
});

$('[data-toggle-color]').on("click", function(){
	$('[data-toggle-color]').removeClass("active");
	$(this).addClass("active");
});

$('[data-toggle-size]').on("click", function(){
	$('[data-toggle-size]').removeClass("active");
	$(this).addClass("active");
});

$(document).ready(function() {
	$('.quantity__count-less').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.quantity__count-more').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

$('.details__title').on("click", function(){
	$(this).toggleClass("icon--plus");
});

$('.similar-goods__title').on("click", function(){
	$(this).toggleClass("icon--plus");
});

$('.photo__nav-item').on("click", function(){
	$('.photo__nav-item').removeClass("active");
	$(this).addClass("active");
});

function l_image (a) {
    document.example_img.src=a
}

$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $(".location-popup").show();
}
function PopUpHide(){
    $(".location-popup").hide();
}

var wallopEl = document.querySelector('.Wallop');
var wallop = new Wallop(wallopEl);

var paginationDots = Array.prototype.slice.call(document.querySelectorAll('.Wallop-dot'));

/*
Attach click listener on the dots
*/
paginationDots.forEach(function (dotEl, index) {
  dotEl.addEventListener('click', function() {
    wallop.goTo(index);
  });
});

/*
Listen to wallop change and update classes
*/
wallop.on('change', function(event) {
  removeClass(document.querySelector('.Wallop-dot--current'), 'Wallop-dot--current');
  addClass(paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');
});

// Helpers
function addClass(element, className) {
  if (!element) { return; }
  element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
}

function removeClass(element, className) {
  if (!element) { return; }
  element.className = element.className.replace(className, '');
}