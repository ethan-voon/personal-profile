// eslint-disable-next-line
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { PageProps, theme } from '../App';
import PageCard from './page-card';

const useStyles = makeStyles((theme) => ({
	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
		justifyItems: 'center',
		justifySelf: 'center',
	},
}));

export default function Projects(props: PageProps) {
	const classes = useStyles(theme);

	return (
		<>
			<PageCard>
				<a href="https://commsol.cc">
					<CardContent classes={{ root: classes.contentWrapper }}>
						<Typography variant="h4" align="center">
							Community Solutions
						</Typography>
						<Typography variant="caption" align="center">
							On a mission to build equitable systems for a wide array of communities.
						</Typography>
					</CardContent>
				</a>
			</PageCard>
			<PageCard>
				<CardContent>
					<Typography variant="h4" align="center">
						More To Come In The Future!
					</Typography>
				</CardContent>
			</PageCard>
		</>
	);
}
