import React from 'react';

const CssDefinition = () => {
	const stylus = {
		textAlign: 'center'
	};
	return (
		<div style={stylus}>
			<h1>Le CSS</h1>
			<p>
				Le terme CSS est l'acronyme anglais de Cascading Style Sheets qui peut se traduire par "feuilles de style en
				cascade". Le CSS est un langage informatique utilisé sur l'internet pour mettre en forme les fichiers HTML ou
				XML. Ainsi, les feuilles de style, aussi appelé les fichiers CSS, comprennent du code qui permet de gérer le
				design d'une page en HTML.
			</p>
		</div>
	);
};

export default CssDefinition;
