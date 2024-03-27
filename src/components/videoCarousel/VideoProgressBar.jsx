import { useEffect } from 'react';
import gsap from 'gsap';
import { useVideo } from '../../contexts/VideoContext';
import useBreakpoint from '../../hooks/useBreakpoint';

export default function VideoProgressBar() {
	const { isMobile, isTablet } = useBreakpoint({});
	const {
		videoRef,
		indicatorRef,
		progressRef,
		video: { videoId, isPlaying },
	} = useVideo();

	useEffect(() => {
		let currentProgress = 0;
		const videoEl = videoRef.current[videoId];
		const dotContainer = indicatorRef.current;
		const dot = progressRef.current;

		if (dot[videoId]) {
			// animate the progress of the video
			let anim = gsap.to(dot[videoId], {
				onUpdate: () => {
					const progress = Math.ceil(anim.progress() * 100);

					if (progress !== currentProgress) {
						currentProgress = progress;

						// update the progress bar
						gsap.to(dotContainer[videoId], {
							width: isMobile
								? '10vw'
								: isTablet
									? '10vw'
									: '4vw',
						});
						gsap.to(dot[videoId], {
							width: `${currentProgress}%`,
							backgroundColor: 'white',
						});
					}
				},
				onComplete: () => {
					// reset the progress bar
					gsap.to(dotContainer[videoId], {
						width: '12px',
					});
					gsap.to(dot[videoId], {
						backgroundColor: '#afafaf',
					});
				},
			});

			if (videoId === 0) anim.restart();

			// Update progress bar according to video playback time
			const animUpdatedProgress = () => {
				anim.progress(videoEl.currentTime / videoEl.duration);
			};

			if (isPlaying) gsap.ticker.add(animUpdatedProgress);
			else gsap.ticker.remove(animUpdatedProgress);
		}
	}, [
		videoId,
		isPlaying,
		videoRef,
		indicatorRef,
		progressRef,
		isMobile,
		isTablet,
	]);

	return (
		<div className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
			{videoRef.current.map((_, i) => (
				<span
					key={i}
					ref={(el) => (indicatorRef.current[i] = el)}
					className="relative mx-2 h-3 w-3 rounded-full bg-gray-200"
				>
					<span
						ref={(el) => (progressRef.current[i] = el)}
						className="absolute h-full w-full rounded-full"
					/>
				</span>
			))}
		</div>
	);
}
