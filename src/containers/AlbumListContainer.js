import React from 'react';
import AlbumListView from '../views/AlbumListView.js';

export default class AlbumListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + this.props.location.state.userId)
      .then(response => {
        return response.json();
      }).then(data => {
        const albumList = data;
        this.setState({
          albums: albumList,
        });
      });
  }

  render() {
    return (
      <div>
        <AlbumListView albums={this.state.albums}/>
      </div>
    );
  }
}
