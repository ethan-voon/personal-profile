import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function NavMenu(props: any) {
	return (
		<Grid justify="space-between" container>
			<Grid item>
				<Button>Home</Button>
			</Grid>
		</Grid>
	);
}
