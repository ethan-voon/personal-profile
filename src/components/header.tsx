import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import NavMenu from './navigation-menu';

export default function Header(props: any) {
	const handleChange = (event: { target: { name: any; checked: any } }) => {
		props.toggleTheme();
	};

	return (
		<>
			<Toolbar>
				<Grid justify="space-between" container>
					<Grid item>
						<Tooltip title="My name...">
							<Typography variant="h4" align="left" noWrap>
								Ethan Voon
							</Typography>
						</Tooltip>
					</Grid>
					<Grid item>
						<Tooltip title="Toggle dark mode">
							<Switch
								checked={props.isDarkTheme}
								onChange={handleChange}
								icon={<Brightness5OutlinedIcon color="action" />}
								checkedIcon={<Brightness2Icon color="action" />}
								color="default"
							/>
						</Tooltip>
					</Grid>
				</Grid>
			</Toolbar>
			<Divider />
			<NavMenu />
		</>
	);
}

Header.propTypes = {
	isDarkTheme: PropTypes.bool,
	toggleTheme: PropTypes.func,
};
