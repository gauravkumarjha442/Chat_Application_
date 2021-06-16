import React, { Component }  from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';


const App = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID="baf68cf1-90ab-449d-87d3-206f9a493d23"
      userName='Gaurav'
      userSecret='12345'
       />
  );
};

// infinite scroll, logout, more customizations...

export default App;
