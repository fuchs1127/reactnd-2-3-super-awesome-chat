import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.
The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {

  state = {
    messages:[...messages]
  }

  handleAddMessage = (username, message) => {
    const newMsg = {
      username: username,
      text: message
    };
    this.setState((currentState) => ({
        messages:[...currentState.messages,newMsg]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Super Awesome Chat</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
             key={user.username}
             user={user}
             messages={this.state.messages}
             onMessage={this.handleAddMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
