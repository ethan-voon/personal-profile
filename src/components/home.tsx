import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { PageProps, theme } from '../App';
import PageCard from './page-card';

const useStyles = makeStyles((theme) => ({
	text: {
		opacity: '1',
		background: 'transparent',
	},
}));

export default function Home(props: PageProps) {
	const classes = useStyles(theme);

	return (
		<>
			<Grid container component="span" alignItems="center" justify="center">
				<Grid xs={12} component="span" item>
					<Link to="/about" style={{ textDecoration: 'none' }}>
						<PageCard>
							<Tooltip title="Learn more about me.">
								<Typography variant={'h4'}>About</Typography>
							</Tooltip>
						</PageCard>
					</Link>
				</Grid>
				<Grid xs={12} component="span" item>
					<Link to="/blog" style={{ textDecoration: 'none' }}>
						<PageCard>
							<Tooltip title="Sometimes I write stuff, click here to read on!">
								<Typography variant={'h4'}>Blog</Typography>
							</Tooltip>
						</PageCard>
					</Link>
				</Grid>
				<Grid xs={12} component="span" item>
					<Link to="/projects" style={{ textDecoration: 'none' }}>
						<PageCard>
							<Tooltip title="Side projects I'm working on.">
								<Typography variant={'h4'}>Projects</Typography>
							</Tooltip>
						</PageCard>
					</Link>
				</Grid>
			</Grid>
		</>
	);
}
