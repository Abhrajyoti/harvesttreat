/*home page banner slider start*/

document.addEventListener("DOMContentLoaded", () => {
    const bannerSlides = document.querySelectorAll('.fade-image');
    const bannerDots = document.querySelectorAll('.banner-dot');
    let currentIndex = 0;

    if (bannerSlides > 0 && bannerDots > 0) {
        function showImage(index) {
            // Remove the active class from the current slide and dot
            bannerSlides[currentIndex].classList.remove('active');
            bannerDots[currentIndex].classList.remove('active');
         
            currentIndex = index;
            
            // Add the active class to the new slide and dot
            bannerSlides[currentIndex].classList.add('active');
            bannerDots[currentIndex].classList.add('active');
        }
        
        const showNextImage = () => {
            const nextImageIndex = (currentIndex + 1) % bannerSlides.length;
            showImage(nextImageIndex);
        };
        
        let bannerSlideInterval = setInterval(showNextImage, 3000);
        
        // Event listener for dots
        bannerDots.forEach((bannerDot, index) => {
            bannerDot.addEventListener('click', () => {
                clearInterval(bannerSlideInterval);
                showImage(index);
                bannerSlideInterval = setInterval(showNextImage, 3000);
            });
        });
    };
});

/*home page banner slider end*/







/*categories slider start*/

(function($) {
	let mouseStart = null;
	let touchStartX = null;
	let isDragging = false; // Track if the user is dragging
	const tapThreshold = 10; // Maximum movement (in pixels) to consider as a tap

	const initObj = {
		nav: '.dropmove-nav',
		prev: '.nav-prev',
		next: '.nav-next',
		parent: '.dropmove-wrapper',
		target: '.dropmove-list',
		move: 300,
		delay: 750,
	};
	let fullChildWidth;

	// Recalculate child width on resize
	$(window).on('resize', function() {
		fullChildWidth = 0;
		$(initObj.target).children().each(function(i, item) {
			fullChildWidth += $(item).outerWidth(true);
		});
		arrowCheck({}, fullChildWidth);
	}).trigger('resize');

	// Check arrow visibility
	function arrowCheck(obj, fullWidth) {
		const setting = obj ? $.extend({}, initObj, obj) : $.extend({}, initObj);
		
		if ($(setting.target).scrollLeft() <= 0) {
			$(setting.prev).addClass('in-disable');
		} else {
			$(setting.prev).removeClass('in-disable');
		}

		if ($(setting.target).scrollLeft() >= fullWidth - $(setting.target).width()) {
			$(setting.next).addClass('in-disable');
		} else {
			$(setting.next).removeClass('in-disable');
		}
	}

	// Handle click-based navigation
	function clickMove(obj) {
		const setting = obj ? $.extend({}, initObj, obj) : $.extend({}, initObj);

		if ($(setting.target).width() < fullChildWidth) {
			$(setting.nav).removeClass('in-disable');
		} else {
			$(setting.nav).addClass('in-disable');
		}

		arrowCheck(obj, fullChildWidth);

		$(setting.prev).on('click', function() {
			const targetItem = $(this).parents(setting.parent).find(setting.target);
			targetItem.stop(true, false);

			let scrollTarget = Math.max(targetItem.scrollLeft() - setting.move, 0);
			targetItem.animate({ scrollLeft: scrollTarget }, setting.delay);

			arrowCheck(obj, fullChildWidth);
		});

		$(setting.next).on('click', function() {
			const targetItem = $(this).parents(setting.parent).find(setting.target);
			targetItem.stop(true, false);

			let scrollTarget = Math.min(targetItem.scrollLeft() + setting.move, fullChildWidth - targetItem.width());
			targetItem.animate({ scrollLeft: scrollTarget }, setting.delay);

			arrowCheck(obj, fullChildWidth);
		});
	}

	// Drag and touch events
	function attachDragAndTouchEvents(target) {
		// Mouse events
		target.on('mousedown', function(e) {
			e.preventDefault();
			mouseStart = e.screenX;
			isDragging = false;
		});
		target.on('mouseup mouseleave', function(e) {
			e.preventDefault();
			mouseStart = null;
		});
		target.on('mousemove', function(e) {
			e.preventDefault();
			if (mouseStart !== null) {
				isDragging = true;
				target.scrollLeft(target.scrollLeft() + (mouseStart - e.screenX));
				mouseStart = e.screenX;
				arrowCheck({}, fullChildWidth);
			}
		});

		// Touch events
		target.on('touchstart', function(e) {
			const touchEvent = e.originalEvent.touches[0];
			touchStartX = touchEvent.clientX;
			isDragging = false; // Reset dragging state
		});
		target.on('touchend touchcancel', function(e) {
			if (!isDragging) {
				// If it wasn't a drag, allow the click/tap to proceed
				const targetElement = $(e.target);
				if (targetElement.is('a')) {
					const href = targetElement.attr('href');
					if (href) {
						window.location.href = href;
					}
				}
			}
			touchStartX = null;
		});
		target.on('touchmove', function(e) {
			const touchEvent = e.originalEvent.touches[0];
			if (touchStartX !== null) {
				const deltaX = Math.abs(touchStartX - touchEvent.clientX);
				if (deltaX > tapThreshold) {
					isDragging = true; // Mark it as a drag
					target.scrollLeft(target.scrollLeft() + (touchStartX - touchEvent.clientX));
					touchStartX = touchEvent.clientX;
					arrowCheck({}, fullChildWidth);
				}
			}
		});
	}

	// Initialize events and click navigation
	attachDragAndTouchEvents($(initObj.target));
	clickMove({ move: 200, delay: 250 });
})(jQuery);

/*categories slider end*/



