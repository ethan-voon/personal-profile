import React from 'react';
import ContactMenu from './contact-menu';
import Typography from '@material-ui/core/Typography';
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
			<ContactMenu />
			<Typography variant="subtitle2" classes={{ root: classes.root }}>
				@2020 by Ethan Voon
			</Typography>
		</>
	);
}
