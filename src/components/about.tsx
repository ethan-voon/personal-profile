import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
	aboutPaperRoot: {
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

export default function About(props: IPageProps) {
	const classes = useStyles();

	return (
		<>
			<Paper classes={{ root: classes.aboutPaperRoot }}>
				<Typography
					component="span"
					variant="h3"
					classes={{ root: classes.valuePropTextRoot }}
				>
					*Some Text About Me*
				</Typography>
			</Paper>
		</>
	);
}
