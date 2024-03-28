import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { chipImg } from '../../utils/assets';
import IphoneFrame from './IphoneFrame';
import ProChipText from './ProChipText';

export default function ProChip() {
	useGSAP(() => {
		gsap.from('#chip', {
			opacity: 0,
			scale: 2,
			duration: 1.8,
			ease: 'power2.inOut',
			scrollTrigger: {
				trigger: '#chip',
				start: 'top bottom',
				toggleActions: 'restart none none none',
			},
		});
	}, []);

	return (
		<section className="common-padding">
			<div className="screen-max-width">
				<div id="chip" className="flex-center my-20 w-full">
					<img src={chipImg} alt="chip" width={180} height={180} />
				</div>

				<div className="flex flex-col items-center">
					<h2 className="chip-title">
						A17 Pro chip.{' '}
						<span className="block">A monster win for gaming.</span>
					</h2>

					<p className="chip-subtitle">
						It's here. The biggest redesign in the histroy of Apple
						GPUS.
					</p>
				</div>

				<IphoneFrame />
				<ProChipText />
			</div>
		</section>
	);
}
