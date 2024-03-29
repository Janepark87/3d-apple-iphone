import { Suspense } from 'react';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import Lights from './Lights';
import Iphone from './Iphone';
import Loader from './Loader';

export default function ModelView({
	index,
	groupRef,
	gsapType,
	controlRef,
	setRotationState,
	size,
	item,
}) {
	return (
		<View
			className={`absolute h-full w-full ${index === 2 ? 'right-[-100%]' : ''}`}
			index={index}
			id={gsapType}
		>
			<ambientLight intensity={0.3} />

			<PerspectiveCamera makeDefault position={[0, 0, 4]} />

			<Lights />

			<OrbitControls
				makeDefault
				ref={controlRef}
				enableZoom={false}
				enablePan={false}
				rotateSpeed={0.5}
				target={new THREE.Vector3(0, 0, 0)}
				onEnd={() =>
					setRotationState(controlRef.current.getAzimuthalAngle())
				}
			/>

			<group
				ref={groupRef}
				name={`${index === 1 ? 'small' : 'larger'}`}
				position={[0, 0, 0]}
			>
				<Suspense fallback={<Loader />}>
					<Iphone
						scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
						item={item}
						size={size}
					/>
				</Suspense>
			</group>
		</View>
	);
}
