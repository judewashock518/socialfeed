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
        props.addNewEntryProperty(newEntry)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div className='container_fluid'>
                <label className="label_flex">Name</label>
                <input className="input_box" type='text' value={name} onChange={(event) => setName(event.target.value)} />
                <div className="post_flex_box">
                <label className="label_flex">Post</label>
                <textarea className="text_box" type='text' rows='4'value={post} onChange={(event) => setPost(event.target.value)}></textarea>
                <button type='submit' className='btn btn-primary' style={{'margin-right': '10rem'}}>Create</button>
                </div>
            </div>
        </form>

    );
}
 
export default CreatePostForm;