import { useEffect, useState } from 'react';

const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

export default function useResponsiveContent({
	mobile = null,
	desktop = null,
}) {
	const [isMobile, setIsMobile] = useState(mobileMediaQuery);

	useEffect(() => {
		setIsMobile(mobileMediaQuery.matches);

		const handleResize = (e) => setIsMobile(e.matches);
		mobileMediaQuery.addEventListener('change', handleResize);

		return () =>
			mobileMediaQuery.removeEventListener('change', handleResize);
	}, [isMobile]);

	const content = isMobile ? mobile : desktop;

	return { isMobile, content };
}
