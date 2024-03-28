import { useRef, useState, createContext, useContext } from 'react';
import gsap from 'gsap';
import useBreakpoint from '../hooks/useBreakpoint';

const VideoContext = createContext();

export function VideoContextProvider({ children }) {
	const { isMobile, isTablet } = useBreakpoint({});
	const videoRef = useRef([]);
	const indicatorRef = useRef([]);
	const progressRef = useRef([]);
	const LAST_VIDEO_INDEX = videoRef.current.length - 1;
	const [loadedData, setLoadedData] = useState([]);
	const [video, setVideo] = useState({
		videoId: 0,
		startPlay: false,
		isPlaying: false,
		isEnd: false,
		isLastVideo: false,
	});

	const handleLoadedMetadata = (i, e) =>
		setLoadedData((prev) => [...prev, e]);

	const animateSlider = (videoId) => {
		gsap.to('#slider', {
			transform: `translateX(${-100 * videoId}%)`,
			duration: 2,
			ease: 'power2.inOut',
		});
	};

	const animateProgressBar = (videoId, isPlaying) => {
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
	};

	const handleProcess = (type, i) => {
		switch (type) {
			case 'video-end':
				setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
				break;
			case 'video-last':
				setVideo((pre) => ({ ...pre, isEnd: true, isLastVideo: true }));
				break;
			case 'video-reset':
				setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }));
				break;
			case 'play':
			case 'pause':
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
				setVideo,
				handleLoadedMetadata,
				handleProcess,
				LAST_VIDEO_INDEX,
				animateSlider,
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
