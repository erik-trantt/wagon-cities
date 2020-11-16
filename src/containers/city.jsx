import React from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (ev) => {
    ev.preventDefault();
    this.props.selectCity(this.props.index);
  }

  render() {
    return <li><a href={`#`} onClick={this.handleClick}>{this.props.name}</a></li>;
  }
}

export default City;
