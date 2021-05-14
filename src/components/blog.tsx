import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PageProps } from '../App';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import PageCard from './page-card';
import axios from 'axios';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Subscribe from './subscribe';

const useStyles = makeStyles((theme) => ({
	cardActions: {
		justifyContent: 'center',
	},
	post: {
		justifyContent: 'left',
		width: '100%',
	},
	previewCard: {
		width: '50px',
	},
}));

// https://developer.wordpress.org/rest-api/reference/posts/
export interface Post {
	ID: string;
	date: string;
	title: string;
	content: string;
	excerpt: string;
}

export interface PostProps {
	post?: Post;
}

export function PostPreview(props: PostProps) {
	const classes = useStyles();
	const { post } = props;
	if (post) {
		const date = new Date(post.date).toDateString();
		const previewText = new DOMParser().parseFromString(post.excerpt, 'text/html')
			.documentElement.textContent;

		return (
			<PageCard>
				<Link to={`/blog/${post.ID}`} style={{ textDecoration: 'none' }}>
					<CardContent classes={{ root: classes.post }}>
						<Typography variant="h5">{post.title}</Typography>
						<Typography variant="caption">{date}</Typography>
						<Typography variant="body1">{previewText}</Typography>
					</CardContent>
				</Link>
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
			.get('https://public-api.wordpress.com/rest/v1/sites/epvoon.wordpress.com/posts')
			.then((res) => {
				setPosts(res.data.posts);
			})
			.catch((error) => console.log(error));
	}, []);

	// For ConvertKit integration
	useEffect(() => {
		const script = document.createElement('script');

		script.src = 'https://astounding-innovator-3833.ck.page/6b652f3c27/index.js';
		script.async = true;

		// Less than ethical hack to get rid of ConvertKit branding...
		script.onload = () => $('div.formkit-powered-by-convertkit-container').remove();

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
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
				<CardContent>
					<Typography variant="h4">Blog</Typography>
					<Subscribe />
				</CardContent>
			</PageCard>
			{postPreviews}
		</>
	);
}
