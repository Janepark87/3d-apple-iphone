import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { VideoContextProvider } from './contexts/VideoContext';
import { IphoneContextProvider } from './contexts/IphoneContext';
import VideoHighlights from './components/videoCarousel/VideoHighlights';
import IphoneModel from './components/model/IphoneModel';
import VideoFeatures from './components/videoFeatures/VideoFeatures';

export default function App() {
	return (
		<main className="bg-black">
			<Navbar />
			<Hero />

			<VideoContextProvider>
				<VideoHighlights />
			</VideoContextProvider>

			<IphoneContextProvider>
				<IphoneModel />
			</IphoneContextProvider>

			<VideoFeatures />
		</main>
	);
}
