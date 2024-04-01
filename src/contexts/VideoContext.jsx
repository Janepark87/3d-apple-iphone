import { useRef, useState, createContext, useContext } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import useBreakpoint from '../hooks/useBreakpoint';

gsap.registerPlugin(ScrollTrigger);

const VideoContext = createContext();

export function VideoContextProvider({ children }) {
	const { isMobile, isTablet } = useBreakpoint({});
	const videoRef = useRef([]);
	const indicatorRef = useRef([]);
	const progressRef = useRef([]);
	const [loadedData, setLoadedData] = useState([]);
	const [video, setVideo] = useState({
		videoId: 0,
		startPlay: false,
		isPlaying: false,
		isEnd: false,
		isLastVideo: false,
	});
	const LAST_VIDEO_INDEX = loadedData.length - 1;

	const handleLoadedMetadata = (i, e) =>
		setLoadedData((prev) => [...prev, e]);

	const animateSlider = (videoId) => {
		// move the slider to display the next video.
		gsap.to('#slider', {
			transform: `translateX(${-100 * videoId}%)`,
			duration: 2,
			ease: 'power2.inOut',
		});
	};
	const startVideoInViewport = (element) => {
		// video animation to play the video when it is in the viewport
		gsap.to(element, {
			scrollTrigger: {
				trigger: element,
				start: 'top center',
				toggleActions: 'restart none none none',
			},
			onComplete: () => handleProcess('video-start-to-play'),
		});
	};

	const animateProgressBar = () => {
		let currentProgress = 0;
		const { videoId, isPlaying } = video;
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
					if (isPlaying) {
						// reset the progress bar
						gsap.to(dotContainer[videoId], {
							width: '12px',
						});
						gsap.to(dot[videoId], {
							backgroundColor: '#afafaf',
						});
					}
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
	};

	const handleProcess = (type, i) => {
		switch (type) {
			case 'video-start-to-play':
				setVideo((pre) => ({
					...pre,
					startPlay: true,
					isPlaying: true,
				}));
				break;
			case 'video-playing':
				setVideo((pre) => ({ ...pre, isPlaying: true }));
				break;
			case 'video-end':
				setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
				break;
			case 'video-last':
				setVideo((pre) => ({ ...pre, isEnd: true, isLastVideo: true }));
				break;
			case 'video-reset':
				setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }));
				break;
			case 'play-btn':
			case 'pause-btn':
				setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
				break;
			default:
				return video;
		}
	};

	return (
		<VideoContext.Provider
			value={{
				videoRef,
				indicatorRef,
				progressRef,
				loadedData,
				video,
				LAST_VIDEO_INDEX,
				setVideo,
				handleLoadedMetadata,
				handleProcess,
				animateSlider,
				startVideoInViewport,
				animateProgressBar,
			}}
		>
			{children}
		</VideoContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVideo() {
	const context = useContext(VideoContext);

	if (context === undefined)
		throw new Error(
			'VideoContext was used outside of Provider. The context can only be used in children of the Provider'
		);
	return context;
}
