$(function() {

	$('#change-sity').popover({
		placement: 'bottom',
		html: true,
		container:'.smwpopover',
		trigger:'click',
		content: function() {
			return $('#change-sity-content').html();
		}
	});

	$('#change-sity').on('shown.bs.popover', function () {

		$('.popover').css({
			'width': $('.smwpopover').width(),
			'height': $('.smwpopover').height(),
			'top':0,
			'left':0
		})

		$('.close-change-sity').click(function() {
			$('#change-sity').popover('hide');
			return false;
		});
	});
});