import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardContent, Grid } from '@material-ui/core';
import { IPageProps, theme } from '../App';
import PageCard from './page-card';

const useStyles = makeStyles((theme) => ({}));

export default function Resume(props: IPageProps) {
	const classes = useStyles(theme);

	return (
		<>
			<PageCard>
				<CardContent>
					<Grid
						container
						component="span"
						direction="column"
						alignItems="center"
						justify="center"
					>
						<Grid xs={12} component="span" item>
							<iframe
								src="https://docs.google.com/document/d/e/2PACX-1vSzaOht9O_9RLUkgp3d35QaaX9m2p-OZ6U-OE-i4aX985CU4Lx3bM5uIP4dYWlfYWgxkOj47bKiuCb8/pub?embedded=true"
								height="1144"
								width="835"
							></iframe>
						</Grid>
						<Grid xs={12} component="span" item>
							<Button
								href="https://docs.google.com/document/d/1rTIz207R4icCkBqT6ZQgO6p0nh69-wFNOFnTqMQEQ_0/edit?usp=sharing"
								style={{ textDecoration: 'none' }}
								variant="contained"
								color="primary"
							>
								Download
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</PageCard>
		</>
	);
}
