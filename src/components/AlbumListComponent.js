import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

export default function AlbumListComponent(props) {
    return (
      <MuiThemeProvider>
        <div>
          <h3> ALBUMS </h3>
          <ul className="albumList">
            {
              props.albums.map(album => (
                  <li key={album.id}>
                    <Link to={{pathname: "/pictures", state: {albumId: album.id}}}>
                      <RaisedButton className="rbutton"
                      fullWidth={true}
                      label={album.title}
                      backgroundColor="#5ac1bb"
                      labelColor="#ffffff"
                      labelStyle={{fontSize: '15px', fontWeight: '1000'}}
                      />
                    </Link>
                  </li>
              ))
            }
            </ul>
        </div>
      </MuiThemeProvider>
    );
  }
