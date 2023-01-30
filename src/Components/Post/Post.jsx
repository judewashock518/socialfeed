const Post = (props) => {
    return ( 
        <tr>
                  <td></td>
                  <td><strong>{props.entry.name}</strong></td>
                  <td>{props.entry.post}</td>
        </tr>
    );
}
    
export default Post;