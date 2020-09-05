import React, { useEffect } from 'react';
import { Grid, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import $ from 'jquery';
import { IPageProps } from '../App';

const useStyles = makeStyles((theme) => ({
	cardActions: {
		justifyContent: 'center',
	},
	navCard: {
		minHeight: '300px',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		margin: '20px',
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function Home(props: IPageProps) {
	const classes = useStyles();

	// For ConvertKit integration
	useEffect(() => {
		const script = document.createElement('script');

		script.src = 'https://astounding-innovator-3833.ck.page/6b652f3c27/index.js';
		script.async = true;

		// Less than ethical hack to get rid of ConvertKit branding...
		script.onload = () => $('div.formkit-powered-by-convertkit-container').remove();

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<span className={classes.root}>
				<Grid
					container
					component="span"
					alignItems="center"
					alignContent="center"
					justify="center"
				>
					<Grid xs={11} component="span" item>
						<Card classes={{ root: classes.navCard }}>
							<Grid
								container
								alignItems="center"
								alignContent="center"
								justify="center"
								style={{ textAlign: 'center' }}
							>
								<Grid xs={11} component="span" item>
									<CardContent>
										<Typography variant={'h5'} component={'h2'}>
											Subscribe to my newsletter!
										</Typography>
									</CardContent>
								</Grid>
								<Grid xs={11} component="span" item>
									<CardActions classes={{ root: classes.cardActions }}>
										<script async data-uid="6b652f3c27" />
									</CardActions>
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid xs={11} component="span" item>
						<Card classes={{ root: classes.navCard }}>
							<Typography>About</Typography>
						</Card>
					</Grid>
					<Grid xs={11} component="span" item>
						<Card classes={{ root: classes.navCard }}>
							<Typography>Blog</Typography>
						</Card>
					</Grid>
					<Grid xs={11} component="span" item>
						<Card classes={{ root: classes.navCard }}>
							<Typography>Support</Typography>
						</Card>
					</Grid>
				</Grid>
			</span>
		</>
	);
}
