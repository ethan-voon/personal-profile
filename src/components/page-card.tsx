import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardProps } from '@material-ui/core';
import { PageProps, theme } from '../App';

const useStyles = makeStyles((theme) => ({
	pageCard: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		textAlgin: 'center',
		width: '98%',
		height: '100%',
		minHeight: '200px',
		margin: '20px',
		borderRadius: '0',
		backgroundColor: 'rgb(256, 256, 256, 0.6)',
	},
}));

export default function PageCard(props: PageProps) {
	const classes = useStyles(theme);

	return (
		<Card component={'span'} classes={{ root: classes.pageCard }}>
			{props.children}
		</Card>
	);
}
