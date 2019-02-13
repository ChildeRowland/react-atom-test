import React, { Component } from 'react';

import ButtonModel from './ButtonModel';
import './Button.scss';

class Button extends Component {
  render() {
    return (
        <button 
          type="button"
          className={`${this.props.className} ${this.props.type}`}
          onClick={this.props.clickAction}
          disabled={this.props.loading}
        >
        {this.props.loading ? this.props.alternateText : this.props.text}
        </button>
      );
  }
}

Button.defaultProps = new ButtonModel();

export default Button;