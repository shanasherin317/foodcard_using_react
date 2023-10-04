import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Heading from './Heading.jsx'
import Last from './Last.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading/>
    <App />
    <Last/>
  </React.StrictMode>,
)
