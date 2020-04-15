import React from "react";

class SearchForm extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { value: "" };

  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  //   handleSubmit(event) {
  //     alert("A name was submitted: " + this.state.value);
  //     event.preventDefault();
  //   }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" id="search-form">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={this.props.handleSubmit}
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
