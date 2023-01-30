import React, { useState } from 'react';
import './CreatePostForm.css'


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'>Create</button>
        </form>

    );
}
 
export default CreatePostForm;