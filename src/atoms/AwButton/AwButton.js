import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import AwButtonModel from './AwButtonModel';

class AwButton extends React.Component {

  render() {
    return (
    					<Button 
    						variant={this.props.variant} 
    						onClick={() => this.props.onClick()}
    					>
    					{this.props.text}
    					</Button>
  					);
  }
}

AwButton.defaultProps = new AwButtonModel();

export default AwButton;