import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeMainCardBackground from '../images/home-maincard-background.jpg';
import { IPageProps } from '../App';

const useStyles = makeStyles((theme) => ({
	valuePropTextRoot: {
		color: 'theme.palette.text.main',
		fontSize: '4.2rem',
		fontWeight: 'bold',
	},
	homePaperRoot: {
		display: 'flex',
		flexDirection: 'column',
		backgroundImage: `url(${HomeMainCardBackground})`,
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		flexGrow: 1,
		flexWrap: 'wrap',
		overflow: 'hidden',
		textAlign: 'center',
		padding: '15%',
		height: 1000,
		width: '100%',
	},
}));

export default function Home(props: IPageProps) {
	const classes = useStyles();

	return (
		<>
			<Paper classes={{ root: classes.homePaperRoot }}>
				<Grid justify="center" container>
					<Grid item>
						<Typography
							component="span"
							variant="h3"
							classes={{ root: classes.valuePropTextRoot }}
						>
							Let's be human together
						</Typography>
					</Grid>
					<Grid item>
						<Button>BUTTON A</Button>
					</Grid>
					<Grid item>
						<Button>BUTTON B</Button>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
}
