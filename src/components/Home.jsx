import React from 'react';

const Home = () => {
	const stylus = {
		textAlign: 'center'
	};
	return (
		<div style={stylus}>
			<h1>Le developpement Front End</h1>
			<p>
				Le front-end c’est la partie du code qui est reçue par le client. Je rappelle que le client c’est notre
				navigateur Web. Il s’agit finalement des éléments du site web que l’on aperçoit à l’écran et avec lesquels on
				pourra interagir. Ces éléments sont composés de 3 langages: HTML, CSS et Javascript
			</p>
		</div>
	);
};

export default Home;
