import InputForm from './components/InputForm';
import 'semantic-ui-css/semantic.min.css';
import './App.css';  // Import the App.css file
import React, { useEffect } from 'react';
import { initGA, logPageView } from './analytics';

function App() {

  useEffect(() => {
    initGA();
    logPageView();
}, []);

  return (
    <div className="App">
      <InputForm />
    </div>
  );
}

export default App;
