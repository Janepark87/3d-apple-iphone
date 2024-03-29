import { useGSAP } from '@gsap/react';
import { watchIcon, rightIcon } from '../../utils/assets.js';
import { animateTitleWithScroll } from '../../utils/animations.js';
import VideoCarousel from './VideoCarousel.jsx';

export default function VideoHighlights() {
	useGSAP(() => {
		animateTitleWithScroll('#title');
		animateTitleWithScroll('.link', {
			duration: 0.8,
			stagger: 0.15,
			delay: 0.5,
		});
	}, []);

	return (
		<section
			id="hightlights"
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
