import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PageProps } from '../App';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Grid, Typography } from '@material-ui/core';
import PageCard from './page-card';
import axios from 'axios';
import $ from 'jquery';
import { Link, useParams } from 'react-router-dom';
import Subscribe from './subscribe';

const useStyles = makeStyles((theme) => ({
	cardActions: {
		justifyContent: 'center',
	},
	post: {
		justifyContent: 'left',
		width: '100%',
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
	const classes = useStyles();
	const [posts, setPosts] = useState<Post[]>();
	useEffect(() => {
		axios
			.get('http://public-api.wordpress.com/rest/v1/sites/epvoon.wordpress.com/posts')
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
				<CardContent classes={{ root: classes.post }}>
					<Typography variant="h5">About the Blog</Typography>
					<Typography variant="body1">
						I constantly prevent myself from posting content online because I don't have
						a single subject I want to post about. I like to think it's because I'm an
						intensely curious generalist. I love to learn. It took awhile to break from
						the negative impacts public education had on my learning mentality, but now
						that I'm free from those shackles I have a newfound interest in everything I
						come across. The problem is I have the attention span of a dog at a squirrel
						park. I hop around knowledge domains so often that I end up not doing
						anything with all this new data in my brain. My mission is to find community
						and conversation by sharing my thoughts about what I learn. Come along if
						you want!
					</Typography>
					<Subscribe />
				</CardContent>
			</PageCard>
			<PageCard>
				<CardContent classes={{ root: classes.post }}>
					<Typography variant={'h4'}>Posts</Typography>
					{postPreviews}
				</CardContent>
			</PageCard>
		</>
	);
}
