$(function () {
	$('[data-toggle="popover"]').popover()
})

$('.carousel').carousel()

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});