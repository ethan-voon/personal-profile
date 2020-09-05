import React, { useState } from 'react';
import { AppBar } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';

export interface IAppProps {}
export interface IPageProps {
	theme: Theme;
	toggleTheme?: () => void;
}

const useStyles = makeStyles((theme) => ({
	appBar: {
		background: 'transparent',
		boxShadow: 'none',
		width: '100%',
	},
	headerTitle: {
		marginLeft: '20px',
		paddingTop: '2%',
		paddingBottom: '2%',
	},
}));

export default function App(props: IAppProps) {
	const [prefersDarkTheme, setPreferredTheme] = useState(false);

	const toggleTheme = () => {
		setPreferredTheme(!prefersDarkTheme);
	};

	const theme: Theme = createMuiTheme({
		palette: {
			type: prefersDarkTheme ? 'dark' : 'light',
			primary: {
				main: '#75b79e',
			},
			secondary: {
				main: '#6a8caf',
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

	const classes = useStyles(theme);

	return (
		<>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar position="sticky" classes={{ root: classes.appBar }} elevation={12}>
					<Header theme={theme} toggleTheme={toggleTheme} />
				</AppBar>
				{
					// TODO add routing
				}
				<Home theme={theme} toggleTheme={toggleTheme} />
				<Footer />
			</MuiThemeProvider>
		</>
	);
}
