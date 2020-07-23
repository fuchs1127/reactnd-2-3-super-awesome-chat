import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
  state = {
    inputMsg:''
  }

  typingMsg = event => {
    this.setState({
      inputMsg:event.target.value
    })
  }

  enterMsg = event => {
    event.preventDefault();
    this.props.onAddMsg(this.state.inputMsg);
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div>
        <form className="input-group"  onSubmit={this.enterMsg}>
          <input
           type="text"
           className="form-control"
           placeholder="Enter your message..."
           value={this.state.inputMsg}
           onChange={this.typingMsg}
           />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )}
}

AddMessage.propTypes = {
  onAddMsg: PropTypes.func.isRequired,
}
export default AddMessage;
