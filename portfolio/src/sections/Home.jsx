import React from 'react';
import styled from 'styled-components';
import MainHeroSection from '../components/MainHeroSection';

const Home = () => {
	return (
		<HomeContainer>
			<MainHeroSection />
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.section`
	height: 100vh;
	width: 100vw;
`;
