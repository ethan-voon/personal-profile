import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeMainCardBackground from '../images/home-maincard-background.jpg';

export interface IPageProps {
	theme: Theme;
	navigateToPage: (page: string) => void;
}

const useStyles = makeStyles((theme) => ({
	valuePropTextRoot: {
		color: theme.palette.text.primary,
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

export default function HomePage(props: IPageProps) {
	const classes = useStyles();

	return (
		<>
			<Paper classes={{ root: classes.homePaperRoot }}>
				<Typography variant="h3" classes={{ root: classes.valuePropTextRoot }}>
					Let's be human together
				</Typography>
			</Paper>
		</>
	);
}
