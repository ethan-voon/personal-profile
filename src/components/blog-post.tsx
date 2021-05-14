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
	const { id } = useParams<{ id: string }>();
	console.log(id);

	useEffect(() => {
		axios
			.get(`http://public-api.wordpress.com/rest/v1/sites/epvoon.wordpress.com/posts/${id}`)
			.then((res) => {
				setPost(res.data);
				console.log(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	if (post) {
		const date = new Date(post.date).toDateString();
		// const postText = new DOMParser().parseFromString(post.content, 'text/html').documentElement
		// 	.textContent;
		console.log(post);

		return (
			<PageCard>
				<CardContent classes={{ root: classes.cardContent }}>
					<Typography variant="h5">{post.title}</Typography>
					<Typography variant="caption">{date}</Typography>
					<Typography variant="body1">{parse(post.content)}</Typography>
					<Subscribe />
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
