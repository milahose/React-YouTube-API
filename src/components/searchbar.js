import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
    this.props.onSearchTermChange(event.target.value)
  }

  render() {
    return (
      <div className='search-bar'>
        <input value={this.state.input} onChange={this.handleInputChange} />
      </div>
    );
  }
}
