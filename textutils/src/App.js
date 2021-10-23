import React, { useState } from 'react'
import Navbar from './components/navbar';
import TextArea from './components/TextArea'


function App() {

    const [MyStyle, setMyStyle] = useState({backgroundColor:'white', color:'black'})
    const [ModeText, setModeText] = useState('dark')
      function toggleMode() 
      {
            if(MyStyle.color==='black')
            {
              setMyStyle({backgroundColor:'#061524', color:'white'})
              setModeText('light')
            }
            else
            {
              setMyStyle({backgroundColor:'white', color:'black'})
              setModeText('dark')
            }

      }


  return (
    <div style={MyStyle}>
      <Navbar mode={ModeText} togglemode={toggleMode} style={MyStyle}/>
      <TextArea style={MyStyle} heading="Enter your Text below"/>
    </div>
  );
}

export default App;
