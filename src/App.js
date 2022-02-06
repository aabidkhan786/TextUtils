import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {useState} from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('Enable Color Mode');
  const [color,setColor] = useState('text-dark');

  const changeStyle = () => {
    if(mode === 'Enable Color Mode')
    {
      setMode('Enable Light Mode')
      document.body.style.backgroundColor = '#1A374D';
      setColor('text-white');
    }
    else if (mode === 'Enable Light Mode'){
      setMode('Enable Color Mode')
      document.body.style.backgroundColor = 'white';
      setColor('text-dark');
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" modes={mode} toggleChange = {changeStyle}/>
      <div className="container my-5">
      <Switch>
          <Route exact path="/about">
            <About colors={color}/>
          </Route>
          <Route exact path='/'>
            <TextForm heading="Enter the text to analyze below: " colors={color}></TextForm>
          </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;