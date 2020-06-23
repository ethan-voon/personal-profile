import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeMainCardBackground from '../images/home-maincard-background.jpg';
import { IPageProps } from '../App';
import SubscribeForm from './subscribe-form';

const useStyles = makeStyles((theme) => ({
	homePaperRoot: {
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
	valuePropTextRoot: {
		color: 'theme.palette.text.main',
		fontSize: '4.2rem',
		fontWeight: 'bold',
		paddingTop: '1000px',
	},
	offset: {
		height: '65px',
		backgroundColor: 'transparent',
	},
}));

export default function Home(props: IPageProps) {
	const classes = useStyles();

	return (
		<>
			<Paper component="span" classes={{ root: classes.homePaperRoot }}>
				<Grid
					component="span"
					justify="center"
					alignItems="center"
					alignContent="center"
					container
				>
					<Grid component="span" xs={12} classes={{ root: classes.offset }} item />
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
			</Paper>
		</>
	);
}
