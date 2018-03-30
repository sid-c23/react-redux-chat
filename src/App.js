import React, { Component } from 'react';
import Navbar from './components/Navbar'
import ChatBox from './components/Chatbox'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
