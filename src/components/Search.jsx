import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'ALL',
    }

    handleKey = (event) => {
      if (event.key === "Enter") {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    }

    handleRadioChange = (event) => {
      this.setState(() => ({type: event.target.dataset.type}),
    () => {
      this.props.searchMovies(this.state.search, this.state.type);
    });
    }

    render () {
        return <div className="row">
        <div className="input-field col s12">
          <input placeholder="search" type="search" className="validate" 
            value={this.state.search} 
            onChange={(e) => this.setState({search: e.target.value})}
            onKeyDown={this.handleKey} 
           />
          <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
          <div className="select-type">
            <label>
              <input type="radio" data-type="ALL" onChange={this.handleRadioChange} checked={this.state.type==="ALL"} />
              <span>ALL</span>
            </label>
            <label>
              <input type="radio" data-type="movie" onChange={this.handleRadioChange} checked={this.state.type==="movie"} />
              <span>Movies</span>
            </label>
            <label>
              <input type="radio" data-type="series" onChange={this.handleRadioChange} checked={this.state.type==="series"} />
              <span>Series</span>
            </label>
          </div>
          </div>
      </div>
    }
}

export {Search};