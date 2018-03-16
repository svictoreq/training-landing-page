$(document).ready(function() {
	// Navbar code
	const navItems = [...$('.nav-item')];
	navItems.forEach(item => {
		$(item).on('click', function() {
			navItems.forEach(nItem => $(nItem).removeClass('active'))
			$(item).addClass('active');
		});
	})

	// Mobile Navbar code
	$('button.menu-button').on('click', function() {
		$('.nav-list').toggleClass('opened');
		if ($('.nav-list').hasClass('opened')) {
			$(this).find('img').prop('src', 'img/menu-up.svg');
		} else {
			$(this).find('img').prop('src', 'img/menu-down.svg');
		}
	});


	// Slider code
	const slideSelector = [...$('.slide-selector').find('input')];
	let i = $('.slide.active').data('index');

	// Next and Previous slide code
	function next() {
		const nextSlide = $('.slider').find(`[data-index="${i === 2 ? i = 0 : i += 1}"]`)
		$('.slide.active').animate({'opacity': '0'}, 'slow').toggleClass('active');
		$(nextSlide).animate({'opacity': '1'}, 'slow').toggleClass('active');
		slideSelector.forEach(input => {
			if (input.value == $('.slide.active').data('index')) {
				slideSelector.forEach( x => x.checked = false);
				input.checked = true;
			}
		})
	}
	function prev() {
		const prevSlide = $('.slider').find(`[data-index="${i === 0 ? i = 2 : i -= 1}"]`)
		$('.slide.active').animate({'opacity': '0'}, 'slow').toggleClass('active');
		$(prevSlide).animate({'opacity': '1'}, 'slow').toggleClass('active');
		slideSelector.forEach(input => {
			if (input.value == $('.slide.active').data('index')) {
				slideSelector.forEach( x => x.checked = false);
				input.checked = true;
			}
		})
	}

	// Slider Interval
	let carousel = window.setInterval(next, 5000);

	// Slide selector code
	slideSelector.forEach(input => {
		$(input).on('click', function() {
			$('.slide.active').animate({'opacity': '0'}, 'slow').toggleClass('active');
			$('.slider').find(`[data-index="${$(this).val()}"]`)
			.animate({'opacity': '1'}, 'slow').toggleClass('active');
			i = $('.slide.active').data('index');
			window.clearInterval(carousel);
			carousel = window.setInterval(next, 5000);
		});
	});
});
