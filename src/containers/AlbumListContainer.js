import React from 'react';
import AlbumListComponent from '../components/AlbumListComponent.js';

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
        <AlbumListComponent albums={this.state.albums}/>
      </div>
    );
  }
}
