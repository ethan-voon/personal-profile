import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PageProps } from '../App';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import PageCard from './page-card';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	postPreview: {
		justifyContent: 'left',
		width: '100%',
	},
}));

// https://developer.wordpress.org/rest-api/reference/posts/
interface Post {
	id: number;
	date?: string;
	title: string;
	content: string;
	excerpt: string;
}

interface PreviewProps {
	post: Post;
}

function PostPreview(props: PreviewProps) {
	const classes = useStyles();
	if (props.post) {
		return (
			<PageCard>
				<CardContent classes={{ root: classes.postPreview }}>
					<Typography variant="h5">{props.post.title}</Typography>
					<Typography variant="caption">{props.post.date}</Typography>
					<Typography variant="body1">
						{
							new DOMParser().parseFromString(props.post.content, 'text/html')
								.documentElement.textContent
						}
					</Typography>
				</CardContent>
			</PageCard>
		);
	} else {
		return null;
	}
}

export default function Blog(props: PageProps) {
	const [posts, setPosts] = useState<Post[]>();
	useEffect(() => {
		axios
			.get('http://public-api.wordpress.com/rest/v1/sites/epvoon.wordpress.com/posts')
			.then((res) => {
				setPosts(res.data.posts);
			})
			.catch((error) => console.log(error));
	}, []);

	const postPreviews: JSX.Element[] = [];
	if (posts) {
		for (const post of posts) {
			postPreviews.push(<PostPreview post={post} />);
		}
	}

	return (
		<>
			<PageCard>
				<CardContent>{postPreviews}</CardContent>
			</PageCard>
		</>
	);
}
