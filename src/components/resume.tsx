import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { IPageProps, theme } from '../App';

const useStyles = makeStyles((theme) => ({
	pageCard: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		width: '98%',
		margin: '20px',
		borderRadius: '0',
		backgroundColor: 'rgb(256, 256, 256, 0.6)',
	},
}));

export default function Resume(props: IPageProps) {
	const classes = useStyles(theme);

	return (
		<>
			<Card component={'span'} classes={{ root: classes.pageCard }}>
				<CardContent>
					<Grid
						container
						component="span"
						alignContent="center"
						alignItems="center"
						justify="center"
					>
						<Grid xs={12} component="span" item>
							<iframe
								src="https://docs.google.com/document/d/e/2PACX-1vSzaOht9O_9RLUkgp3d35QaaX9m2p-OZ6U-OE-i4aX985CU4Lx3bM5uIP4dYWlfYWgxkOj47bKiuCb8/pub?embedded=true"
								height="1144"
								width="835px"
							></iframe>
						</Grid>
						<Grid xs={12} component="span" item>
							<Button
								href="https://docs.google.com/document/d/1rTIz207R4icCkBqT6ZQgO6p0nh69-wFNOFnTqMQEQ_0/edit?usp=sharing"
								style={{ textDecoration: 'none' }}
								variant="contained"
								color="primary"
							>
								Download
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</>
	);
}
