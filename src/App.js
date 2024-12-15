// src/App.js
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Name from './Name'
import Price from './Price'
import Description from './Description'
import Image from './Image'

const App = () => {
  const firstName = 'Akpan' // Replace with your name, or leave it empty for "Hello, there!"

  return (
    <div className='App'>
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Body>
          <Image />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant='primary'>Add to Cart</Button>
        </Card.Body>
      </Card>
      <p>{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</p>
      {/* {firstName && <img src='https://via.placeholder.com/50' alt='User' />} */}
      {firstName && <img src='../images/profileImage.jpg' alt='User' />}
    </div>
  )
}

export default App
