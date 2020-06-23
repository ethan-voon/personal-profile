import React, { useState } from 'react';
import { PaletteType } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Footer from './components/footer';
// import Header from './components/header';
import NavTabs from './components/tabs';

export interface IAppProps {}
export interface IPageProps {
	theme: Theme;
}

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	active: {
		backgroundColor: '#0099FF',
	},
}));

export default function App(props: IAppProps) {
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
			background: {
				default: isDarkTheme(themeState) ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
			},
			primary: {
				main: '#6c4d6f',
			},
			secondary: {
				main: '#9fb199',
			},
			text: {
				primary: isDarkTheme(themeState) ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
			},
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

	return (
		<>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<span className={classes.root}>
					<Grid
						container
						component="span"
						alignItems="center"
						alignContent="center"
						justify="center"
					>
						{/* <Grid xs={11} component="span" item>
							<Header {...props} theme={themeState} toggleTheme={toggleTheme} />
						</Grid> */}
						<Grid xs={11} component="span" item>
							<NavTabs theme={themeState} />
						</Grid>
						<Grid xs={11} component="span" item></Grid>
						<Grid component="span" item>
							<Footer />
						</Grid>
					</Grid>
				</span>
			</MuiThemeProvider>
		</>
	);
}
