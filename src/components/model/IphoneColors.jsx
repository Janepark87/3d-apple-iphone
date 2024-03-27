import { useIphone } from '../../contexts/IphoneContext';
import { models } from '../../data/constants';

export default function IphoneColors() {
	const { setModel } = useIphone();

	return (
		<ul className="color-container">
			{models.map((item, i) => (
				<li
					key={i}
					className="mx-2 h-6 w-6 cursor-pointer rounded-full"
					style={{ backgroundColor: item.color[0] }}
					onClick={() => setModel(item)}
				/>
			))}
		</ul>
	);
}
