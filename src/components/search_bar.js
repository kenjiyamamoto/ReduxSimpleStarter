import React, { Component } from 'react';

class SearchBar extends Component { // Class base components
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() { // Methods in a class
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

export default SearchBar;
