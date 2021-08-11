// eslint-disable-next-line
import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Icon, Tooltip } from '@material-ui/core';
import { AppProps } from '../App';

export interface ContactProps extends AppProps {
	email?: string;
	phone?: string;
	twitter?: string;
	facebook?: string;
	linkedin?: string;
	tiktok?: string;
}

export function ContactIcon({ contactType, contactValue }) {
	var toolTipTitle: string;
	var href: string;
	var icon: any;

	switch (contactType) {
		case 'email':
			toolTipTitle = 'Email me!';
			href = `mailto:${contactValue}`;
			icon = <EmailIcon />;
			break;
		case 'phone':
			toolTipTitle = 'Call me!';
			href = `tel:${contactValue}`;
			icon = <PhoneIcon />;
			break;
		case 'facebook':
			toolTipTitle = 'Friend me on Facebook!';
			href = `https://www.facebook.com/${contactValue}`;
			icon = <FacebookIcon />;
			break;
		case 'linkedin':
			toolTipTitle = 'Connect on LinkedIn!';
			href = `https://www.linkedin.com/in/${contactValue}`;
			icon = <LinkedInIcon />;
			break;
		case 'twitter':
			toolTipTitle = 'Follow me on Twitter!';
			href = `https://www.twitter.com/${contactValue}`;
			icon = <TwitterIcon />;
			break;
		case 'tiktok':
			toolTipTitle = 'Follow me on TikTok!';
			href = `https://www.tiktok.com/@${contactValue}`;
			icon = <Icon />;
			break;
		default:
			toolTipTitle = '...';
			href = 'https://example.com';
			icon = <Icon />;
			break;
	}

	return (
		<Tooltip title={toolTipTitle}>
			<IconButton href={href}>{icon}</IconButton>
		</Tooltip>
	);
}

export default function ContactMenu(props: ContactProps) {
	var { email, phone, facebook, linkedin, twitter, tiktok } = props;
	var socialLinks = { email, phone, facebook, linkedin, twitter, tiktok };

	return (
		<Grid component="span" justify="center" alignItems="center" spacing={1} container>
			{Object.entries(socialLinks).map(([key, value]) => {
				if (!value) return null;

				return (
					<Grid component="span" item>
						<ContactIcon contactType={key} contactValue={value} />
					</Grid>
				);
			})}
		</Grid>
	);
}
