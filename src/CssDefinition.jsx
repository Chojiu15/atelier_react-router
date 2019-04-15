import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const CssDefinition = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>What is CSS ?</CardTitle>
          <CardSubtitle>This is a really nice language</CardSubtitle>
          <CardText>
              CSS stands for Cascading Style Sheets

              CSS describes how HTML elements are to be displayed
           </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CssDefinition;