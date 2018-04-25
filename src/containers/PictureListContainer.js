import React from 'react';
import PictureListView from '../views/PictureListView.js';

export default class PictureListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    console.log("pictureList mount");
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
        <PictureListView pictures={this.state.pictures}/>
      </div>
    );
  }
}
