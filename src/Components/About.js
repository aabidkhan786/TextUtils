import React from 'react'

export default function About(props) {
  return (
    <div className={`container ${props.colors}`}>
      <h1>TextUtils</h1>
      <p>TextUtils is a text utility SPA (Single Page WebApp). Created by - Mohammad Aabid</p>
      <p>In this project we have used React features like: 
          <ul>
              <li>Props</li>
              <li>useState</li>
              <li>React Router</li>
          </ul>
      </p>
    </div>
  )
}
