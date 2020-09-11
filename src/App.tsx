import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Support from './components/support';
import Blog from './components/blog';
import Background from './images/Moon.png';

export interface IAppProps {}
export interface IPageProps {}

export const theme = createMuiTheme({
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
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		width: '100%',
		minHeight: '650px',
		backgroundImage: 'url(' + Background + ')',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center top',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
}));

export default function App(props: IAppProps) {
	const classes = useStyles(theme);

	return (
		<>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar position="sticky" classes={{ root: classes.topAppBar }} elevation={12}>
					<Header />
				</AppBar>
				<span className={classes.pageWrapper}>
					<Switch>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/blog">
							<Blog />
						</Route>
						<Route path="/support">
							<Support />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</span>
				<AppBar position="sticky" classes={{ root: classes.bottomAppBar }} elevation={12}>
					<Footer />
				</AppBar>
			</MuiThemeProvider>
		</>
	);
}
