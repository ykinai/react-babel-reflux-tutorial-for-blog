'use strict';

import React from 'react';

class ShowHelloWorldCounterButtonComponent extends React.Component {

  static get propTypes() {
    return {

    };
  }

  static get defaultProps() {
    return {

    }
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.setState({});
  }

  render() {
    return (
      <div>ShowHelloWorldCounterButtonComponent</div>
    );
  }
}
export default ShowHelloWorldCounterButtonComponent;
