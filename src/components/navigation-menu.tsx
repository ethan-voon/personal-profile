import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	button: {
		color: 'primary',
	},
});

export default function NavMenu(props: any) {
	const classes = useStyles(props);
	return (
		<Grid justify="space-between" container>
			<Grid item>
				<Button className={classes.button}>Home</Button>
				<Button>About</Button>
				<Button>Blog</Button>
				<Button>Music</Button>
				<Button>Schedule</Button>
				<Button>Support</Button>
			</Grid>
		</Grid>
	);
}
