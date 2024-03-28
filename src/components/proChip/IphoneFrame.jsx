import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { frameImg, frameVideo } from '../../utils/assets';

export default function IphoneFrame() {
	const gamingVideoRef = useRef();

	useGSAP(() => {
		const videoEl = gamingVideoRef.current;
		gsap.to(videoEl, {
			scrollTrigger: {
				trigger: videoEl,
				start: 'top 90%',
				onEnter: () => videoEl.play(),
			},
		});
	}, []);

	return (
		<div className="mb-14 mt-10 md:mt-20">
			<div className="flex-center relative h-full">
				<div className="overflow-hidden">
					<img
						src={frameImg}
						className="relative z-10 bg-transparent"
						alt="iPhone frame"
					/>
				</div>

				<div className="chip-video">
					<video
						ref={gamingVideoRef}
						className="pointer-events-none"
						playsInline
						muted
					>
						<source src={frameVideo} type="video/mp4" />
					</video>
				</div>
			</div>

			<p className="text-gray mt-3 text-center font-semibold">
				Honkai: Star Rail
			</p>
		</div>
	);
}
