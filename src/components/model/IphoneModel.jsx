import { useGSAP } from '@gsap/react';
import { useIphone } from '../../contexts/IphoneContext';
import { animateTitleWithScroll } from '../../utils/animations';
import IphoneCanvas from './IphoneCanvas';
import IphoneColors from './IphoneColors';
import IphoneSizes from './IphoneSizes';

export default function IphoneModel() {
	const { model } = useIphone();

	useGSAP(() => {
		animateTitleWithScroll('#heading');
	}, []);

	return (
		<section className="common-padding">
			<div className="screen-max-width">
				<h2 id="heading" className="section-heading">
					Take a closer look.
				</h2>
			</div>

			<div className="mt-5 flex flex-col items-center">
				<IphoneCanvas />

				<div className="mx-auto w-full">
					<p className="mb-5 text-center text-sm font-light">
						{model.title}
					</p>

					<div className="flex-center">
						<IphoneColors />
						<IphoneSizes />
					</div>
				</div>
			</div>
		</section>
	);
}
