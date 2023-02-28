import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])   // we can't go with empty dependency array, otherwise post will not change

  return (
    <div>
      <input type="number" value={id} onChange={e => setId(e.target.value)} />
      <div>
        {post.title}
      </div>
    </div>
  )
}

export default DataFetching