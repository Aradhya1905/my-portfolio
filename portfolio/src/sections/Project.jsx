import styled from 'styled-components';
import ProjectImg from '../assets/light-bulb-outlined-hand-drawn-tool.png';
import ReactImg from '../assets/atom.png';
import SolidityImg from '../assets/Solidity-Logo.wine.svg';
import HardhatImg from '../assets/hardhat-seeklogo.com.svg';
import SmartContractImg from '../assets/smart-contract (1).png';

import GitHubIcon from '../assets/github.png';
import ExternalLink from '../assets/external-link.png';
import Api from '../assets/api.png';
import login from '../assets/user.png';
import CryptoPigsWebsite from '../assets/website10.png';
import FirstWearWebsite from '../assets/firstWearscreenshot1.png';
import CryptXScreenshots from '../assets/cryptxscreenshot.png';
import CryptoDoorScreenshot from '../assets/cryptoDoorScreenshot.png';

const Project = () => {
	return (
		<ProjectContainer>
			<Name id='projectName'>
				<img
					src={ProjectImg}
					alt='Project'
					data-scroll
					data-scroll-direction='horizontal'
					data-scroll-speed='4'
					data-scroll-target='#projectName'
				/>
				<p
					data-scroll
					data-scroll-direction='horizontal'
					data-scroll-speed='4'
					data-scroll-target='#projectName'
				>
					PROJECTS
				</p>
			</Name>
			<Projects>
				{/* First Project */}
				<ProjectCard style={{ backgroundColor: '#B9D9EB' }}>
					<DetailContainer>
						<p>
							01.{' '}
							<a href='https://cryptopig.netlify.app/' target='_blank'>
								NFT Minting website
							</a>
						</p>
						<Details>
							<span>A NFT Minting website used to mint NFT's.</span>
							<p>
								Website was built using React.JS. Smart contract was developed using
								solidity and HardHat and deployed to Polygon Testnet.
							</p>
						</Details>
						<TechUsedContainer>
							<ul>
								<li>
									<span>React.JS</span>
									<img src={ReactImg} alt='React image' />
								</li>
								<li>
									<span>Solidity</span>
									<img src={SolidityImg} alt='React image' />
								</li>
								<li>
									<span>Hardhat</span>
									<img src={HardhatImg} alt='React image' />
								</li>
								<li>
									<span>Smart Contarcts</span>
									<img src={SmartContractImg} alt='React image' />
								</li>
							</ul>
						</TechUsedContainer>
						<CodeContainer>
							<ul>
								<a
									href='https://github.com/Aradhya1905/NFT-Minting-DApp'
									target='_blank'
								>
									<span>Code</span>
									<img src={GitHubIcon} alt='React image' />
								</a>
								<a href='https://cryptopig.netlify.app/' target='_blank'>
									<span>Visit</span>
									<img src={ExternalLink} alt='React image' />
								</a>
							</ul>
						</CodeContainer>
					</DetailContainer>
					<ImgContainer>
						<a href='https://cryptopig.netlify.app/' target='_blank'>
							<img src={CryptoPigsWebsite} alt='' />
						</a>
					</ImgContainer>
				</ProjectCard>

				{/* second ProjectCard */}
				<ProjectCard style={{ backgroundColor: 'lightskyblue' }}>
					<DetailContainer>
						<p>
							02.{' '}
							<a href='https://first-wear.netlify.app/' target='_blank'>
								Crypto E-commerce
							</a>
						</p>
						<Details>
							<span>A e-commerce website-used to buy shoe using crypto.</span>
							<p>
								Website was built using React.JS as Front-end framework.Smart
								contract was deployed to Polygon Testnet.
							</p>
						</Details>
						<TechUsedContainer>
							<ul>
								<li>
									<span>React.JS</span>
									<img src={ReactImg} alt='React image' />
								</li>
								<li>
									<span>Redux</span>
									<img
										src='https://redux.js.org/img/redux.svg'
										alt='React image'
									/>
								</li>
								<li>
									<span>Solidity</span>
									<img src={SolidityImg} alt='React image' />
								</li>

								<li>
									<span>Smart Contarcts</span>
									<img src={SmartContractImg} alt='React image' />
								</li>
							</ul>
						</TechUsedContainer>
						<CodeContainer>
							<ul>
								<a href='https://github.com/Aradhya1905/First-Wear' target='_blank'>
									<span>Code</span>
									<img src={GitHubIcon} alt='React image' />
								</a>
								<a href='https://first-wear.netlify.app/' target='_blank'>
									<span>Visit</span>
									<img src={ExternalLink} alt='React image' />
								</a>
							</ul>
						</CodeContainer>
					</DetailContainer>
					<ImgContainer>
						<a href='https://first-wear.netlify.app/' target='_blank'>
							<img src={FirstWearWebsite} alt='FirstWearWebsite' />
						</a>
					</ImgContainer>
				</ProjectCard>

				{/* Third project */}
				<ProjectCard style={{ backgroundColor: '#A4DDED' }}>
					<DetailContainer>
						<p>
							03.{' '}
							<a
								href='https://expo.dev/@karthik1879/cryptoX?serviceType=classic&distribution=expo-go'
								target='_blank'
							>
								Crypto Tracker -App
							</a>
						</p>
						<Details>
							<span>A mobile App used to track live crypto prices.</span>
							<p>
								Mobile App was built using React Native, Redux for state
								management,Crypto prices was obtained from CoinGecko API.
							</p>
						</Details>
						<TechUsedContainer>
							<ul>
								<li>
									<span>React Native</span>
									<img src={ReactImg} alt='React image' />
								</li>
								<li>
									<span>Redux</span>
									<img
										src='https://redux.js.org/img/redux.svg'
										alt='React image'
									/>
								</li>

								<li>
									<span>Firebase login</span>
									<img src={login} alt='React image' />
								</li>
								<li>
									<span>CoinGecko API</span>
									<img src={Api} alt='React image' />
								</li>
							</ul>
						</TechUsedContainer>
						<CodeContainer>
							<ul>
								<a
									href='https://github.com/Aradhya1905/CryptX-App-updated'
									target='_blank'
								>
									<span>Code</span>
									<img src={GitHubIcon} alt='React image' />
								</a>
								<a
									href='https://expo.dev/@karthik1879/cryptoX?serviceType=classic&distribution=expo-go'
									target='_blank'
								>
									<span>Visit</span>
									<img src={ExternalLink} alt='React image' />
								</a>
							</ul>
						</CodeContainer>
					</DetailContainer>
					<ImgContainer>
						<a
							href='https://expo.dev/@karthik1879/cryptoX?serviceType=classic&distribution=expo-go'
							target='_blank'
						>
							<img src={CryptXScreenshots} alt='FirstWearWebsite' />
						</a>
					</ImgContainer>
				</ProjectCard>

				{/* Fourth project */}
				<ProjectCard style={{ backgroundColor: '#B9D9EB', marginBottom: 0 }}>
					<DetailContainer>
						<p>
							04.{' '}
							<a href='https://cryptodoor.netlify.app/' target='_blank'>
								Game to win NFT's
							</a>
						</p>
						<Details>
							<span>A simple game website - to win NFT's</span>
							<p>
								Website was built using React.JS. Smart contract was developed using
								solidity and HardHat and deployed to Polygon Testnet.
							</p>
						</Details>
						<TechUsedContainer>
							<ul>
								<li>
									<span>React.JS</span>
									<img src={ReactImg} alt='React image' />
								</li>
								<li>
									<span>Solidity</span>
									<img src={SolidityImg} alt='React image' />
								</li>
								<li>
									<span>Hardhat</span>
									<img src={HardhatImg} alt='React image' />
								</li>
								<li>
									<span>Smart Contarcts</span>
									<img src={SmartContractImg} alt='React image' />
								</li>
							</ul>
						</TechUsedContainer>
						<CodeContainer>
							<ul>
								<a href='https://github.com/Aradhya1905/CryptoDoor' target='_blank'>
									<span>Code</span>
									<img src={GitHubIcon} alt='React image' />
								</a>
								<a href='https://cryptodoor.netlify.app/' target='_blank'>
									<span>Visit</span>
									<img src={ExternalLink} alt='React image' />
								</a>
							</ul>
						</CodeContainer>
					</DetailContainer>
					<ImgContainer>
						<a href='https://cryptodoor.netlify.app/' target='_blank'>
							<img src={CryptoDoorScreenshot} alt='CryptoDoorScreenshot' />
						</a>
					</ImgContainer>
				</ProjectCard>
			</Projects>
		</ProjectContainer>
	);
};

export default Project;

const ProjectContainer = styled.div`
	width: 100vw;
	height: 100%;
	background-color: #d7effe;
	border-top-left-radius: 2em;
	border-top-right-radius: 2em;
`;
const Name = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	img {
		width: 10rem;
	}

	p {
		font-size: 8rem;
		margin-top: 0.3em;
	}

	@media screen and (max-width: 1400px) {
		img {
			width: 8.5rem;
		}
		p {
			font-size: 6.5rem;
		}
	}
	@media screen and (max-width: 900px) {
		img {
			width: 6.5rem;
		}
		p {
			font-size: 5.5rem;
		}
	}
	@media screen and (max-width: 430px) {
		img {
			width: 3.5rem;
		}
		p {
			font-size: 2.5rem;
		}
	}
`;

const Projects = styled.div`
	width: 65%;
	margin: 0 auto;

	@media screen and (max-width: 900px) {
		margin-left: 1em;
	}
`;
const ProjectCard = styled.div`
	width: 100%;
	height: 60vh;
	margin-bottom: 20em;
	position: relative;
	border-radius: 40px;
	padding: 1em;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border: 1px solid rgba(0, 0, 0, 0.2);

	@media screen and (max-width: 1400px) {
		margin-bottom: 15em;
	}
	@media screen and (max-width: 900px) {
		width: 90vw;
		margin-bottom: 10em;
	}
	@media screen and (max-width: 430px) {
		width: 80vw;
		height: 56vh;
		padding: 0.8em;
		margin-bottom: 7em;
		border-radius: 20px;
	}
`;
const ImgContainer = styled.div`
	width: 50%;
	position: absolute;
	top: 15%;
	right: 0;
	border-radius: 40px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 10px;
	}
	@media screen and (max-width: 1400px) {
		img {
			width: 95%;
			height: 95%;
		}
	}
	@media screen and (max-width: 430px) {
		width: 95%;
		left: 15%;
		top: 11.5%;
		img {
			width: 70%;
			height: 60%;
		}
	}
`;
const DetailContainer = styled.div`
	position: absolute;
	top: 0;
	width: 50%;
	p {
		font-size: ${p => p.theme.fontxxl};
		opacity: 0.4;
	}
	a {
		font-size: 4rem;
		&::after {
			content: '';
			display: block;
			width: 0%;
			height: 10px;
			background: orange;
			transition: all 0.2s ease;
		}
		&:hover::after {
			width: 100%;
		}
	}
	@media screen and (max-width: 1400px) {
		p {
			font-size: ${p => p.theme.fontxl};
		}
		a {
			font-size: 2.8rem;
		}
	}
	@media screen and (max-width: 430px) {
		width: 95%;
		p {
			font-size: ${p => p.theme.fontlg};
			padding-left:0.4em;
			padding-top:0.4em;
		}
		a {
			font-size: ${p => p.theme.fontlg};
		}
	}
`;

const Details = styled.div`
	margin-left: 3em;
	font-family: sans-serif;
	background: black;
	border-radius: 15px;
	padding: 1em;
	span {
		color: white;
	}

	p {
		font-size: 1.3em;
		margin-top: 1em;
		opacity: 1;
		color: white;
	}
	@media screen and (max-width: 1400px) {
		margin-left: 2.4em;
		p {
			font-size: 1em;
		}
	}
	@media screen and (max-width: 430px) {
		margin-left: 0em;
		margin-right: 0.7em;
		margin-top: 9em;
		p {
			font-size: ${p => p.theme.fontxs};
			margin-top: 0em;
		}
		span {
			display: none;
		}
	}
`;

const TechUsedContainer = styled.div`
	margin-left: 5em;
	margin-top: 2em;
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;

		li {
			display: flex;
			align-items: center;
			gap: 10px;

			span {
				font-size: 1.5em;
			}
			img {
				width: 30px;
				height: 30px;
			}
		}
	}

	@media screen and (max-width: 1400px) {
		margin-left: 4em;
		margin-top: 1.5em;

		ul {
			li {
				gap: 6px;
				font-size: 0.7em;
				img {
					width: 30px;
					height: 30px;
				}
			}
		}
	}
	@media screen and (max-width: 430px) {
		margin-left: 0.7em;
		margin-top: 0.5em;
		ul {
			li {
				gap: 6px;
				font-size: 0.5em;

				img {
					width: 20px;
					height: 20px;
				}
			}
		}
	}
`;

const CodeContainer = styled.div`
	margin-left: 5em;
	margin-top: 5em;
	ul {
		display: flex;
		align-items: center;
		gap: 4rem;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.9em;
			gap: 10px;
			transition: all 0.2s ease;

			img {
				width: 25px;
				height: 25px;
			}
			&:hover {
				transform: scale(0.9);
				color: grey;
			}
		}
	}

	@media screen and (max-width: 1400px) {
		margin-left: 4em;
		margin-top: 2em;

		ul {
			a {
				font-size: 1.5em;
				img {
					width: 20px;
					height: 20px;
				}
			}
		}
	}
	@media screen and (max-width: 430px) {
		margin-left: 0.7em;
		margin-top: 1.5em;

		ul {
			a {
				font-size: 1em;
				img {
					width: 20px;
					height: 20px;
				}
			}
		}
	}
`;
