import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

export default class UserListContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h3> USERS </h3>
          <ul className="userList">
            {
              this.props.users.map((user) => {
                return (
                  <li key={user.id}>
                    <Link to={{pathname: "/albums", state: {userId: user.id} }}>
                      <RaisedButton backgroundColor="#5ac1bb" labelColor="#ffffff" labelStyle={{ fontSize: '15px', fontWeight: '1000'}}/*"#ee8082"*/ label={user.name} className="rbutton" />
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
