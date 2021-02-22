import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ReactMarkdown from 'react-markdown';
import { IPageProps } from '../App';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import PageCard from './page-card';

const useStyles = makeStyles((theme) => ({}));

export default function PublicJournal(props: IPageProps) {
	const classes = useStyles();

	// TODO see /about for markdown implementation
	return (
		<>
			<PageCard>
				<CardContent>
					<Typography variant="h5">Coming Soon!</Typography>
				</CardContent>
			</PageCard>
		</>
	);
}
