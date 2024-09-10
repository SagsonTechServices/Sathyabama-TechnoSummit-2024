import React from 'react'

function LinkButton({text , link , classes}) {
  return (
    <div className={classes}>
      <a href={link}><button className='btn btn-primary'>{text}</button></a>
    </div>
  )
}

export default LinkButton
