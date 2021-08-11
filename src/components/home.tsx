// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { PageProps, theme } from '../App';
import PageCard from './page-card';
import Calendly from './calendly';

const useStyles = makeStyles((theme) => ({
	calendly: {
		overflow: 'hidden',
	},
	cardContent: {
		position: 'absolute',
		width: '100%',
		top: '0',
		right: '0',
		left: '0',
		bottom: '0',
	},
	cardText: {
		position: 'relative',
		textAlign: 'center',
		top: '1em',
		right: '0',
		left: '0',
		bottom: '0',
		marginBottom: '2em',
	},
}));

export default function Home(props: PageProps) {
	const classes = useStyles(theme);

	return (
		<>
			<PageCard>
				<Link to="/about" style={{ textDecoration: 'none' }}>
					<CardContent classes={{ root: classes.cardContent }}>
						<Tooltip title="Learn more about me.">
							<Typography variant={'h4'} classes={{ root: classes.cardText }}>
								About
							</Typography>
						</Tooltip>
					</CardContent>
				</Link>
			</PageCard>
			<PageCard>
				<CardContent classes={{ root: classes.cardContent }}>
					<Link to="/blog" style={{ textDecoration: 'none' }}>
						<Tooltip title="Sometimes I write stuff, click here to read on!">
							<Typography variant={'h4'} classes={{ root: classes.cardText }}>
								Blog
							</Typography>
						</Tooltip>
					</Link>
				</CardContent>
			</PageCard>
			<PageCard>
				<Link to="/projects" style={{ textDecoration: 'none' }}>
					<CardContent classes={{ root: classes.cardContent }}>
						<Tooltip title="Side projects I'm working on.">
							<Typography variant={'h4'} classes={{ root: classes.cardText }}>
								Projects
							</Typography>
						</Tooltip>
					</CardContent>
				</Link>
			</PageCard>
			<PageCard>
				<>
					<a
						href="https://calendly.com/ethanvoon/meeting"
						style={{ textDecoration: 'none' }}
					>
						<Tooltip title="I love one-on-one conversations, let's chat!">
							<Typography variant={'h4'} classes={{ root: classes.cardText }}>
								Schedule
							</Typography>
						</Tooltip>
					</a>
					<Calendly />
				</>
			</PageCard>
		</>
	);
}
