// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import PageCard from './page-card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PostProps } from './blog';
import parse from 'html-react-parser';
import Subscribe from './subscribe';

const useStyles = makeStyles((theme) => ({
	cardContent: {
		justifyContent: 'center',
		padding: '1em',
	},
}));

export default function BlogPost(props: PostProps) {
	const classes = useStyles();
	const [post, setPost] = useState(props.post);
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		axios
			.get(`https://blog.ethanvoon.com/wp-json/wp/v2/posts/${id}`)
			.then((res) => {
				setPost(res.data);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	});

	if (post) {
		// console.log(post);
		const date = new Date(post.date).toDateString();

		return (
			<PageCard>
				<CardContent classes={{ root: classes.cardContent }}>
					<Typography variant="h5">{post.title.rendered}</Typography>
					<Typography variant="caption">{date}</Typography>
					<Typography variant="body1">{parse(post.content.rendered)}</Typography>
					<Subscribe />
				</CardContent>
			</PageCard>
		);
	} else if (isLoading) {
		return (
			<PageCard>
				<CardContent>
					<Typography variant="h5">Fetching post...</Typography>
				</CardContent>
			</PageCard>
		);
	} else {
		return (
			<PageCard>
				<CardContent>
					<Typography variant="h5">Post not found.</Typography>
				</CardContent>
			</PageCard>
		);
	}
}
