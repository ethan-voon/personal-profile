import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { IPageProps, theme } from '../App';

const useStyles = makeStyles((theme) => ({
	pageCard: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		textAlgin: 'center',
		height: '100%',
		width: '98%',
		margin: '20px',
		borderRadius: '0',
		backgroundColor: 'rgb(256, 256, 256, 0.6)',
	},
}));

export default function PageCard(props: IPageProps) {
	const classes = useStyles(theme);

	return (
		<Card component={'span'} classes={{ root: classes.pageCard }}>
			{props.children}
		</Card>
	);
}
