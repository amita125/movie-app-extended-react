import React from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import Results from "./components/Results";
import SearchForm from "./components/SearchForm";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      linkMovie: "http://www.omdbapi.com/?apikey=f7ea12fa&t=",
    };
  }

  componentDidMount() {
    this.getMovieData();
  }
  getMovieData = () => {
    fetch(this.state.linkMovie + "The+notebook")
      .then((response) => response.json())
      .then((result) =>
        this.setState(
          {
            selectedMovie: result,
          },
          () => console.log("setState Completed", this.state.selectedMovie)
        )
      );
  };
  render() {
    const { selectedMovie } = this.state;
    if (!selectedMovie) {
      return <div>Hold tight while movie are being fetched...</div>;
    } else {
      return (
        <div className="App">
          <div className="container-fluid">
            <SearchPage
              title={this.state.selectedMovie.Title}
              rating={this.state.selectedMovie.imdbRating}
              release_year={this.state.selectedMovie.Year}
            />
          </div>
        </div>
      );
    }
  }
}
export default App;
