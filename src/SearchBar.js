import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className='ui segment '>
        <form className='ui form' onSubmit={(e) => this.onSubmit(e)}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
