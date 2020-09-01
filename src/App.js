import React, { Component } from 'react';
import unsplash from './api/Unsplash';
import SearchBar from './components/Searchbar/SearchBar'
import ImageList from './components/Pictures/ImageList'

class App extends Component {
  state = {
    images: [],
  }

  onSearchSubmit = async (term) => {
    const res = await unsplash.get('/search/photos',{
      params: { query: term },
    });

    console.log(this)
    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
