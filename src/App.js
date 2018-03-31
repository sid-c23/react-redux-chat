import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ChatBox from './components/Chatbox';

import { connect } from 'react-redux';
import { fetchMessages } from './actions/ChatActions';

class App extends Component {

  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="App">
        <Navbar numNotifications={messages.length}/>
      </div>
    );
  }
}



export default connect((state) => { return { messages: state.chat.messages } }, { fetchMessages })(App);
