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
                <tr>
                  <td></td>
                  <td><strong>{entry.name}</strong></td>
                  <td>{entry.post}</td>
                </tr>
                );
            })}
        </tbody>
      </table>
    );
}
    
export default PostList;