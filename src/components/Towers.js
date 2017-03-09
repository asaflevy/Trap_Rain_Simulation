import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as CURENT  from '../common/Enum_State'

/**
 * this class should handle with the towers/block presentation
 */
class Towers extends React.Component {

  drawTowers() {
    let currentState = this.props.currentState,
      towDimTowers = this.props.towDimTowers,
      towersResult = [],
      towersRow = [];

    /**
     *break in case the in no valid 2dim array to wotk with
     */
    if (!towDimTowers && !towDimTowers.length)
      return;

    for (let i = 0; i < towDimTowers.length; i++) {
      towersRow = [];
      for (let j = 0; j < towDimTowers[i].length; j++) {
        let value = towDimTowers[i][j],
          blockClass;
        value ?
            blockClass = `block ${currentState === CURENT.STATE.RAINY && value === 'x' ? 'water_block' : (value === 'x' ? 'hidden' : '') }` :
          blockClass = `block non_visible` ;

          towersRow.push(<div className={blockClass}></div>)

      }
      towersResult.push(<div className="blocks_row">{towersRow}</div>)
    }
    return towersResult;
  }

  render() {
    let towersResult = this.drawTowers()
    return (
      <div className="towers_container">
        {towersResult}
      </div>
    );
  }

}
export default Towers;

