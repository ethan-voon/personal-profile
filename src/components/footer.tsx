import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Card } from '@material-ui/core';
import { theme } from '../App';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
		justifyContent: 'center',
		borderRadius: '0',
		width: '100vw',
		marginTop: 'auto',
	},
}));

export default function Footer() {
	const classes = useStyles(theme);

	return (
		<>
			<Card classes={{ root: classes.root }} elevation={12}>
				<Typography variant="subtitle2">
					@2021 by Ethan Voon,{' '}
					<a href="https://github.com/ethan-voon/personal-profile">Source Code</a>
				</Typography>
			</Card>
		</>
	);
}
