import { VideoContextProvider } from './contexts/VideoContext';
import { IphoneContextProvider } from './contexts/IphoneContext';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoHighlights from './components/videoCarousel/VideoHighlights';
import IphoneModel from './components/model/IphoneModel';
import VideoFeatures from './components/videoFeatures/VideoFeatures';
import ProChip from './components/proChip/ProChip';
import Footer from './components/Footer';

export default function App() {
	return (
		<>
			<Header />

			<main className="bg-black">
				<Hero />

				<VideoContextProvider>
					<VideoHighlights />
				</VideoContextProvider>

				<IphoneContextProvider>
					<IphoneModel />
				</IphoneContextProvider>

				<VideoFeatures />

				<ProChip />
			</main>

			<Footer />
		</>
	);
}
