// import React from 'react';
// import { useState } from 'react'
import Header from './MyComp/Header';
import Footer from './MyComp/Footer';
import Todo from './MyComp/Todo';


function App() {

  return (
    <div>

      {/* header section */}
      <Header></Header>

      {/* todo section */}
      <Todo></Todo>
      
      {/* footer section */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
