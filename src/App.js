import React, { Component } from 'react';
import fire from './config/fire';
import Home from './components/Home';
import Login from './components/Login';
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }
  componentDidMount(){
    this.authListen()
  }
  authListen() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
