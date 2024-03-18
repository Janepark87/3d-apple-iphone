import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils/assets';
import useResponsiveContent from '../hooks/useResponsiveContent';

export default function Hero() {
	const { content: videoSrc } = useResponsiveContent({
		mobile: smallHeroVideo,
		desktop: heroVideo,
	});

	useGSAP(() => {
		gsap.to('#hero', { opacity: 1, y: 0, delay: 2, duration: 1 });
		gsap.to('#cta', { opacity: 1, y: -50, delay: 2, duration: 1 });
	}, []);

	return (
		<section className="nav-height relative w-full bg-black">
			<div className="flex-center h-5/6 w-full flex-col">
				<p id="hero" className="hero-title -translate-y-20">
					iPhone 15 Pro
				</p>
				<div className="w-9/12 md:w-10/12">
					<video
						className="pointer-events-none"
						autoPlay
						muted
						playsInline={true}
						key={videoSrc}
					>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
			</div>

			<div
				id="cta"
				className="flex translate-y-20 flex-col items-center opacity-0"
			>
				<a href="#hightlights" className="btn">
					Buy
				</a>
				<p className="text-xl font-normal">From $199/ month or $999</p>
			</div>
		</section>
	);
}
