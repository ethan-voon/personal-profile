import React, { useState } from 'react';
import 'fontsource-roboto';
import { PaletteType, Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Footer from './components/footer';
import Header from './components/header';
import HomeMainCardBackground from './images/home-maincard-background.jpg';

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	mainCardItemsRoot: {
		color: theme.palette.text.primary,
		elevation: 2,
		fontSize: '4.2rem',
		fontWeight: 'bold',
	},
	homePaperRoot: {
		backgroundImage: `url(${HomeMainCardBackground})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		flexGrow: 1,
		flexWrap: 'wrap',
		overflow: 'hidden',
		textAlign: 'center',
		padding: '10%',
		height: 740,
		width: '100%',
	},
}));

export default function App(props: any) {
	const [themeState, setTheme] = useState(createMuiTheme({ palette: { type: 'dark' } }));
	const classes = useStyles();

	const toggleTheme = () => {
		setTheme({
			...themeState,
			palette: {
				...themeState.palette,
				type: (isDarkTheme(themeState) ? 'light' : 'dark') as PaletteType,
			},
		});
	};

	const isDarkTheme = (theme: Theme) => {
		return theme.palette.type === ('dark' as PaletteType);
	};

	const theme: Theme = createMuiTheme({
		palette: {
			type: isDarkTheme(themeState) ? 'dark' : 'light',
			divider: isDarkTheme(themeState) ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
		},
		typography: {
			fontFamily: 'fontsource-roboto',
		},
	});

	return (
		<>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<div className={classes.root}>
					<div className={classes.offset} />
					<div className={classes.offset} />
					<Grid alignItems="center" alignContent="center" justify="center" container>
						<Grid xs={12} item>
							<Header
								theme={themeState}
								isDarkTheme={isDarkTheme}
								toggleTheme={toggleTheme}
							/>
						</Grid>
						<Grid xs={12} item>
							<Paper classes={{ root: classes.homePaperRoot }}>
								<Typography
									variant="h3"
									classes={{ root: classes.mainCardItemsRoot }}
								>
									Let's be human together
								</Typography>
							</Paper>
						</Grid>
						<Grid item>
							<Footer />
						</Grid>
					</Grid>
				</div>
			</MuiThemeProvider>
		</>
	);
}
