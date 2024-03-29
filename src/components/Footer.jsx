import { footerLinks } from '../data/constants';

export default function Footer() {
	return (
		<footer className="px-5 py-5 sm:px-10">
			<div className="screen-max-width">
				<div className="">
					<p className="text-gray text-xs font-semibold">
						More ways to shop
						<span className="text-blue mx-1 underline">
							Find an Apple Store
						</span>
						or
						<span className="text-blue mx-1 underline">
							other retailer
						</span>
						near you.
					</p>

					<p className="text-gray text-xs font-semibold">
						Or call 000800-040-8282
					</p>
				</div>

				<hr className="my-5 w-full border-neutral-700" />

				<div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
					<p className="text-gray text-xs font-semibold">
						{new Date().getFullYear()}
					</p>

					<ul className="leading-none">
						{footerLinks.map((link) => (
							<li
								key={link}
								className="text-gray relative inline text-xs font-semibold [&:not(:last-child)]:after:mx-2 [&:not(:last-child)]:after:content-['|']"
							>
								{link}
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
