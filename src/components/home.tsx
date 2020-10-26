import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import $ from 'jquery';
import { IPageProps, theme } from '../App';

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
	text: {
		opacity: '1',
		background: 'transparent',
	},
}));

export default function Home(props: IPageProps) {
	const classes = useStyles(theme);

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
			<Grid container component="span" alignItems="center" justify="center">
				<Grid xs={12} component="span" item>
					<Link to="/about" style={{ textDecoration: 'none' }}>
						<Card classes={{ root: classes.navCard }} elevation={12}>
							<Typography variant={'h4'}>About</Typography>
						</Card>
					</Link>
				</Grid>
				<Grid xs={12} component="span" item>
					<Link to="/projects" style={{ textDecoration: 'none' }}>
						<Card classes={{ root: classes.navCard }} elevation={12}>
							<Typography variant={'h4'}>Projects</Typography>
						</Card>
					</Link>
				</Grid>
				<Grid xs={12} component="span" item>
					<Link to="/resume" style={{ textDecoration: 'none' }}>
						<Card classes={{ root: classes.navCard }} elevation={12}>
							<Typography variant={'h4'}>Resume</Typography>
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
			</Grid>
		</>
	);
}
