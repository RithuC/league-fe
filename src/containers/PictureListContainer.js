import React from 'react';
import PictureListComponent from '../components/PictureListComponent.js';

export default class PictureListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    this.getPictures();
  }

  getPictures() {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + this.props.location.state.albumId)
      .then(response => {
        return response.json();
      }).then(data => {
          const pictureList = data;
          this.setState({
            pictures: pictureList,
          });
      });
  }

  render() {
    return (
      <div>
        <PictureListComponent pictures={this.state.pictures}/>
      </div>
    );
  }
}
