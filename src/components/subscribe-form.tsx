import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
	},
}));

export default function SubscribeForm() {
	const classes = useStyles();
	return (
		<>
			<Typography variant="h5" classes={{ root: classes.root }}>
				*Subscription Form In Progress*
			</Typography>
		</>
	);
}
