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
import Background from './images/moon.png';
import Blog, { PostPreview } from './components/blog';
import BlogPost from './components/blog-post';

export interface AppProps {}
export interface PageProps {
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
		height: '100%',
		minheight: '1000px',
		backgroundImage: 'url(' + Background + ')',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
}));

export default function App(props: AppProps) {
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
						<Route exact path="/home" children={<Home />} />
						<Route exact path="/about" children={<About />} />
						<Route exact path="/blog/:id" children={<BlogPost />} />
						<Route exact path="/blog" children={<Blog />} />
						<Route exact path="/projects" children={<Projects />} />
						<Route exact path="/" children={<Home />} />
					</Switch>
				</span>
				<AppBar position="sticky" classes={{ root: classes.bottomAppBar }} elevation={0}>
					<Footer />
				</AppBar>
			</MuiThemeProvider>
		</>
	);
}
