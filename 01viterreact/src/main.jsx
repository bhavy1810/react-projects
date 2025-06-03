import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
}

const anotherElement = 'react with vit'

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com/', target: '_blank' },
  'click me to go to google',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)