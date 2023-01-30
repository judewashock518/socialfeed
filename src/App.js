import React, { useState } from 'react';
import './App.css';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';


function App() {

  const [entries, setEntries] = useState([{name: 'Jude Washock', post: 'hello everyone!'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }


  return (
    <div>
      <PostList parentEntries={entries} />
    </div>
  );
}

export default App;
