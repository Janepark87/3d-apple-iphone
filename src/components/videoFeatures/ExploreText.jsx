import { useGSAP } from '@gsap/react';
import { animateTitleWithScroll } from '../../utils/animations';

export default function ExploreText() {
	useGSAP(() => {
		animateTitleWithScroll('.g_text', { stagger: 0.3, delay: 0.15 });
	}, []);

	return (
		<div className="feature-text-container">
			<div className="flex-center flex-1">
				<p className="feature-text g_text">
					iPhone 15 Pro is{' '}
					<span className="text-white">
						the first iphone to feature an aerospace-grade titanium
						design
					</span>
					using the same alloy that spacerafts use for missions to
					Mars.
				</p>
			</div>

			<div className="flex-center flex-1">
				<p className="feature-text g_text">
					Titanium has one of the best strength-to-weight ratios of
					any metal, making these our{' '}
					<span className="text-white">
						lightest Pro models ever.
					</span>
					You'll notice the difference the moment you pick one up.
				</p>
			</div>
		</div>
	);
}
