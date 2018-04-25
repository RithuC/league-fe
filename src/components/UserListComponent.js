import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

export default function UserListComponent(props) {
    return (
      <MuiThemeProvider>
        <div>
          <h3> USERS </h3>
          <ul className="userList">
            {
              props.users.map(user => (
                  <li key={user.id}>
                    <Link to={{pathname: "/albums", state: {userId: user.id} }}>
                      <RaisedButton fullWidth={true}
                          backgroundColor="#5ac1bb"
                          labelColor="#ffffff"
                          labelStyle={{ fontSize: '15px', fontWeight: '1000'}}
                          label={user.name}
                          className="rbutton" />
                    </Link>
                  </li>
              ))
            }
            </ul>
        </div>
      </MuiThemeProvider>
    );
  }
