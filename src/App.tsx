import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import PublicJournal from './components/public-journal';
import Background from './images/moon.png';
import Resume from './components/resume';
import WCC from './components/wcc';

export interface IAppProps {}
export interface IPageProps {
	children?: JSX.Element;
}

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
		display: 'flex',
		flexDirection: 'column',
		top: 'auto',
		bottom: '0',
		color: 'transparent',
		background: 'transparent',
	},
	headerTitle: {
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
		minHeight: '1000px',
		backgroundImage: 'url(' + Background + ')',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
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
							<PublicJournal />
						</Route>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/resume">
							<Resume />
						</Route>
						<Route path="/wcc">
							<WCC />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</span>
				<AppBar position="sticky" classes={{ root: classes.bottomAppBar }} elevation={0}>
					<Footer />
				</AppBar>
			</MuiThemeProvider>
		</>
	);
}
