import React from 'react'
import styles from './Bio.module.css'
import cbf from './cbf.jpeg'

function Bio(props) {

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={cbf} alt="cbf" />
      <p>
        Quality articles about software, sustainability, and life hacks.
      </p>
    </div>
  )
}

export default Bio
