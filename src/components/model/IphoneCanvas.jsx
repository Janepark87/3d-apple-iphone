import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { useIphone } from '../../contexts/IphoneContext';
import { animateWithGsapTimeline } from '../../utils/animations';
import ModelView from './ModelView';

export default function IphoneCanvas() {
	const {
		iphoneSize,
		model,
		cameraControlSmall,
		cameraControlLarge,
		iphoneSmall,
		iphoneLarge,
		smallRotation,
		largeRotation,
		setSmallRotation,
		setLargeRotation,
		tl,
	} = useIphone();

	useEffect(() => {
		const handleResize = () => {
			if (iphoneSize === 'large') {
				animateWithGsapTimeline(
					tl,
					iphoneSmall,
					smallRotation,
					'#view1',
					'#view2',
					{ transform: 'translateX(-100%)', duration: 1.5 }
				);
			}
			if (iphoneSize === 'small') {
				animateWithGsapTimeline(
					tl,
					iphoneLarge,
					largeRotation,
					'#view2',
					'#view1',
					{ transform: 'translateX(0)', duration: 1.5 }
				);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [
		iphoneSize,
		iphoneSmall,
		smallRotation,
		iphoneLarge,
		largeRotation,
		tl,
	]);

	return (
		<div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
			<ModelView
				index={1}
				groupRef={iphoneSmall}
				gsapType="view1"
				controlRef={cameraControlSmall}
				setRotationState={setSmallRotation}
				item={model}
				size={iphoneSize}
			/>

			<ModelView
				index={2}
				groupRef={iphoneLarge}
				gsapType="view2"
				controlRef={cameraControlLarge}
				setRotationState={setLargeRotation}
				item={model}
				size={iphoneSize}
			/>

			<Canvas
				className="h-full w-full"
				style={{
					position: 'fixed',
					top: '0',
					left: '0',
					right: '0',
					bottom: '0',
					overflow: 'hidden',
				}}
				eventSource={document.getElementById('root')}
			>
				<View.Port />
			</Canvas>
		</div>
	);
}
