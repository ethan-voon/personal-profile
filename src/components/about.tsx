// eslint-disable-next-line
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { PageProps, theme } from '../App';
import MyPortrait from '../images/my-portrait.jpeg';
import PageCard from './page-card';

const useStyles = makeStyles((theme) => ({
	portraitCardRoot: {
		height: '25em',
		width: '25em',
		borderRadius: '2em',
		marginTop: '1em',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function About(props: PageProps) {
	const classes = useStyles(theme);

	return (
		<PageCard>
			<CardContent classes={{ root: classes.cardContent }}>
				<CardMedia
					className={classes.portraitCardRoot}
					image={MyPortrait}
					title="My Portrait"
				/>
				<h1 id="about-me">About Me</h1>
				<p>
					Born in Visalia, CA and raised throughout the Pacific Northwest. I spent many
					years in the ‘City of Subdued Excitement’ –{' '}
					<a href="https://en.wikipedia.org/wiki/Bellingham,_Washington">
						Bellingham, WA
					</a>
					. However, nowadays you can find me in the ‘Rose City’ –{' '}
					<a href="https://en.wikipedia.org/wiki/Portland,_Oregon">Portland, OR</a>. I
					share a home with my life partner, Ellie, our two little monsters Silas and
					Callum, and our <em>loud</em> cattle dog, Indi.
				</p>
				<p>
					I was brought up in a house of music and continue to play whatever instrument I
					can get my hands on. Most often that ends up being a ukulele. If you're bored,
					feel free to check out my{' '}
					<a href="https://soundcloud.com/ethanvoon">SoundCloud</a>.
				</p>
				<p>
					I love one on one discussions! Please, don’t be shy and feel free to{' '}
					<a href="mailto:ethanvoon@outlook.com">reach out</a> about anything anytime.
				</p>
			</CardContent>
		</PageCard>
	);
}
