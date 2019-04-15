import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const JsDefinition = props => {
	return (
		<div>
			<Card>
				<CardImg
					top
					width='100%'
					src='http://icn.lycee-valin.fr/projets2018/seconde14/eleve14/javascript.png'
					alt='Card image cap'
				/>
				<CardBody>
					<CardTitle>JS Définition</CardTitle>
					<CardSubtitle>JavaScript</CardSubtitle>
					<CardText>
						Le JavaScript est un langage informatique utilisé sur les pages web. Ce langage à la particularité de
						s'activer sur le poste client, en d'autres mots c'est votre ordinateur qui va recevoir le code et qui devra
						l'exécuter. C'est en opposition à d'autres langages qui sont activé côté serveur. L'exécution du code est
						effectué par votre navigateur internet tel que Firefox ou Internet Explorer.
					</CardText>
					>
				</CardBody>
			</Card>
		</div>
	);
};

export default JsDefinition;
