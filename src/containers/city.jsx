import React from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (ev) => {
    ev.preventDefault();
    this.props.selectCity(this.props.index);
  }

  render() {
    return <li><a className={this.props.selected ? 'active' : ''} href={`#`} onClick={this.handleClick}>{this.props.name}</a></li>;
  }
}

export default City;
