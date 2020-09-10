import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Support from './components/support';
import Blog from './components/blog';

export interface IAppProps {}
export interface IPageProps {
	theme: Theme;
}

const useStyles = makeStyles((theme) => ({
	topAppBar: {
		background: 'transparent',
		color: 'transparent',
	},
	bottomAppBar: {
		top: 'auto',
		bottom: 0,
		color: 'transparent',
		background: 'transparent',
	},
	headerTitle: {
		marginLeft: '20px',
		paddingTop: '2%',
		paddingBottom: '2%',
	},
}));

export default function App(props: IAppProps) {
	const theme: Theme = createMuiTheme({
		palette: {
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
			<Router>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<AppBar position="sticky" classes={{ root: classes.topAppBar }} elevation={12}>
						<Header theme={theme} />
					</AppBar>
					<Switch>
						<Route path="/home">
							<Home theme={theme} />
						</Route>
						<Route path="/about">
							<About theme={theme} />
						</Route>
						<Route path="/blog">
							<Blog theme={theme} />
						</Route>
						<Route path="/support">
							<Support theme={theme} />
						</Route>
						<Route exact path="/">
							<Home theme={theme} />
						</Route>
					</Switch>
					<AppBar
						position="sticky"
						classes={{ root: classes.bottomAppBar }}
						elevation={12}
					>
						<Footer />
					</AppBar>
				</MuiThemeProvider>
			</Router>
		</>
	);
}
