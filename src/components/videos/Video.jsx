import { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useVideo } from '../../contexts/VideoContext';

gsap.registerPlugin(ScrollTrigger);

export default function Video({ slide, i }) {
	const {
		video: { isEnd, videoId, isPlaying, startPlay },
		videoRef,
		loadedData,
		setVideo,
		handleProcess,
		handleLoadedMetadata,
		LAST_VIDEO_INDEX,
	} = useVideo();

	useGSAP(() => {
		// move the slider to display the next video.
		gsap.to('#slider', {
			transform: `translateX(${-100 * videoId}%)`,
			duration: 2,
			ease: 'power2.inOut',
		});

		// video animation to play the video when it is in the viewport
		gsap.to('#video', {
			scrollTrigger: {
				trigger: '#video',
				toggleActions: 'restart none none none',
			},
			onComplete: () => {
				setVideo((pre) => ({
					...pre,
					startPlay: true,
					isPlaying: true,
				}));
			},
		});
	}, [isEnd, videoId]);

	useEffect(() => {
		if (loadedData.length > LAST_VIDEO_INDEX) {
			if (!isPlaying) videoRef.current[videoId].pause();
			else startPlay && videoRef.current[videoId].play();
		}
	}, [startPlay, videoRef, videoId, isPlaying, loadedData, LAST_VIDEO_INDEX]);

	return (
		<video
			id="video"
			className={`${slide.id === 2 && 'translate-x-44 '}pointer-events-none`}
			playsInline={true}
			preload="auto"
			muted
			ref={(el) => (videoRef.current[i] = el)}
			onPlay={() => {
				setVideo((prev) => ({
					...prev,
					isPlaying: true,
				}));
			}}
			onEnded={() => {
				i !== LAST_VIDEO_INDEX
					? handleProcess('video-end', i)
					: handleProcess('video-last');
			}}
			onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
		>
			<source src={slide.video} type="video/mp4" />
		</video>
	);
}
