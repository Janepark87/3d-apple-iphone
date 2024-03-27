import { hightlightsSlides } from '../../data/constants';
import VideoPlayer from './VideoPlayer';
import VideoButtonControls from './VideoButtonControls';
import VideoProgressBar from './VideoProgressBar';
import VideoContent from './VideoContent';

export default function VideoCarousel() {
	return (
		<>
			<div id="carousel" className="flex items-center">
				{hightlightsSlides.map((slide, i) => (
					<div id="slider" key={slide.id} className="pr-10 sm:pr-20">
						<div className="video-carousel_container">
							<div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
								<VideoPlayer slide={slide} i={i} />
							</div>

							<VideoContent slide={slide} />
						</div>
					</div>
				))}
			</div>

			<div className="flex-center relative mt-10">
				<VideoProgressBar />
				<VideoButtonControls />
			</div>
		</>
	);
}
