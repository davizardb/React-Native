import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from './actionTypes'
import { setMessage } from './message'
import axios from 'axios'

export const addPost = post => {
  return dispatch => {
    dispatch(creatingPost())
    axios ({
      url: 'uploadImage',
      baseURL: 'https://us-central1-lambe-bedee.cloudfunctions.net',
      method: 'post',
      data: {
        image: post.image.base64
      }
    })
      .catch(err => {
        dispatch(setMessage({
          title: 'Erro',
          text: 'Ocorreu um erro inesperado'
        }))
      })
      .then(res => {
        post.image = res.data.imageUrl
        axios.post('/posts.json', {...post})
          .catch(err => {
            dispatch(setMessage({
              title: 'Erro',
              text: err
            }))
          })
          .then(res => {
            dispatch(fetchPosts())
            dispatch(postCreated())
          })

      })
  }
}

export const addComment = payload => {
  return dispatch => {
    axios.get(`/posts/${payload.postId}.json`)
      .catch(err => {
        dispatch(setMessage({
          title: 'Erro',
          text: 'Ocorreu um erro inesperado'
        }))
      })
      .then(res => {
        const comments = res.data.comments || []
        comments.push(payload.comment)
        axios.patch(`/posts/${payload.postId}.json`, {comments})
          .catch(err => {
            dispatch(setMessage({
              title: 'Erro',
              text: 'Ocorreu um erro inesperado'
            }))
          })
          .then(res => {
            dispatch(fetchPosts())
          })
      })
  }
}

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export const fetchPosts = () => {
  return dispatch => {
    axios.get('/posts.json')
      .catch(err => {
        dispatch(setMessage({
          title: 'Erro',
          text: 'Ocorreu um erro inesperado'
        }))
      })
      .then(res => {
        const rawPosts = res.data
        const posts = []
        for (let key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key
          })
        }
        dispatch(setPosts(posts.reverse()))
      })
  }
}

export const creatingPost = () => {
  return {
    type: CREATING_POST
  }
}

export const postCreated = () => {
  return {
    type: POST_CREATED
  }
}