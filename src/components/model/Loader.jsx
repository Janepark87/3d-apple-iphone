import { Html } from '@react-three/drei';

export default function Loader() {
	return (
		<Html>
			<div className="absolute left-0 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
				<div className="h-20 w-20 animate-spin rounded-full border-4 border-slate-400 border-t-slate-300 border-opacity-20"></div>
			</div>
		</Html>
	);
}
