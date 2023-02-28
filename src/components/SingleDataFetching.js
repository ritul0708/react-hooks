import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, SetIdFromButton] = useState(1);

  const handleClick = () => {
    SetIdFromButton(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idFromButton])   // we can't go with empty dependency array, otherwise post will not change

  return (
    <div>
      <input type="number" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Data</button>
      <div>
        {post.title}
      </div>
    </div>
  )
}

export default DataFetching