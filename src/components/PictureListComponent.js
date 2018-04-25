import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

export default function PictureListContainer(props) {
    return (
      <MuiThemeProvider>
        <div className="main">
          <h3> PICTURES </h3>
          <GridList cellHeight={200} padding={1} className="gList">
            {
              props.pictures.map(picture => (
                <GridTile
                  className="tile"
                  key={picture.id}
                  title={picture.title}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 40%,rgba(0,0,0,0) 100%)"
                  >
                  <img src={picture.url} alt={picture.url} />
                </GridTile>
              ))
            }
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
