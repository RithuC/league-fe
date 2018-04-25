import React from 'react';
import UserListView from '../views/UserListView.js';

export default class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    console.log("userlist mount");
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      }).then(data => {
        const userList = data;
        this.setState({
          users: userList,
        });
      });
  }

  render() {
    return (
      <div>
        <UserListView users={this.state.users}/>
      </div>
    );
  }
}
