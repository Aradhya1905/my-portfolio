import { ThemeProvider } from 'styled-components';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Theme';

import Home from './sections/Home';
import Project from './sections/Project';
import { useRef } from 'react';
import Footer from './sections/Footer';

function App() {
	const scrollRef = useRef(null);
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={light}>
				<LocomotiveScrollProvider
					options={{
						smooth: true,
						smartphone: {
							smooth: false,
						},
						tablet: {
							smooth:true,
						},
					}}
					watch={
						[
							//
						]
					}
					containerRef={scrollRef}
				>
					<AnimatePresence>
						<main
							className='App'
							data-scroll-container
							ref={scrollRef}
							style={{ overflowX: 'hidden' }}
						>
							<Home />
							<Project />
							<Footer/>
						</main>
					</AnimatePresence>
				</LocomotiveScrollProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
