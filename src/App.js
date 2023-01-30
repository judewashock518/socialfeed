import React, { useState } from 'react';
import './App.css';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [entries, setEntries] = useState([{name: 'Jude Washock', post: 'hello everyone!', isLiked: false, isDisliked: false}])

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <NavBar />
          <h3 style={{margin: '1rem'}}>Social 
          <small className='text-muted'>feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <CreatePostForm addNewEntryProperty={addNewEntry}/>
          </div>
          <div className='border-box'>
            <PostList parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
