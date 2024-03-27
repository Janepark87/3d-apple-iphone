import { createContext, useContext, useState, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { yellowImg } from '../utils/assets';

const IphoneContext = createContext();

export function IphoneContextProvider({ children }) {
	const [iphoneSize, setIphoneSize] = useState('small');
	const [model, setModel] = useState({
		title: 'iPhone 15 Pro in Natural Titanium',
		color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
		img: yellowImg,
	});

	// camera control form the model view
	const cameraControlSmall = useRef();
	const cameraControlLarge = useRef();

	// model
	const iphoneSmall = useRef(new THREE.Group());
	const iphoneLarge = useRef(new THREE.Group());

	// rotation
	const [smallRotation, setSmallRotation] = useState(0);
	const [largeRotation, setLargeRotation] = useState(0);

	const tl = gsap.timeline();

	return (
		<IphoneContext.Provider
			value={{
				iphoneSize,
				setIphoneSize,
				model,
				setModel,
				cameraControlSmall,
				cameraControlLarge,
				iphoneSmall,
				iphoneLarge,
				smallRotation,
				setSmallRotation,
				largeRotation,
				setLargeRotation,
				tl,
			}}
		>
			{children}
		</IphoneContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useIphone() {
	const context = useContext(IphoneContext);

	if (context === undefined)
		throw new Error(
			'IphoneContext was used outside of Provider. The context can only be used in children of the Provider'
		);
	return context;
}
