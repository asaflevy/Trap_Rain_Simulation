/**
 * Board is the main component
 */

import React, {Component} from 'react';
import Towers from './Towers'
import Cloud from './CloudRain'
import Button from './Button'
import * as _ from 'lodash'
import TowDimConverting from '../common/TowDimConverting'
import * as CURENT  from '../common/Enum_State'
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '3-0-3', //default input
      oneDimTowers: [3, 0, 3],
      towDimTowers: [],
      isValid: true, //check for input is valid
      counter_result: 0,
      currentState: CURENT.STATE.START
    };

    this.handleInputChange = _.debounce(this.handleInputChange.bind(this), 300);
    this.drawTowersClickHandler = this.drawTowersClickHandler.bind(this);
    this.makeItRainHandler = this.makeItRainHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  /**
   * check if the input is follow the pattern digit-digit-digit..
   * @param value
   * @returns {boolean}
   */
  inputValidation(value) {
    let inputPattern = /^[1-9]([-]{1}\d){1,22}$/,
      isValidInput = inputPattern.test(value);
    this.setState(Object.assign({}, this.state, {isValid: isValidInput}));
    return isValidInput;
  }

  handleInputChange(event) {
    let value = this.refs.input.value,
      isValidInput = this.inputValidation(value);
    if (isValidInput) {
      this.setState(Object.assign({}, this.state, {oneDimTowers: value.split('-')}));
    }
  }

  /**
   * set the 2Dim Tower array presentation.
   */
  drawTowersClickHandler() {
    let converter = new TowDimConverting(),
      result = converter.convert(this.state.oneDimTowers);
    this.setState(Object.assign({}, this.state, {
      towDimTowers: result.tower_model,
      counter_result: result.dropSum,
      currentState: CURENT.STATE.BEFORE_RAIN
    }));
  }

  makeItRainHandler() {
    this.setState(Object.assign({}, this.state, {currentState: CURENT.STATE.RAINY}));
  }

  resetHandler() {
    this.setState(Object.assign({}, this.state, {
      towDimTowers: [],
      input: '',
      counter_result: 0,
      currentState: CURENT.STATE.START
    }));
  }

  render() {
    return (
      <div id="main_container">
        <div className="flexcontainer">
          <Cloud drops_counter={this.state.counter_result} currentState={this.state.currentState}/>
          <input disabled={this.state.currentState} defaultValue={this.state.input} ref='input'
                 className="bigitem form-control error" type="text"
                 onChange={this.handleInputChange}/>
          <Button
            isValidInput={this.state.isValid}
            currentState={this.state.currentState}
            drawTowers={this.drawTowersClickHandler}
            makeItRain={this.makeItRainHandler}
            reset={this.resetHandler}
          />
        </div>
        <div className="colored_container flexcontainer">
          <Towers currentState={this.state.currentState} towDimTowers={this.state.towDimTowers}/>
        </div>
      </div>

    );
  }
}

export default Board;