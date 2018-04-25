import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

export default class UserListContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h3> ALBUMS </h3>
          <ul className="albumList">
            {
              this.props.albums.map((album) => {
                return (
                  <li key={album.id}>
                    <Link to={{pathname: "/pictures", state: {albumId: album.id} }}>
                      <RaisedButton className="rbutton" label={album.title} backgroundColor="#5ac1bb" labelColor="#ffffff" labelStyle={{ fontSize: '15px', fontWeight: '1000'}}
                      />
                    </Link>
                  </li>
                );
              })
            }
            </ul>
        </div>
      </MuiThemeProvider>
    );
  }
}
