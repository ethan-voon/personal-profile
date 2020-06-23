import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeMainCardBackground from '../images/home-maincard-background.jpg';
import { IPageProps } from '../App';
import Grid from '@material-ui/core/Grid/Grid';

const useStyles = makeStyles((theme) => ({
	valuePropTextRoot: {
		color: 'theme.palette.text.main',
		fontSize: '4.2rem',
		fontWeight: 'bold',
	},
	aboutPaperRoot: {
		display: 'flex',
		flexDirection: 'column',
		backgroundImage: `url(${HomeMainCardBackground})`,
		backgroundColor: theme.palette.background.default,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		flexGrow: 1,
		flexWrap: 'wrap',
		overflow: 'hidden',
		textAlign: 'center',
		padding: '10%',
		minHeight: 800,
		width: '100%',
	},
}));

export default function About(props: IPageProps) {
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
						*Some Text About Me*
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}
