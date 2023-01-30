const PostList = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Most Recent</th>
            <th>Name</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
            {props.parentEntries.map((entry, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.post}</td>
                </tr>
                );
            })}
        </tbody>
      </table>
    );
}
    
export default PostList;