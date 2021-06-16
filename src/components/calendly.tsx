import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PageProps, theme } from '../App';
import { Card, CardContent, Tooltip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PageCard from './page-card';
import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
	cardText: {
		position: 'relative',
		textAlign: 'center',
		top: '1em',
		right: '0',
		left: '0',
		bottom: '0',
	},
}));

export default function Calendly(props: PageProps) {
	const classes = useStyles(theme);

	useEffect(() => {
		const script = document.createElement('script');

		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;

		script.onload = () => $('iframe').css('overflow', 'hidden');

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	var comp: JSX.Element = (
		<div
			className="calendly-inline-widget"
			data-url="https://calendly.com/ethanvoon/meeting"
			style={{
				borderRadius: '2em',
				width: '80vw',
				minWidth: '320px',
				height: '78vh',
				minHeight: '620px',
				overflow: 'hidden',
			}}
		/>
	);
	return comp;
}
