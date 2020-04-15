import React from "react";
import Results from "./Results";
import SearchForm from "./SearchForm";
function SearchPage(props) {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          id="navigation"
        >
          <a className="navbar-brand" href="#">
            Imdb - Database
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <form
              className="form-inline my-2 my-lg-0"
              id="search-form"
              method="POST"
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick="search('{props.searchMovie}')"
              >
                Search
              </button>
            </form> */}

            <SearchForm />
          </div>
        </nav>
      </header>
      <div className="row">
        <div className="col-lg-2">
          <aside>Styling is remaining to be done </aside>
        </div>
        <div className="col-lg-8">
          <div className="App-body">
            <div>
              <p>Movie Title : {props.title}</p>
              <p>Movie rating : {props.rating}</p>
              <p>Movie release : {props.release_year}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <aside>Styling is remaining to be done </aside>
        </div>
      </div>
    </div>
  );
}
export default SearchPage;
