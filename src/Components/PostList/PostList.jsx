import Post from '../Post/Post';


const PostList = (props) => {
    return ( 
      <ul>
        {props.parentEntries.map((entry) => <Post entry={entry}/>)}
      </ul>

    );
}
    
export default PostList;

// return(
//   <ul>
//     {props.array.map( el => <Post entry = {el}/> )}
//   </ul>
// )