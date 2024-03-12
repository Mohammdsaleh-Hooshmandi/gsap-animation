window.addEventListener('load', function () {
	const fadeInTimeLine = gsap.timeline();

	fadeInTimeLine
		.from('.navbar__link', {
			y: -50,
			autoAlpha: 0,
			stagger: 0.3,
		})
		.from('.navbar__img', { y: -50, autoAlpha: 0 }, '-=0.7')
		.from('.home__title', { y: -50, autoAlpha: 0 })
		.to('.home__vertical-line', { height: '20vh' })
		.from('.home__img', { y: 50, autoAlpha: 0 })
		.from('.home__btn', { y: 100, autoAlpha: 0 });
});
