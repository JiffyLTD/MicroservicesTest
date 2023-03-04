import React from 'react'
import FillButton from './../FillButton/FillButton';

const FillButLink = ({link, butName, func}) => {
  return (
    <a href={link}>
        <FillButton butName={butName} func={func}/>
    </a>
  )
}

export default FillButLink