import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PageProps } from '../App';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Grid, Typography } from '@material-ui/core';
import PageCard from './page-card';
import axios from 'axios';
import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
	cardActions: {
		justifyContent: 'center',
	},
	postPreview: {
		justifyContent: 'left',
		width: '100%',
	},
}));

// https://developer.wordpress.org/rest-api/reference/posts/
interface Post {
	id: number;
	date: string;
	title: string;
	content: string;
	excerpt: string;
}

interface PostProps {
	post: Post;
}

function PostPreview(props: PostProps) {
	const classes = useStyles();
	const date = new Date(props.post.date).toDateString();
	// @TODO each excerpt should link to the full post, passing the post via props
	if (props.post) {
		return (
			<PageCard>
				<CardContent classes={{ root: classes.postPreview }}>
					<Typography variant="h5">{props.post.title}</Typography>
					<Typography variant="caption">{date}</Typography>
					<Typography variant="body1">
						{
							new DOMParser().parseFromString(props.post.excerpt, 'text/html')
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
				<CardContent classes={{ root: classes.postPreview }}>
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
					<Grid
						container
						alignItems="center"
						alignContent="center"
						justify="center"
						style={{ textAlign: 'center' }}
					>
						<Grid xs={12} component="span" item>
							<CardContent>
								<Typography variant={'h4'}>
									Want to know when I write stuff?
								</Typography>
							</CardContent>
						</Grid>
						<Grid xs={12} component="span" item>
							<CardActions classes={{ root: classes.cardActions }}>
								<script async data-uid="6b652f3c27" />
							</CardActions>
						</Grid>
					</Grid>
				</CardContent>
			</PageCard>
			{postPreviews}
		</>
	);
}
