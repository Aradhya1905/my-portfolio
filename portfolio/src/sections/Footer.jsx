import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
	const [copy, setCopy] = useState(false);
	const setCopytoFalse = () => {
		setTimeout(() => {
			setCopy(false);
		}, 8000);
	};

	let today = new Date().toISOString().slice(0, 10);
	let date = today.slice(0, 4);

	return (
		<FooterContainer id='footer'>
			<MailContainer
				data-scroll
				data-scroll-direction='horizontal'
				data-scroll-speed='4'
				data-scroll-target='#footer'
			>
				<p>Let's work together</p>
				<EmailContainer>
					<p>
						E-Mail : <span>karthikaradhya1879@gmail.com</span>
					</p>
					<CopyToClipboard
						text={'karthikaradhya1879@gmail.com'}
						onCopy={() => setCopy(true)}
					>
						<button onClick={() => setCopytoFalse()}>{copy ? 'copied' : 'copy'}</button>
					</CopyToClipboard>
				</EmailContainer>
				<IconsContainer>
					<a href='https://twitter.com/Karthik33754055' target='_blank'>
						<TwitterIcon />
					</a>
					<a
						href='https://www.linkedin.com/in/karthik-aradhya-392825178/'
						target='_blank'
					>
						<LinkedInIcon />
					</a>
					<a
						href='https://github.com/Aradhya1905'
						target='_blank'
					>
						<GitHubIcon />
					</a>
				</IconsContainer>
			</MailContainer>
			<CopyRightContainer>
				<p>© {date}, Karthik Aradhya</p>
			</CopyRightContainer>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #d7effe;
	position: relative;
`;
const MailContainer = styled.div`
	position: absolute;
	top: 12%;

	p {
		font-size: 8em;
		margin-left: 1em;
	}
	@media screen and (max-width: 1400px){
		top:11%;
		p{
			font-size:7em;
		}
	}

	@media screen and (max-width: 900px){
		p{
			font-size:5em;
			margin-left:0.4em;
		}
	}
	@media screen and (max-width: 430px){
		p{
			font-size:2.5em;
			margin-left:0.2em;
		}
	}

`;
const EmailContainer = styled.div`
	margin-left: 6em;
	display: flex;
	align-items: center;
	margin-top: 1.5em;
	gap: 1em;
	p {
		font-size: 2em;
	}
	span {
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
	}
	button {
		padding: 0.5em 0.9em;
		cursor: pointer;
		background: black;
		color: white;
		border-radius: 1em;
		font-size: 1em;
		transition: all 0.5s ease-in-out;
		&:hover {
			transform: scale(0.95);
		}
	}
	@media screen and (max-width: 1400px){
		margin-left:5em;
		margin-top:1em;

		p{
			font-size:1.8em;
		}
		button{
			padding:0.4em 0.8em;
		}
	}
	@media screen and (max-width: 900px){
		p{
			font-size:1.3em;
			
		}
	}
	@media screen and (max-width: 430px){
		margin-left:0.1em;
		flex-direction: column;
		gap:0.1em;
		p{
			font-size:0.9em;
			border-radius: 0.4em;
		}
		button{
			padding:0.2em 0.4em;
		}
	}
`;

const IconsContainer = styled.div`
	margin-left: 8em;
	margin-top: 1.5em;
	display: flex;
	align-items: center;
	gap: 1em;
	.MuiSvgIcon-root {
		color: #000;
		font-size: 4em;
		transition: all 0.5s ease-in-out;
		cursor: pointer;
		&:hover {
			color: #202020;
			transform: scale(0.95);
		}
	}
	@media screen and (max-width: 1400px){
		margin-left:7em;
		.MuiSvgIcon-root {
			font-size:3em;
		}
	}
	@media screen and (max-width: 430px){
		margin-left:0.1em;
		margin-top:0.5em;
		.MuiSvgIcon-root {
			font-size:2em;
		}
	}
`;

const CopyRightContainer = styled.div`
	position: absolute;
	top: 90%;
	margin-left: 50%;

	p {
		font-size: 1.2em;
	}

	@media screen and (max-width: 1400px){
		margin-left:45%;
	}
	@media screen and (max-width: 430px){
		margin-left:29%;

		p{
			font-size:0.8em;
		}
	}
`;
