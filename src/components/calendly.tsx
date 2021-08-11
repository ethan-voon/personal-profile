// eslint-disable-next-line
import React, { useEffect } from 'react';
import { PageProps } from '../App';
import $ from 'jquery';

export default function Calendly(props: PageProps) {
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
