import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const CssDefinition = props => {
	return (
		<div>
			<Card>
				<CardImg
					top
					width='100%'
					src='http://www.espacejavascript.com/wp-content/uploads/2018/05/CSS.jpg'
					alt='Card image cap'
				/>
				<CardBody>
					<CardTitle>CSS Définition</CardTitle>
					<CardSubtitle>CSS</CardSubtitle>
					<CardText>
						Le terme CSS est l'acronyme anglais de Cascading Style Sheets qui peut se traduire par "feuilles de style en
						cascade". Le CSS est un langage informatique utilisé sur l'internet pour mettre en forme les fichiers HTML
						ou XML. Ainsi, les feuilles de style, aussi appelé les fichiers CSS, comprennent du code qui permet de gérer
						le design d'une page en HTML.
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default CssDefinition;
