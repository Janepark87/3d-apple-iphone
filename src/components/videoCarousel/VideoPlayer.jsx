import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { useVideo } from '../../contexts/VideoContext';

export default function VideoPlayer({ slide, i }) {
	const {
		video: { videoId, isPlaying, startPlay },
		videoRef,
		loadedData,
		handleProcess,
		handleLoadedMetadata,
		LAST_VIDEO_INDEX,
		animateSlider,
		startVideoInViewport,
	} = useVideo();

	useGSAP(() => {
		startVideoInViewport('#video');
		animateSlider(videoId);
	}, [videoId]);

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
			onPlay={() => handleProcess('video-playing')}
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
