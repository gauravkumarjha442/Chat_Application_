import React, {  }  from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
//import ChatFeed from './components/ChatFeed';


import './App.css';


const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="baf68cf1-90ab-449d-87d3-206f9a493d23"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
     // renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
       />
  );
};

// infinite scroll, logout, more customizations...

export default App;
