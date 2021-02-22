import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { IPageProps, theme } from '../App';
import MyPortrait from '../images/my-portrait.jpg';
import AboutMarkdown from '../content/about.md';
import PageCard from './page-card';

const useStyles = makeStyles((theme) => ({
	portraitCardRoot: {
		marginTop: '24px',
		objectFit: 'cover',
		height: '300px',
		width: '225px',
		padding: '10px',
	},
	aboutTextRoot: {
		color: 'theme.palette.text.main',
		fontSize: '1.2rem',
	},
}));

export default function About(props: IPageProps) {
	const classes = useStyles(theme);
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		const fetchMarkdown = async () => {
			const md = await fetch(AboutMarkdown).then((response) => response.text());
			setMarkdown(md);
		};
		fetchMarkdown();
	}, []);

	const aboutContent = (
		<>
			<CardMedia
				className={classes.portraitCardRoot}
				image={MyPortrait}
				title="My Portrait"
			/>
			<CardContent>
				<ReactMarkdown source={markdown} className={classes.aboutTextRoot} />
			</CardContent>
		</>
	);

	return (
		<>
			<PageCard>{aboutContent}</PageCard>
		</>
	);
}
