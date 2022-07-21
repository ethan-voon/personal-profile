// eslint-disable-next-line
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { PageProps } from '../App';
import PageCard from './page-card';

export default function Projects(props: PageProps) {
	return (
		<>
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
