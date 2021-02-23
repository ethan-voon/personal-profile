import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import $ from 'jquery';
import { IPageProps, theme } from '../App';
import PageCard from './page-card';

const useStyles = makeStyles((theme) => ({
	cardActions: {
		justifyContent: 'center',
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
						<PageCard>
							<Typography variant={'h4'}>About</Typography>
						</PageCard>
					</Link>
				</Grid>
				<Grid xs={12} component="span" item>
					<Link to="/projects" style={{ textDecoration: 'none' }}>
						<PageCard>
							<Typography variant={'h4'}>Projects</Typography>
						</PageCard>
					</Link>
				</Grid>
				<Grid xs={12} component="span" item>
					<Link to="/resume" style={{ textDecoration: 'none' }}>
						<PageCard>
							<Typography variant={'h4'}>Resume</Typography>
						</PageCard>
					</Link>
				</Grid>
				<Grid xs={12} component="span" item>
					<PageCard>
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
					</PageCard>
				</Grid>
			</Grid>
		</>
	);
}
