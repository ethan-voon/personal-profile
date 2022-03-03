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
			{/* <PageCard>
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
			</PageCard> */}
			<PageCard>
				<CardContent>
					<Typography variant="h4" align="center">
						Projects
					</Typography>
					<Typography variant="h5" align="center">
						None right now!
					</Typography>
					<Typography variant="body1" align="center">
						By this I mean I'm not actively working on any "side projects". That being
						said, I'm very interested in connecting with people to build things. I just
						don't have the motivation to start building anything alone. I'm really
						interested in starting a co-working space with childcare on-site. So, if
						you're in Portland working remotely and you have kid/s, hit me up!
					</Typography>
				</CardContent>
			</PageCard>
		</>
	);
}
