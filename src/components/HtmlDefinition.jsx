import React from 'react';

const HtmlDefinition = () => {
	const stylus = {
		textAlign: 'center',
		width: '80%',
		marginLeft: '10%'
	};
	return (
		<div style={stylus}>
			<h1>Le HTML</h1>
			<p>
				L'HTML est un langage informatique utilisé sur l'internet. Ce langage est utilisé pour créer des pages web.
				L'acronyme signifie HyperText Markup Language, ce qui signifie en français "langage de balisage d'hypertexte".
				Cette signification porte bien son nom puisqu'effectivement ce langage permet de réaliser de l'hypertexte à base
				d'une structure de balisage.
			</p>
		</div>
	);
};

export default HtmlDefinition;
