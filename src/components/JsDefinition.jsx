import React from 'react';

const JsDefinition = () => {
	const stylus = {
		textAlign: 'center',
		width: '80%',
		marginLeft: '10%'
	};
	return (
		<div style={stylus}>
			<h1>Le Javascript</h1>
			<p>
				Le JavaScript est un langage informatique utilisé sur les pages web. Ce langage à la particularité de s'activer
				sur le poste client, en d'autres mots c'est votre ordinateur qui va recevoir le code et qui devra l'exécuter.
				C'est en opposition à d'autres langages qui sont activé côté serveur. L'exécution du code est effectué par votre
				navigateur internet tel que Firefox ou Internet Explorer.
			</p>
		</div>
	);
};

export default JsDefinition;
