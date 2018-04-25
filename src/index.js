import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserListContainer from './containers/UserListContainer.js';
import AlbumListContainer from './containers/AlbumListContainer.js'
import PictureListContainer from './containers/PictureListContainer.js'
import './index.css';

class App extends React.Component {
  render () {
    return (
      <div>
      <MuiThemeProvider>
        <div>
          <h1 className="title"> PHOTO VIEWER </h1>
        </div>
      </MuiThemeProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'
              component={() => <Redirect to="/users" />}
            />
            <Route path='/users'
              render={() => <UserListContainer/>}
            />
            <Route path="/albums"
              render={(props) => <AlbumListContainer {...props}/>}
            />
            <Route path="/pictures"
              render={(props) => <PictureListContainer {...props}/>}
            />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
