import React from 'react'
import './style.scss'

const SavedPost = (props: any) => {
  const { content } = props

  return (
    <div className='saved-post'>
      <h3>{content.title}</h3>
      <p>{content.body}</p>
      <h4>r/{content.subreddit}</h4>
      <div className='button-group'>
            <button>Edit </button>
            <button className='warning'>Delete</button>
          </div>
    </div>
  )
}

export default SavedPost
