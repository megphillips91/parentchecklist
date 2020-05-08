import React from 'react'

export default function Assignment(post) {

  function createMarkup() {
    return {__html: post.post_content};
  }
  
  return (
    <React.Fragment>
        <div dangerouslySetInnerHTML={{__html: post.post_content}}></div>
    </React.Fragment>
  )
}

