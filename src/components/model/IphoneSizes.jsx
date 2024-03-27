import { useIphone } from '../../contexts/IphoneContext';
import { sizes } from '../../data/constants';

export default function IphoneSizes() {
	const { iphoneSize, setIphoneSize } = useIphone();

	return (
		<button className="size-btn-container">
			{sizes.map(({ label, value }) => (
				<span
					key={label}
					className="size-btn"
					style={{
						backgroundColor:
							iphoneSize === value ? 'white' : 'transparent',
						color: iphoneSize === value ? 'black' : 'white',
					}}
					onClick={() => setIphoneSize(value)}
				>
					{label}
				</span>
			))}
		</button>
	);
}
