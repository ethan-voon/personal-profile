import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { IPageProps } from '../App';
import Home from './home';
import About from './about';
import Support from './support';
import Background from '../images/background-moon-mountain-forest.jpg';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
	classes: any;
}

interface LinkTabProps {
	label?: string;
	href?: string;
	theme: Theme;
}

function a11yProps(index: any) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme: Theme) => ({
	appBarRoot: {
		backgroundColor: theme.palette.background.default,
		width: '100%',
	},
	dividerRoot: {},
	headerTitleRoot: {
		color: theme.palette.text.primary,
		paddingTop: '2%',
		paddingBottom: '2%',
	},
	linkTabRoot: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
	},
	tabPanelRoot: {
		display: 'flex',
		backgroundImage: `url(${Background})`,
		backgroundColor: theme.palette.background.default,
		backgroundAttachment: 'fixed',
		backgroundOrigin: 'border-box',
		backgroundPosition: '50% 15vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		minHeight: '800px',
		minWidth: '100%',
		padding: '10%',
		textAlign: 'center',
	},
}));

function TabPanel(props: TabPanelProps) {
	const { children, value, index, classes, ...other } = props;

	return (
		<span
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Container classes={{ root: classes.tabPanelRoot }}>{children}</Container>
			)}
		</span>
	);
}

function LinkTab(props: LinkTabProps) {
	const classes = useStyles();
	return (
		<Tab
			classes={{ root: classes.linkTabRoot }}
			component="a"
			onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

export default function NavTabs(props: IPageProps) {
	const { theme } = props;
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<AppBar position="sticky" classes={{ root: classes.appBarRoot }}>
				<Toolbar color="transparent" disableGutters>
					<Grid container>
						<Grid item xs={12}>
							<Typography
								variant="h3"
								align="center"
								classes={{ root: classes.headerTitleRoot }}
								noWrap
							>
								Ethan Voon
							</Typography>
							<Divider variant="middle" classes={{ root: classes.dividerRoot }} />
						</Grid>
						<Grid component="span" xs={12} item>
							<Tabs
								variant="fullWidth"
								value={value}
								onChange={handleChange}
								indicatorColor="primary"
								aria-label="Navigation Tabs"
								centered={true}
							>
								<LinkTab theme={theme} label="Home" href="/" {...a11yProps(0)} />
								<LinkTab
									theme={theme}
									label="About"
									href="/about"
									{...a11yProps(1)}
								/>
								<LinkTab
									theme={theme}
									label="Support"
									href="/support"
									{...a11yProps(2)}
								/>
							</Tabs>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Grid container>
				<Grid xs={12} item>
					<TabPanel value={value} index={0} classes={classes}>
						<Home theme={theme} />
					</TabPanel>
					<TabPanel value={value} index={1} classes={classes}>
						<About theme={theme} />
					</TabPanel>
					<TabPanel value={value} index={2} classes={classes}>
						<Support theme={theme} />
					</TabPanel>
				</Grid>
			</Grid>
		</>
	);
}
