import { useGSAP } from '@gsap/react';
import { explore1Img, explore2Img } from '../../utils/assets';
import { animateWithScroll } from '../../utils/animations';

export default function ExploreImages() {
	useGSAP(() => {
		animateWithScroll(
			'.g_img_grow',
			{
				scale: 1,
				opacity: 1,
				ease: 'power1',
			},
			{ scrub: 5.5 }
		);
	}, []);

	return (
		<div className="feature-video-container">
			<div className="h-[50vh] flex-1 overflow-hidden">
				<img
					className="feature-video g_img_grow pointer-events-none"
					src={explore1Img}
					alt="Titanium"
				/>
			</div>

			<div className="h-[50vh] flex-1 overflow-hidden">
				<img
					className="feature-video g_img_grow pointer-events-none"
					src={explore2Img}
					alt="Titanium 2"
				/>
			</div>
		</div>
	);
}
