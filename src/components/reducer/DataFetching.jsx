import React, {useState, useEffect, useReducer} from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCHING_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.payload
      }
    case "FETCHING ERROR":
      return {
        loading: false,
        error: 'Something Went Wrong',
        post: {}
      }
    default:
      return state
  }
}

const DataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        dispatch({type: 'FETCHING_SUCCESS', payload: res.data})
      })
      .catch(err => {
        dispatch({type: 'FETCHING_ERROR'})
      })
  }, [])



  // -------- useState() ----------- //

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');
  // const [post, setPost] = useState({});

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(res => {
  //       setLoading(false)
  //       setError('')
  //       setPost(res.data)
  //     })
  //     .catch(err => {
  //       setLoading(false)
  //       setError('Something Went Wrong!')
  //       setPost({})
  //     })
  // }, [])

  return (
    <div>
      {/* {loading ? 'loading...' : post.title}
      {error ? error : null} */}

      {state.loading ? 'loading...' : state.post.title}
      {state.error ? state.error : null}

    </div>
  )
}

export default DataFetching