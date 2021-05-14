import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PageProps } from '../App';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Grid, Typography } from '@material-ui/core';
import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
	cardActions: {
		justifyContent: 'center',
	},
}));

export default function Subscribe(props: PageProps) {
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
			<Grid
				container
				alignItems="center"
				alignContent="center"
				justify="center"
				style={{ textAlign: 'center' }}
			>
				<Grid xs={12} component="span" item>
					<CardContent>
						<Typography variant={'h5'}>Want to know when I write stuff?</Typography>
					</CardContent>
				</Grid>
				<Grid xs={12} component="span" item>
					<CardActions classes={{ root: classes.cardActions }}>
						<script async data-uid="6b652f3c27" />
					</CardActions>
				</Grid>
			</Grid>
		</>
	);
}
