import Post from '../Post/Post';


const PostList = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
            {props.parentEntries.map((entry) => {
              return (
                <Post entry={entry}/>
                 
                );
            })}
        </tbody>
      </table>
    );
}
    
export default PostList;