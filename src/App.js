import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <h1>User Table</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No user data available.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default App;
