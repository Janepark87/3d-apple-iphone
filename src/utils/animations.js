import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export function animateWithGsapTimeline(
	timeline,
	elementRef,
	rotationState,
	firstTarget,
	secondTarget,
	animationProps
) {
	timeline.to(elementRef.current.rotation, {
		y: rotationState,
		duration: 1,
		ease: 'power2.inOut',
	});

	timeline.to(firstTarget, { ...animationProps, ease: 'power2.inOut' }, '<');
	timeline.to(secondTarget, { ...animationProps, ease: 'power2.inOut' }, '<');
}

export function animateTitleWithScroll(target, animationProps) {
	gsap.to(target, {
		y: 0,
		opacity: 1,
		duration: 1,
		ease: 'power2',
		...animationProps,
		scrollTrigger: {
			trigger: target,
			start: 'top 90%',
			toggleActions: 'restart none none reverse',
		},
	});
}

export function animateWithScroll(target, animationProps, scrollProps) {
	gsap.to(target, {
		...animationProps,
		scrollTrigger: {
			trigger: target,
			start: 'top 85%',
			toggleActions: 'restart reverse restart reverse',
			...scrollProps,
		},
	});
}
