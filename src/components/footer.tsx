import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ContactMenu from './contact-menu';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
		justifyContent: 'center',
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<>
			<Container classes={{ root: classes.root }}>
				<ContactMenu />
				<Typography variant="subtitle2">
					@2020 by Ethan Voon,{' '}
					<a href="https://github.com/ethan-voon/personal-profile">Source Code</a>
				</Typography>
			</Container>
		</>
	);
}
