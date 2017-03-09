import React, {Component} from 'react';
import * as CURENT  from '../common/Enum_State'
class ButtonFrame extends React.Component {
  render() {
    let  disabled,button,
    currentState = this.props.currentState;
    switch (currentState) {
      case CURENT.STATE.START:
        disabled = (this.props.isValid);
        button = (
          <button className="btn   btn-success" onClick={this.props.drawTowers}
                  disabled={!this.props.isValidInput}>
            Go
          </button>
        );
        break;
      case CURENT.STATE.BEFORE_RAIN:
        disabled = (this.props.isValid);
        button = (
          <button className="btn  btn-primary" onClick={this.props.makeItRain}
                  disabled={!this.props.isValidInput}>
            Make it Rain
          </button>
        );
        break;
      case CURENT.STATE.RAINY:
        disabled = (this.props.isValid);
        button = (
          <button className="btn  btn-warning" onClick={this.props.reset}
                  disabled={!this.props.isValidInput}>
            Re-Start
          </button>
        );
        break;

      default:
        disabled = (this.props.isValid);
        button = (
          <button className="btn btn-primary " onClick={this.props.reset}
                  disabled={this.props.isValid}>
            Render
          </button>
        );
    }

    return (
        button
    );
  }
}

export default ButtonFrame;