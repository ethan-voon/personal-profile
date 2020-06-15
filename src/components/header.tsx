import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import { makeStyles, Theme } from '@material-ui/core/styles';
import NavMenu from './navigation-menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

export interface IHeaderProps {
	theme: Theme;
	isDarkTheme: (theme: Theme) => boolean;
	toggleTheme: () => void;
}

const useStyles = makeStyles((theme) => ({
	appBarRoot: {
		background: theme.palette.background.default,
		flexGrow: 1,
	},
	headerTitleRoot: {
		color: theme.palette.text.primary,
	},
	dividerRoot: {
		color: theme.palette.divider,
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
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

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
			<HideOnScroll>
				<AppBar classes={{ root: classes.appBarRoot }}>
					<Toolbar>
						<Grid justify="space-between" container>
							<Grid item>
								<Tooltip title="My name...">
									<Typography
										variant="h5"
										align="left"
										classes={{ root: classes.headerTitleRoot }}
										noWrap
									>
										Ethan Voon
									</Typography>
								</Tooltip>
							</Grid>
							<Grid item>
								<Tooltip title="Toggle dark mode">
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
								</Tooltip>
							</Grid>
						</Grid>
					</Toolbar>
					<Divider variant="middle" classes={{ root: classes.dividerRoot }} />
					<Toolbar>
						<NavMenu />
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	);
}
