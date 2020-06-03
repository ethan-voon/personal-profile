import React, { useState } from 'react';
import Header from './components/header';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default function App(props: any) {
	const [darkThemeState, setDarkTheme] = useState(false);

	const toggleTheme = () => {
		setDarkTheme(!darkThemeState);
	};

	const theme = createMuiTheme({
		palette: {
			type: darkThemeState ? 'dark' : 'light',
			primary: {
				light: '#beffba',
				main: '#8ccc8a',
				dark: '#5c9b5c',
				contrastText: '#000000',
			},
			secondary: {
				light: '#febbff',
				main: '#ca8acc',
				dark: '#985c9b',
				contrastText: '#000000',
			},
		},
	});

	return (
		<>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Card>
					<Header isDarkTheme={darkThemeState} toggleTheme={toggleTheme} />
					<Card>
						<Typography>This is the website body!</Typography>
					</Card>
				</Card>
			</MuiThemeProvider>
		</>
	);
}
