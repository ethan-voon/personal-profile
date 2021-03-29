import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardContent, Grid } from '@material-ui/core';
import { PageProps, theme } from '../App';
import PageCard from './page-card';

const useStyles = makeStyles((theme) => ({}));

export default function Projects(props: PageProps) {
	const classes = useStyles(theme);

	return (
		<>
			<Grid container component="span" alignItems="center" justify="center">
				<Grid xs={12} component="span" item>
					<PageCard>
						<CardContent>
							<Typography variant="h4" align="center">
								<a href="https://commsol.cc">Community Solutions</a>
							</Typography>
							<Typography variant="caption" align="center">
								A personal project aimed to build equitable systems for a wide array
								of communities.
							</Typography>
						</CardContent>
					</PageCard>
				</Grid>
				<Grid xs={12} component="span" item>
					<PageCard>
						<CardContent>
							<Typography variant="h4" align="center">
								More To Come In The Future!
							</Typography>
						</CardContent>
					</PageCard>
				</Grid>
			</Grid>
		</>
	);
}
