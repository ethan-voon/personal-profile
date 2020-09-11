import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { IPageProps, theme } from '../App';

interface IHeaderProps extends IPageProps {}

const useStyles = makeStyles((theme) => ({
	headerCard: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		height: '10%',
		padding: '2%',
		borderRadius: '0',
	},
	headerTitle: {
		color: theme.palette.text.primary,
	},
}));

export default function Header(props: IHeaderProps) {
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
					<Tooltip title="My mission!">
						<Typography
							variant="subtitle1"
							align="center"
							classes={{ root: classes.headerTitle }}
							noWrap
						>
							On a quest to design humane systems for community, education, and data.
						</Typography>
					</Tooltip>
				</Link>
			</Card>
		</>
	);
}
