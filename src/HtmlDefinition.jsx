import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const HtmlDefinition = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>What is HTML ?</CardTitle>
                    <CardSubtitle>It is a nice language</CardSubtitle>
        <CardText>
                        HTML stands for Hyper Text Markup Language

                        HTML is the standard markup language for Web pages

                        HTML elements are the building blocks of HTML pages

                        HTML elements are represented by
        </CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default HtmlDefinition;