import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import { IPageProps } from '../App';
import MyPortrait from '../images/my-portrait.jpg';
import AboutMarkdown from '../content/about.md';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
	cardRoot: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	portraitCardRoot: {
		marginTop: '24px',
		objectFit: 'cover',
		height: '300px',
		width: '225px',
	},
	aboutTextRoot: {
		color: 'theme.palette.text.main',
		fontSize: '1.2rem',
	},
}));

export default function About(props: IPageProps) {
	const classes = useStyles();
	const [markdown, setMarkdown] = useState('');
	useEffect(() => {
		const fetchMarkdown = async () => {
			const md = await fetch(AboutMarkdown).then((response) => response.text());
			setMarkdown(md);
		};
		fetchMarkdown();
	}, []);

	return (
		<>
			<Card component={'span'} classes={{ root: classes.cardRoot }}>
				<CardMedia
					className={classes.portraitCardRoot}
					image={MyPortrait}
					title="My Portrait"
				/>
				<CardContent>
					<ReactMarkdown source={markdown} className={classes.aboutTextRoot} />
				</CardContent>
			</Card>
		</>
	);
}
