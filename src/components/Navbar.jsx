import React, { Component } from 'react';

class Navbar extends Component {
    
    openChatWindow() {
        console.log("You have opened the chat window!");
    }


    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">Navbar</a>
                <span className="btn btn-primary" onClick={this.openChatWindow.bind(this)}>Notifications <span className="badge badge-light">4</span> </span>
            </nav>
        )
    }
}

export default Navbar;