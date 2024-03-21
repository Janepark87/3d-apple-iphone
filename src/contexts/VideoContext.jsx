import { useRef, useState, createContext, useContext } from 'react';

const VideoContext = createContext();

export function VideoContextProvider({ children }) {
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
