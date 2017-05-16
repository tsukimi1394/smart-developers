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
