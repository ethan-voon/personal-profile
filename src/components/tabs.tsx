import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card/Card';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Home from './home';
import About from './about';
import { IPageProps } from '../App';

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	};
}

interface LinkTabProps {
	label?: string;
	href?: string;
	theme: Theme;
}

function LinkTab(props: LinkTabProps) {
	const classes = useStyles();
	return (
		<Tab
			classes={{ root: classes.root }}
			component="a"
			onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
	},
}));

export default function NavTabs(props: IPageProps) {
	const { theme } = props;
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Card classes={{ root: classes.root }}>
				<Tabs
					variant="fullWidth"
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					aria-label="nav tabs example"
				>
					<LinkTab theme={theme} label="Home" href="/" {...a11yProps(0)} />
					<LinkTab theme={theme} label="About" href="/about" {...a11yProps(1)} />
					<LinkTab theme={theme} label="Support" href="/support" {...a11yProps(2)} />
				</Tabs>
			</Card>
			<TabPanel value={value} index={0}>
				<Home theme={theme} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<About theme={theme} />
			</TabPanel>
			<TabPanel value={value} index={2}>
				Page Three
			</TabPanel>
		</>
	);
}
