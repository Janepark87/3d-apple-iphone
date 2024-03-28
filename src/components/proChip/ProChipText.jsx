import { useGSAP } from '@gsap/react';
import { animateTitleWithScroll } from '../../utils/animations';

export default function ProChipText() {
	useGSAP(() => {
		animateTitleWithScroll('.g_fadeIn');
	}, []);

	return (
		<div className="chip-text-container">
			<div className="flex flex-1 flex-col justify-center">
				<p className="chip-text g_fadeIn">
					A17 Pro is an entirely new class of iPhone chip that
					delivers our{' '}
					<span className="text-white">
						best graphic performance by far
					</span>
					.
				</p>

				<p className="chip-text g_fadeIn">
					Mobile{' '}
					<span className="text-white">
						games will look and feel so immersive
					</span>
					, with incredibly detailed environments and characters.
				</p>
			</div>

			<div className="g_fadeIn flex flex-1 flex-col justify-center">
				<p className="chip-text">New</p>
				<p className="chip-bigtext">Pro-class GPU</p>
				<p className="chip-text">with 6 cores</p>
			</div>
		</div>
	);
}
