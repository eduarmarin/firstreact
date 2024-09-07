import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Greeting, Odin } from './greetingexample.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Odin />
    <Greeting />
  </StrictMode>,
)
