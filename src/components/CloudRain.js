import React, {Component} from 'react';
import * as CURENT  from '../common/Enum_State'
class Cloud extends React.Component {
  render() {
    let state = this.props.currentState,
      cloud_class= `cloud_container ${state !== CURENT.STATE.RAINY ? 'hidden' : 'rainy'}`;
    return (
      <div className={cloud_class}>
        <div className="result_count">
          {this.props.drops_counter}
        </div>
        <div className='cloud1'></div>
        <div className='cloud2'></div>
        <div className='cloud3'></div>

        <div className='rain'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div className='thunder-container'>
          <div className='thunder1'></div>
          <div className='thunder2'></div>
          <div className='thunder3'></div>
        </div>
      </div>
    );
  }
}


export default Cloud;
