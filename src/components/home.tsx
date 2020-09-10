import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import $ from 'jquery';
import { IPageProps } from '../App';
import Background from '../images/Moon.png';

const useStyles = makeStyles((theme) => ({
	cardActions: {
		justifyContent: 'center',
	},
	navCard: {
		display: 'flex',
		minHeight: '200px',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '20px',
		borderRadius: '0',
		backgroundColor: 'rgb(256, 256, 256, 0.6)',
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		width: '100%',
		backgroundImage: 'url(' + Background + ')',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	text: {
		opacity: '1',
		background: 'transparent',
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
				<Grid container component="span" alignItems="center" justify="center">
					<Grid xs={12} component="span" item>
						<Link to="/about" style={{ textDecoration: 'none' }}>
							<Card classes={{ root: classes.navCard }} elevation={12}>
								<Typography variant={'h4'}>About Me</Typography>
							</Card>
						</Link>
					</Grid>
					<Grid xs={12} component="span" item>
						<Card classes={{ root: classes.navCard }} elevation={12}>
							<Grid
								container
								alignItems="center"
								alignContent="center"
								justify="center"
								style={{ textAlign: 'center' }}
							>
								<Grid xs={12} component="span" item>
									<CardContent>
										<Typography variant={'h4'}>
											Want to know when I create content?
										</Typography>
									</CardContent>
								</Grid>
								<Grid xs={12} component="span" item>
									<CardActions classes={{ root: classes.cardActions }}>
										<script async data-uid="6b652f3c27" />
									</CardActions>
								</Grid>
							</Grid>
						</Card>
					</Grid>
					<Grid xs={12} component="span" item>
						<Link to="/support" style={{ textDecoration: 'none' }}>
							<Card classes={{ root: classes.navCard }} elevation={12}>
								<Typography variant={'h4'}>Support</Typography>
							</Card>
						</Link>
					</Grid>
				</Grid>
			</span>
		</>
	);
}
