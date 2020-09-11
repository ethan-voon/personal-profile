import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ReactMarkdown from 'react-markdown';
import { IPageProps } from '../App';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	pageCard: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export default function Content(props: IPageProps) {
	const classes = useStyles();

	//	TODO see /about for markdown implementation
	//	Potential content:
	//		Writing
	//		Music
	//		Code
	return (
		<>
			<Card component={'span'} classes={{ root: classes.pageCard }}>
				<CardContent>
					<Typography variant="h5">Coming Soon!</Typography>
				</CardContent>
			</Card>
		</>
	);
}
