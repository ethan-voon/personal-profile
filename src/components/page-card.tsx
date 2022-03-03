// eslint-disable-next-line
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { PageProps, theme } from '../App';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

interface PageCardProps extends PageProps {
	styles?: ClassNameMap<'pageCard'>;
}

const useStyles = makeStyles((theme) => ({
	pageCard: {
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		alignContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		width: '90vw',
		minHeight: '10em',
		marginTop: '1em',
		marginBottom: '1em',
		borderRadius: '2em',
		backgroundColor: 'rgb(256, 256, 256, 0.85)',
	},
}));

export default function PageCard(props: PageCardProps) {
	const classes = useStyles(theme);

	var pageCardClass = props.styles ? props.styles.pageCard : classes.pageCard;

	return (
		<Card component={'span'} classes={{ root: pageCardClass }}>
			{props.children}
		</Card>
	);
}
