import { useVideo } from '../../contexts/VideoContext';
import { replayIcon, playIcon, pauseIcon } from '../../utils/assets';

export default function VideoButtonControls() {
	const {
		video: { isLastVideo, isPlaying },
		handleProcess,
	} = useVideo();

	return (
		<button className="control-btn">
			<img
				src={
					isLastVideo ? replayIcon : !isPlaying ? playIcon : pauseIcon
				}
				alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
				onClick={
					isLastVideo
						? () => handleProcess('video-reset')
						: !isPlaying
							? () => handleProcess('play')
							: () => handleProcess('pause')
				}
			/>
		</button>
	);
}
