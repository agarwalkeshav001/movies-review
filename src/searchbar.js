import React, { Component } from 'react';
import SearchBox from 'react-responsive-searchbox/lib/SearchBox';
import 'font-awesome/css/font-awesome.min.css';

class SearchBar extends Component {

    state = { searchBoxVal: "" }

    handleSearchBoxValChange = (e) => {
        this.setState({
            searchBoxVal: e.target.value
        })
    }

    handleSearchBoxSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchBoxVal);
    }

    render() {
        return (
            <div>
                <SearchBox placeholder="Enter a movie or web series or anime " value={this.state.searchBoxVal} onchange={this.handleSearchBoxValChange}
                    searchBoxStyles={{ color: "black", height: "25%", border: "3px solid black" }}
                    searchButtonStyles={{ background: "black", border: "3px solid black" }}
                    searchIconStyles={{ color: "#fff", height: "25%", lineHeight: "25%" }}
                    OnSubmit={this.handleSearchBoxSubmit}
                />

            </div>
        );
    }
}

export default SearchBar;