import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { PageProps, theme } from '../App';
import ContactMenu from './contact-menu';

interface HeaderProps extends PageProps {}

const useStyles = makeStyles((theme) => ({
	headerCard: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		justifyContent: 'center',
		width: '100vw',
		height: '12em',
		padding: '2%',
		borderRadius: '0',
	},
	headerTitle: {
		color: theme.palette.text.primary,
	},
}));

export default function Header(props: HeaderProps) {
	const classes = useStyles(theme);

	return (
		<>
			<Card classes={{ root: classes.headerCard }} elevation={12}>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<Tooltip title="My name!">
						<Typography
							variant="h2"
							align="center"
							classes={{ root: classes.headerTitle }}
							noWrap
						>
							Ethan Voon
						</Typography>
					</Tooltip>
				</Link>
				<Tooltip title="My mission!">
					<Typography
						variant="subtitle1"
						align="center"
						classes={{ root: classes.headerTitle }}
					>
						On a quest to build modern systems for community, education, and data.
					</Typography>
				</Tooltip>
				<Tooltip title="Contact me!">
					<ContactMenu />
				</Tooltip>
			</Card>
		</>
	);
}
