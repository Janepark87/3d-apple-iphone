import { useEffect } from 'react';
import { useVideo } from '../../contexts/VideoContext';

export default function VideoProgressBar() {
	const { videoRef, indicatorRef, progressRef, animateProgressBar } =
		useVideo();

	useEffect(() => animateProgressBar(), [animateProgressBar]);

	return (
		<ul className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
			{videoRef.current.map((_, i) => (
				<li
					key={i}
					ref={(el) => (indicatorRef.current[i] = el)}
					className="relative mx-2 h-3 w-3 rounded-full bg-gray-200"
				>
					<span
						ref={(el) => (progressRef.current[i] = el)}
						className="absolute h-full w-full rounded-full"
					/>
				</li>
			))}
		</ul>
	);
}
