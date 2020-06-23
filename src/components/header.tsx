import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { IPageProps } from '../App';
import { Card } from '@material-ui/core';

interface IHeaderProps extends IPageProps {
	toggleTheme: () => void;
}

const useStyles = makeStyles((theme) => ({
	cardRoot: {
		background: theme.palette.background.default,
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		height: '10%',
		padding: '2%',
	},
	headerTitleRoot: {
		color: theme.palette.text.primary,
	},
	switchRoot: {
		width: 62,
		height: 42,
		padding: 0,
	},
	switchTrack: {
		borderRadius: 20,
	},
}));

function HideOnScroll(props: any) {
	const { children } = props;
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function Header(props: IHeaderProps) {
	const { theme, toggleTheme } = props;
	const classes = useStyles();
	return (
		<>
			<HideOnScroll {...props}>
				<Card classes={{ root: classes.cardRoot }}>
					<Grid justify="space-between" alignItems="center" container>
						<Grid item>
							<Tooltip title="My name...">
								<Typography
									variant="h3"
									align="left"
									classes={{ root: classes.headerTitleRoot }}
									noWrap
								>
									Ethan Voon
								</Typography>
							</Tooltip>
						</Grid>
						<Grid item>
							<Switch
								checked={theme.palette.type === 'dark'}
								onChange={toggleTheme}
								icon={<Brightness5OutlinedIcon color="action" />}
								checkedIcon={<Brightness2Icon color="action" />}
								color="default"
								classes={{
									root: classes.switchRoot,
									track: classes.switchTrack,
								}}
								{...props}
							/>
						</Grid>
					</Grid>
				</Card>
			</HideOnScroll>
		</>
	);
}