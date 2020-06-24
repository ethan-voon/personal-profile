import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography';
import { IPageProps } from '../App';
import SubscribeForm from './subscribe-form';

const useStyles = makeStyles((theme) => ({
	valuePropTextRoot: {
		color: 'theme.palette.text.main',
		fontSize: '4.2rem',
		fontWeight: 'bold',
	},
}));

export default function Home(props: IPageProps) {
	const classes = useStyles();

	return (
		<>
			<Grid
				component="span"
				justify="center"
				alignItems="center"
				alignContent="center"
				container
			>
				<Grid component="span" xs={12} item>
					<Typography
						component="span"
						variant="h3"
						classes={{ root: classes.valuePropTextRoot }}
					>
						Let's be human together
					</Typography>
				</Grid>
				<Grid component="span" item>
					<Button>BUTTON A</Button>
				</Grid>
				<Grid component="span" item>
					<Button>BUTTON B</Button>
				</Grid>
				<Grid component="span" xs={12} item>
					<SubscribeForm />
				</Grid>
			</Grid>
		</>
	);
}
