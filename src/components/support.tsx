import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { IPageProps } from '../App';
import { Card, CardContent } from '@material-ui/core';
import Background from '../images/Moon.png';

const useStyles = makeStyles((theme) => ({
	pageCard: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		width: '98%',
		margin: '20px',
		borderRadius: '0',
		backgroundColor: 'rgb(256, 256, 256, 0.6)',
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		// alignContent: 'center',
		alignSelf: 'center',
		alignText: 'center',
		justifyContent: 'center',
		width: '100%',
		minHeight: '500px',
		backgroundImage: 'url(' + Background + ')',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
}));

export default function Support(props: IPageProps) {
	const classes = useStyles();

	return (
		<>
			<span className={classes.root}>
				<Card component={'span'} classes={{ root: classes.pageCard }}>
					<CardContent>
						<Typography variant="h4" align="center">
							<a href="https://commsol.cc">Community Solutions</a>
						</Typography>
						<br />
						<Typography variant="h5" align="center">
							More Coming Soon!
						</Typography>
					</CardContent>
				</Card>
			</span>
		</>
	);
}
