import React, {Component} from 'react';
import Header from './components/Navigation'

export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }

}


