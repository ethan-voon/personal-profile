import React from 'react';
// import makeStyles from '@material-ui/core/styles/makeStyles';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		textAlign: 'center',
// 	},
// }));

export default function SubscribeForm() {
	// const classes = useStyles();
	return (
		<>
			<div id="iframe-wrapper">
				<iframe
					title="ContactForm"
					src="https://docs.google.com/forms/d/e/1FAIpQLScJtfp6sWQNUX-7rirKbH4nQ0nQQubRkjEKFjSz04334UPkmQ/viewform?embedded=true"
					height="800px"
					width="380px"
					scrolling="no"
					frameBorder="0"
				>
					Loading…
				</iframe>
			</div>
		</>
	);
}
