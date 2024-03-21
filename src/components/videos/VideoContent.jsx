export default function VideoContent({ slide }) {
	return (
		<div className="absolute left-[5%] top-12 z-10">
			{slide.textLists.map((text) => (
				<p key={text} className="text-xl font-medium md:text-2xl">
					{text}
				</p>
			))}
		</div>
	);
}
