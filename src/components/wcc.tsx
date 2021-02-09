import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import { IPageProps, theme } from '../App';
import userData from '../content/wcc-users.json';

interface User {
	username: string;
	sequence: string;
	length: number;
}

const useStyles = makeStyles((theme) => ({
	pageCard: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '98%',
		margin: '20px',
		borderRadius: '0',
		backgroundColor: 'rgb(256, 256, 256, 0.6)',
	},
}));

export default function WCC(props: IPageProps) {
	const classes = useStyles(theme);
	var userCards: JSX.Element[] = [];
	var userDataT: User[] = userData;
	for (let user of userData) {
		userCards.push(
			<Card component={'span'} classes={{ root: classes.pageCard }}>
				<CardContent>
					<Typography variant="body1" align="center">
						User Name: {user.username}
						<br />
						Longest Alphabetical Password Sequence: {user.sequence}
						<br />
						Length: {user.length}
					</Typography>
				</CardContent>
			</Card>,
		);
	}
	return (
		<>
			<Card component={'span'} classes={{ root: classes.pageCard }}>
				<CardContent>
					<Typography variant="h4" align="center">
						Results for WCC SE Assessment Query
					</Typography>
				</CardContent>
			</Card>
			<div>{userCards}</div>
		</>
	);
}
