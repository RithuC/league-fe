import React from 'react';
import UserListComponent from '../components/UserListComponent.js';

export default class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
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
        <UserListComponent users={this.state.users}/>
      </div>
    );
  }
}
