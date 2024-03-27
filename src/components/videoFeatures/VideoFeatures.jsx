import { useGSAP } from '@gsap/react';
import { animateTitleWithScroll } from '../../utils/animations';
import ExploreVideo from './ExploreVideo';
import ExploreImages from './ExploreImages';
import ExploreText from './ExploreText';

export default function VideoFeatures() {
	useGSAP(() => {
		animateTitleWithScroll('#features_title');
		animateTitleWithScroll('.features_sub_title', { delay: 0.25 });
	}, []);

	return (
		<section className="common-padding bg-zinc relative h-full overflow-hidden">
			<div className="screen-max-width">
				<div className="mb-12 w-full">
					<h2 id="features_title" className="section-heading">
						Explore the full story.
					</h2>
				</div>

				<div className="flex flex-col items-center justify-center overflow-hidden">
					<div className="features_sub_title mb-24 translate-y-[50px] opacity-0 sm:mt-10 sm:pl-24 md:mt-20 lg:mt-32">
						<h3 className="text-5xl font-semibold lg:text-7xl">
							iPhone.
						</h3>
						<h3 className="text-5xl font-semibold lg:text-7xl">
							Forged in titanium.
						</h3>
					</div>

					<div className="flex-center flex-col sm:px-10">
						<ExploreVideo />

						<div className="relative flex w-full flex-col">
							<ExploreImages />
							<ExploreText />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
