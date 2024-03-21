import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import { VideoContextProvider } from './contexts/VideoContext';

export default function App() {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />

			<VideoContextProvider>
				<Highlights />
			</VideoContextProvider>
		</main>
	);
}
