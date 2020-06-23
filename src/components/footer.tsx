import React from 'react';
import ContactMenu from './contact-menu';
import Typography from '@material-ui/core/Typography';
import SubscribeForm from './subscribe-form';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<>
			<SubscribeForm />
			<ContactMenu />
			<Typography variant="subtitle2" classes={{ root: classes.root }}>
				@2020 by Ethan Voon
			</Typography>
		</>
	);
}