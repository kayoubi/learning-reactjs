import React, {Component, PropTypes} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {title: ""};
  }

  static propTypes = {
    addBook: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="Book title" value={this.state.title} onChange={this.titleChange}/>
        <button onClick={this.addBook}>Add Book</button>
      </div>
    );
  }

  addBook = (event) => {
    event.preventDefault();

    this.props.addBook(this.state.title, 22)
  };

  titleChange = (event) => {
    this.setState({title: event.target.value})
  }
}

export default Form;