import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils/assets';
import useBreakpoint from '../hooks/useBreakpoint';

export default function Hero() {
	const { content: videoSrc } = useBreakpoint({
		mobile: smallHeroVideo,
		tablet: heroVideo,
		desktop: heroVideo,
	});

	useGSAP(() => {
		gsap.to('#hero', { opacity: 1, delay: 2 });
		gsap.to('#cta-btn', { opacity: 1, y: -20, delay: 2, duration: 0.5 });
		gsap.to('#cta-price', {
			opacity: 1,
			y: -15,
			stagger: 0.5,
			delay: 2.15,
			duration: 0.8,
		});
	}, []);

	return (
		<section className="nav-height relative w-full bg-black">
			<div className="flex-center h-5/6 w-full flex-col">
				<h1 id="hero" className="hero-title">
					iPhone 15 Pro
				</h1>
				<div className="w-9/12 md:w-10/12">
					<video
						className="pointer-events-none"
						autoPlay
						muted
						playsInline
						key={videoSrc}
					>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
			</div>

			<div className="flex -translate-y-10 flex-col items-center">
				<a id="cta-btn" href="#hightlights" className="btn opacity-0">
					Buy
				</a>
				<p
					id="cta-price"
					className="translate-y-10 text-xl font-normal opacity-0"
				>
					From $199/ month or $999
				</p>
			</div>
		</section>
	);
}
