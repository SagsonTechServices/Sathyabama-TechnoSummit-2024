import React from 'react'
import {Link} from 'react-router-dom'

function LinkButton({text , link , classes}) {
  return (
    <div className={classes}>
      <Link to={link}><button className='btn btn-primary'>{text}</button></Link>
    </div>
  )
}

export default LinkButton
