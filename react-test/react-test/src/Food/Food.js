import React from 'react';

class Food extends React.Component {
  render() {
    return(
      <p>This is {this.props.name} and it costs {this.props.cost}</p>
    )
  }
}

export default Food;