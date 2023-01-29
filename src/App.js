import React, { useState } from 'react';
import './App.css';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';


function App() {

  const [entries, setEntries] = useState([])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }


  return (
    <div>
      <CreatePostForm />
    </div>
  );
}

export default App;
