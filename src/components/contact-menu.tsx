import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	contactLinkRoot: {
		color: theme.palette.text.primary,
		underline: 'hover',
	},
}));

export function MyFacebook() {
	return (
		<IconButton href="https://facebook.com/ethan.voon">
			<FacebookIcon />
		</IconButton>
	);
}

export default function ContactMenu(props: any) {
	const classes = useStyles();

	return (
		<Grid component="span" justify="center" alignItems="center" spacing={3} container>
			<Grid component="span" item>
				<Typography>
					<Link
						href="mailto:epvoon@gmail.com"
						classes={{ root: classes.contactLinkRoot }}
					>
						epvoon@gmail.com
					</Link>
				</Typography>
			</Grid>
			<Grid component="span" item>
				<Typography>
					<Link href="tel:3604815632" classes={{ root: classes.contactLinkRoot }}>
						360-481-5632
					</Link>
				</Typography>
			</Grid>
			<Grid component="span" item>
				<MyFacebook />
				<IconButton href="https://twitter.com/EthanVoon">
					<TwitterIcon />
				</IconButton>
				<IconButton href="https://www.linkedin.com/in/ethanvoon/">
					<LinkedInIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
}
