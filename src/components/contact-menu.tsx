import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

export function MyEmail() {
	return (
		<IconButton href="mailto:epvoon@gmail.com">
			<EmailIcon />
		</IconButton>
	);
}

export function MyPhone() {
	return (
		<IconButton href="tel:3604815632">
			<PhoneIcon />
		</IconButton>
	);
}

export function MyFacebook() {
	return (
		<IconButton href="https://facebook.com/ethan.voon">
			<FacebookIcon />
		</IconButton>
	);
}
export function MyTwitter() {
	return (
		<IconButton href="https://twitter.com/EthanVoon">
			<TwitterIcon />
		</IconButton>
	);
}
export function MyLinkedIn() {
	return (
		<IconButton href="https://www.linkedin.com/in/ethanvoon/">
			<LinkedInIcon />
		</IconButton>
	);
}

export default function ContactMenu(props: any) {
	const classes = useStyles();

	return (
		<Grid component="span" justify="center" alignItems="center" spacing={1} container>
			<Grid component="span" item>
				<Tooltip title="Email Me!">
					<MyEmail />
				</Tooltip>
			</Grid>
			<Grid component="span" item>
				<Tooltip title="Call Me!">
					<MyPhone />
				</Tooltip>
			</Grid>
			<Grid component="span" item>
				<Tooltip title="Find me on Facebook!">
					<MyFacebook />
				</Tooltip>
			</Grid>
			<Grid component="span" item>
				<Tooltip title="Find me on Twitter!">
					<MyTwitter />
				</Tooltip>
			</Grid>
			<Grid component="span" item>
				<Tooltip title="Find me on LinkedIn!">
					<MyLinkedIn />
				</Tooltip>
			</Grid>
		</Grid>
	);
}
