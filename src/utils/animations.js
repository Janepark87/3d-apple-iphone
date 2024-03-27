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
		...animationProps,
		scrollTrigger: {
			trigger: target,
			toggleActions: 'restart none none reverse',
		},
	});
}
