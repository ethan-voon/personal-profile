// eslint-disable-next-line
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { PageProps, theme } from '../App';
import MyPortrait from '../images/my-portrait.jpg';
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
					Born in Visalia, CA and raised throughout the Pacific Northwest. Today you can
					find me in the ‘City of Subdued Excitement’ –{' '}
					<a href="https://en.wikipedia.org/wiki/Bellingham,_Washington">
						Bellingham, WA
					</a>
					. I share a home with my life partner, Ellie, our baby Silas, and our{' '}
					<em>loud</em> cattle dog, Indi.
				</p>
				<p>
					I was brought up in a house of music and continue to play whatever instrument I
					can get my hands on. Most often that ends up being a ukulele. If you're bored,
					feel free to check out my{' '}
					<a href="https://soundcloud.com/ethanvoon">SoundCloud</a>.
				</p>
				<p>
					I attended Capital High School in Olympia, WA and graduated in 2010. The next 7
					years consisted of part/full-time work at GameStop and part/full-time course
					loads at South Puget Sound Community College followed by Western Washington
					University. I graduated with a B.S. in Computer Science from WWU in 2017.
					Following graduation, I worked as an intern at Faithlife and earned a full-time
					position at the end of the summer. During my tenure at Faithlife I developed the
					skills of a full-stack developer by working on RESTful web APIs, internal tools,
					and React applications. I currently work at Whatcom Community College.
				</p>
				<p>
					I love one on one discussions! Please, don’t be shy and feel free to{' '}
					<a href="mailto:ethanvoon@outlook.com">reach out</a> about anything anytime.
				</p>
			</CardContent>
		</PageCard>
	);
}
