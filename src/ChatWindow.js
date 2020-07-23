import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';

class ChatWindow extends Component {

  onMessage = message => {
    //The callback is getting called  from App.js
    this.props.onMessage(this.props.user.username, message);
  };

  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.user.username}</div>
        <MessageHistory messages={this.props.messages} user={this.props.user}/>
        <AddMessage onAddMsg={this.onMessage}/>
      </div>
    )}
}

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  onMessage: PropTypes.func.isRequired,
}
export default ChatWindow;
