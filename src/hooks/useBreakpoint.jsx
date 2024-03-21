import { useEffect, useState } from 'react';

const MOBILE_MEDIAQUERY = window.matchMedia('(max-width: 768px)'); // md
const TABLET_MEDIAQUERY = window.matchMedia('(max-width: 1280px)'); // xl

export default function useBreakpoint({
	mobile = null,
	tablet = null,
	desktop = null,
}) {
	const [breakpoint, setBreakpoint] = useState(getScreenSize());

	function getScreenSize() {
		if (MOBILE_MEDIAQUERY.matches) return 'mobile';
		else if (TABLET_MEDIAQUERY.matches) return 'tablet';
		else return 'desktop';
	}

	useEffect(() => {
		const mediaQueries = [MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY];

		const handleMediaQuery = () => setBreakpoint(getScreenSize());

		mediaQueries.forEach((mediaQuery) =>
			mediaQuery.addEventListener('change', handleMediaQuery)
		);

		return () => {
			mediaQueries.forEach((mediaQuery) =>
				mediaQuery.removeEventListener('change', handleMediaQuery)
			);
		};
	}, []);

	const isMobile = breakpoint === 'mobile';
	const isTablet = breakpoint === 'tablet';
	const isDesktop = breakpoint === 'desktop';

	const content = { mobile, tablet, desktop }[breakpoint];

	return { content, isMobile, isTablet, isDesktop };
}
