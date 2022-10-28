import styled from 'styled-components';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

//icons
import scrollDown from '../assets/animation_500_l8sk786i.gif';
import pojectGif from '../assets/loading1.gif';
import GitHubIcon from '@mui/icons-material/GitHub';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Lottie from 'lottie-react';
import loading from '../assets/99354-loading.json';

const MainHeroSection = () => {
	const [project, setProject] = useState(false);
	const [code, setCode] = useState(false);
	const [contact, setContact] = useState(false);
	const [copy, setCopy] = useState(false);
	const [about, setAbout] = useState(false);

	const setCopytoFalse = () => {
		setTimeout(() => {
			setCopy(false);
		}, 8000);
	};

	const options = {
		animationData: loading,
		loop: true,
	};
	return (
		<Section>
			<NavLogo href='/'>Karthik_Aradhya</NavLogo>
			<NameContainer>
				<p>Karthik Aradhya</p>
				<span>Front-end Developer</span>
			</NameContainer>
			<HeroSection>
				<SectionLeft>
					<WorkSection
						onMouseEnter={() => setProject(true)}
						onMouseLeave={() => setProject(false)}
						onClick={() => setProject(prev => !prev)}
					>
						{project ? (
							<>
								<span>
									Please Scroll
									<img src={scrollDown} alt='scrolldown' />
								</span>

								<p className='work'>To see my work</p>
							</>
						) : (
							<>
								<p>Projects</p>
								<div className='projectGif'>
									<img src={pojectGif} alt='projectGif' />
									{/* <Lottie animationData={loading} loop={true} />; */}
								</div>
							</>
						)}
					</WorkSection>
				</SectionLeft>
				<SectionRight>
					<TopContainer>
						<Code
							onMouseEnter={() => setCode(true)}
							onMouseLeave={() => setCode(false)}
							onClick={() => setCode(prev => !prev)}
						>
							{code ? (
								<div className='gitHub'>
									<a
										target='_blank'
										href='https://github.com/Aradhya1905?tab=repositories'
									>
										<GitHubIcon />
										<NorthEastIcon />
									</a>
								</div>
							) : (
								<p>Code</p>
							)}
						</Code>
						<Contact
							onMouseEnter={() => setContact(true)}
							onMouseLeave={() => setContact(false)}
							onClick={() => setContact(true)}
						>
							{contact ? (
								<div className='contact'>
									<p>
										karthikaradhya1879@gmail.com
										<CopyToClipboard
											text={'karthikaradhya1879@gmail.com'}
											onCopy={() => setCopy(true)}
										>
											<button onClick={() => setCopytoFalse()}>
												{copy ? 'copied' : 'copy'}
											</button>
										</CopyToClipboard>
									</p>
									<div className='contactIcons'>
										<a
											href='https://twitter.com/Karthik33754055'
											target='_blank'
										>
											<TwitterIcon />
										</a>

										<a
											href='https://www.linkedin.com/in/karthik-aradhya-392825178/'
											target='_blank'
										>
											<LinkedInIcon />
										</a>
									</div>
								</div>
							) : (
								<p>Contact</p>
							)}
						</Contact>
					</TopContainer>
					<BottomContainer>
						<About
							onMouseEnter={() => setAbout(true)}
							onMouseLeave={() => setAbout(false)}
							onClick={() => setAbout(prev => !prev)}
						>
							{about ? (
								<>
									<div className='about'>
										<p>
											<VaccinesIcon /> Previously worked in the Pharma sector
											as Production Executive.
										</p>
									</div>
									<span>
										<FavoriteBorderIcon />
										Code ,Medicine ,Computers & Software
									</span>
								</>
							) : (
								<p>Abuot</p>
							)}
						</About>
					</BottomContainer>
				</SectionRight>
			</HeroSection>
		</Section>
	);
};

export default MainHeroSection;

const Section = styled.section`
	height: 100vh;
	width: 100vw;
	background-color: #000;
	position: relative;
	color: white;
	@media screen and (max-width: 900px) {
		height: 100%;
	}
`;

const NavLogo = styled.a`
	position: absolute;
	top: 1em;
	color: white;
	cursor: pointer;
	font-size: 1.5em;
	letter-spacing: 1.5px;
	transition: all 0.25s ease;
	margin-left: 3%;
	&:hover {
		transform: scale(0.96);
	}
	@media screen and (max-width: 900px) {
		font-size: 1.3em;
	}
	@media screen and (max-width: 430px) {
		font-size: 0.8em;
	}
`;
const NameContainer = styled.div`
	position: absolute;
	left: 32%;
	top: 18%;
	animation: fadeIn ease 3s;
	-webkit-animation: fadeIn ease 3s;
	-moz-animation: fadeIn ease 3s;
	-o-animation: fadeIn ease 3s;
	-ms-animation: fadeIn ease 3s;
	p {
		font-size: 4.5em;
		color: grey;
		font-family: 'Poppins', sans-serif;
		font-weight: bold;
	}
	span {
		font-size: 1.5em;
		font-family: 'Poppins', sans-serif;
		opacity: 0.4;
		position: absolute;
		top: 3.4em;
	}
	@media screen and (max-width: 1400px) {
		left: 31%;
		p {
			font-size: 3.5em;
		}
		span {
			top: 3em;
		}
	}

	@media screen and (max-width: 900px) {
		left: 27%;
		top: 9%;
		p {
			font-size: 2.5em;
		}
		span {
			top: 2.5em;
			font-size: 1.3em;
		}
	}

	@media screen and (max-width: 430px) {
		left: 18%;
		top: 10%;
		p {
			font-size: 1.5em;
		}
		span {
			font-size: 0.8em;
		}
	}
`;
const HeroSection = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	top: 40%;
	height: 60vh;
	margin-left: 1%;

	@media screen and (max-width: 900px) {
		top: 25%;
		flex-direction: column;
	}
`;

const SectionLeft = styled.div``;
const WorkSection = styled.div`
	width: 48.5vw;
	height: 59vh;
	background-color: #d7effe;
	border-radius: 3em;
	cursor: pointer;
	transition: all 0.25s ease-out;
	position: relative;
	p {
		font-size: 2em;
		color: #202020;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		padding: 1em;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}
	span {
		font-size: 5em;
		color: #000;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		position: absolute;
		top: 20%;
		margin-left: 1em;
		padding: 0;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;

		img {
			width: 2em;
			height: 4em;
			top: 0.5em;
			left: 4.5em;
			object-fit: contain;
			position: absolute;
		}
	}
	.work {
		font-size: 2.8em;
		color: #000;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		margin-left: 1.8em;
		position: absolute;
		top: 40%;
		padding: 0;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}
	&:hover {
		transform: scale(0.99);
	}

	.projectGif {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		img {
			object-fit: contain;
			width: 32%;
			height: 32%;
		}
	}

	@media screen and (max-width: 1400px) {
		border-radius: 3em;
		p {
			font-size: 1.8em;
		}
		span {
			font-size: 3.5em;
		}
		.work {
			font-size: 2em;
		}
	}

	@media screen and (max-width: 900px) {
		width: 98vw;
		height: 25vh;
		p {
			padding: 0.8em;
		}
		.projectGif {
			left: 5%;
			img {
				width: 35%;
				height: 35%;
			}
		}
	}
	@media screen and (max-width: 430px) {
		border-radius: 1.8em;
		width: 98vw;
		height: 23vh;
		p {
			padding: 0.7em;
		}
		span {
			font-size: 1.8em;
		}
		.work {
			font-size: 1em;
		}
		.projectGif {
			left: 20%;
			img {
				width: 35%;
				height: 35%;
			}
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-o-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
const SectionRight = styled.div`
	margin-left: 0.3em;
	@media screen and (max-width: 900px) {
		margin-left: 0.1em;
	}
`;

const TopContainer = styled.div`
	position: absolute;
	top: 0.2em;
	display: flex;
	gap: 0.3em;
	@media screen and (max-width: 900px) {
		top: 42.5%;
		left: 1%;
	}
	@media screen and (max-width: 430px) {
		top: 39.5%;
	}
`;

const Code = styled.div`
	width: 23vw;
	height: 30vh;
	border-radius: 3em;
	background-color: white;
	cursor: pointer;
	transition: all 0.25s ease;
	p {
		font-size: 2em;
		color: #202020;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		padding: 1em;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}
	.gitHub {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}
	.MuiSvgIcon-root {
		color: black;
		font-size: 5em;
		transition: all 0.5s ease-in-out;
		&:hover {
			transform: scale(0.95);
		}
	}
	&:hover {
		transform: scale(0.99);
	}

	@media screen and (max-width: 1400px) {
		border-radius: 3em;
		p {
			font-size: 1.8em;
		}
		.MuiSvgIcon-root {
			font-size: 4em;
		}
	}

	@media screen and (max-width: 900px) {
		border-radius: 2em;
		height: 23vh;
		width: 27vw;
		left: 0;
		.MuiSvgIcon-root {
			font-size: 3em;
		}
	}

	@media screen and (max-width: 430px) {
		border-radius: 1.8em;
		p {
			font-size: 1.2em;
			padding: 0.7em;
		}
		.MuiSvgIcon-root {
			font-size: 2em;
		}
	}
`;
const Contact = styled.div`
	width: 26vw;
	height: 29.5vh;
	border-radius: 3em;
	background-color: #1b1b1f;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	p {
		font-size: 2em;
		color: #fff;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		padding: 1em;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}
	.contact {
		margin-top: 3em;
		margin-left: 2em;
		p {
			display: flex;
			align-items: center;
			font-size: 0.9em;
			margin-left: -1em;
			font-weight: 400;
			border: 4px solid #fff;
			width: 90%;
			border-radius: 2em;
			transition: all 0.5s ease-in-out;
			&:hover {
				color: orange;
			}

			button {
				margin-left: 0.9em;
				cursor: pointer;
				padding: 0.2em 0.5em;
				border-radius: 4em;
			}
		}
	}
	.contactIcons {
		margin-top: 1em;
		margin-left: 25%;
		display: flex;
		gap: 0.5em;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}
	.MuiSvgIcon-root {
		color: white;
		font-size: 3em;
		transition: all 0.5s ease-in-out;
		&:hover {
			color: orange;
			transform: scale(0.95);
		}
	}
	&:hover {
		transform: scale(0.99);
	}

	@media screen and (max-width: 1400px) {
		border-radius: 3em;

		p {
			font-size: 1.8em;
		}

		.contact {
			margin-top: 2.5em;
			margin-left: 1.5em;

			p {
				font-size: 0.7em;
				button {
					margin-left: 0.1em;
					padding: 0.2em 0.3em;
				}
			}

			.MuiSvgIcon-root {
				font-size: 2.1em;
			}
		}
	}

	@media screen and (max-width: 900px) {
		width: 69vw;
		height: 23vh;
	}
	@media screen and (max-width: 430px) {
		border-radius: 1.8em;
		p {
			font-size: 1.2em;
			padding: 0.7em;
		}

		.contact {
			margin-top: 1.5em;
			margin-left: 0.5em;

			p {
				font-size: 0.5em;
				button {
					margin-left: 0.1em;
					padding: 0.15em 0.2em;
				}
			}

			.MuiSvgIcon-root {
				font-size: 1.5em;
			}
		}
	}
`;
const BottomContainer = styled.div`
	position: absolute;
	margin-top: 0.4em;
	@media screen and (max-width: 900px) {
		left: 0;
		top: 81%;
	}
	@media screen and (max-width: 430px) {
		top: 78%;
	}
`;
const About = styled.div`
	width: 49vw;
	height: 28.7vh;
	border-radius: 3em;
	background-color: #fff480;
	transition: all 0.25s ease-in-out;
	cursor: pointer;

	p {
		font-size: 2em;
		color: #000;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		padding: 1em;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}

	&:hover {
		transform: scale(0.99);
	}
	.MuiSvgIcon-root {
		color: #000;
	}
	span {
		font-size: 1.2em;
		color: grey;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		margin-left: 2em;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}
	.about {
		margin-left: 1.5em;
		font-size: 0.8em;
		animation: fadeIn ease 3s;
		-webkit-animation: fadeIn ease 3s;
		-moz-animation: fadeIn ease 3s;
		-o-animation: fadeIn ease 3s;
		-ms-animation: fadeIn ease 3s;
	}

	@media screen and (max-width: 1400px) {
		border-radius: 3em;

		p {
			font-size: 1.8em;
		}
		span {
			font-size: 1em;
		}
	}

	@media screen and (max-width: 900px) {
		left: 0%;
		height: 25vh;
		width: 98vw;
	}

	@media screen and (max-width: 430px) {
		border-radius: 1.8em;
		p {
			font-size: 1.2em;
			padding: 0.7em;
		}
		span {
			font-size: 0.7em;
		}
		.about {
			font-size: 0.7em;
		}
	}
`;
