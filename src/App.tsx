import React, { useState } from 'react';
import { PaletteType } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './components/home-page';
import { PageTitles } from './pages';

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function App(props: any) {
	// Themeing
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
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
		},
	});

	// Navigation
	const [, setPage] = useState(PageTitles.Home); // TODO choose page based on url parameter

	const navigateToPage = (page: string) => {
		setPage(page);
	};

	return (
		<>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<div className={classes.root}>
					<div className={classes.offset} />
					<div className={classes.offset} />
					<Grid container alignItems="center" alignContent="center" justify="center">
						<Grid xs={11} item>
							<Header
								theme={themeState}
								isDarkTheme={isDarkTheme}
								toggleTheme={toggleTheme}
							/>
						</Grid>
						<Grid xs={11} item>
							<HomePage theme={themeState} navigateToPage={navigateToPage} />
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
