import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { watchIcon, rightIcon } from '../utils/assets.js';
import VideoCarousel from './videos/VideoCarousel.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function VideoHighlights() {
	useGSAP(() => {
		gsap.to('#title', {
			opacity: 1,
			y: 0,
			duration: 1,
			scrollTrigger: {
				trigger: '#title',
				toggleActions: 'restart none none reverse',
			},
		});
		gsap.to('.link', {
			opacity: 1,
			y: 0,
			duration: 0.8,
			stagger: 0.15,
			delay: 0.15,
			scrollTrigger: {
				trigger: '.link',
				toggleActions: 'restart none none reverse',
			},
		});
	}, []);

	return (
		<section
			id="highlights"
			className="common-padding bg-zinc h-full w-screen overflow-hidden"
		>
			<div className="screen-max-width">
				<div className="mb-12 w-full items-end justify-between md:flex">
					<h2 id="title" className="section-heading mb-0">
						Get the highlights.
					</h2>

					<div className="flex flex-wrap items-end gap-5">
						<p className="link">
							Watch the film
							<img
								src={watchIcon}
								alt="Watch icon"
								className="ml-2"
							/>
						</p>
						<p className="link">
							Watch the event
							<img
								src={rightIcon}
								alt="Right icon"
								className="ml-2"
							/>
						</p>
					</div>
				</div>

				<VideoCarousel />
			</div>
		</section>
	);
}
