import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { exploreVideo } from '../../utils/assets';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ExploreVideo() {
	const exploreVideoRef = useRef();

	useGSAP(() => {
		const videoEl = exploreVideoRef.current;
		gsap.to(videoEl, {
			scrollTrigger: {
				trigger: videoEl,
				start: 'top 90%',
				end: 'center+=50 10%',
				onEnter: () => videoEl.play(),
				onLeave: () => videoEl.pause(),
				onEnterBack: () => videoEl.play(),
				onLeaveBack: () => videoEl.pause(),
			},
		});
	}, []);

	return (
		<div className="relative flex h-[50vh] w-full items-center">
			<video
				ref={exploreVideoRef}
				id="explore-video"
				className="h-full w-full object-cover object-center"
				preload="none"
				playsInline
				muted
			>
				<source src={exploreVideo} type="video/mp4" />
			</video>
		</div>
	);
}
