import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import { IPageProps, theme } from '../App';

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
}));

export default function Support(props: IPageProps) {
	const classes = useStyles(theme);

	return (
		<>
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
		</>
	);
}
