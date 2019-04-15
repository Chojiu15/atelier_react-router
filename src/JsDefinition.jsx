import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class JsDefinition extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          Launch JS Definition !
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>What is JavaScript ?</PopoverHeader>
          
          <PopoverBody>
                JavaScript is the Programming Language for the Web

                JavaScript can update and change both HTML and CSS

                JavaScript can calculate, manipulate and validate data
        </PopoverBody>
        </Popover>
      </div>
    );
  }
}