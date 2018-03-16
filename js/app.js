$(document).ready(function() {
	const slideSelector = [...$('.slide-selector').find('input')];
	let i = $('.slide.active').data('index');
	function next() {
		const nextSlide = $('.slider').find(`[data-index="${i === 2 ? i = 0 : i += 1}"]`)
		$('.slide.active').animate({'opacity': '0'}, 800).toggleClass('active');
		$(nextSlide).animate({'opacity': '1'}, 'slow').toggleClass('active');
		slideSelector.forEach(input => {
			if (input.value == $('.slide.active').data('index')) {
				slideSelector.forEach( x => x.checked = false);
				input.checked = true;
			}
		})
	}
	$('.slider').on('click', next);
});
