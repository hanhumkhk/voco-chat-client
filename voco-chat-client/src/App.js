import React from 'react';
import '../src/css/App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import DUMMY_DATA from './data';

function MessageRow(message, index) {
  return (
    <div className="text-box" key={index}>
      <div className="message" >{message.text}</div>
      <div className="user-name" >{message.senderId}</div>
    </div>
  )
}

function Chat() {
  
  return (
    <Container className="page-container">
      <h1>VOCO</h1>
      <div className="chat-container">
        <div className="messages-box">
          {DUMMY_DATA.map((message, index) => MessageRow(message, index))}
        </div>

        <div className="user-box">
          <div className="user"><b>Guest</b></div>
          <div className="user-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
        </div>
        <Button >Send</Button>
      </div>

    </Container>
  );
}

export default Chat;
