import { appleIcon, searchIcon, bagIcon } from '../utils/assets';
import { navLists } from '../data/constants';

export default function Header() {
	return (
		<header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
			<nav className="screen-max-width flex w-full">
				<img src={appleIcon} alt="Apple" width={18} height={18} />

				<ul className="flex flex-1 justify-center gap-5 max-sm:hidden">
					{navLists.map((nav) => (
						<li
							key={nav}
							className="text-grey text-gray cursor-pointer text-sm transition-all hover:text-white"
						>
							{nav}
						</li>
					))}
				</ul>

				<div className="flex items-baseline gap-6 max-sm:flex-1 max-sm:justify-end">
					<img src={searchIcon} alt="Search" width={18} height={18} />
					<img src={bagIcon} alt="Bag" width={18} height={18} />
				</div>
			</nav>
		</header>
	);
}
